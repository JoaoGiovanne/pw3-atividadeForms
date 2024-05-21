import { FormBuilder, FormsModule, Validators } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})

export class CadastroComponent {
  ocultarSenha = true;

  constructor(private formBuilder: FormBuilder){ }

  cadastroForm = this.formBuilder.group({
    nome : this.formBuilder.control('', [Validators.required]),
    email : this.formBuilder.control('', [Validators.email, Validators.required]),
    usuario: [null],
    senha: [null],
    confirmarSenha: [null]
  });

  onEnviar(){
    console.table(this.cadastroForm.value);
  }



}
