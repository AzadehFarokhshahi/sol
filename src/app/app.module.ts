import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, FormGroup }   from '@angular/forms';
// used to create fake backend
import { fakeBackendProvider, AuthGuard } from './_helpers';

import { AppRoutingModule } from './app-routing.module';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { AppComponent } from './app.component';
import { AlertComponent } from './_components';
import { HomeComponent } from './home';;
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';;
import { AdminComponent } from './admin/admin.component';
import { CoursesComponent } from './courses/courses.component';
import { SecintvComponent } from './secintv/secintv.component';
import { SidebarModule } from '@syncfusion/ej2-angular-navigations';
import {SidebarAccordionModule} from 'ng-sidebar-accordion';;
import { LessonsComponent } from './lessons/lessons.component';
import { AdminAuthGaurd } from './_services/admin-auth-gaurd.service';
import { AccountService } from './_services';;
import { IntervalsComponent } from './intervals/intervals.component';
import { EarComponent } from './ear/ear.component';
import { EarintvComponent } from './earintv/earintv.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        AppRoutingModule,
        SidebarModule,
        SidebarAccordionModule,
        FormsModule,
        ReactiveFormsModule,
        
    ],
    exports: [NavbarComponent],
    declarations: [
        AppComponent,
        AlertComponent,
        HomeComponent,
        DashboardComponent ,
        NavbarComponent
,
        AdminComponent ,
        CoursesComponent ,
        SecintvComponent ,
        LessonsComponent,
        IntervalsComponent
,
        EarComponent ,
        EarintvComponent ,
        ContactComponent      
           
         ],
    providers: [
        AccountService,
        AuthGuard,
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
        AdminAuthGaurd,
        // provider used to create fake backend
        fakeBackendProvider
    ],
    bootstrap: [AppComponent]
})
export class AppModule { };