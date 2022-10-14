import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { UiComponent } from './inside/ui/ui.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [{
  path: '',
  component: LoginComponent
},
{
  path: 'app',
  component: UiComponent,
  canActivate: [AuthGuard],
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
