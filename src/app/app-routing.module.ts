import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'devs', loadChildren: './developers/developers.module#DevelopersModule' },
  { path: 'apps', loadChildren: './application/application.module#ApplicationModule' },
  { path: 'bots', loadChildren: './bot/bot.module#BotModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
