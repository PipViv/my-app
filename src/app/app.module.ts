import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PruebaComponente } from './prueba/prueba.component';
import { AvisoMantenimientoComponente } from './aviso-mantenimiento/aviso-mantenimiento.component';

@NgModule({
  declarations: [
    AppComponent,
    PruebaComponente,
    AvisoMantenimientoComponente
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
