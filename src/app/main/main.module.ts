import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { NotificationComponent } from './notification/notification.component';
import { AjaxWaitComponent } from './ajax-wait';
import { MenuComponent } from './menu/menu.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [];

@NgModule({
  declarations: [HomeComponent, NotificationComponent, AjaxWaitComponent, MenuComponent, PageNotFoundComponent],
  exports: [HomeComponent, NotificationComponent, AjaxWaitComponent, MenuComponent, PageNotFoundComponent],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class MainModule { }
