import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public userService : UserService, private router : Router) {
   }

  ngOnInit() {
  //   var elems = document.querySelectorAll('.sidenav');
  //     var instances = M.Sidenav.init(elems, {edge:'left'});
    
  }
  toogle(){
    // var instance = M.Sidenav.getInstance(document.querySelectorAll('.sidenav')[0]);
    // instance.open();
  }
  logout(){
    localStorage.clear();
    this.router.navigate(['user/login']);
  }

}
