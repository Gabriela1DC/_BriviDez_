import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {
  formContact!: FormGroup; 

  constructor(private formBuilder: FormBuilder) { }

  get f() {
    return this.formContact.controls
  }

  ngOnInit(): void {

    
    this.formContact=this.formBuilder.group({
      name:[null, [Validators.required, Validators.minLength(3)]],
      email:[null, [Validators.required, Validators.email]],
      tel:[null, [Validators.required, Validators.minLength(11),Validators.maxLength(11)]],
      assunto:[null,Validators.required],
      mensagem:[null,[Validators.required,Validators.minLength(150)]],
      check:['',Validators.requiredTrue],
    });

  }

  onSubmit() {
    console.log(this.formContact.value)
  }

}
