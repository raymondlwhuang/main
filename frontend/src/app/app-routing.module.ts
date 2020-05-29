import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmploymentComponent } from './_components/employment/employment.component';
import { AuthGuard } from './_helpers/auth.guard';
import { EducationComponent } from './_components/employment/education/education.component';
import { JavascriptComponent } from './_components/library/javascript/javascript.component';
import { JqueryComponent } from './_components/library/jquery/jquery.component';
import { PortfolioComponent } from './_components/employment/portfolio/portfolio.component';
import { PreShowComponent } from './_components/library/pre-show/pre-show.component';
import { LoginComponent } from './_components/library/login/login.component';
import { AngularComponent } from './_components/library/angular/angular.component';
import { RxjsComponent } from './_components/library/rxjs/rxjs.component';
import { CrudResolver } from './_store/resolvers/crud.resolver';
import { LibraryAssetsComponent } from './_components/library-assets/library-assets.component';
import { DemoResolver } from './_store/resolvers/demo.resolver';
import { CssComponent } from './_components/library/css/css.component';


const routes: Routes = [
  { path: '', component: EmploymentComponent},
  { path: 'home', component: EmploymentComponent},
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'others', component: EducationComponent },
  { path: 'Private', component: PreShowComponent,resolve: {demos:DemoResolver}, canActivate: [AuthGuard] },
  { path: 'library/javaScript',component:  JavascriptComponent },
  { path: 'library/jQuery', component: JqueryComponent },
  { path: 'library/Angular', component: AngularComponent,resolve: {cruds:CrudResolver}},
  { path: 'library/Rxjs', component: RxjsComponent },
  { path: 'library/css', component: CssComponent},
  { path: 'assets', component: LibraryAssetsComponent,resolve: {demos:DemoResolver} },
  { path: 'login', component: LoginComponent },
    // otherwise redirect to home
  { path: '**', redirectTo: '' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
