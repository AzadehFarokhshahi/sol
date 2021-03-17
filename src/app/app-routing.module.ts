import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { AuthGuard } from './_helpers';
import { DashboardComponent } from './dashboard/dashboard.component';
import {LoginComponent} from './account/login.component';
import {RegisterComponent} from './account/register.component';
import {AdminComponent} from './admin/admin.component'
import {CoursesComponent} from './courses/courses.component';
import {LessonsComponent} from './lessons/lessons.component';
import { AdminAuthGaurd } from './_services/admin-auth-gaurd.service';
import {SecintvComponent} from './secintv/secintv.component';
import {EarComponent} from './ear/ear.component';
import {EarintvComponent} from './earintv/earintv.component';
import {ContactComponent} from './contact/contact.component'

const accountModule = () => import('./account/account.module').then(x => x.AccountModule);
const usersModule = () => import('./users/users.module').then(x => x.UsersModule);

const routes: Routes = [
    { path: 'home', component: HomeComponent , canActivate: [AuthGuard]},
    { path: 'users', loadChildren: usersModule , canActivate: [AuthGuard, AdminAuthGaurd]},
    { path: 'account', loadChildren: accountModule },
    { path: '',  component: DashboardComponent },
    { path: 'login',  component: LoginComponent }, 
    { path: 'register',  component: RegisterComponent }, 
    { path: 'admin' , component: AdminComponent, 
        canActivate: [AuthGuard, AdminAuthGaurd],   
    } ,
    { path: 'courses' , component: CoursesComponent}, 
    { path: 'lessons' , component: LessonsComponent}, 
    { path: 'ear' , component: EarComponent},
    { path: 'earintv' , component: EarintvComponent},
    { path: 'secintv' , component: SecintvComponent},
    { path: 'contact' , component: ContactComponent},    

    // otherwise redirect to home
    { path: '**', redirectTo: 'home' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }