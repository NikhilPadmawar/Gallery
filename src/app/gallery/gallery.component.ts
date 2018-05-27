import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { ImageService } from '../image/shared/image.Service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
  providers:[ImageService]
})
export class GalleryComponent implements OnInit,OnChanges {

  visibleImages: any[]=[];


  constructor(private imageService:ImageService) { 
    //@Input() filterBy?: string= 'all';
    this.visibleImages=this.imageService.getImages();
  }

  ngOnInit() {
   
 
    
  }

  
  ngOnChanges() {
    this.visibleImages=this.imageService.getImages();
  }


}
