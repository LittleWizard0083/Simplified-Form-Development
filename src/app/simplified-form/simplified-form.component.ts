import { Component   } from "@angular/core";
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, FormsModule } from "@angular/forms";
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from "@angular/common";
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { PasswordValidatorDirective } from "../directive/password-validator.directive";

@Component({
    selector: 'app-simplified-form',
    standalone: true,
    imports: [PasswordValidatorDirective, FormsModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatButtonModule, MatIconModule, CommonModule],
    templateUrl: './simplified-form.component.html',
    styleUrls: ['./simplified-form.component.css']
})

export class SimplifiedFormComponent {
    emailFormControl = new FormControl();
    userRoles  = [
        {id:1, name: 'Subscriber'}, 
        {id:2, name: 'Viewer'},
        {id:3, name: 'Contributor'},
        {id:4, name: 'Author'},
        {id:5, name: 'Editor'},
        {id:6, name: 'Administrator'}]

    submitted = false;
    hide = true;

    form = {
        name: '',
        email: '',
        password: '',
        userRole: ''
    }

    /*public validate(form: NgForm): void {
        if (form.invalid) {
            for (const control of Object.keys(form.controls)) {
                form.controls[control].markAsTouched();
            }
            return;
        }
    }*/

    onSubmit() { this.submitted = true};
}