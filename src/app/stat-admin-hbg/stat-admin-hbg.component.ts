import { StatisticsService } from './../services/statistics.service';
import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-stat-admin-hbg',
  templateUrl: './stat-admin-hbg.component.html',
  styleUrls: ['./stat-admin-hbg.component.css']
})
export class StatAdminHbgComponent implements OnInit {
chart;
chart2;
data = [];
labels = [];
motifs;
  constructor(private statisticService: StatisticsService) { }

  ngOnInit(): void {
    this.statisticService.sortByDate().subscribe(
      (success) => {
        console.log(success);
        success.forEach(element => {
          this.labels.push(element._id);
        });
        success.forEach(element => {
          this.data.push(element.nb);
        });
        console.log(this.data);
        console.log(this.labels);


      }, (err) => {
        console.log(err);
      }
    );

    this.statisticService.sortByMotif().subscribe(
      (datas) => {
        this.motifs = datas;
      }, (err) => {
        console.log(err);
      }
    );

    setTimeout( () => {
     this.ChartDate();
    }, 2000);


  }

  ChartDate() {
    this.chart = new Chart('myChart', {
      type: 'bar',
      data: {
          labels: this.labels,
          datasets: [{
              label: '# of nombres de sortie',
              data: this.data,
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero: true
                  }
              }]
          }
      }
  });
  }

}
