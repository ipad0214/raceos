import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RacePage } from './race.page';

describe('RacePage', () => {
  let component: RacePage;
  let fixture: ComponentFixture<RacePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RacePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RacePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
