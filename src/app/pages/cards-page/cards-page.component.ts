import { Component, OnInit } from '@angular/core';
import { ITransactiion } from 'src/app/models/transaction';
import { TransactionsServiceService } from 'src/app/srvices/transactions-service.service';

@Component({
  selector: 'app-cards-page',
  templateUrl: './cards-page.component.html'
})
export class CardsPageComponent implements OnInit {
  transactions: ITransactiion[]
  transactionsTypes: string[]

  filterTransactions(type: string) {
    return this.TransactionsService.filterByType(type)
  }

  constructor (private TransactionsService: TransactionsServiceService) {}

  ngOnInit(): void {
    this.transactions = this.TransactionsService.getTransactions()
    this.transactionsTypes = this.TransactionsService.getTransactionsTypes()
  }
}
