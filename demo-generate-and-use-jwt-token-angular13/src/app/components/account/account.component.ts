import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Jwttokenmodel } from 'src/app/shared/interfaces/jwttokenmodel';
import { UserModel } from 'src/app/shared/interfaces/user-model';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
})
export class AccountComponent implements OnInit {
  isLoginSuccess: boolean = false;

  constructor(private _router: Router, private _httpClient: HttpClient) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      const body: UserModel = {
        userName: form.value.userName,
        password: form.value.password,
      };

      this._httpClient
        .post<Jwttokenmodel>(
          'http://localhost:5284/api/Accounts/authenticate',
          body,
          {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
          }
        )
        .subscribe({
          next: (res: Jwttokenmodel) => {
            this.isLoginSuccess = true;

            const token = res.token;

            localStorage.setItem('jwtToken', token);

            this._router.navigate(['/']);
          },
          error: (err: HttpErrorResponse) => (this.isLoginSuccess = false),
        });
    }
  }
}
