import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  public name = '';
  public manufacturer = '';
  public model = '';
  public steering = 0;
  public drift = 0;
  public acceleration = 0;
  public speed = 0;

  constructor() { }

  ngOnInit() {}

  public getData(): any {
    return {
      name: this.name,
      manufacturer: this.manufacturer,
      model: this.model,
      steering: this.steering,
      drift: this.drift,
      acceleration: this.acceleration,
      speed: this.speed
    };
  }

}
