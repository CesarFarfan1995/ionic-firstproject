import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Place } from '../place.interfaces';
import { PlacesService } from '../places.service';
import { AlertController } from "@ionic/angular";

@Component({
  selector: 'app-place-details',
  templateUrl: './place-details.page.html',
  styleUrls: ['./place-details.page.scss'],
})
export class PlaceDetailsPage implements OnInit {

  place: Place;

  constructor(private route: ActivatedRoute, private placeSvc: PlacesService, private router: Router, private alertCtrl: AlertController) { }

  ngOnInit() {

    this.route.paramMap.subscribe(paramMap => {
      const id = paramMap.get('placeId');
      this.place = this.placeSvc.getPlace(id)
      console.log(this.place)
    })
  }

  async deletePlace() {


  const alertElement = await this.alertCtrl.create({
        header: "Are you sure to delete it?",
        message: "Be careful",
        buttons: [
          {
            text:"Cancel",
            role:'cancel'
          },
          {
            text:"Delete",
            handler: () => {
                this.placeSvc.deletePlace(this.place.id);
                this.router.navigate(['/places'])
            }
          }
        ]
    });

    await alertElement.present();





  }

}
