import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmploymentComponent } from './_components/employment/employment.component';
import { AuthGuard } from './_helpers/auth.guard';
import { EducationComponent } from './_components/employment/education/education.component';
import { JavascriptComponent } from './_components/skills-demo/javascript/javascript.component';
import { JqueryComponent } from './_components/skills-demo/jquery/jquery.component';
import { PortfolioComponent } from './_components/employment/portfolio/portfolio.component';
import { PreShowComponent } from './_components/skills-demo/pre-show/pre-show.component';
import { LoginComponent } from './_components/skills-demo/login/login.component';
import { AngularComponent } from './_components/skills-demo/Angular/angular.component';
import { RxjsComponent } from './_components/skills-demo/rxjs/rxjs.component';
import { CourseResolver } from './_store/resolvers/course.resolver';


const routes: Routes = [
  { path: '', component: EmploymentComponent},
  { path: 'home', component: EmploymentComponent},
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'others', component: EducationComponent },
  { path: 'Private', component: PreShowComponent, canActivate: [AuthGuard] },
  { path: 'library/javaScript',component:  JavascriptComponent },
  { path: 'library/jQuery', component: JqueryComponent },
  { path: 'library/Angular', component: AngularComponent,resolve: {courses:CourseResolver}},
  { path: 'library/Rxjs', component: RxjsComponent },
  { path: 'login', component: LoginComponent },
    // otherwise redirect to home
  { path: '**', redirectTo: '' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
