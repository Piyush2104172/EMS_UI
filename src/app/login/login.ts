import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  imports: [],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login {

  constructor(private router: Router) {
  }

  data = {
    username: 'ps65',
    password: '12345',
  };


  showWarning = false;
  warning = '';

  verify(username: string, password: string) {

    if (username === ''&& password==='') {
      this.showWarning = true;
      this.warning = 'Please enter username & password';
    } else if (password === '') {
      this.warning = 'Please enter password';
      this.showWarning = true;
    } else if (username != this.data.username || password != this.data.password) {
      this.warning = 'Invalid username or password';
      this.showWarning = true;
      console.log(username +"---"+password);
    } else {
      if(username!=this.data.username){
        this.showWarning=true;
        this.warning='incorrect username';
      }else if(password!=this.data.password){
        this.showWarning=true;
        this.warning='incorrect password';
      }else{
         this.router.navigate(['/dashboard']);
      this.showWarning = false;
      sessionStorage.setItem('isLoggedIn','true');
    }
  }
  }
}
