import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MissionTypeComponent } from './mission-type/mission-type.component';
import { HttpClientModule } from '@angular/common/http';
import { PrimaryMissionComponent } from './primary-mission/primary-mission.component';
import { SecondaryFeatureComponent } from './secondary-feature/secondary-feature.component';
import { SecondaryClassFeatureComponent } from './secondary-class-feature/secondary-class-feature.component';
import { SecondaryMissionComponent } from './secondary-mission/secondary-mission.component';
import { SelectedMissionService } from './services/selected-mission.service';

@NgModule({
  declarations: [
    AppComponent,
    MissionTypeComponent,
    PrimaryMissionComponent,
    SecondaryFeatureComponent,
    SecondaryClassFeatureComponent,
    SecondaryMissionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
