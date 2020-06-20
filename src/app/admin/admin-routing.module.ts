import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './admin.component';
import { AbilitiesComponent } from './components/abilities/abilities.component';
import { AdminDescriptionComponent } from './components/admin-description/admin-description.component';
import { BoonsBurdensComponent } from './components/boons-burdens/boons-burdens.component';
import { EquipmentComponent } from './components/equipment/equipment.component';
import { MysticalPowersComponent } from './components/mystical-powers/mystical-powers.component';
import { MysticalTraditionsComponent } from './components/mystical-traditions/mystical-traditions.component';
import { RacesComponent } from './components/races/races.component';
import { RitualsComponent } from './components/rituals/rituals.component';
import { TraitsComponent } from './components/traits/traits.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: '', component: AdminDescriptionComponent },
      { path: 'races', component: RacesComponent },
      { path: 'traits', component: TraitsComponent },
      { path: 'boons-burdens', component: BoonsBurdensComponent },
      { path: 'abilities', component: AbilitiesComponent },
      { path: 'mystical-traditions', component: MysticalTraditionsComponent },
      { path: 'mystical-powers', component: MysticalPowersComponent },
      { path: 'rituals', component: RitualsComponent },
      { path: 'equipment', component: EquipmentComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
