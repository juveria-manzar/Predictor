import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
    {path: 'details/:city', component: DetailsComponent},
    // {path: 'add', component: AddComponent},
    // {path: 'login', component: LoginComponent},
    // {path: 'signup', component: SignupComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
