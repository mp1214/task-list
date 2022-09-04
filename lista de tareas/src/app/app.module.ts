import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { BotonComponent } from './component/boton/boton.component';
import { TaskComponent } from './component/task/task.component';
import { TaskItemComponent } from './component/task-item/task-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BotonComponent,
    TaskComponent,
    TaskItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
