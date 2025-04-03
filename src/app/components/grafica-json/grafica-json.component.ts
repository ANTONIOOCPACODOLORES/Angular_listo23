import { Component, AfterViewInit, OnDestroy, ElementRef, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

@Component({
  selector: 'app-grafica-json',
  template: '<div #chartdiv style="width: 100%; height: 500px;"></div>',
  styleUrls: ['./grafica-json.component.css']
})
export class GraficaJsonComponent implements AfterViewInit, OnDestroy {
  @ViewChild('chartdiv', { static: false }) chartDiv!: ElementRef;
  private root!: am5.Root;

  constructor(private http: HttpClient) {}

  ngAfterViewInit(): void {
    this.http.get<any[]>('/assets/data.json').subscribe(data => {
      console.log("Datos cargados:", data); // 🐞 Depuración
      this.createChart(data);
    }, error => console.error("Error cargando JSON:", error));
  }

  createChart(olympicData: any[]): void {
    this.root = am5.Root.new(this.chartDiv.nativeElement);
    this.root.setThemes([am5themes_Animated.new(this.root)]);

    let chart = this.root.container.children.push(am5xy.XYChart.new(this.root, {}));

    // 📌 Eje X - Países
    let xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(this.root, {
      categoryField: "country",
      renderer: am5xy.AxisRendererX.new(this.root, {})
    }));

    // 📌 Eje Y - Número de medallas
    let yAxis = chart.yAxes.push(am5xy.ValueAxis.new(this.root, {
      renderer: am5xy.AxisRendererY.new(this.root, {})
    }));

    // 📌 Serie de columnas
    let series = chart.series.push(am5xy.ColumnSeries.new(this.root, {
      name: "Medals",
      xAxis: xAxis,
      yAxis: yAxis,
      valueYField: "medals",
      categoryXField: "country"
    }));

    // 📌 Procesar datos: contar medallas por país
    let medalCount = olympicData.reduce((acc: any, athlete) => {
      let country = athlete.country;
      acc[country] = (acc[country] || 0) + 1; // Contar cada medalla
      return acc;
    }, {});

    let processedData = Object.keys(medalCount).map(country => ({
      country: country,
      medals: medalCount[country]
    }));

    console.log("Datos procesados:", processedData); // 🐞 Depuración

    xAxis.data.setAll(processedData);
    series.data.setAll(processedData);

    series.appear(1000);
    chart.appear(1000, 100);
  }

  ngOnDestroy(): void {
    if (this.root) {
      this.root.dispose();
    }
  }
}
