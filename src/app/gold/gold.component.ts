import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gold',
  templateUrl: './gold.component.html',
  styleUrls: ['./gold.component.css']
})
export class GoldComponent implements OnInit {

  constructor() { }
  lineChartData: Chart.ChartDataSets[] = [
    {
      label: 'Pure Gold (24 K) - 1 gram',      
      data: [4810, 4810, 4916, 4916, 4901, 4900, 4869, 4868, 4905, 4900],
    }
  ];
  lineChartLabels: Array<any> = ['29 May 2020', '28 May 2020', '27 May 2020', '26 May 2020', '25 May 2020', '24 May 2020', '23 May 2020', '22 May 2020', '21 May 2020', '20 May 2020'];
  lineChartOptions: any = {
    responsive: true
  };
   lineChartLegend = true;
  lineChartType = 'line';
  inlinePlugin: any;
  textPlugin: any;

  ngOnInit(): void {
  }

}
