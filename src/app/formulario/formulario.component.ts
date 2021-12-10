import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {
  formContact!: FormGroup; 

   @ViewChild('fform') formularioFormDirective:any;

  constructor(private formBuilder: FormBuilder) { }

  get f() {
    return this.formContact.controls
  }

  ngOnInit(): void {

    
    this.formContact=this.formBuilder.group({
      name:[null, [Validators.required, Validators.minLength(3)]],
      email:[null, [Validators.required, Validators.email]],
      tel:[null, [Validators.required, Validators.minLength(11),Validators.maxLength(12)]],
      assunto:[null,Validators.required],
      mensagem:[null,[Validators.required,Validators.minLength(10)]],
      check:['',Validators.requiredTrue],
    });

    
  }

  onSubmit() {
     
    console.log(this.formContact.value)
    console.log(this.formContact.controls)
    console.log(this.formContact.valid)/*

    name=this.formContact.value.name
    invalidErro=() =>{
      if(name.invalid || name.untouched || name.dirty){
        document.write
      }
    }
    

    if (this.formContact.touched){
      if (this.formContact.valid==false){
        alert('Formulário Inválido')
        this.formContact.reset()
      }else{
      alert('Formulário enviado com sucesso')
      this.formContact.reset()
    }
    }*/

    const validateName = () => {
        const name = this.formContact.value.name;
        if(name.value.length < 3) {
            name.nextElementSibling.classList.add('error');
        } else {
            name.nextElementSibling.classList.remove('error');
        }
    }

    const validateEmail = () => {
        const email = this.formContact.value.email;
        const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const emailTest = regex.test(email.value);

        if(!emailTest) {
            email.nextElementSibling.classList.add('error');
        } else {
            email.nextElementSibling.classList.remove('error');
        }
    }

    const validateTel = () => {
        const tel = this.formContact.value.tel;
        var regexT = new RegExp('^\\(((1[1-9])|([2-9][0-9]))\\)((3[0-9]{3}-[0-9]{4})|(9[0-9]{3}-[0-9]{5}))$'); 
        const telTest = regexT.test(tel.value);

        if(tel.value.length < 11 && !telTest) {
            tel.nextElementSibling.classList.add('error');
        } else {
            tel.nextElementSibling.classList.remove('error');
        }
    }

    if (this.formContact.touched){
      if (this.formContact.valid==false){
        alert('Formulário Inválido')
        this.formContact.reset()
      }else{
      alert('Formulário enviado com sucesso')
      this.formContact.reset()}
    }else{
      alert('O Formulário Inválido: O formulárido não está preenchido corretamente !!!')
    }


  }

}
