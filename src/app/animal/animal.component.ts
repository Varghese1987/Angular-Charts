import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.css']
})
export class AnimalComponent implements OnInit {

  constructor() { }
  lineChartData: Chart.ChartDataSets[] = [
    {
      label: 'Pure Gold (24 K) - 1 gram',      
      data: [192.49, 109.85, 74.26, 148.88, 9.06, 0.38, 0.06, 0.34, 0.08, 0.12, 0.25]
    }
  ];
  lineChartLabels: Array<any> = ["Cattle", "Buffalo","Sheep", "Goat", "Pig", "Mithun", "Yak", "Horse & Ponies", "Mule", "Donkey", "Camel"];
  lineChartOptions: any = {
    responsive: true
  };
   lineChartLegend = true;
  lineChartType = "bar";
  inlinePlugin: any;
  textPlugin: any;

  ngOnInit(): void {
  }

}
