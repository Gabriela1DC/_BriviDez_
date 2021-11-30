import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl,FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  @ViewChild('fform') formularioFormDirective:any;
  formularioForm: any;

  constructor(
    public formulario:FormGroup,
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
      check:[false,Validators.requiredTrue],
    });
  }

  onSubmit() {


    /*this.http.post('https://localhost:XXXX/post',JSON.stringify(this.formulario.value))
    .mao(res=>res)
    .subscribe(data => {
      console.log(data);
      //RESETANDO O FORMULARIO//
      this.formulario.reset();

      verificaValid(campo){
        return !this.formulario.get(campo).valid && this.formulario.get(campo).touched
      };

      cssError(campo){
        return{
          'has-error': this.verificaValid(campo),
          'has-feedback':this.verificaValid(campo)
        }
      };
    },
    (error:any)=>alert('erro'));

  }*/

    this.formularioForm=this.formulario.value;
    this.formularioForm.reset({
        name:null,
        email:null,
        tel:null,
        assunto:null,
        mensagem:null,
        check:false,
    });
    this.formularioFormDirective.resetForm();
  }

}
