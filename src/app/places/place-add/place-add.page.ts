import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlacesService } from '../places.service';

@Component({
  selector: 'app-place-add',
  templateUrl: './place-add.page.html',
  styleUrls: ['./place-add.page.scss'],
})
export class PlaceAddPage implements OnInit {

  constructor(private placeSvc:PlacesService, private router:Router) { }

  ngOnInit() {
  }

  saveNewPlace(title, imgUrl){

    this.placeSvc.addPlace(title.value, imgUrl.value)
    this.router.navigate(['/places'])


  }

}
