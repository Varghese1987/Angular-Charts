import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgChartjsModule } from 'ng-chartjs';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PetrolTrendComponent } from './petrol-trend/petrol-trend.component';
import { GoldComponent } from './gold/gold.component';
import { AnimalComponent } from './animal/animal.component';

@NgModule({
  declarations: [
    AppComponent,
    PetrolTrendComponent,
    GoldComponent,
    AnimalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgChartjsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
