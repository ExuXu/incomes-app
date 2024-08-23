import { Routes } from "@angular/router";
import { StatisticsComponent } from "../incomes/components/statistics/statistics.component";
import { IncomesComponent } from "../incomes/components/incomes/incomes.component";
import { DetailComponent } from "../incomes/components/detail/detail.component";

export const dashboardRoutes: Routes = [
  { path: 'statistics', component: StatisticsComponent },
  { path: 'incomes', component: IncomesComponent },
  { path: 'details', component: DetailComponent },
  { path: '**', redirectTo: 'statistics' },
]
