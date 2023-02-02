import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRouteModule } from './app-routing.module';
import { SolutionComponent } from './solution/solution.component';

@NgModule({
  declarations: [
    AppComponent,
    SolutionComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,//Requiered
    AppRouteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
