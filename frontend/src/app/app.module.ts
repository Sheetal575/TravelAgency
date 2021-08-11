import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FlexLayoutModule } from "@angular/flex-layout";
import { HomeComponent } from './Components/home/home.component';
import { HeaderComponent } from './Components/home/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import {MatButtonModule} from '@angular/material/button';
import { AboutComponent } from './Components/home/about/about.component';
import { ActivitiesComponent } from './Components/home/activities/activities.component';
import {MatCardModule} from '@angular/material/card';
import { WhyBookWithUsComponent } from './Components/home/why-book-with-us/why-book-with-us.component';
import {MatIconModule} from '@angular/material/icon';
import { AccomodationComponent } from './Components/home/accomodation/accomodation.component';
import { ContactComponent } from './Components/home/contact/contact.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { PlacesComponent } from './Components/home/places/places.component';
import {MatDividerModule} from '@angular/material/divider';
import { ToolbarComponent } from './Components/toolbar/toolbar.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    ActivitiesComponent,
    WhyBookWithUsComponent,
    AccomodationComponent,
    ContactComponent,
    PlacesComponent,
    ToolbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
