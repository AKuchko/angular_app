import { Injectable } from '@angular/core';
import { ITransactiion } from '../models/transaction';
import { transactions as data } from '../data/transactions';

@Injectable({
  providedIn: 'root'
})
export class TransactionsServiceService {
  private transactions: ITransactiion[] = data
  private types: string[] = []
  private filter: Array<any> = []

  constructor() { }

  filterByType(type: string) {
    return this.transactions.filter(t => t.type === type)
  }

  private parseName(name: any) {
    return `${name.first} ${name.last}`
  }

  getTransactions() {
    return this.transactions
  }

  getTransactionsTypes() {
    this.transactions.forEach(transaction => {
      if (!this.types.includes(transaction.type)) 
        this.types.push(transaction.type)
    })
    return this.types
  }

  getFilteredTransactions(type: string) {
    let filteredTransactions = this.filterByType(type)   
    this.filter = []

    filteredTransactions.forEach(t => {
      let name = this.parseName(t.name)      
      if (this.filter.find(el => el.name === name) && true) {
        this.filter.find(el => {
          if (el.name === name)
            el.amount += t.amount
        })
      }
      else this.filter.push({ name: name, amount: t.amount})
    })
    
    return this.filter
  }
}
