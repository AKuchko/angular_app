import { Component } from '@angular/core';
import { transactions as data } from './data/transactions';
import { ITransactiion } from './models/transaction';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular_app';
  transactions: ITransactiion[] = data
}
