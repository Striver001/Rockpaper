import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComputervscompComponent } from './computervscomp/computervscomp.component';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { PlayervscompComponent } from './playervscomp/playervscomp.component';

const routes: Routes = [
  { path: '', component: FirstpageComponent },
  { path: 'player-vs-computer', component: PlayervscompComponent },
  { path: 'computer-vs-computer', component: ComputervscompComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
