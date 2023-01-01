import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrocodileComponent } from './components/crocodile/crocodile.component';
import { GorillaComponent } from './components/gorilla/gorilla.component';
import { CheetahComponent } from './components/cheetah/cheetah.component';
import { EagleComponent } from './components/eagle/eagle.component';
import { PandaComponent } from './components/panda/panda.component';
import { PenguinComponent } from './components/penguin/penguin.component';
import { SlothComponent } from './components/sloth/sloth.component';
import { AnimalsComponent } from './animals.component';

const routes: Routes = [
  {
    path: '', component: AnimalsComponent, children: [
      { path: 'gorilla', component: GorillaComponent },
      { path: 'crocodile', component: CrocodileComponent },
      { path: 'panda', component: PandaComponent },
      { path: 'eagle', component: EagleComponent },
      { path: 'sloth', component: SlothComponent },
      { path: 'penguin', component: PenguinComponent },
      { path: 'cheetah', component: CheetahComponent },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnimalsRoutingModule { }
