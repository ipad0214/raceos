import {Component, OnInit, ViewChild} from '@angular/core';
import {EditComponent} from '../edit/edit.component';
import {ServerApiService} from '../../../server.api.service';
import {ModalController} from "@ionic/angular";

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {

  @ViewChild(EditComponent, {static: false}) editor: EditComponent;

  constructor(
      public apiService: ServerApiService,
      public modalController: ModalController
  ) { }

  ngOnInit() {
  }

  public save() {
    const data = this.editor.getData();
    data.img = "ioajegoiajgoiag";
    this.apiService.post('car', data).then(resp => {
      console.log(resp);
      this.modalController.dismiss({
        dismissed: true
      });
    });
  }

  public cancel() {

  }
}
