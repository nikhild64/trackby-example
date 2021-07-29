import { Component } from '@angular/core';
interface Item {
  id: number;
  name: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'trackby-example';
  items: Item[] = [
    { id: 1, name: 'HTML' },
    { id: 2, name: 'CSS' },
    { id: 3, name: 'JavaScript' },
  ];
  addItem() {
    this.items = [
      { id: 1, name: 'HTML' },
      { id: 2, name: 'CSS' },
      { id: 3, name: 'JavaScript' },
      {
        id: 4,
        name: 'Angular',
      },
    ];
  }
  trackBy(index: number, item: Item) {
    return item.id;
  }
}
