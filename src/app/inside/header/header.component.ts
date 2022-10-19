import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router, private toaster: ToastrService) { }

  ngOnInit(): void {
  }
  async signOut(){
    await this.authService.logout();
    this.router.navigateByUrl('/')
    .then(() => this.toaster.warning('You signed out'))
  }

}
