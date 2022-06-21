// Angular Modules //
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// HomeScreen Components //
import { HomeComponent } from '../app/components/HomeScreen/home/home.component';
import { AboutComponent } from '../app/components//HomeScreen/about/about.component';
import { ContribuitorComponent } from './components/HomeScreen/contribuitor/contribuitor.component';
import { PreviewComponent } from './components/HomeScreen/preview/preview.component';
import { ContactUsComponent } from './components/HomeScreen/contact-us/contact-us.component';
import { PrivacyComponent } from './components/Legal/privacy/privacy.component';
import { TermsComponent } from './components/Legal/terms/terms.component';
// Functions Components //
import { FunctionsComponent } from '../app/components/HomeScreen/functions/functions.component';
import { AccountComponent } from './components/HomeScreen/functions/account/account.component';
import { ChatComponent } from './components/HomeScreen/functions/chat/chat.component';
import { PostComponent } from './components/HomeScreen/functions/post/post.component';
import { AdoptComponent } from './components/HomeScreen/functions/adopt/adopt.component';
import { EntitiesComponent } from './components/HomeScreen/functions/entities/entities.component';
import { HelpComponent } from './components/HomeScreen/functions/help/help.component';
// Boosted Components //
import { BoostedInfoComponent } from './components/Boosted/boosted-info/boosted-info.component';
import { BoostedFormComponent } from './components/Boosted/boosted-form/boosted-form.component';
// Updates Components //
import { PatchNotesComponent } from '../app/components/Updates/patch-notes/patch-notes.component';
import { FirstPatchComponent } from '../app/components/Updates/first-patch/first-patch.component';
import { SecondPatchComponent } from './components/Updates/second-patch/second-patch.component';
// Login Components //
import { LoginOptionsComponent } from './components/Login/login-options/login-options.component';
import { SignInComponent } from './components/Login/sign-in/sign-in.component';
import { SignUpComponent } from './components/Login/sign-up/sign-up.component';
import { SignUserComponent } from './components/Login/sign-up/sign-user/sign-user.component';
import { AuthRoleComponent } from './components/Login/auth-role/auth-role.component';
// Posts Components //
import { PostHomeComponent } from './components/Posts/post-home/post-home.component';
import { PostTrendComponent } from './components/Posts/post-trend/post-trend.component';
import { PostAdoptComponent } from './components/Posts/post-adopt/post-adopt.component';
import { PostEntitiesComponent } from './components/Posts/post-entities/post-entities.component';
import { PostAccountsComponent } from './components/Posts/post-accounts/post-accounts.component';
import { PostEditComponent } from './components/Posts/post-edit/post-edit.component';
// Create Components //
import { CreatePostComponent } from './components/Create/create-post/create-post.component';
import { CreateYourPostsComponent } from './components/Create/create-your-posts/create-your-posts.component';
import { CreateYourAdoptComponent } from './components/Create/create-your-adopt/create-your-adopt.component';
import { CreateSettingsComponent } from './components/Create/create-settings/create-settings.component';
import { CreateAccountComponent } from './components/Create/create-account/create-account.component';
// Error 404 Component //
import { ErrorComponent } from './components/error/error.component';
// External Dependencies //
/*import { AuthGuard } from './guards/auth.guard';*/
import { importExpr } from '@angular/compiler/src/output/output_ast';

const routes: Routes = [
  // Principal Route //
  {path: '', redirectTo: '/', pathMatch: 'full'},
  // HomeScreen Routes //
  {path: '', component: HomeComponent},
  {path: 'AboutUs', component: AboutComponent},
  {path: 'Contribuitors', component:ContribuitorComponent},
  {path: 'Preview', component:PreviewComponent},
  {path: 'ContactUs', component:ContactUsComponent},
  {path: 'Privacy', component:PrivacyComponent},
  {path: 'TermsOfServices', component:TermsComponent},
  {path: 'BecomeAContribuitor', component:ContribuitorComponent},
  // Functions Routes //
  {path: 'Functions', component:FunctionsComponent},
  {path: 'AccountInfo', component:AccountComponent},
  {path: 'ChatInfo', component:ChatComponent},
  {path: 'PostInfo', component:PostComponent},
  {path: 'AdoptInfo', component:AdoptComponent},
  {path: 'EntitiesInfo', component:EntitiesComponent},
  {path: 'HelpInfo', component:HelpComponent},
  // Boosted Routes //
  {path: 'BoostedInfo', component:BoostedInfoComponent},
  {path: 'BoostedPay', component:BoostedFormComponent},
  // Updates Routes //
  {path: 'PatchNotes', component:PatchNotesComponent},
  {path: 'FirstPatch', component:FirstPatchComponent},
  {path: 'SecondPatch', component:SecondPatchComponent},
  // Login Routes //
  {path: 'Login', component:LoginOptionsComponent},
  {path: 'Login/SignIn', component:SignInComponent},
  {path: 'Login/SignUp', component:SignUpComponent},
  {path: 'Login/SignUser', component:SignUserComponent},
  {path: 'Login/Auth', component:AuthRoleComponent},
  // Posts Routes //
  {path: 'Home', component:PostHomeComponent, /*canActivate: [AuthGuard]*/},
  {path: 'Trend', component:PostTrendComponent},
  {path: 'Adopt', component:PostAdoptComponent},
  {path: 'Entities', component:PostEntitiesComponent},
  {path: 'Accounts', component:PostAccountsComponent},
  {path: 'Edit/:id', component:PostEditComponent},
  // Create Routes //
  {path: 'CreatePosts', component:CreatePostComponent},
  {path: 'YourPosts', component:CreateYourPostsComponent},
  {path: 'YourAdoptions', component:CreateYourAdoptComponent},
  {path: 'Settings', component:CreateSettingsComponent},
  {path: 'YourAccount', component:CreateAccountComponent},
  // Error 404 Route //
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
