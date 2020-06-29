import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { AdminRoutingModule } from './admin-routing.module';
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
import { TraitListItemComponent } from './components/traits/trait-list-item/trait-list-item.component';
import { TraitListComponent } from './components/traits/trait-list/trait-list.component';
import { TraitDetailComponent } from './components/traits/trait-detail/trait-detail.component';
import { TraitLevelComponent } from './components/traits/trait-level/trait-level.component';

@NgModule({
  declarations: [
    AdminComponent,
    AdminDescriptionComponent,
    RacesComponent,
    TraitsComponent,
    BoonsBurdensComponent,
    AbilitiesComponent,
    MysticalTraditionsComponent,
    MysticalPowersComponent,
    RitualsComponent,
    EquipmentComponent,
    TraitListItemComponent,
    TraitListComponent,
    TraitDetailComponent,
    TraitLevelComponent,
  ],
  imports: [CommonModule, AdminRoutingModule, SharedModule],
})
export class AdminModule {}
