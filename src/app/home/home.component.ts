import { AuthService } from './../services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private authService: AuthService) { }

  logout(){
    this.authService.logout();
  }

  public get isLoggedIn() : boolean {
    return this.authService.isLoggedIn();
  }

  public get currentUser(): any {
    return this.authService.currentUser;
  }
  
  

}
