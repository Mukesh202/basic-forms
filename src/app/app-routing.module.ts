import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormarrayComponent } from './formarray/formarray.component';
import { FormbuilderComponent } from './formbuilder/formbuilder.component';
import { MoshformComponent } from './moshform/moshform.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { TdformComponent } from './tdform/tdform.component';

const routes: Routes = [
  // {path:"Reactiveform",component:ReactiveformComponent},
   {path:"formarray",component:FormarrayComponent},
  // {path:"formbuilder",component:FormbuilderComponent},
  // {path:"moshform",component:MoshformComponent},
  {path:"tdform",component:TdformComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
