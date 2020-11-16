import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CustonTableComponent } from './custon-table/custon-table.component'
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'relatorio', component: CustonTableComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
