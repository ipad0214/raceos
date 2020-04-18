import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  @Input() public name = '';
  @Input() public manufacturer = '';
  @Input() public model = '';
  @Input() public steering = 0;
  @Input() public drift = 0;
  @Input() public acceleration = 0;
  @Input() public speed = 0;

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
