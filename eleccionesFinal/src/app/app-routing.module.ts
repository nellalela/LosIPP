import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
<<<<<<< HEAD
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
=======

const routes: Routes = [];
>>>>>>> 01bb528ffaa2de11a56ba139641e76ac748654f5

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
