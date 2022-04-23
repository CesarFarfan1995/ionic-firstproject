import { Injectable } from '@angular/core';
import { Place } from './place.interfaces';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  private places: Place[] = [
    {
      id:'1',
      title:'Statue of Liberty ',
      imgUrl: 'https://viajes.nationalgeographic.com.es/medio/2021/03/15/istock-989260044-ccbc19b5-1500x1000_a10f0fb1_550x807.jpeg',
      comments: ['awesome place', 'wonderfull experience']
    },
    {
      id:'2',
      title:'Eiffel Tower',
      imgUrl: 'https://viajes.nationalgeographic.com.es/medio/2019/03/29/torre-eiffel-hoy_f7a97d88_1200x1821.jpg',
      comments: ['awesome place', 'wonderfull experience']
    },
    {
      id:'3',
      title:'Awesome Place ',
      imgUrl: 'https://viajes.nationalgeographic.com.es/medio/2019/03/29/torre-eiffel-hoy_f7a97d88_1200x1821.jpg',
      comments: []
    }

  ]

  constructor() { }

  getPlaces() {
    return [...this.places]
  }

  getPlace(placeId: string) {
    
    return {
      ...this.places.find(place =>{
        return place.id === placeId;
      })
    }

  }

  addPlace(title: string, imgUrl:string) {
      this.places.push({
        title:title,
        imgUrl:imgUrl,
        comments: [],
        id: this.places.length + 1 + ""
      });
  }

  deletePlace(placeId: string){
    this.places =  this.places.filter(place => {
      return place.id !== placeId
    })
  }

  

}
