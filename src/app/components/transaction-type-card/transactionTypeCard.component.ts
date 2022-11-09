import { Component, Input } from "@angular/core";

@Component({
    selector: 'TransactionTypeCard',
    templateUrl: './transactionTypeCard.component.html'
})
export class TransactionTypeCard {
    @Input() transactionsCount: number;
}