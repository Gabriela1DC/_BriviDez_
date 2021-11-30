import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormularioComponent } from './formulario.component';
import { AppRoutingModule } from '../app-routing.module';
import { NgModule } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';


@NgModule({
  declarations: [
    //FormularioComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    MatFormFieldModule
  ],

  providers: [],
  bootstrap: [FormularioComponent]
})
export class FormularioModule { }
