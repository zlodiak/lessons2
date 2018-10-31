Angular 2.0 final solution:

To set all FormGroup values use, setValue:

this.myFormGroup.setValue({
  formControlName1: myValue1, 
  formControlName2: myValue2
});
To set only some values, use patchValue:

this.myFormGroup.patchValue({
  formControlName1: myValue1, 
  // formControlName2: myValue2 (can be omitted)
});