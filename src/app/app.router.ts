import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {

} from './components/_';

const routes: Routes = [
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRouter { }
