import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.css']
})
export class HeroSectionComponent implements OnInit {

  candidatform = new FormGroup({
    lastname: new FormControl('', Validators.required),
    firstname: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    number: new FormControl('', Validators.required),
    campus: new FormControl('', Validators.required),
    motivation: new FormControl('', Validators.required),
  });


  constructor(private _apiservice: ApiService, private modalService: BsModalService, private _snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  modalRef: BsModalRef;

  openModalWithClass(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(
      template,
      Object.assign({}, { class: 'gray modal-lg' })
    );
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 4000,
      panelClass: ['blue-snackbar']
    });
  }

  //candidater service ...

  onSubmit() {
    const newCandidat = {
      lastName: this.candidatform.controls['lastname'].value,
      firstName: this.candidatform.controls['firstname'].value,
      address: this.candidatform.controls['address'].value,
      email: this.candidatform.controls['email'].value,
      number: this.candidatform.controls['number'].value,
      campus: this.candidatform.controls['campus'].value,
      motivation: this.candidatform.controls['motivation'].value
    };
    if (!this.candidatform.controls['motivation'].invalid && !this.candidatform.controls['campus'].invalid && !this.candidatform.controls['number'].invalid && !this.candidatform.controls['address'].invalid && !this.candidatform.controls['firstname'].invalid && !this.candidatform.controls['lastname'].invalid) {
      this._apiservice.addSubscribers(newCandidat).subscribe(
        noError => {
          console.log("test test");
          alert("Merci de votre candidature " + this.candidatform.controls['lastname'].value + ' ' + this.candidatform.controls['firstname'].value);
          this.modalRef.hide();
        },
        err => {
          if (err.error.code == 11000) {
            alert("vous avez deja candidater " + this.candidatform.controls['lastname'].value + ' ' + this.candidatform.controls['firstname'].value);
            this.modalRef.hide();
          }
          console.log(err)
        })
    }
  }

}
