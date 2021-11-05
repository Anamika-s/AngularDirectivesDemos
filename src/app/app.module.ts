import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DirectiveDemoComponent } from './directive-demo/directive-demo.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { AttributeDemoComponent } from './attribute-demo/attribute-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    DirectiveDemoComponent,
    NgForComponent,
    AttributeDemoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
