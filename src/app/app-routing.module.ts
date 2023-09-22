import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { FeedModule } from './feed/feed.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'feed',
    pathMatch: 'full'
  },
  {
    path: 'feed',
    loadChildren: () => import('./feed/feed.module').then(m => m.FeedModule)
  },
  {
    path: '**',
    redirectTo: 'feed',
    pathMatch: 'full'
  },
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }
