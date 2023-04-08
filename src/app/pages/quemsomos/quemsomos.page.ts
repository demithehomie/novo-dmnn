import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-quemsomos',
  templateUrl: './quemsomos.page.html',
  styleUrls: ['./quemsomos.page.scss'],
})
export class QuemsomosPage implements OnInit {

  
  searchTerm: string = "";
  selectedOption: string;

  showMenu: boolean = false;

  toggleMenu(): void {
    this.showMenu = !this.showMenu;
  }
 
  closeSearchInput(){
    this.router.navigateByUrl('/onboarding')
  }



  
  constructor(private navCtrl: NavController, private router: Router, private searchService: SearchService) {
    this.selectedOption = 'quemsomos';
    this.selectedOption = 'objetivos';
    this.selectedOption = 'equipe';
  }

  search() {
    this.searchService.searchTerm = this.searchTerm;
    this.router.navigate(['/resultados']);
  }

  ngOnInit(): void{

  }

  onOptionSelected(option: string) {
    this.selectedOption = option;
    switch (option) {
      case 'quemsomos':
        this.navCtrl.navigateForward('/quemsomos');
        break;
      case 'objetivos':
        this.navCtrl.navigateForward('/objetivos');
        break;
      case 'equipe':
        this.navCtrl.navigateForward('/equipe');
          break;  
    }

}



openExternalLinkFacebook(){
  window.open('https://www.facebook.com', '_blank')
}

openExternalLinkInstagram(){
  window.open('https://www.instagram.com', '_blank')
}

openExternalLinkYouTube(){
  window.open('https://www.youtube.com', '_blank')
}


}
