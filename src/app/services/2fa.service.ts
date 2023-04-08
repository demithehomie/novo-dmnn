import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AlertController, NavController } from "@ionic/angular";
import { Observable } from "rxjs";
import { SmsBody } from "../interfaces/smsbody";
import { Usuario } from "../interfaces/usuario";

const APIUrl = "https://localhost:3000"

@Injectable()
export class TwoFAService {
  
// usuario: Usuario;
  userVerificationCode: string = "";
 phoneNumber: [] = [];
// errorMessage: string = "";

  constructor(private httpClient: HttpClient, private navCtrl: NavController, private alertCtrl: AlertController) { }

  sendSMS(phoneNumber: string ):Observable<any>{
    const sms: SmsBody = {
      numero: [phoneNumber],
      hash: "",
      mensagem: "",
      acao: ""
    };
    return this.httpClient.post(APIUrl + '/send-sms', sms);
    
  }

  verifyVerificationCode() {
    
  }
    
  validatePhoneNumber(body: any): Observable<any>{
    return this.httpClient.post(APIUrl+'/validar-numero', body)
  }
}
