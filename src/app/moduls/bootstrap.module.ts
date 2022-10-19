import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import {ngbModul} from '@ng-bootstrap/ng'

const modules: any = [

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...modules
  ],
  exports: modules,
})
export class BootstrapngModule { }
