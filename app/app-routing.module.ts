import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CatalogComponent } from './catalog/catalog.component';
import { AddGameComponent } from './add-game/add-game.component';

const routes: Routes = [
  { path: '',   redirectTo: 'catalog', pathMatch: 'full' },
  { path: 'logout',   redirectTo: 'login', pathMatch: 'full' },
  { path:'login', component:LoginComponent},
  { path:'register', component:RegisterComponent},
  { path:'catalog', component:CatalogComponent},
  { path:'catalog', component:CatalogComponent},
  { path:'add',component:AddGameComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
