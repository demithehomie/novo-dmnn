import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import {Ng2SearchPipeModule} from 'ng2-search-filter'; 

import { PostsPageRoutingModule } from './posts-routing.module';

import { PostsPage } from './posts.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PostsPageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [PostsPage]
})
export class PostsPageModule {}
