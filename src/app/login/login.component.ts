import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;

    constructor(private fb: FormBuilder) {
        this.loginForm = this.fb.group({
            email: ['', Validators.required],
            password: ['', Validators.required]
        });
    }


    ngOnInit(): void {
    }

    onSubmit() {
        if (this.loginForm.valid) {
            const email = this.loginForm.get('email')?.value;
            const password = this.loginForm.get('password')?.value;

            console.log('email: ', email);
            console.log('password', password);
        }
    }
}
