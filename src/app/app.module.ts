import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Page1Component } from './page1/page1.component';
import { AddComponent } from './add/add.component';
import { RouterModule, Routes } from '@angular/router';
import { CompService } from './comp.service';
import { TableComponent } from './table/table.component';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from './table/search.pipe';

const appRoutes: Routes = [
  { path: '', component: TableComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    AddComponent,
    TableComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [CompService],
  bootstrap: [AppComponent]
})
export class AppModule { }
