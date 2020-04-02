import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../_service/auth.service';
import { AlertifyService } from '../_service/alertify.service';
// import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router,
    private altertify: AlertifyService
  ) {}

  canActivate(): boolean {

    if (this.authService.loggedIn()) {
      return true;
    }
    
    this.altertify.error('Please login to access this page');
    this.router.navigate(['/home']);
    return false;
  }
}
