import { Directive, forwardRef } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn, Validator, NG_VALIDATORS } from '@angular/forms';


export function passwordValidation(): ValidatorFn {
  //At least 8 characters, min 1 Uppercase 1 Lowercase 1 Number 1 special character and only contains symbols from the alphabet
  const PASSWORD_REGEX_LOWERCASE = new RegExp("(?=.*[a-z])");
  const PASSWORD_REGEX_UPPERCASE = new RegExp("(?=.*[A-Z])");
  const PASSWORD_REGEX_CIPHER = new RegExp("(?=.*[0-9])");
  const PASSWORD_REGEX_SPECIAL_CHAR = new RegExp("(?=.*[@#$%^&+!=])");
  const PASSWORD_REGEX = new RegExp("(?=[A-Za-z0-9@#$%^&+!=]+$)^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+!=])(?=.{8,}).*$");
  return (control: AbstractControl): ValidationErrors | null => {
      const isValid = PASSWORD_REGEX.test(control.value);
      const isContainsLowerCase = PASSWORD_REGEX_LOWERCASE.test(control.value);
      const isContainsUpperCase = PASSWORD_REGEX_UPPERCASE.test(control.value);
      const isContainsCipher = PASSWORD_REGEX_CIPHER.test(control.value);
      const isContainsSpecialChar = PASSWORD_REGEX_SPECIAL_CHAR.test(control.value);
      const validationErrorArray = [isValid, isContainsLowerCase, isContainsUpperCase, isContainsCipher, isContainsSpecialChar];
      let validatorErrorKeys:ValidationErrors = [ 
        { passwordValidator:           { valid: false }},
        { passwordValidatorLowerCase:  { valid: false }},
        { passwordValidatorUpperCase:  { valid: false }},
        { passwordValidatorCipher:     { valid: false }},
        { passwordValidatorSpecialChar:{ valid: false }}        
      ]
      validationErrorArray.forEach((validator, index) => {
        validatorErrorKeys[index].valid = true; 
        if (validator) {
           validatorErrorKeys[index] = { valid: false };
        }  
      });
      
      return validatorErrorKeys;
      /*if (isValid) {
        return null;
      } else {
        return {
            passwordValidator: {
            valid: false
          }
        }
      }*/
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
