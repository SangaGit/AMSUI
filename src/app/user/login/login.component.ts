import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public userService : UserService, private toastr: ToastrService, private router : Router) { }

  ngOnInit() {
  }

  onSubmit(){
    this.userService.login().subscribe(
      (res:any[]) =>{
        console.log(res);
        if(res && res.length > 0){
          localStorage.setItem('userRoles',JSON.stringify(res))
          this.router.navigate(['home']);
          this.toastr.success('login success');
        }
        else{
          this.toastr.warning('You are not registered user');
        }
        
        this.userService.loginFormModel.reset();
      },
      err =>{
        console.log(err);
        this.toastr.error('invalid');
      }
    )
  }
}
