import { NgModule } from "@angular/core";
import { Route, RouterModule, Routes } from "@angular/router";

import { DefaultComponent } from "./components/default/default.component";
import { ExercisesComponent } from "./exercises/exercises.component";
import { FarmersMarketComponent } from "./farmers-market/farmers-market.component";
import { foodGroupsRoutes } from "./food-groups/food-groups.routing";
import { PlateComponent } from "./plate/plate.component";
import { RegisterComponent } from "./register/register.component";

const fallbackRoute: Route = {
    path: '**', component: DefaultComponent
}

const routes: Routes = [
    {
        path: '',
        children: [
            {path: '', component: PlateComponent},
            {path: 'register', component: RegisterComponent},
            {path: 'my-plate', component: PlateComponent},
            {path: 'farmers-market', component: FarmersMarketComponent},
            {path: 'exercises', component: ExercisesComponent},
            ...foodGroupsRoutes,
            fallbackRoute
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}