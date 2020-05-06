import { Component, OnInit } from '@angular/core';
import { ServerApiService } from 'src/app/server.api.service';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.page.html',
  styleUrls: ['./setup.page.scss'],
})
export class SetupPage implements OnInit {
  public driverLaneOne: any;
  public driverLaneTwo: any;
  public drivers: Array<any>;

  constructor(
    public serverApi: ServerApiService
  ) {
    this.serverApi.get("user").then(res => {
      console.log(res);
    })
  }

  ngOnInit() {

  }

}
