import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadingCard } from './components/heading-card/headingCard.component';
import { TransactionTypeCard } from './components/transaction-type-card/transactionTypeCard.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadingCard,
    TransactionTypeCard
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
