import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';


import {NgbPaginationModule, NgbAlertModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormularioComponent } from './formulario/formulario.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { FormularioModule } from './formulario/formulario.module';


@NgModule({
  declarations: [
    AppComponent,

    HeaderComponent,
    FooterComponent,
    FormularioComponent,
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    NgbPaginationModule,
    NgbAlertModule,
    NgbModule,
    AppRoutingModule,
    FormularioModule,
    FormsModule,
    ReactiveFormsModule,
  ],

  providers: [],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
