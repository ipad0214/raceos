import { Component, OnInit, Input } from '@angular/core';
import { Plugins, CameraResultType } from '@capacitor/core';

const { Camera } = Plugins

@Component({
  selector: 'app-take-picture',
  templateUrl: './take-picture.component.html',
  styleUrls: ['./take-picture.component.scss'],
})
export class TakePictureComponent implements OnInit {
  @Input() public img: String = "";

  constructor() { }

  public takePicture() {
    Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Base64
    }).then(img => {
      this.img = img.base64String
    }).catch(err => {
      // for testen insert random picture;
    });
  }

  ngOnInit() {}

}
