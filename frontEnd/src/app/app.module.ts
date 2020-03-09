import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { UploadMediaComponent } from './components/upload-media/upload-media.component';
import { MediadetailComponent } from './components/mediadetail/mediadetail.component';
import { AccountDetailsComponent } from './components/account-details/account-details.component';
import { BlockUserComponent } from './components/block-user/block-user.component';
import { NewsFeedComponent } from './components/news-feed/news-feed.component';
import { SearchComponent } from './components/search/search.component';
//firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireStorageModule } from 'angularfire2/storage';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegisterComponent,
    LoginComponent,
    UploadMediaComponent,
    MediadetailComponent,
    AccountDetailsComponent,
    BlockUserComponent,
    NewsFeedComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyB8_OaUOooVu-o7Jrnk4oNskqCnWXpoIeA",
      authDomain: "pixogram-36f98.firebaseapp.com",
      storageBucket: "pixogram-36f98.appspot.com",
      projectId: "pixogram-36f98",
    }),
    AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
