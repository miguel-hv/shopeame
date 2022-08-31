import { AppRoutingModule } from './app-routing/app-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HeaderComponent } from './core/components/header/header.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { FormPageComponent } from './pages/form-page/form-page.component';
import { GalleryComponent } from './shared/components/gallery/gallery.component';
import { ProductCardComponent } from './shared/components/product-card/product-card.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    ProductsPageComponent,
    FormPageComponent,
    GalleryComponent,
    ProductCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
