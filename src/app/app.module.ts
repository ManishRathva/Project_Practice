import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { AttrDirectiveComponent } from './attr-directive/attr-directive.component';
import { StrctrlDirectiveComponent } from './strctrl-directive/strctrl-directive.component';
import { PipesComponent } from './pipes/pipes.component';
import { HeadComponent } from './head/head.component';
import { ProfileComponent } from './profile/profile.component';
import { ChildComponent } from './child/child.component';
import { HomepageComponent } from './homepage/homepage.component';
import { TwowaydataComponent } from './twowaydata/twowaydata.component';
import { Twowaydata2Component } from './twowaydata2/twowaydata2.component';
import { ProductComponent } from './product/product.component';
import { ContainComponent } from './contain/contain.component';
import { ListComponent } from './list/list.component';
import { WrapperComponent } from './wrapper/wrapper.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    AttrDirectiveComponent,
    StrctrlDirectiveComponent,
    PipesComponent,
    HeadComponent,
    ProfileComponent,
    ChildComponent,
    HomepageComponent,
    TwowaydataComponent,
    Twowaydata2Component,
    ProductComponent,
    ContainComponent,
    ListComponent,
    WrapperComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
