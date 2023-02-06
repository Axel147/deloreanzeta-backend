import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { SwiperModule } from 'swiper/angular';
import { MaterialModule } from './material.module';

import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductsCarruselComponent } from '../shared/components/products-carrusel/products-carrusel.component';
import { NewsCarruselComponent } from './components/news-carrusel/news-carrusel.component';
import { TitleComponent } from './components/title/title.component';


@NgModule({
  declarations: [
    NavBarComponent,
    FooterComponent,
    NotFoundComponent,
    ProductsCarruselComponent,
    NewsCarruselComponent,
    TitleComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    SwiperModule,
    MaterialModule
  ],
  exports: [
    HttpClientModule,
    RouterModule,
    NavBarComponent,
    NotFoundComponent,
    FooterComponent,
    ProductsCarruselComponent,
    NewsCarruselComponent,
    TitleComponent
  ],
  providers: []
})
export class SharedModule { }
