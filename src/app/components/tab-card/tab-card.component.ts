import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ITransactiion } from 'src/app/models/transaction';
import { TransactionsServiceService } from 'src/app/srvices/transactions-service.service';

@Component({
  selector: 'app-tab-card',
  templateUrl: './tab-card.component.html',
})
export class TabCardComponent implements OnInit {

  transactionsTypes: string[];
  transactions: ITransactiion[];
  rows: Array<any>;

  constructor(
    private _route: ActivatedRoute,
    private TransactionsService: TransactionsServiceService
    ) { }

  ngOnInit(): void {
    this.transactions = this.TransactionsService.getTransactions()
    this.transactionsTypes = this.TransactionsService.getTransactionsTypes();

    this._route.queryParams.subscribe(params => {
      let type: string = this.transactionsTypes[params['tab']]
      this.rows = this.TransactionsService.getFilteredTransactions(type)
    });
  }

}
