// Angular Modules //
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// HomeScreen Components English //
import { HomeComponent } from './components/English/HomeScreen/home/home.component';
import { AboutComponent } from './components/English/HomeScreen/about/about.component';
import { ContribuitorComponent } from './components/English/HomeScreen/contribuitor/contribuitor.component';
import { PreviewComponent } from './components/English/HomeScreen/preview/preview.component';
import { ContactUsComponent } from './components/English/HomeScreen/contact-us/contact-us.component';
// HomeScreen Components Spanish //
import { HomeEsComponent } from './components/Spanish/HomeScreen/home-es/home-es.component';
import { AboutEsComponent } from './components/Spanish/HomeScreen/about-es/about-es.component';
// Functions Components Spanish //
import { FunctionsEsComponent } from './components/Spanish/HomeScreen/functions-es/functions-es.component';
// Functions Components //
import { FunctionsComponent } from '../app/components/English/HomeScreen/functions/functions.component';
import { AccountComponent } from './components/English/HomeScreen/functions/account/account.component';
import { ChatComponent } from './components/English/HomeScreen/functions/chat/chat.component';
import { PostComponent } from './components/English/HomeScreen/functions/post/post.component';
import { AdoptComponent } from './components/English/HomeScreen/functions/adopt/adopt.component';
import { EntitiesComponent } from './components/English/HomeScreen/functions/entities/entities.component';
import { HelpComponent } from './components/English/HomeScreen/functions/help/help.component';
// Boosted Components //
import { BoostedInfoComponent } from './components/English/Boosted/boosted-info/boosted-info.component';
import { BoostedFormComponent } from './components/English/Boosted/boosted-form/boosted-form.component';
// Updates Components //
import { PatchNotesComponent } from '../app/components/English/Updates/patch-notes/patch-notes.component';
import { FirstPatchComponent } from '../app/components/English/Updates/first-patch/first-patch.component';
import { SecondPatchComponent } from './components/English/Updates/second-patch/second-patch.component';
// Login Components //
import { LoginOptionsComponent } from './components/English/Login/login-options/login-options.component';
import { SignInComponent } from './components/English/Login/sign-in/sign-in.component';
import { SignUpComponent } from './components/English/Login/sign-up/sign-up.component';
import { AuthRoleComponent } from './components/English/Login/auth-role/auth-role.component';
// Posts Components //
import { PostHomeComponent } from './components/English/Posts/post-home/post-home.component';
import { PostTrendComponent } from './components/English/Posts/post-trend/post-trend.component';
import { PostAdoptComponent } from './components/English/Posts/post-adopt/post-adopt.component';
import { PostEntitiesComponent } from './components/English/Posts/post-entities/post-entities.component';
import { PostAccountsComponent } from './components/English/Posts/post-accounts/post-accounts.component';
import { PostEditComponent } from './components/English/Posts/post-edit/post-edit.component';
import { PostChatRoomComponent } from './components/English/Posts/post-chat-room/post-chat-room.component';
// Create Components //
import { CreatePostComponent } from './components/English/Create/create-post/create-post.component';
import { CreateYourPostsComponent } from './components/English/Create/create-your-posts/create-your-posts.component';
import { CreateYourAdoptComponent } from './components/English/Create/create-your-adopt/create-your-adopt.component';
import { CreateSettingsComponent } from './components/English/Create/create-settings/create-settings.component';
import { CreateAccountComponent } from './components/English/Create/create-account/create-account.component';
// Error 404 Component //
import { ErrorComponent } from './components/404 Error/error/error.component';
// External Dependencies //
/*import { AuthGuard } from './guards/auth.guard';*/
import { importExpr } from '@angular/compiler/src/output/output_ast';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  // Principal Route //
  {path: '', redirectTo: '/En', pathMatch: 'full'},
  // HomeScreen Routes English //
  {path: 'En', component: HomeComponent},
  {path: 'AboutUs/En', component: AboutComponent},
  {path: 'Contribuitors/En', component:ContribuitorComponent},
  {path: 'Preview/En', component:PreviewComponent},
  {path: 'ContactUs/En', component:ContactUsComponent},
  {path: 'BecomeAContribuitor/En', component:ContribuitorComponent},
  // HomeScreen Routes Spanish //
  {path: 'Es', component:HomeEsComponent},
  {path: 'AboutUs/Es', component:AboutEsComponent},
  // Functions Routes Spanish //
  {path: 'Functions/Es', component:FunctionsEsComponent},
  // Functions Routes English //
  {path: 'Functions/En', component:FunctionsComponent},
  {path: 'AccountInfo/En', component:AccountComponent},
  {path: 'ChatInfo/En', component:ChatComponent},
  {path: 'PostInfo/En', component:PostComponent},
  {path: 'AdoptInfo/En', component:AdoptComponent},
  {path: 'EntitiesInfo/En', component:EntitiesComponent},
  {path: 'HelpInfo/En', component:HelpComponent},
  // Boosted Routes //
  {path: 'BoostedInfo/En', component:BoostedInfoComponent},
  {path: 'BoostedPay/En', component:BoostedFormComponent},
  // Updates Routes //
  {path: 'PatchNotes/En', component:PatchNotesComponent},
  {path: 'FirstPatch/En', component:FirstPatchComponent},
  {path: 'SecondPatch/En', component:SecondPatchComponent},
  // Login Routes //
  {path: 'Login/En', component:LoginOptionsComponent},
  {path: 'SignIn/En', component:SignInComponent},
  {path: 'SignUp/En', component:SignUpComponent},
  {path: 'Auth/En', component:AuthRoleComponent},
  // Posts Routes //
  {path: 'Home/En', component:PostHomeComponent, canActivate: [AuthGuard]},
  {path: 'Trend/En', component:PostTrendComponent, canActivate: [AuthGuard]},
  {path: 'Adopt/En', component:PostAdoptComponent, canActivate: [AuthGuard]},
  {path: 'Entities/En', component:PostEntitiesComponent, canActivate: [AuthGuard]},
  {path: 'Accounts/En/:id', component:PostAccountsComponent, canActivate: [AuthGuard]},
  {path: 'Edit/En/:id', component:PostEditComponent, canActivate: [AuthGuard]},
  {path: 'ChatRoom/En', component:PostChatRoomComponent, canActivate: [AuthGuard]},
  // Create Routes //
  {path: 'CreatePosts/En', component:CreatePostComponent, canActivate: [AuthGuard]},
  {path: 'YourPosts/En', component:CreateYourPostsComponent, canActivate: [AuthGuard]},
  {path: 'YourAdoptions/En', component:CreateYourAdoptComponent, canActivate: [AuthGuard]},
  {path: 'Settings/En', component:CreateSettingsComponent, canActivate: [AuthGuard]},
  {path: 'YourAccount/En', component:CreateAccountComponent, canActivate: [AuthGuard]},
  // Error 404 Route //
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
