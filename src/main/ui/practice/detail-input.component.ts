import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  moduleId: module.id,
  selector: 'detail-input',
  templateUrl: 'detail-input.component.html',
})
export class DetailInputComponent implements OnInit {
    public form: FormGroup;
    public submitted: boolean;
    public events: any[] = [];

    firstname = new FormControl("",Validators.required);
    lastname = new FormControl("");
    address1 = new FormControl("");
    address2 = new FormControl("");

    constructor(private _fb: FormBuilder) {
      this.form = this._fb.group({
          "firstname" : this.firstname,
          "lastname" : this.lastname,
          "address1" : this.address1,
          "address2" : this.address2
      });
    }

    ngOnInit() {



        // subscribe to form changes
        this.subcribeToFormChanges();


    }

    subcribeToFormChanges() {
        const myFormStatusChanges$ = this.form.statusChanges;
        const myFormValueChanges$ = this.form.valueChanges;

        myFormStatusChanges$.subscribe(x => this.events.push({ event: 'STATUS_CHANGED', object: x }));
        myFormValueChanges$.subscribe(x => this.events.push({ event: 'VALUE_CHANGED', object: x }));
    }

}
