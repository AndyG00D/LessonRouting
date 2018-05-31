import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isLogIn$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor() {
  }

  public getLogIn(): BehaviorSubject<boolean> {
    return this.isLogIn$;
  }

  public getLogInValue(): boolean{
    return this.isLogIn$.getValue();
  }

  public logIn(): void {
    this.isLogIn$.next(true);
  }

  public logOut(): void{
    this.isLogIn$.next(false);
  }

}
