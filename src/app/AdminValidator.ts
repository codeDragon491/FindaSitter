import { FormControl } from "@angular/forms";

export class AdminValidator {

    static getAdminValidator() {
        return function adminValidator(control: FormControl): { [s: string]: boolean } {

            // Write code here..
            if (control.value.match(/admin/)) {
                localStorage.setItem('role', 'admin');
                //return { isAdmin: true };
            }

            return null;
        }
    }
}