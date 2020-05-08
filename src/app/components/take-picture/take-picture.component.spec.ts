import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TakePictureComponent } from './take-picture.component';

describe('TakePictureComponent', () => {
  let component: TakePictureComponent;
  let fixture: ComponentFixture<TakePictureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TakePictureComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TakePictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
