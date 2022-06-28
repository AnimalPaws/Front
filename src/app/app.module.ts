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
import { HomeComponent } from './components/English/HomeScreen/home/home.component';
import { AboutComponent } from './components/English/HomeScreen/about/about.component';
import { ErrorComponent } from './components/404 Error/error/error.component';
import { PreviewComponent } from './components/English/HomeScreen/preview/preview.component';
import { SignUpComponent } from './components/English/Login/sign-up/sign-up.component';
import { SignInComponent } from './components/English/Login/sign-in/sign-in.component';
import { FirstPatchComponent } from './components/English/Updates/first-patch/first-patch.component';
import { SecondPatchComponent } from './components/English/Updates/second-patch/second-patch.component';
import { PatchNotesComponent } from './components/English/Updates/patch-notes/patch-notes.component';
import { FunctionsComponent } from './components/English/HomeScreen/functions/functions.component';
import { PostHomeComponent } from './components/English/Posts/post-home/post-home.component';
import { PostAdoptComponent } from './components/English/Posts/post-adopt/post-adopt.component';
import { PostComponent } from './components/English/HomeScreen/functions/post/post.component';
import { ChatComponent } from './components/English/HomeScreen/functions/chat/chat.component';
import { AccountComponent } from './components/English/HomeScreen/functions/account/account.component';
import { PostProfileComponent } from './components/English/Posts/post-profile/post-profile.component';
import { AdoptComponent } from './components/English/HomeScreen/functions/adopt/adopt.component';
import { EntitiesComponent } from './components/English/HomeScreen/functions/entities/entities.component';
import { HelpComponent } from './components/English/HomeScreen/functions/help/help.component';
import { SignEntitiesComponent } from './components/English/Login/sign-entities/sign-entities.component';
import { LoginOptionsComponent } from './components/English/Login/login-options/login-options.component';
import { LoginEntitiesComponent } from './components/English/Login/login-entities/login-entities.component';
import { AuthRoleComponent } from './components/English/Login/auth-role/auth-role.component';
import { PostTrendComponent } from './components/English/Posts/post-trend/post-trend.component';
import { PostAccountsComponent } from './components/English/Posts/post-accounts/post-accounts.component';
import { PostEntitiesComponent } from './components/English/Posts/post-entities/post-entities.component';
import { CreatePostComponent } from './components/English/Create/create-post/create-post.component';
import { CreateYourPostsComponent } from './components/English/Create/create-your-posts/create-your-posts.component';
import { CreateYourAdoptComponent } from './components/English/Create/create-your-adopt/create-your-adopt.component';
import { CreateSettingsComponent } from './components/English/Create/create-settings/create-settings.component';
import { CreateAccountComponent } from './components/English/Create/create-account/create-account.component';
import { PostEditComponent } from './components/English/Posts/post-edit/post-edit.component';
import { BoostedInfoComponent } from './components/English/Boosted/boosted-info/boosted-info.component';
import { BoostedFormComponent } from './components/English/Boosted/boosted-form/boosted-form.component';
import { ContactUsComponent } from './components/English/HomeScreen/contact-us/contact-us.component';
import { HomeEsComponent } from './components/Spanish/HomeScreen/home-es/home-es.component';
import { AboutEsComponent } from './components/Spanish/HomeScreen/about-es/about-es.component';
/*import { AuthInterceptorProvider, JwtInterceptorInterceptor } from './interceptors/jwt-interceptor.interceptor';*/
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
    HomeEsComponent,
    AboutEsComponent,
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
    JwtHelperService,
    /*JwtInterceptorInterceptor*/
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
