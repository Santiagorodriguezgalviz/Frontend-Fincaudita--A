import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { RoleComponent } from './pages/security/role/role.component';
import { UserComponent } from './pages/security/user/user.component';
import { ModuloComponent } from './pages/security/modulo/modulo.component';
import { ViewComponent } from './pages/security/view/view.component';
import { PersonComponent } from './pages/security/person/person.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { AssessmentCriteriaComponent } from './pages/parameter/assessment-criteria/assessment-criteria.component';
import { CityComponent } from './pages/parameter/city/city.component';
import { CountryComponent } from './pages/parameter/country/country.component';
import { CropComponent } from './pages/parameter/crop/crop.component';
import { DepartamentComponent } from './pages/parameter/departament/departament.component';
import { SuppliesComponent } from './pages/parameter/supplies/supplies.component';
import { ChecklistComponent } from './pages/operational/checklist/checklist.component';
import { EvidenceComponent } from './pages/operational/evidence/evidence.component';
import { FarmComponent } from './pages/operational/farm/farm.component';
import { LotComponent } from './pages/operational/lot/lot.component';
import { QualificationComponent } from './pages/operational/qualification/qualification.component';
import { ReviewTechnicalComponent } from './pages/operational/review-technical/review-technical.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { authGuard } from './guard/auth.guard';
import { RoleviewComponent } from './pages/security/roleview/roleview.component';
import { ForgotYourPasswordComponent } from './pages/forgot-your-password/forgot-your-password.component';
import { Component } from '@angular/core';
import { CreatAccountComponent } from './pages/creat-account/creat-account.component';
import { TreatmentsuppliesComponent } from './pages/parameter/treatmentsupplies/treatmentsupplies.component';
import { NotificationsComponent } from './pages/notifications/notifications.component';
import { UserprofileComponent } from './pages/userprofile/userprofile.component';
import { TreatmentComponent } from './pages/operational/treatment/treatment.component';
import { LotTreatmentComponent } from './pages/operational/lot-treatment/lot-treatment.component';


export const routes: Routes = [
    {
        path: '',
        redirectTo: '/login',  
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'forgot-your-password',
        component: ForgotYourPasswordComponent,
    },
    {
        path: 'creat-account',
        component: CreatAccountComponent,
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [authGuard],
        children: [
            { path: 'home', component: HomeComponent, },
            { path: 'menu', component: MenuComponent, },
            { path: 'role', component: RoleComponent, },
            { path: 'roleview', component: RoleviewComponent, },
            { path: 'user', component: UserComponent, },
            { path: 'modulo', component: ModuloComponent, },
            { path: 'view', component: ViewComponent, },
            { path: 'person', component: PersonComponent, },
            { path: 'calendar', component: CalendarComponent, },
            { path: 'assesment-criteria', component: AssessmentCriteriaComponent, },
            { path: 'city', component: CityComponent, },
            { path: 'country', component: CountryComponent, },
            { path: 'crop', component: CropComponent, },
            { path: 'departament', component: DepartamentComponent, },
            { path: 'treatmentsupplies', component: TreatmentsuppliesComponent },
            { path: 'supplies', component: SuppliesComponent, },
            { path: 'lot-treatment', component: LotTreatmentComponent, },
            { path: 'treatment', component: TreatmentComponent, },
            { path: 'checklist', component: ChecklistComponent, },
            { path: 'evidence', component: EvidenceComponent, },
            { path: 'farm', component: FarmComponent, },
            { path: 'lot', component: LotComponent, },
            { path: 'qualification', component: QualificationComponent, },
            { path: 'review-technical', component: ReviewTechnicalComponent, },
            { path: 'forgot-your-password', component: ForgotYourPasswordComponent, },  
            { path: 'creat-account', component: CreatAccountComponent, },
            { path: 'notifications', component: NotificationsComponent, },
            { path: 'userprofile', component: UserprofileComponent, }

        ]
    },
    {
        path: '**',
        redirectTo: '/login'
    }
];
