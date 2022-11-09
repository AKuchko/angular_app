import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabCardComponent } from './components/tab-card/tab-card.component';
import { CardsPageComponent } from './pages/cards-page/cards-page.component';
import { NavigatorPageComponent } from './pages/navigator-page/navigator-page.component';

const routes: Routes = [
  { path: '', component: CardsPageComponent},
  { path: 'navigator', component: NavigatorPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
