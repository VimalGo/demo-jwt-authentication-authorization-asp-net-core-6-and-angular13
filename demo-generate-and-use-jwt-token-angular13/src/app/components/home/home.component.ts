import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private _jwtService: JwtHelperService) {}

  ngOnInit(): void {}

  isUserAuthenticated = (): boolean => {
    const jwtToken = localStorage.getItem('jwtToken');

    if (jwtToken && !this._jwtService.isTokenExpired(jwtToken)) {
      return true;
    }

    return false;
  };

  logOut() {
    localStorage.removeItem('jwtToken');
  }
}
