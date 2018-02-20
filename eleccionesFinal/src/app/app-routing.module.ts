import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SenadoresmapComponent } from './senadoresmap/senadoresmap.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [

  // {
  //   path: '',
  //   redirectTo: 'home',
  //   pathMatch: 'full'
  // },
  // {
  //   path: 'home',
  //   component: HomeComponent
  // },
  // {
  //   path: 'senadores',
  //   component: SenadoresmapComponent
  // }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
