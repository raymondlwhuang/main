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
import { MatListModule } from '@angular/material/list';
import { APP_BASE_HREF } from '@angular/common';
import { ArtComponent } from './_components/employment/art/art.component';
import { EducationComponent } from './_components/employment/education/education.component';
import { JavascriptComponent } from './_components/library/javascript/javascript.component';
import { JqueryComponent } from './_components/library/jquery/jquery.component';
import { PortfolioComponent } from './_components/employment/portfolio/portfolio.component';
import { LoginComponent } from './_components/library/login/login.component';
import { CssComponent } from './_components/library/css/css.component';
import { RxjsComponent } from './_components/library/rxjs/rxjs.component';
import { PreShowComponent } from './_components/library/pre-show/pre-show.component';
import { DecoratorsComponent } from './_components/library/angular/decorators/decorators.component';
import { ChangeDetectionComponent } from './_components/library/angular/change-detection/change-detection.component';
import { DecoratorsModule } from './_components/library/angular/decorators/decorators.module';
import { MediaQueryFlexboxDirective } from './_directives/media-query-flexbox.directive';
import { FlexItemDirective } from './_directives/flex-item.directive';
import { FormArrayComponent } from './_components/library/angular/form-array/form-array.component';
import { SnackBarComponent } from './_components/snack-bar/snack-bar.component';
import { MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';
import { HoverItemDirective } from './_directives/hover-item.directive';
import { AngularComponent } from './_components/library/angular/angular.component';
import { AngOthersComponent } from './_components/library/angular/ang-others/ang-others.component';
import { DemoSelectorComponent } from './_helpers/demo-selector/demo-selector.component';
import { ShowCaseComponent } from './_helpers/show-case/show-case.component';
import { DomComponent } from './_components/library/javascript/dom/dom.component';
import { EscapeHtmlPipe } from './_pipes/keep-html.pipe';
import { StoreModule } from '@ngrx/store';
import { UserReducer } from './_store/reducers/user.reducer';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './_store/effects/user.effect';
import { CrudModule } from './_components/library/angular/crud/crud.component.module';
import { LibraryAssetsComponent } from './_components/library-assets/library-assets.component';
import { AssetsEntryComponent } from './_components/library-assets/assets-entry/assets-entry.component';
import { DemoReducer } from './_store/reducers/demo.reducer';
import { DemoEffects } from './_store/effects/demo.effect';
import { DemoResolver } from './_store/resolvers/demo.resolver';
import { CrudReducer } from './_store/reducers/crud.reducer';
import { CrudResolver } from './_store/resolvers/crud.resolver';
import { CrudEffects } from './_store/effects/crud.effect';
import { UserSelectComponent } from './_components/library/angular/interaction/input-output/user-select/user-select.component';
import { UserDetailComponent } from './_components/library/angular/interaction/input-output/user-detail/user-detail.component';
import { ApplicationsComponent } from './_components/library/angular/interaction/input-output/applications/applications.component';
import { BooksSelectComponent } from './_components/library/angular/interaction/using-rxjs/books-select/books-select.component';
import { BookDetailComponent } from './_components/library/angular/interaction/using-rxjs/book-detail/book-detail.component';
import { InteractionComponent } from './_components/library/angular/interaction/interaction.component';
import { HtmlComponent } from './_components/library/html/html.component';
import { ReviewExcerciseComponent } from './_components/review-excercise/review-excercise.component';
import { ReviewComponent } from './_components/review-excercise/review/review.component';
import { ExcerciseComponent } from './_components/review-excercise/excercise/excercise.component';
import { CombineComponent } from './_components/review-excercise/combine/combine.component';
import { ReviewExcerciseDirective } from './_directives/review-excercise.directive';
import { FlexboxDirective } from './_directives/flexbox.directive';
import { SqlComponent } from './_components/library/sql/sql.component';
import { JavascriptNoteComponent } from './_components/library/javascript/javascript-note/javascript-note.component';
import { SetupStepsComponent } from './_components/setup-steps.component';
import { PhpComponent } from './_components/library/php/php.component';
import { JavaComponent } from './_components/library/java/java.component';
import { ReactJsComponent } from './_components/library/react-js/react-js.component';

@NgModule({
  declarations: [
    AppComponent,
    EducationComponent,
    EmploymentComponent,
    EmploymentDetailComponent,
    ArtComponent,
    PortfolioComponent,
    JavascriptComponent,
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
    FlexboxDirective,
    ReviewExcerciseDirective,
    FlexItemDirective,
    FormArrayComponent,
    SnackBarComponent,
    HoverItemDirective,
    AngOthersComponent,
    DemoSelectorComponent,
    DomComponent,
    EscapeHtmlPipe,
    LibraryAssetsComponent,
    AssetsEntryComponent,
    UserSelectComponent,
    UserDetailComponent,
    ApplicationsComponent,
    BooksSelectComponent,
    BookDetailComponent,
    InteractionComponent,
    HtmlComponent,
    ReviewExcerciseComponent,
    ReviewComponent,
    ExcerciseComponent,
    CombineComponent,
    SqlComponent,
    JavascriptNoteComponent,
    SetupStepsComponent,
    PhpComponent,
    JavaComponent,
    ReactJsComponent
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
    MatListModule,
    DecoratorsModule,
    MatSnackBarModule,
    CrudModule,
    StoreModule.forRoot({users : UserReducer,cruds: CrudReducer,demos: DemoReducer}),
    EffectsModule.forRoot([UserEffects,CrudEffects,DemoEffects])
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: APP_BASE_HREF, useValue: '' },
    { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 2500 }},
    CrudResolver,
    DemoResolver,
    // provider used to create fake backend
    fakeBackendProvider    
  ],
  bootstrap: [AppComponent],
  entryComponents: [SnackBarComponent],
})
export class AppModule { }
