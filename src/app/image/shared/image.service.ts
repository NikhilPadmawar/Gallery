import { Injectable } from '@angular/core';

@Injectable()

export class ImageService{
    visibleImages=[];
    
    getImages(){
        return this.visibleImages=Images.slice(0);
    }

    getImage(id:number){
        return Images.slice(0).find(image => image.id ==id)
    }
}

const Images=[

    {"id":1,"category":"love","caption":"Love hands", "url":"assets/img/love1.jpeg"},
    {"id":2,"category":"love","caption":"Love Tree", "url":"assets/img/love2.jpg"},
    {"id":3,"category":"actress","caption":"Dipika Padukon", "url":"assets/img/actress1.jpg"},
    {"id":4,"category":"actress","caption":"Samantha", "url":"assets/img/actress2.jpg"},
    {"id":5,"category":"cartoon","caption":"Chip & Dell", "url":"assets/img/cartoon2.jpg"},
    {"id":6,"category":"cartoon","caption":"Lonely Boy", "url":"assets/img/cartoon1.jpg"},
    {"id":7,"category":"bicycle","caption":"Sports Bicycle", "url":"assets/img/bicycle2.jpg"},
    {"id":8,"category":"bicycle","caption":"Steady Bicycle", "url":"assets/img/bicycle1.jpg"},
    {"id":9,"category":"animal","caption":"Black Panther", "url":"assets/img/animal1.jpg"},
    {"id":10,"category":"animal","caption":"White Lion", "url":"assets/img/animal2.jpg"}
]