import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-petrol-trend',
  templateUrl: './petrol-trend.component.html',
  styleUrls: ['./petrol-trend.component.css']
})
export class PetrolTrendComponent implements OnInit {

  constructor() { }

  lineChartData: Chart.ChartDataSets[] = [
    {
      label: 'Chennai',      
      data: [75, 76, 78, 78, 76, 77, 77, 75, 76, 73, 74, 76],
    },
    {
      label:'Delhi',
      data: [72, 73, 75, 75, 73, 75, 74, 72, 73, 70, 72, 73]
    },
    {
      label: 'Mumbai',
      data: [77, 79, 81, 81, 79, 80, 80, 78, 78, 76, 77, 79]
    }
  ];
  lineChartLabels: Array<any> = ['Mar-20','Feb-20','Jan-20','Dec-19','Nov-19','Oct-19','Sep-19','Aug-19','Jul-19','Jun-19','May-19','Apr-19'];
  lineChartOptions: any = {
    responsive: true
  };
   lineChartLegend = true;
  lineChartType = 'bar';
  inlinePlugin: any;
  textPlugin: any;

  ngOnInit(): void {
  }

}
