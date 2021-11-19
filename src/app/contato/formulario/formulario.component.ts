import { Component, OnInit } from '@angular/core';
import { Contato } from '../shared/contato';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  formContato:FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.createForm(new Contato());
  }

  createForm(contato:Contato){
    this.formContato=new FormGroup({
      name: new FormControl(contato.name),
      email: new FormControl(contato.email),
      telefone: new FormControl(contato.telefone),
      assunto: new FormControl(contato.assunto),
      mensagem: new FormControl(contato.mensagem),

    })
  }

  this.formContato=this.formBuilder.group({
    name:[null,  [Validators.required, Validators.minLength(4)]],
    email:[null, [Validators.required, Validators.email]],
    telefone:[null, [Validators.required, Validators.minLength(11)]],
    assunto:[null,Validators.required],
    mensagem:[null,[Validators.required,Validators.minLength(100)]]
  })

  onSubmit() {
    this.http.post('https://-----')
  }

}
