﻿import { Component, Oninit } from '@angular/core';

import { AccountService } from './_services';
import { User } from './_models';

@Component({ selector: 'app', templateUrl: 'index.html' })
export class AppComponent implements OnInit{
    user: User;

    constructor(private accountService: AccountService) {
        this.accountService.user.subscribe(x => this.user = x);
      this.user = this.accountService.userValue;
    }

    logout() {
        this.accountService.logout();
    }
    ngOnInit(): void {
  }
}
