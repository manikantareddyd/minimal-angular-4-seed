import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
    AppComponent
} from './components/_';

// import { AppRouter } from './app.router';

import 'hammerjs';


@NgModule({
    imports: [
        BrowserModule,
        // AppRouter,
        HttpModule,
        BrowserAnimationsModule,
    ],
    declarations: [
        AppComponent
    ],

    bootstrap: [AppComponent]
})
export class AppModule { }
