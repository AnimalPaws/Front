// Angular Modules //
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// External Dependencies //
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
export function HttpLoaderFactory(http: HttpClient){
  return new  TranslateHttpLoader(http, './assets/lang/', '.json')
}
// Services //
import { LoadscriptsService } from './services/InterfaceServices/loadscripts.service';
// Components //
import { AppComponent } from './app.component';
import { HomeComponent } from './components/HomeScreen/home/home.component';
import { AboutComponent } from './components/HomeScreen/about/about.component';
import { ErrorComponent } from './components/error/error.component';
import { PreviewComponent } from './components/HomeScreen/preview/preview.component';
import { SignUpComponent } from './components/Login/sign-up/sign-up.component';
import { SignInComponent } from './components/Login/sign-in/sign-in.component';
import { FirstPatchComponent } from './components/Updates/first-patch/first-patch.component';
import { SecondPatchComponent } from './components/Updates/second-patch/second-patch.component';
import { PatchNotesComponent } from './components/Updates/patch-notes/patch-notes.component';
import { FunctionsComponent } from './components/HomeScreen/functions/functions.component';
import { PostHomeComponent } from './components/Posts/post-home/post-home.component';
import { PostAdoptComponent } from './components/Posts/post-adopt/post-adopt.component';
import { PostComponent } from './components/HomeScreen/functions/post/post.component';
import { ChatComponent } from './components/HomeScreen/functions/chat/chat.component';
import { AccountComponent } from './components/HomeScreen/functions/account/account.component';
import { SignUserComponent } from './components/Login/sign-up/sign-user/sign-user.component';
import { PostProfileComponent } from './components/Posts/post-profile/post-profile.component';
import { AdoptComponent } from './components/HomeScreen/functions/adopt/adopt.component';
import { EntitiesComponent } from './components/HomeScreen/functions/entities/entities.component';
import { HelpComponent } from './components/HomeScreen/functions/help/help.component';
import { SignEntitiesComponent } from './components/Login/sign-entities/sign-entities.component';
import { LoginOptionsComponent } from './components/Login/login-options/login-options.component';
import { LoginEntitiesComponent } from './components/Login/login-entities/login-entities.component';
import { AuthRoleComponent } from './components/Login/auth-role/auth-role.component';
import { PostTrendComponent } from './components/Posts/post-trend/post-trend.component';
import { PostAccountsComponent } from './components/Posts/post-accounts/post-accounts.component';
import { PostEntitiesComponent } from './components/Posts/post-entities/post-entities.component';
import { CreatePostComponent } from './components/Create/create-post/create-post.component';
import { CreateYourPostsComponent } from './components/Create/create-your-posts/create-your-posts.component';
import { CreateYourAdoptComponent } from './components/Create/create-your-adopt/create-your-adopt.component';
import { CreateSettingsComponent } from './components/Create/create-settings/create-settings.component';
import { CreateAccountComponent } from './components/Create/create-account/create-account.component';
import { PostEditComponent } from './components/Posts/post-edit/post-edit.component';
import { BoostedInfoComponent } from './components/Boosted/boosted-info/boosted-info.component';
import { BoostedFormComponent } from './components/Boosted/boosted-form/boosted-form.component';
import { ContactUsComponent } from './components/HomeScreen/contact-us/contact-us.component';
import { PrivacyComponent } from './components/Legal/privacy/privacy.component';
import { TermsComponent } from './components/Legal/terms/terms.component';

@NgModule({
  declarations: [
    // Components //
    AppComponent,
    HomeComponent,
    AboutComponent,
    ErrorComponent,
    PreviewComponent,
    SignUpComponent,
    SignInComponent,
    FirstPatchComponent,
    SecondPatchComponent,
    PatchNotesComponent,
    FunctionsComponent,
    PostHomeComponent,
    PostAdoptComponent,
    PostComponent,
    ChatComponent,
    AccountComponent,
    SignUserComponent,
    PostProfileComponent,
    AdoptComponent,
    EntitiesComponent,
    HelpComponent,
    SignEntitiesComponent,
    LoginOptionsComponent,
    LoginEntitiesComponent,
    AuthRoleComponent,
    PostTrendComponent,
    PostAccountsComponent,
    PostEntitiesComponent,
    CreatePostComponent,
    CreateYourPostsComponent,
    CreateYourAdoptComponent,
    CreateSettingsComponent,
    CreateAccountComponent,
    PostEditComponent,
    BoostedInfoComponent,
    BoostedFormComponent,
    ContactUsComponent,
    PrivacyComponent,
    TermsComponent
  ],
  imports: [
    // Angular Imports //
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    // Dependencies Imports //
        HttpClientModule,
        FontAwesomeModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        })
  ],
  providers: [
    // Dependencies Providers //
    {provide: JWT_OPTIONS, useValue: JWT_OPTIONS},
    LoadscriptsService,
    JwtHelperService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
