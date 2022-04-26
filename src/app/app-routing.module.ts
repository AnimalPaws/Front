import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SignComponent } from './sign/sign.component';
import { PreviewComponent } from './preview/preview.component';
import { ErrorComponent } from './error/error.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path: '', redirectTo: '/Home', pathMatch: 'full'},
  {path: 'Home', component: HomeComponent},
  {path: 'AboutUs', component: AboutComponent},
  {path: 'Preview', component:PreviewComponent},
  {path: 'SignIn', component: SigninComponent},
  {path: 'SignUp', component: SignupComponent},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
