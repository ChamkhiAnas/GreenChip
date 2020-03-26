import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-contact-section',
  templateUrl: './contact-section.component.html',
  styleUrls: ['./contact-section.component.css']
})
export class ContactSectionComponent implements OnInit {

  // mail sender ...
  mailform = new FormGroup({
    email: new FormControl('', Validators.required),
    message: new FormControl('', Validators.required)
  });

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 4000,
      panelClass: ['blue-snackbar']
    });
  }


  constructor(private _contactservice: ContactService, private _snackBar: MatSnackBar) { }

  ngOnInit() {
  }


  // mail service ... 

  onSend() {
    const newCandidat = {
      email: this.mailform.controls['email'].value,
      message: this.mailform.controls['message'].value,
    }

    if (!this.mailform.controls['email'].invalid && !this.mailform.controls['message'].invalid) {
      this._contactservice.sendEmail(newCandidat).subscribe(
        noError => {
          this.openSnackBar("Votre message a été envoyé", "Merci !!");
          console.log("Votre message a été envoyé");
        },
        err => {
          this.openSnackBar("Votre message a été envoyé", "Merci !!");
        }
      )
    }

    const emptycase = document.querySelectorAll('input');
    emptycase[0].value = "";
    emptycase[1].value = "";

  }

}
