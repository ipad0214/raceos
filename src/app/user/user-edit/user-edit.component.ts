import { Component, OnInit, Input } from '@angular/core';
import { ServerApiService } from 'src/app/server.api.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss'],
})
export class UserEditComponent implements OnInit {
  public cars: Array<any> = [];
  @Input() public selectedCar = 0;
  @Input() public name = "";
  @Input() public img = "";

  constructor(
    public apiService: ServerApiService
  ) {
    this.apiService.get("car").then(resp => {
      this.cars = resp;
    })
  }

  ngOnInit() {}

}
