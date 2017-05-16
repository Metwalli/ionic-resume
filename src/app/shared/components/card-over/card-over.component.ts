import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'card-over-header',
  template:`
    <ng-content></ng-content>
  `,
  styleUrls: ['./card-over.component.scss']
})
export class CardOverHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

@Component({
  selector: 'card-over-content',
  template:`
    <ng-content></ng-content>
  `,
  styleUrls: ['./card-over.component.scss']
})
export class CardOverContentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

@Component({
  selector: 'card-over',
  templateUrl: './card-over.component.html',
  styleUrls: ['./card-over.component.scss']
})
export class CardOverComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
