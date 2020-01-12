import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  readonly BASE_URL = 'https://localhost:44373/api/';
  constructor(private fb : FormBuilder, private http : HttpClient) { }

  loginFormModel = this.fb.group({
    Email : ['', [Validators.required, Validators.email]],
    Password : ['', Validators.required]
  });

  login(){
    var body ={
      Email : this.loginFormModel.value.Email,
      Password : this.loginFormModel.value.Password
    }

   return this.http.post(this.BASE_URL+'ApplicationUser/Login',body)
  }

  roleMatch(allowRoles):boolean{
    var isMatch = false;
    var userRoles : string[]= JSON.parse(localStorage.getItem('userRoles')).map(x => x.roleType);
    allowRoles.forEach(element => {
      if(userRoles.indexOf(element) > -1){
        isMatch = true;
        return false;
      }
    });
    return isMatch;
  }
}
