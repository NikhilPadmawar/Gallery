import { Component, OnInit } from '@angular/core';
import {ImageService } from './shared/image.Service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css'],
  providers:[ImageService]
})
export class ImageComponent implements OnInit {
  image:any
  constructor(private imageService: ImageService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    this.image=this.imageService.getImage(
      + this.route.snapshot.params['id']
    )
  }

}
