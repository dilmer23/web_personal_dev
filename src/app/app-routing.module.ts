import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './view/main/main.component';

const routes: Routes = [
  {
    path: '',
    data: { path: "/welcome" },
    component: MainComponent,
  },
  {
    path: 'home',
    data: { path: "/home" },
    component: MainComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
