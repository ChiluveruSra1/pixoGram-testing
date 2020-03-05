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
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
