import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./start-page/start-page.module').then((m) => m.StartPageModule),
  },
  {
    path: 'map',
    loadChildren: () => import('./map/map.module').then((m) => m.MapModule),
  },
  {
    path: 'animals',
    loadChildren: () =>
      import('./animals/animals.module').then((m) => m.AnimalsModule),
  },
  {
    path: 'donate',
    loadChildren: () =>
      import('./donate/donate.module').then((m) => m.DonateModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
