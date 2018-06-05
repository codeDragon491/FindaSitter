import { FormControl } from "@angular/forms";

export class PasswordValidator {

    static getPasswordValidator() {
        return function passwordValidator(control: FormControl): { [s: string]: boolean } {

            // Write code here..
            if (!control.value.match(/^((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{6,})/)) {
                return { invalidPassword: true };
            }

            return null;
        }
    }
}