import { Component } from '@angular/core';
import { dummyDataObs$ } from 'src/app/types';

@Component({
  selector: 'app-vacancies',
  templateUrl: './vacancies.component.html',
  styleUrls: ['./vacancies.component.scss']
})
export class VacanciesComponent {
  dummyDataObs$ = dummyDataObs$;
}
