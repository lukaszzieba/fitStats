import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'fs-auth',
    templateUrl: 'auth.component.html'
})
export class AuthComponent implements OnInit {
    authMode: string;

    constructor() {
        this.authMode = 'signIn'
    }

    ngOnInit() { }
}