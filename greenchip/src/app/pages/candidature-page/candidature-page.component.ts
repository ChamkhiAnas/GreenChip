import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-candidature-page',
  templateUrl: './candidature-page.component.html',
  styleUrls: ['./candidature-page.component.css']
})
export class CandidaturePageComponent implements OnInit {

  selectedCity: FormGroup;
  cities: Array<any>
  courses: Array<any>
  coursetest: Array<any>

  constructor(private formBuilder: FormBuilder) {
    this.cities = [
      { id: 1, name: "Oujda" }, { id: 2, name: "Jerrada" }, { id: 3, name: "Berkane" }, { id: 4, name: "Autre" }
    ];
    this.courses = ["Developpeur Web et Mobile", "Data Analyste", "Webmaster"];
  }

  ngOnInit() {
    this.initSelectForm();
    this.onChanges();
  }

  initSelectForm() {
    this.selectedCity = this.formBuilder.group({
      city: ['', Validators.required],
      course: ['', Validators.required]
    });

  }

  nagasa;

  onChanges() {
    this.selectedCity.get('city').valueChanges
      .subscribe(chosen => {

        if (chosen == 1) {
          this.selectedCity.get('course').reset();
          return this.nagasa = 1;
        }
        else if (chosen == 2) {
          this.selectedCity.get('course').reset();
          return this.nagasa = 2;
        }
        else if (chosen == 3) {
          this.selectedCity.get('course').reset();
          return this.nagasa = 3;
        }
        else {
          this.selectedCity.get('course').reset();
          return this.nagasa = 4;

        }

      })
  }

}
