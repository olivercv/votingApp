import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router, private toaster: ToastrService) { 
    this.form = this.fb.group({
      email: ['olivercv@gmail.com', [Validators.required, Validators.email]],
      password: ['123456', [Validators.required, Validators.minLength(6)]]
    })
  }

  ngOnInit(): void {
  }
  async login() {
    console.log(this.form.value);
    const { user, session, error} = await this.auth.login(this.form.value);    
    
    if(error) {
      // TODO show error list
      console.log(error);
    }else {
      this.router.navigateByUrl('/app', { replaceUrl: true})
      .then(() => this.toaster.success('You signed in'));
    }
  }
  async register() {
    console.log(this.form.value);
    const { user, session, error} = await this.auth.createAccount(this.form.value);
    
    if(error) {
      // TODO show error list
      console.log(error);
    }else {
      console.log(session);
      console.log(user);
      this.router.navigateByUrl('/app', { replaceUrl: true});
    }
  }

}
