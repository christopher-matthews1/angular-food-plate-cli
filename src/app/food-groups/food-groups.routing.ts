import { FoodGroupsComponent } from './food-groups.component';
import { ProteinDetailComponent } from './food-detail/protein-detail/protein-detail.component';
import { VegetableDetailComponent } from './food-detail/vegetable-detail/vegetable-detail.component';
import { FruitDetailComponent } from './food-detail/fruit-detail/fruit-detail.component';
import { GrainDetailComponent } from './food-detail/grain-detail/grain-detail.component';
import { FoodGroupsGuardService } from '../services/food-groups-guard.service';

export const foodGroupsRoutes = [
  {
    path: 'foodGroups',
    canActivateChild: [FoodGroupsGuardService],
    children: [
      {
        path: '',
        component: FoodGroupsComponent,
        outlet: 'foodGroupOutlet'
      },
      {
        path: 'protein',
        component: ProteinDetailComponent,
      },
      {
        path: 'fruit',
        component: FruitDetailComponent
      },
      {
        path: 'vegetables',
        component: VegetableDetailComponent
      },
      {
        path: 'grains',
        component: GrainDetailComponent
      },
    ]}
];