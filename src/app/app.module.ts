import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Page1Component } from './page1/page1.component';
import { AddComponent } from './add/add.component';
import { RouterModule, Routes } from '@angular/router';
import { CompService } from './comp.service';

const appRoutes: Routes = [
  { path: '', component: Page1Component },
  { path: 'add', component: AddComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    AddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [CompService],
  bootstrap: [AppComponent]
})
export class AppModule { }
