import { Component, OnInit } from '@angular/core';
import { FormControl,FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {
  formulario: FormGroup | undefined;

  constructor(
    private formBuilder:FormBuilder,
    //private http:Http,
    ) { }

  ngOnInit(): void {

    this.formulario = this.formBuilder.group({
      name:[null, [Validators.required, Validators.minLength(3)]],
      email:[null, [Validators.required, Validators.email]],
      tel:[null, [Validators.required, Validators.minLength(11),Validators.maxLength(11)]],
      assunto:[null,Validators.required],
      mensagem:[null,[Validators.required,Validators.minLength(150)]],
      check:[null,Validators.requiredTrue],
    });
  }

  onSubmit() {

    //console.log(this.formulario.value)

    /*
    this.http.post('https://localhost:XXXX/post',JSON.stringify(this.formulario.value))
    .mao(res=>res)
    .subscribe(data => {
      console.log(data);
      //RESETANDO O FORMULARIO//
      this.formulario.reset();
    },
    (error:any)=>alert('erro'));
    */
  }

}
