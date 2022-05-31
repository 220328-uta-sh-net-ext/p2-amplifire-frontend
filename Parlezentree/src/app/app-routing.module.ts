import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomePageComponent } from "./home-page/home-page.component";
import { RouterModule } from "@angular/router";
import { RegisterComponent } from "./register/register.component";
import { LoginComponent } from "./login/login.component";
import { IngredientsComponent } from "./ingredients/ingredients.component";
import { SearchRecipeComponent } from "./search-recipe/search-recipe.component";
import { JokeComponent } from "./joke/joke.component";
import { ProfileComponent } from "./profile/profile.component";
import { NutrientsComponent } from "./nutrients/nutrients.component";

const routes = [
    {path: '', redirectTo : '/login', pathMatch:'full'},
    {path: 'home', component: HomePageComponent},
    {path : 'register', component: RegisterComponent},
    {path: 'login', component: LoginComponent},
    {path: 'ingredients', component: IngredientsComponent},
    {path: 'search-recipe', component: SearchRecipeComponent},
    {path: 'joke', component: JokeComponent},
    {path: 'profile', component: ProfileComponent},
    {path: 'nutrients', component: NutrientsComponent}
]

//Start Building NgModule to create routing
@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})

export class AppRoutingModule{}