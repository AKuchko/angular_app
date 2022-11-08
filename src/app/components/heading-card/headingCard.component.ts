import { Component, Input } from "@angular/core";

@Component({
    selector: 'heading-card',
    templateUrl: './headingCard.component.html'
})
export class HeadingCard {
    @Input() transactionsCount: number
}