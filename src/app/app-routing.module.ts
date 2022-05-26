import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../app/HomeScreen/home/home.component';
import { AboutComponent } from '../app/HomeScreen/about/about.component';
import { PatchNotesComponent } from './Updates/patch-notes/patch-notes.component';
import { FirstPatchComponent } from './Updates/first-patch/first-patch.component';
import { FunctionsComponent } from './HomeScreen/functions/functions.component';
import { SignInComponent } from './Login/sign-in/sign-in.component';
import { SignUpComponent } from './Login/sign-up/sign-up.component';
import { PreviewComponent } from './HomeScreen/preview/preview.component';
import { SignUserComponent } from './Login/sign-up/sign-user/sign-user.component';
import { PostHomeComponent } from './Posts/post-home/post-home.component';
import { ErrorComponent } from './error/error.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path: '', redirectTo: '/Home', pathMatch: 'full'},
  {path: 'Home', component: HomeComponent},
  {path: 'AboutUs', component: AboutComponent},
  {path: 'SignIn', component:SignInComponent},
  {path: 'SignUp', component:SignUpComponent},
  {path: 'SignUser', component:SignUserComponent},
  {path: 'Functions', component:FunctionsComponent},
  {path: 'PatchNotes', component:PatchNotesComponent},
  {path: 'FirstPatch', component:FirstPatchComponent},
  {path: 'Preview', component:PreviewComponent},
  {path: 'Post', component:PostHomeComponent, canActivate: [AuthGuard]},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
