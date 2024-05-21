import { AbstractControl, ValidationErrors, ValidatorFn, FormGroup } from "@angular/forms";

export class CustomValidator {
  static contemEspacos(control: AbstractControl): ValidationErrors | null {
    if (!control.value) {
      return null;
    }
    const hasSpaces = control.value.indexOf(' ') !== -1;
    return hasSpaces ? { contemEspacos: true } : null;
  }

  static mesmasSenhas(): ValidatorFn {
    return (formGroup: AbstractControl): ValidationErrors | null => {
      const form = formGroup as FormGroup;
      const senhaControl = form.get('senha');
      const confirmarSenhaControl = form.get('confirmarSenha');

      if (!senhaControl || !confirmarSenhaControl) {
        return null;
      }

      if (senhaControl.value !== confirmarSenhaControl.value) {
        confirmarSenhaControl.setErrors({ mesmasSenhas: true });
        return { mesmasSenhas: true };
      } else {
        confirmarSenhaControl.setErrors(null);
        return null;
      }
    };
  }

  static bugPrioridade(){
    return (formGroup: AbstractControl) => {
      const form = formGroup as FormGroup;
      const opcao = form.get('opcao');
      const radio = form.get('radio');

      if(radio?.value == 2 && opcao?.value == 2 || opcao?.value == 3){
        return radio?.setErrors({bugPrioridade: true})
      }

    }
  }
}
