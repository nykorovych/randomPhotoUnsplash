import { Component, OnInit } from '@angular/core';
import {PhotosService } from '../photos.service';

@Component({
  selector: 'app-photo-show',
  templateUrl: './photo-show.component.html',
  styleUrls: ['./photo-show.component.css']
})
export class PhotoShowComponent implements OnInit {
  regular: string = '';

  constructor(private photoService: PhotosService ) { }

  fetchImage() {
    this.photoService.getPhotos().subscribe( (photo) => {
      this.regular = photo.urls.regular
    })
  }

  ngOnInit(): void {
    this.fetchImage()
    }
  

}
