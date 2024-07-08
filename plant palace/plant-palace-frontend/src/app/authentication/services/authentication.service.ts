import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ILoginModel } from '../models/login';
import { IRegisterModel } from '../models/register';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(
    @Inject(HttpClient) private readonly httpClient: HttpClient
  ) { }

  //TODO Add login route
  public login(loginModel: ILoginModel): Observable<(any)> {
    return this.httpClient.post<(any)>('', loginModel);
  }

  //TODO Add register route
  public register(registerModel: IRegisterModel): Observable<boolean> {
    return this.httpClient.post<boolean>('', registerModel);
  }
}
