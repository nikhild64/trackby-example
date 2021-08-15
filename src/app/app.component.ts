import { Component, OnInit } from '@angular/core';
import { Network } from '@ngx-pwa/offline';
import { CloudData, CloudOptions } from 'angular-tag-cloud-module';
import { Observable, of } from 'rxjs';
import { CalculatorService } from './calculator.service';

interface Item {
  id: number;
  name: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'trackby-example';

  // items: Item[] = [
  //   { id: 1, name: 'HTML' },
  //   { id: 2, name: 'CSS' },
  //   { id: 3, name: 'JavaScript' },
  // ];

userData$:Observable<any>=of();
  // data: CloudData[] = [
  //   {text: 'Weight-8-link-color', weight: 8, link: 'https://google.com', color: '#ffaaee'},
  //   {text: 'Weight-10-link', weight: 10, link: 'https://google.com', tooltip: 'display a tooltip'},
  //   // ...
  // ];
  constructor(private calculatorService:CalculatorService){

    // network.onlineChanges.subscribe((data)=>{
    //   console.log(data);
    // })

  }
  ngOnInit(): void {
   this.userData$= this.calculatorService.getUserData();
  }
  // addItem() {
  //   this.items = [
  //     { id: 1, name: 'HTML' },
  //     { id: 2, name: 'CSS' },
  //     { id: 3, name: 'JavaScript' },
  //     {
  //       id: 4,
  //       name: 'Angular',
  //     },
  //   ];
  // }
  // trackBy(index: number, item: Item) {
  //   return item.id;
  // }

  changeTitle(){
    setTimeout(()=>{
      this.title='NewTitle';
    })
  }
}
