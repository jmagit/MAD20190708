import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { NotificationComponent } from './notification/notification.component';



@NgModule({
  declarations: [HomeComponent, NotificationComponent],
  exports: [HomeComponent, NotificationComponent],
  imports: [
    CommonModule
  ]
})
export class MainModule { }
