import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { NavbarComponent } from './navbar/navbar.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ImageComponent } from './image/image.component';
import { ImageService } from './image/shared/image.service';
import { ImageFilterPipe} from './image/shared/filter.pipe';
import { appRoutes } from '../routes';
import { RouterModule } from '@angular/router'; 
import {GalleriaModule} from 'primeng/galleria';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GalleryComponent,
    ImageComponent,
    ImageFilterPipe,
 
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    GalleriaModule
  ],
  providers: [ImageService,ImageFilterPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
