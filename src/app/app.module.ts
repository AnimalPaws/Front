import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
export function HttpLoaderFactory(http: HttpClient){
  return new  TranslateHttpLoader(http, './assets/lang/', '.json')
}
import { LoadscriptsService } from './services/loadscripts.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from '../app/HomeScreen/home/home.component';
import { AboutComponent } from '../app/HomeScreen/about/about.component';
import { ErrorComponent } from './error/error.component';
import { PreviewComponent } from './HomeScreen/preview/preview.component';
import { SignUpComponent } from './Login/sign-up/sign-up.component';
import { SignInComponent } from './Login/sign-in/sign-in.component';
import { FirstPatchComponent } from './Updates/first-patch/first-patch.component';
import { SecondPatchComponent } from './Updates/second-patch/second-patch.component';
import { PatchNotesComponent } from './Updates/patch-notes/patch-notes.component';
import { FunctionsComponent } from './HomeScreen/functions/functions.component';
import { PostHomeComponent } from './Posts/post-home/post-home.component';
import { PostAdoptComponent } from './Posts/post-adopt/post-adopt.component';
import { PostComponent } from './HomeScreen/functions/post/post.component';
import { ChatComponent } from './HomeScreen/functions/chat/chat.component';
import { AccountComponent } from './HomeScreen/functions/account/account.component';
import { SignUserComponent } from './Login/sign-up/sign-user/sign-user.component';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { PostProfileComponent } from './Posts/post-profile/post-profile.component';

@NgModule({
  declarations: [
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
    PostProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
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
    {provide: JWT_OPTIONS, useValue: JWT_OPTIONS},
    LoadscriptsService,
    JwtHelperService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
