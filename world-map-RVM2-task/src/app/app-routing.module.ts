import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorldMapComponent} from "./world-map/world-map.component";
import { CountryInfoComponent } from "./country-info/country-info.component";

const routes: Routes = [
  { path: '', redirectTo: '/map', pathMatch: 'full' },
  { path: 'map', component: WorldMapComponent },
  { path: 'country-info', component: CountryInfoComponent },
  { path: '**', redirectTo: '/map'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
