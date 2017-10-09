import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LuxuryComponent } from './luxury.component';

const routes: Routes = [
  { path: '', component: LuxuryComponent }  //root module에서 path: 'luxury'지정했고, 여기서부터의 최상위 path: ''를 의미.
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    LuxuryComponent
  ]
})

//root module에서 지연로딩을 위해 file path만(string) 연결해두었으므로, export default로 지정해야한다.
export default class LuxuryModule {
}