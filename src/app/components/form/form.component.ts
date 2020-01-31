import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder,  Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  public form: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.form = this._buildForm();
   }

  ngOnInit() {
  }

  private _buildForm(): FormGroup {
    return this.formBuilder.group({
      name: new FormControl('', [Validators.required, Validators.min(3)]),
      lastname: new FormControl('', [Validators.required, Validators.min(3)]),
      age: new FormControl('', [Validators.required, Validators.min(1), Validators.max(100)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phones: this.formBuilder.array([])
    });
  }

  get name() { return this.form.get('name'); }
  get lastname() { return this.form.get('lastname'); }
  get age() { return this.form.get('age'); }
  get email() { return this.form.get('email'); }
  get phones() { return this.form.get('phones') as FormArray; }

  addPhone() {
    const phone = this.formBuilder.group({
      area: '',
      prefix: '',
      line: ''
    });
    this.phones.push(phone);
  }

  deletePhone(index: number): void {
    this.phones.removeAt(index);
  }
  onResetForm(): void {
    this.form.reset();
  }

  onSaveForm(event: Event): void {
    event.preventDefault();
    console.log(this.form.value);
    if (this.form.valid) {
      this.onResetForm();
    }
  }

}
