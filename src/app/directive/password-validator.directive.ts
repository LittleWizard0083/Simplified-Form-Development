import { Directive, forwardRef } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn, Validator, NG_VALIDATORS } from '@angular/forms';


export function passwordValidation(): ValidatorFn {
  //At least 8 characters, min 1 Uppercase 1 Lowercase 1 Number 1 special character and only contains symbols from the alphabet
  const PASSWORD_REGEX = new RegExp("(?=[A-Za-z0-9@#$%^&+!=]+$)^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+!=])(?=.{8,}).*$");
  return (control: AbstractControl): ValidationErrors | null => {
      const isValid = PASSWORD_REGEX.test(control.value);
      if (isValid) {
        return null;
      } else {
        return {
            passwordValidator: {
            valid: false
          }
        }
      }
  }
}

@Directive({
  selector: '[appPasswordValidator]',
  standalone: true,
  providers: [
    {
      provide: NG_VALIDATORS, 
      useExisting: forwardRef(() => PasswordValidatorDirective), 
      multi: true
    }]
})
export class PasswordValidatorDirective implements Validator {

  constructor() { }

  public validate(control: AbstractControl): ValidationErrors | null {
    return passwordValidation()(control);
  }

}
