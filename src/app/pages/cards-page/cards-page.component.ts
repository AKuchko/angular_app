import { Component, OnInit } from '@angular/core';
import { ITransactiion } from 'src/app/models/transaction';
import { transactions as data } from 'src/app/data/transactions';

@Component({
  selector: 'app-cards-page',
  templateUrl: './cards-page.component.html'
})
export class CardsPageComponent {

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
