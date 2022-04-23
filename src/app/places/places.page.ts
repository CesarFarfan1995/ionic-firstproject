import { Component, OnInit } from '@angular/core';
import { Place } from './place.interfaces';
import { PlacesService } from './places.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-places',
  templateUrl: './places.page.html',
  styleUrls: ['./places.page.scss'],
})
export class PlacesPage implements OnInit {

   places:Place[] = []

  constructor(private placeSvc:PlacesService, private router:Router) { }

  ngOnInit() {
  this.places = this.placeSvc.getPlaces()
  }

  ionViewWillEnter(){
    this.places = this.placeSvc.getPlaces()
  }

  addNewPlace(){
    this.router.navigate(['/add-place'])
  }

  goToHome(){
    this.router.navigate(['/home'])
  }

}
