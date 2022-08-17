import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  datePicker = new FormControl(null, [Validators.required]);

  getErrors(formControl: FormControl): string[] {
    const errors = Object.keys(formControl.errors ?? {});
    console.log(errors);
    return errors;
  }

  getValue(formControl: FormControl): string {
    const value = formControl.value;
    return moment(value).format("YYYY-MM-DD");
  }
}
