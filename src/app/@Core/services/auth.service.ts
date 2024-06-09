import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { IResponse } from '../models/global.model';
import { UserRoles } from '../enums/app.enum';
// import { IUser } from '../models/auth.model';
// import { BeneficiarTypesEnum } from '../enums/beneficiarType.enum';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private router: Router,
    private cookieService: CookieService,
  ) {}
  // login(user: {
  //   userName: string;
  //   password: string;
  // }): Observable<IResponse<IUser>> {
  //   return this.http.post<IResponse<IUser>>('Authentication/Login', user);
  // }
  // loginUser(user: {
  //   identityNumber: string;
  //   mobileNumber: string;
  // }): Observable<IResponse<IUser>> {
  //   return this.http.post<IResponse<IUser>>('Authentication/LoginByOtp', user);
  // }
  // confirmOtp(user: {
  //   identityNumber: string;
  //   mobileNumber: string;
  // }): Observable<IResponse<IUser>> {
  //   return this.http.post<IResponse<IUser>>(
  //     'Authentication/LoginByOtpVerification',
  //     user
  //   );
  // }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  // storeUser(user: IUser): void {
  //   // Save User in localStorage
  //   localStorage.setItem('haj-user', JSON.stringify(user));
  //   localStorage.setItem('haj-token', user.authenticationToken);
  // }

  // getCurrentUser(): IUser | null {
  //   if (!this.isLoggedIn()) return null;
  //   const user = JSON.parse(localStorage.getItem('haj-user')!);

  //   return user;
  // }

  // checkIsConfirm(url: string): void {
  //   if (
  //     this.isCurrentUserRole(UserRoles.Commissioner) &&
  //     this.getCurrentUser()?.isConfirmed === false &&
  //     !url.includes('confirm-terms-and-conditions')
  //   ) {
  //     this.router.navigateByUrl('confirm-terms-and-conditions');
  //   }
  // }

  // isCurrentUserRole(userRole: UserRoles): boolean {
  //   return JSON.parse(localStorage.getItem('haj-user')!)?.roleId === userRole;
  // }
  // isBeneficiarTypeId(beneficiarType: BeneficiarTypesEnum): boolean {
  //   return (
  //     JSON.parse(localStorage.getItem('haj-user')!)?.beneficiarTypeId ===
  //     beneficiarType
  //   );
  // }

  getToken(): string | undefined {
    const token = this.cookieService.get('access-token');

    return !!token ? `Bearer ${token}` : undefined;
  }

  logout(): void {
    this.cookieService.deleteAll();
  }
}
