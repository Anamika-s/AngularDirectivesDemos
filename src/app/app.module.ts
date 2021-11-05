import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DirectiveDemoComponent } from './directive-demo/directive-demo.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { AttributeDemoComponent } from './attribute-demo/attribute-demo.component';
import { MainCompComponent } from './main-comp/main-comp.component';
import { ChildCompComponent } from './child-comp/child-comp.component';
import { SearchMainCompComponent } from './search-main-comp/search-main-comp.component';
import { SearchCompComponent } from './search-comp/search-comp.component';
import { PipedemoComponent } from './pipedemo/pipedemo.component';
import { EmpComponent } from './emp/emp.component';
import { GenderPipe } from './gender.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DirectiveDemoComponent,
    NgForComponent,
    AttributeDemoComponent,
    MainCompComponent,
    ChildCompComponent,
    SearchMainCompComponent,
    SearchCompComponent,
    PipedemoComponent,
    EmpComponent,
    GenderPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
