import { Component } from '@angular/core';
 
@Component({
  selector: 'piechart',
  templateUrl: './piechart.html'
})
export class PieChartComponent {
  // Pie
  public pieChartLabels:string[] = ['Healthy', 'Unhealthy'];
  public pieChartData:number[] = [90,10];
  public pieChartType:string = 'pie';
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
}