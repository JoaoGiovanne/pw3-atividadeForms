import { FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { CustomValidator } from '../validator/custom-validator';

@Component({
  selector: 'app-atividade',
  templateUrl: './atividade.component.html',
  styleUrls: ['./atividade.component.css']
})
export class AtividadeComponent {
  ocultarSenha = true;

  constructor(private formBuilder: FormBuilder) { }

  cadastroForm = this.formBuilder.group({
    nome: this.formBuilder.control('', [Validators.required, Validators.minLength(3), Validators.maxLength(35)]),
    email: this.formBuilder.control('', [Validators.email, Validators.required, Validators.maxLength(40)]),
    usuario: this.formBuilder.control('', [Validators.required, Validators.maxLength(15), CustomValidator.contemEspacos]),
    senha: this.formBuilder.control('', [Validators.required, Validators.pattern('^(?=.*[A-Z])(?=.*[!.@#$&*])(?=.*[0-9])(?!.* ).{8,16}$'), Validators.minLength(8), Validators.maxLength(16)]),
    confirmarSenha: this.formBuilder.control('', [Validators.required]),
    resumo: this.formBuilder.control('', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]),
    radio: this.formBuilder.control('', [CustomValidator.bugPrioridade]),
    opcao: this.formBuilder.control('', [Validators.required])

  }, {
    validators: CustomValidator.mesmasSenhas()
  },



  );

  onEnviar() {
    console.table(this.cadastroForm.value);
  }
}
