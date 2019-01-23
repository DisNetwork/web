import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './default/default.module#DefaultModule' },
  { path: 'auth', loadChildren: './auth/auth.module#AuthModule'},
  { path: 'devs', loadChildren: './developers/developers.module#DevelopersModule' },
  { path: 'apps', loadChildren: './application/application.module#ApplicationModule' },
  { path: 'bots', loadChildren: './bot/bot.module#BotModule' },
  { path: 'subs', loadChildren: './subscription/subscription.module#SubscriptionModule'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
