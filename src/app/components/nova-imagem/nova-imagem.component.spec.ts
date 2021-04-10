import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovaImagemComponent } from './nova-imagem.component';

describe('NovaImagemComponent', () => {
  let component: NovaImagemComponent;
  let fixture: ComponentFixture<NovaImagemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovaImagemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovaImagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
