import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header/header.component';
import { KimestuComponent } from './page/kimestu/kimestu.component';
import { SlimeComponent } from './page/slime/slime.component';
import { PussComponent } from './page/puss/puss.component';
import { FooterComponent } from './footer/footer/footer.component';
import { MovieComponent } from './page/movie/movie.component';
import { Routes,RouterModule } from '@angular/router';
import { MainComponent } from './page/main/main.component';

const appRoutes:Routes=[
  {path:'',component:MainComponent},
  {path:'movie',component: MovieComponent,children:[
    {path:'kimestu',component: KimestuComponent,outlet:'movie'},
    {path:'slime',component: SlimeComponent,outlet:'movie'},
    {path:'puss',component: PussComponent,outlet:'movie'}
  ]},

]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    KimestuComponent,
    SlimeComponent,
    PussComponent,
    FooterComponent,
    MovieComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatCardModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
