import { StatisticsService } from './../services/statistics.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pay-stat',
  templateUrl: './pay-stat.component.html',
  styleUrls: ['./pay-stat.component.css']
})
export class PayStatComponent implements OnInit {
morning;
night: any
all;
midi = [];
soir = [];
  constructor(private statistiqueService: StatisticsService) { }

  ngOnInit(): void {
    this.getAll();
    this.getOne();
    this.getTwo();
    this.getMidi();
  }

  getAll() {
    this.statistiqueService.getAllMeal().subscribe(
      (data) => {
        console.log(data.length);
        this.all = data.length;
      }, (err) => {
        console.log(err);
      }
    );
  }


  getOne() {
    this.statistiqueService.getMealNiv1().subscribe(
      (data) => {
        console.log(data.length);
        this.morning = data.length;
      }, (err) => {
        console.log(err);
      }
    );
  }


  getTwo() {
    this.statistiqueService.getMealNiv2().subscribe(
      (data) => {
        console.log(data.length);
        this.night = data.length;
      }, (err) => {

        console.log(err);
      }
    );
  }


  getMidi() {
    this.statistiqueService.getMealNiv2().subscribe(
      (data) => {
        console.log(data);
        data.forEach(element => {
          if (Number(element.time_created) >= 12 && Number(element.time_created) < 15) {
            this.midi.push(element);
          } else if (Number(element.time_created) >= 18 && Number(element.time_created) < 21) {
            this.soir.push(element);
          }
        });
      }, (err) => {

        console.log(err);
      }
    );
  }

}
