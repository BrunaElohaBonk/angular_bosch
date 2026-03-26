import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundPageComponent } from './fatures/not-found-page/not-found-page.component';
import { LoginPageComponent } from './fatures/main-page/login-page/login-page.component';
import { MainPageComponent } from './fatures/main-page/main-page.component';
import { CadastroPageComponent } from './fatures/main-page/cadastro-page/cadastro-page.component';

const routes: Routes = [
  {path: "", component:MainPageComponent},
  {path: "login", component:LoginPageComponent},
  {path: "cadastro", component:CadastroPageComponent},
  {path: "**", component:NotFoundPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
