import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { SMS } from 'src/app/interfaces/sms';
import { TwoFAService } from 'src/app/services/2fa.service';

@Component({
  selector: 'app-sms',
  templateUrl: './sms.page.html',
  styleUrls: ['./sms.page.scss'],
})
export class SmsPage implements OnInit {

  verificationCode: string = "";

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private twoFAService: TwoFAService,
    private navCtrl: NavController
    
    ) { }

  

  onSubmit(){
    this.twoFAService.userVerificationCode = this.verificationCode;
    this.twoFAService.verifyVerificationCode();
    
  }  

  ngOnInit() {
  }


  sms: SMS = {
    code: ""
  }

  codigo!: FormGroup

  validaForm(){
    this.codigo = this.formBuilder.group({
      code: ['',[Validators.required]]
    })
  }

  validarCodigo(): void{
    const data = {
      code: this.sms.code
    }

  }

}
