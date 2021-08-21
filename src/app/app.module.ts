import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule,FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { FormbuilderComponent } from './formbuilder/formbuilder.component';
import { FormarrayComponent } from './formarray/formarray.component';
import { MoshformComponent } from './moshform/moshform.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TdformComponent } from './tdform/tdform.component';

@NgModule({
  declarations: [
    AppComponent,
    ReactiveformComponent,
    FormbuilderComponent,
    FormarrayComponent,
    MoshformComponent,
    TdformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
