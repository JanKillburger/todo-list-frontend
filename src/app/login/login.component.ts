import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(
    private auth: AuthService,
    private router: Router) { }

  username = ''
  password = ''

  login() {
    this.auth.loginWithUsernameAndPassword(this.username, this.password)
      .subscribe((data) => {
        localStorage.setItem("token", data.token);
        this.router.navigateByUrl('todos');
      })
  }
}
