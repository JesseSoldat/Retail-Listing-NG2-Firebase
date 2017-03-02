import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ListingsComponent } from './components/listings/listings.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListingComponent } from './components/listing/listing.component';
import { AddListingComponent } from './components/add-listing/add-listing.component';
import { EditListingComponent } from './components/edit-listing/edit-listing.component';

import { FirebaseService } from './services/firebase.service';

var firebaseConfig = {
    apiKey: "AIzaSyCZ0Kt_NXjhwekjY7a_7KXPcMvu5cAjPWI",
    authDomain: "angular2-c77fe.firebaseapp.com",
    databaseURL: "https://angular2-c77fe.firebaseio.com",
    storageBucket: "angular2-c77fe.appspot.com",
    messagingSenderId: "155601858627"
  };

const firebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Popup
}


const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'listings', component: ListingsComponent},
  {path: 'listing/:id', component: ListingComponent},
  {path: 'add-listing', component: AddListingComponent},



];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListingsComponent,
    NavbarComponent,
    ListingComponent,
    AddListingComponent,
    EditListingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule,
    AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig),
  ],
  providers: [FirebaseService, 
  {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
