import { Component, Input } from "@angular/core";

@Component({
    selector: 'transaction-type-card',
    templateUrl: './transactionTypeCard.component.html'
})
export class TransactionTypeCard {
    @Input() transactionsCount: number;
    @Input() transactionType: string;
}