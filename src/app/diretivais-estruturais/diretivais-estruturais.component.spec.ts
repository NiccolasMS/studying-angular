import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretivaisEstruturaisComponent } from './diretivais-estruturais.component';

describe('DiretivaisEstruturaisComponent', () => {
  let component: DiretivaisEstruturaisComponent;
  let fixture: ComponentFixture<DiretivaisEstruturaisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DiretivaisEstruturaisComponent]
    });
    fixture = TestBed.createComponent(DiretivaisEstruturaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
