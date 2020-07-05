import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { ModalComponent } from './modal/modal.component';


const routes: Routes = [
  {path:'', component: ModalComponent, pathMatch: 'full'},
  {path:'order-detail', component: OrderDetailComponent},
  {path:'modal', component: ModalComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
