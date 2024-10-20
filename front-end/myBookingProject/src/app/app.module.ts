import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/inc/footer/footer.component';
import { HeaderComponent } from './components/inc/header/header.component';
import { ButtonComponent } from './components/inc/button/button.component';
import { Button2Component } from './components/inc/button2/button2.component';
import { SwiperFeedbackComponent } from './components/home/swiper-feedback/swiper-feedback.component';
import { FristShowPageComponent } from './components/inc/frist-show-page/frist-show-page.component';
import { AboutSharedComponent } from './components/about/about-shared/about-shared.component';
import { ContactSharedComponent } from './components/inc/contact-shared/contact-shared.component';
import { CarouselAboutComponent } from './components/about/carousel-about/carousel-about.component';
import { LocationComponent } from './components/location/location.component';
import { LocationSharedComponent } from './components/location/location-shared/location-shared.component';
import { RoomComponent } from './components/room/room.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    AboutComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    ButtonComponent,
    Button2Component,
    SwiperFeedbackComponent,
    FristShowPageComponent,
    AboutSharedComponent,
    ContactSharedComponent,
    CarouselAboutComponent,
    LocationComponent,
    LocationSharedComponent,
    RoomComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
