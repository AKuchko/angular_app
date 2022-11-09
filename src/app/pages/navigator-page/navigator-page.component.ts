import { Component, Input, OnInit } from '@angular/core';
import { ITransactiion } from 'src/app/models/transaction';
import { TransactionsServiceService } from 'src/app/srvices/transactions-service.service';

@Component({
  selector: 'app-navigator-page',
  templateUrl: './navigator-page.component.html',
  providers: [ TransactionsServiceService ]
})
export class NavigatorPageComponent implements OnInit {
  transactions: ITransactiion[];
  transactionTypes: string[];
  
  constructor(private TransactionService: TransactionsServiceService) { }

  ngOnInit(): void {
    this.transactions = this.TransactionService.getTransactions();
    this.transactionTypes = this.TransactionService.getTransactionsTypes();
  }

}
