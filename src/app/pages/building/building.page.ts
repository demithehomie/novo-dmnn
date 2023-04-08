import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-building',
  templateUrl: './building.page.html',
  styleUrls: ['./building.page.scss'],
})
export class BuildingPage implements OnInit {

  constructor(private alertCtrl: AlertController) { }

  ngOnInit() {
  }

  copyLink(){

    
}
  openExternalLinkWhatsAppLuan(){
    window.open('https://wa.me/5522988542742?text=Ol%C3%A1%21+Vim+da+Plataforma+DMNS.+Preciso+de+algumas+informa%C3%A7%C3%B5es.+Pode+me+ajudar%3F', '_blank')
  }


  openExternalLinkWhatsAppDemi(){
    window.open('https://wa.me/5521969648455?text=Ol%C3%A1%21+Vim+da+Plataforma+DMNS.+Preciso+de+algumas+informa%C3%A7%C3%B5es.+Pode+me+ajudar%3F', '_blank')
  }
  

}
