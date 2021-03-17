import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import {AccountService} from '../_services/account.service';
import { User } from '../_models';

@Injectable()
export class AdminAuthGaurd implements CanActivate {
  user: User;

  constructor(
    public accountService: AccountService,
    private router: Router,
    private accountservice: AccountService
  ) {
    this.accountService.user.subscribe(x => this.user = x);
   }

  canActivate(){
   if ( this.accountservice.admin(this.user.username)) {
    console.log('ADMIN auth', this.accountservice.admin)
     return true ;
   }
   else{
    this.router.navigate(['/home']);
    return false;
   }
  
  }
}
