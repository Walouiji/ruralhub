import { Component, Input } from '@angular/core';

@Component({
  selector: 'single-market',
  templateUrl: './single-market.component.html',
  styleUrls: ['./single-market.component.scss']
})
export class SingleMarketComponent {
  @Input()
  title!: string;
  @Input()
  address!: string;
  @Input()
  horaires!: string;

}
