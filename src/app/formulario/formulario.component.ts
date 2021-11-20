import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {
  formulario: FormGroup | undefined;

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {

    //formulario:FormGroup;

    this.formulario = this.formBuilder.group({
      name:[null, [Validators.required, Validators.minLength(3)]],
      email:[null, [Validators.required, Validators.email]],
      tel:[null, [Validators.required, Validators.minLength(11),Validators.maxLength(11)]],
      assunto:[null,Validators.required],
      mensagem:[null,[Validators.required,Validators.minLength(150)]],
      check:[null,Validators.requiredTrue],
    });
  }

}
