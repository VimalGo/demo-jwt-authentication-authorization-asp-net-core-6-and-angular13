import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnonymousSubject } from 'rxjs/internal/Subject';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  userList: any;

  constructor(private _httpClient: HttpClient) {}

  ngOnInit(): void {
    this.getUserList();
  }

  getUserList() {
    this._httpClient.get('http://localhost:5284/api/Accounts').subscribe({
      next: (res: any) => (this.userList = res),
      error: (err: HttpErrorResponse) => console.log(err),
    });
  }
}
