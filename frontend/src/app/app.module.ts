import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmploymentComponent } from './_components/employment/employment.component';
import { EmploymentDetailComponent } from './_components/employment/employment-detail/employment-detail.component';
import { DeferLoadModule } from '@trademe/ng-defer-load';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './_material/material.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './_helpers/jwt.interceptor';
import { ErrorInterceptor } from './_helpers/error.interceptor';
import { fakeBackendProvider } from './_helpers/fake-backend';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MainNavComponent } from './_components/main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { environment } from '../environments/environment';
import { APP_BASE_HREF } from '@angular/common';
import { ArtComponent } from './_components/employment/art/art.component';
import { EducationComponent } from './_components/employment/education/education.component';
import { JavascriptComponent } from './_components/skills-demo/javascript/javascript.component';
import { JqueryComponent } from './_components/skills-demo/jquery/jquery.component';
import { PortfolioComponent } from './_components/employment/portfolio/portfolio.component';
import { LoginComponent } from './_components/skills-demo/login/login.component';
import { CssComponent } from './_components/skills-demo/css/css.component';
import { RxjsComponent } from './_components/skills-demo/rxjs/rxjs.component';
import { PreShowComponent } from './_components/skills-demo/pre-show/pre-show.component';
import { FrequentUsedjsComponent } from './_components/skills-demo/javascript/frequent-usedjs/frequent-usedjs.component';
import { FunctionComponent } from './_components/skills-demo/javascript/function/function.component';
import { DecoratorsComponent } from './_components/skills-demo/Angular/decorators/decorators.component';
import { ChangeDetectionComponent } from './_components/skills-demo/Angular/change-detection/change-detection.component';
import { DecoratorsModule } from './_components/skills-demo/Angular/decorators/decorators.module';
import { MediaQueryFlexboxDirective } from './_directives/media-query-flexbox.directive';
import { FlexItemDirective } from './_directives/flex-item.directive';
import { FormArrayComponent } from './_components/skills-demo/Angular/form-array/form-array.component';
import { SnackBarComponent } from './_components/snack-bar/snack-bar.component';
import { MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';
import { HoverItemDirective } from './_directives/hover-item.directive';
import { AngularComponent } from './_components/skills-demo/Angular/angular.component';
import { AngOthersComponent } from './_components/skills-demo/Angular/ang-others/ang-others.component';
import { DemoSelectorComponent } from './_helpers/demo-selector/demo-selector.component';
import { ShowCaseComponent } from './_helpers/show-case/show-case.component';
import { DomComponent } from './_components/skills-demo/javascript/dom/dom.component';
import { EscapeHtmlPipe } from './_pipes/keep-html.pipe';
import { StoreModule } from '@ngrx/store';
import { UserReducer } from './_store/reducers/user.reducer';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './_store/effects/user.effect';
import { CourseReducer } from './_store/reducers/course.reducer';
import { CourseEffects } from './_store/effects/course.effect';
import { CourseResolver } from './_store/resolvers/course.resolver';
import { StateManagementModule } from './_components/skills-demo/Angular/state-management/state-management.module';

@NgModule({
  declarations: [
    AppComponent,
    EducationComponent,
    EmploymentComponent,
    EmploymentDetailComponent,
    ArtComponent,
    PortfolioComponent,
    JavascriptComponent,
    FrequentUsedjsComponent,
    FunctionComponent,
    LoginComponent,
    CssComponent,
    JqueryComponent,
    MainNavComponent,
    RxjsComponent,
    PreShowComponent,
    DecoratorsComponent,
    AngularComponent,
    ChangeDetectionComponent,
    ShowCaseComponent,
    MediaQueryFlexboxDirective,
    FlexItemDirective,
    FormArrayComponent,
    SnackBarComponent,
    HoverItemDirective,
    AngOthersComponent,
    DemoSelectorComponent,
    DomComponent,
    EscapeHtmlPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DeferLoadModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    DecoratorsModule,
    MatSnackBarModule,
    StateManagementModule,
    StateManagementModule,
    StoreModule.forRoot({users : UserReducer,courses: CourseReducer}),
    EffectsModule.forRoot([UserEffects,CourseEffects])
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: APP_BASE_HREF, useValue: '' },
    { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 2500 }},
    CourseResolver,
    // provider used to create fake backend
    fakeBackendProvider    
  ],
  bootstrap: [AppComponent],
  entryComponents: [SnackBarComponent],
})
export class AppModule { }
