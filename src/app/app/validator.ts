import { AbstractControl, FormControl, ValidationErrors, Validator, ValidatorFn } from "@angular/forms";

export class ValidateText{
    static IsString(control: AbstractControl):  {[key: string]: any} | null {
        let value =  control.value;
    
        if(value == '' || value == null)
            return null;
        
        if(/^[a-zA-Z_ ]*$/.test(value) && (value == value.toUpperCase() ||  value == value.toLowerCase()) )
            return null;
    
        return {'isValid': false};
    }
}
