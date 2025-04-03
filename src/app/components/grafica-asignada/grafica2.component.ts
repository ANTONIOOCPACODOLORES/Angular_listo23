import { Component, AfterViewInit, ElementRef, ViewChild, OnDestroy } from '@angular/core';
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

@Component({
  selector: 'app-grafica2',
  template: '<div #chartdiv2 style="width: 60%; height: 500px; margin-left:25vw;"></div>',
  styleUrls: ['./grafica2.component.css']
})
export class Grafica2Component implements AfterViewInit, OnDestroy {
  @ViewChild('chartdiv2', { static: true }) chartDiv!: ElementRef;
  private root!: am5.Root;

  ngAfterViewInit(): void {
    this.root = am5.Root.new(this.chartDiv.nativeElement);

    let myTheme = am5.Theme.new(this.root);
    myTheme.rule("Grid", ["base"]).setAll({
      strokeOpacity: 0.1
    });

    this.root.setThemes([am5themes_Animated.new(this.root), myTheme]);

    let chart = this.root.container.children.push(am5xy.XYChart.new(this.root, {
      panX: false,
      panY: false,
      wheelX: "panY",
      wheelY: "zoomY",
      paddingLeft: 0,
      layout: this.root.verticalLayout
    }));

    chart.set("scrollbarY", am5.Scrollbar.new(this.root, { orientation: "vertical" }));

    let data = [
      { year: "2021", europe: 2.5, namerica: 2.5, asia: 2.1, lamerica: 1, meast: 0.8, africa: 0.4 },
      { year: "2022", europe: 2.6, namerica: 2.7, asia: 2.2, lamerica: 0.5, meast: 0.4, africa: 0.3 },
      { year: "2023", europe: 2.8, namerica: 2.9, asia: 2.4, lamerica: 0.3, meast: 0.9, africa: 0.5 }
    ];

    let yAxis = chart.yAxes.push(am5xy.CategoryAxis.new(this.root, {
      categoryField: "year",
      renderer: am5xy.AxisRendererY.new(this.root, {}),
      tooltip: am5.Tooltip.new(this.root, {})
    }));
    yAxis.data.setAll(data);

    let xAxis = chart.xAxes.push(am5xy.ValueAxis.new(this.root, {
      min: 0,
      maxPrecision: 0,
      renderer: am5xy.AxisRendererX.new(this.root, { minGridDistance: 40, strokeOpacity: 0.1 })
    }));

    let legend = chart.children.push(am5.Legend.new(this.root, { centerX: am5.p50, x: am5.p50 }));

    const makeSeries = (name: string, fieldName: string) => {
      let series = chart.series.push(am5xy.ColumnSeries.new(this.root, {
        name,
        stacked: true,
        xAxis,
        yAxis,
        baseAxis: yAxis,
        valueXField: fieldName,
        categoryYField: "year"
      }));

      series.columns.template.setAll({ tooltipText: "{name}, {categoryY}: {valueX}", tooltipY: am5.percent(90) });
      series.data.setAll(data);
      series.appear();
      
      series.bullets.push(() => am5.Bullet.new(this.root, {
        sprite: am5.Label.new(this.root, {
          text: "{valueX}",
          fill: this.root.interfaceColors.get("alternativeText"),
          centerY: am5.p50,
          centerX: am5.p50,
          populateText: true
        })
      }));
      
      legend.data.push(series);
    };

    makeSeries("Europe", "europe");
    makeSeries("North America", "namerica");
    makeSeries("Asia", "asia");
    makeSeries("Latin America", "lamerica");
    makeSeries("Middle East", "meast");
    makeSeries("Africa", "africa");

    chart.appear(1000, 100);
  }

  ngOnDestroy(): void {
    if (this.root) {
      this.root.dispose();
    }
  }
}
