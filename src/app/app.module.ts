import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './pages/index/index.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { ContactanosComponent } from './pages/contactanos/contactanos.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    InicioComponent,
    ProductosComponent,
    ServiciosComponent,
    ContactanosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: '',component: InicioComponent},
      {path: 'inicio/:inicio',component: InicioComponent},
      {path: '',component: InicioComponent},
      {path: 'productos/:productos',component: ProductosComponent},
      {path: '',component: InicioComponent},
      {path: 'servicios/:servicios',component: ServiciosComponent},
      {path: '',component: InicioComponent},
      {path: 'contactanos/:contactanos',component: ContactanosComponent}, 
      {path: '',component: InicioComponent},
      {path: 'index/:index',component: IndexComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
