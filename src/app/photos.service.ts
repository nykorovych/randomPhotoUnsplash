import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';



interface Unsplash {
  urls: {
    regular: string
  }
}

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor(private http: HttpClient) { }

  getPhotos() {
     return this.http.get<Unsplash>('https://api.unsplash.com/photos/random', {
      headers: {
        Authorization: 'Client-ID Tm86NGAvdZPh6hZYWmSz2SjpNsfKC0pGUvQcVJTIDj8'
      }
    })
  }

}
