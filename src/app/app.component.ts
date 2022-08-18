import { Component } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors, Validators } from '@angular/forms';
import moment from 'moment';

const dateGreaterThanToday = (control: AbstractControl): ValidationErrors | null => {
  const date: moment.Moment = moment(control.value);
  return !date.isValid() || date.isSameOrBefore(moment(new Date()), 'day')
    ? null
    : {dateGreaterThanToday: true};
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  datePicker = new FormControl(null, [Validators.required, dateGreaterThanToday]);
}
