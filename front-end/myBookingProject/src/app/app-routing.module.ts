import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { RoomComponent } from './components/room/room.component';

const routes: Routes = [
  {path: '',component:HomeComponent},
  {path: 'trangchu/lien-he',component:ContactComponent},
  {path: 'trangchu/ve-chung-toi',component:AboutComponent},
  {path: 'trangchu/phong-nghi-biet-thu',component:RoomComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
