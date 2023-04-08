import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.page.html',
  styleUrls: ['./posts.page.scss'],
})
export class PostsPage implements OnInit {


  showMenu: boolean = false;

  toggleMenu(): void {
    this.showMenu = !this.showMenu;
  }


  constructor() { }

  ngOnInit() {
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
