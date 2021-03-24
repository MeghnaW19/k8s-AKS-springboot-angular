import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SaveuserComponent } from './saveuser/saveuser.component';
import { UsersComponent } from './users/users.component';
import { UpdateusersComponent } from './updateusers/updateusers.component';


const routes: Routes = [
  {path: 'saveuser', component: SaveuserComponent },
  {path: 'users', component: UsersComponent},
  {path: 'updateusers', component: UpdateusersComponent},
  {path: '', redirectTo: 'saveuser', pathMatch: 'full'}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
