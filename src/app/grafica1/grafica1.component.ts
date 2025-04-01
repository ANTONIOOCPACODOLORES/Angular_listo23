import { Component, Inject, NgZone, PLATFORM_ID, AfterViewInit, OnDestroy } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

// amCharts imports
import * as am5 from '@amcharts/amcharts5';
import * as am5xy from '@amcharts/amcharts5/xy';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',  // Corregido el nombre del archivo
  styleUrls: ['./grafica1.component.css']
})
export class Grafica1Component implements AfterViewInit, OnDestroy {  // Nombre de clase corregido
  private root!: am5.Root;

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private zone: NgZone) {}

  // Run the function only in the browser
  private browserOnly(f: () => void) {
    if (isPlatformBrowser(this.platformId)) {
      this.zone.runOutsideAngular(() => {
        f();
      });
    }
  }

  ngAfterViewInit() {
    this.browserOnly(() => {
      this.root = am5.Root.new("grafica1div");

      this.root.setThemes([am5themes_Animated.new(this.root)]);

      let chart = this.root.container.children.push(
        am5xy.XYChart.new(this.root, {
          panY: false,
          layout: this.root.verticalLayout
        })
      );

      // Define data
      let data = [
        {
          category: "Research",
          value1: 1000,
          value2: 588
        },
        {
          category: "Marketing",
          value1: 1200,
          value2: 1800
        },
        {
          category: "Sales",
          value1: 850,
          value2: 1230
        }
      ];

      // Create Y-axis
      let yAxis = chart.yAxes.push(
        am5xy.ValueAxis.new(this.root, {
          renderer: am5xy.AxisRendererY.new(this.root, {})
        })
      );

      // Create X-Axis
      let xAxis = chart.xAxes.push(
        am5xy.CategoryAxis.new(this.root, {
          renderer: am5xy.AxisRendererX.new(this.root, {}),
          categoryField: "category"
        })
      );
      xAxis.data.setAll(data);

      // Create series
      let series1 = chart.series.push(
        am5xy.ColumnSeries.new(this.root, {
          name: "Serie 1",  // Nombre diferenciado
          xAxis: xAxis,
          yAxis: yAxis,
          valueYField: "value1",
          categoryXField: "category"
        })
      );
      series1.data.setAll(data);

      let series2 = chart.series.push(
        am5xy.ColumnSeries.new(this.root, {
          name: "Serie 2",  // Nombre diferenciado
          xAxis: xAxis,
          yAxis: yAxis,
          valueYField: "value2",
          categoryXField: "category"
        })
      );
      series2.data.setAll(data);

      // Add legend
      let legend = chart.children.push(am5.Legend.new(this.root, {}));
      legend.data.setAll(chart.series.values);

      // Add cursor
      chart.set("cursor", am5xy.XYCursor.new(this.root, {}));
    });
  }

  ngOnDestroy() {
    this.browserOnly(() => {
      if (this.root) {
        this.root.dispose();
      }
    });
  }
}