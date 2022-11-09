import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadingCard } from './components/heading-card/headingCard.component';
import { TransactionTypeCard } from './components/transaction-type-card/transactionTypeCard.component';
import { CardsPageComponent } from './pages/cards-page/cards-page.component';
import { NavigatorPageComponent } from './pages/navigator-page/navigator-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadingCard,
    TransactionTypeCard,
    CardsPageComponent,
    NavigatorPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
