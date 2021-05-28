import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title = 'platzi-store';
  power = 10;
  items = ['Steven','Nelson','Ana','Maria','Sandi','Panda','Policarpio'];

  addItem()
  {
    this.items.push(this.title);
  }

  deleteItem(index: number)
  {
    this.items.splice(index,1);
  }
}
