import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './fatures/main-page/login-page/login-page.component';
import { NotFoundPageComponent } from './fatures/not-found-page/not-found-page.component';
import { HeaderComponent } from './shared/header/header.component';
import { MainPageComponent } from './fatures/main-page/main-page.component';
import { ModalComponent } from './fatures/main-page/modal/modal.component';
import { CadastroPageComponent } from './fatures/main-page/cadastro-page/cadastro-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    NotFoundPageComponent,
    HeaderComponent,
    MainPageComponent,
    ModalComponent,
    CadastroPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
