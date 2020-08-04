import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MissionTypeComponent } from './mission-type/mission-type.component';
import { HttpClientModule } from '@angular/common/http';
import { MissionTypeFeatureComponent } from './mission-type-feature/mission-type-feature.component';
import { PrimaryMissionComponent } from './primary-mission/primary-mission.component';
import { PrimaryMissionService } from './services/primary-mission-service.service';
import { MissionTypeService } from './services/mission-type.service';
import { SecondaryFeatureComponent } from './secondary-feature/secondary-feature.component';
import { SecondaryClassFeatureComponent } from './secondary-class-feature/secondary-class-feature.component';
import { SecondaryMissionComponent } from './secondary-mission/secondary-mission.component';

@NgModule({
  declarations: [
    AppComponent,
    MissionTypeComponent,
    MissionTypeFeatureComponent,
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
