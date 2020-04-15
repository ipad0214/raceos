import {Component, OnInit, ViewChild} from '@angular/core';
import {EditComponent} from '../edit/edit.component';
import {ServerApiService} from '../../../server.api.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {

  @ViewChild(EditComponent, {static: false}) editor: EditComponent;

  constructor(
      public apiService: ServerApiService
  ) { }

  ngOnInit() {
  }

  public save() {
    const data = this.editor.getData();
    data.img = "ioajegoiajgoiag";
    this.apiService.post('car', data).then(resp => {
      console.log(resp);
    });
  }

  public cancel() {

  }
}
