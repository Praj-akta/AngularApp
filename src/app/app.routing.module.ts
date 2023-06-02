import { NgModule } from "@angular/core";
import { CartComponent } from "./cart/cart.component";
import { RouterModule, Routes } from "@angular/router";
import { BooksComponent } from "./books/books.component";
import { LoginComponent } from "./auth/login/login.component";
import { FavoritesComponent } from "./favorites/favorites.component";
import { RegisterComponent } from "./auth/register/register.component";

const routes:Routes = [
  {path: '', component: BooksComponent},
  {path: 'cart', component: CartComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'favorites', component: FavoritesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
