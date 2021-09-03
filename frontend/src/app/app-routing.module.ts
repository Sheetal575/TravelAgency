import { PlacesDetailsComponent } from './Components/home/places/places-details/places-details.component';
import { ContactComponent } from './Components/home/contact/contact.component';
import { HomeComponent } from './Components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"contact",
    component:ContactComponent,
  },
  {
    path:"places-details",
    component:PlacesDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
