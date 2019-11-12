import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
// import { Material } from '@angular/material/card';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CshbotComponent } from './cshbot/cshbot.component';

import { CalcService } from '../calc.service';
import { CshbotService } from '../cshbot.service';
import { Thingbot } from '../thingbot/thingbot.component';



@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot([
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'cshbot', component: CshbotComponent },
    { path: 'thingbob', component: ThingbotComponent }

  ]) ],
  declarations: [ AppComponent, HelloComponent, HomeComponent, AboutComponent, CshbotComponent, ThingbotComponent ],
  providers: [CalcService, CshbotService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
