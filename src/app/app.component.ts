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
  transactions: ITransactiion[] = data;
  transactionsTypes() {
    let types = new Array();
    this.transactions.forEach(transaction => {
      if (types.indexOf(transaction.type) === -1) types.push(transaction.type)
    })
    return types
  }
  filterTransactions(type: string) {
    return this.transactions.filter(transaction => transaction.type === type)
  }
}
