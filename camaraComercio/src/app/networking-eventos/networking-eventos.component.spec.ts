import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetworkingEventosComponent } from './networking-eventos.component';

describe('NetworkingEventosComponent', () => {
  let component: NetworkingEventosComponent;
  let fixture: ComponentFixture<NetworkingEventosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NetworkingEventosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NetworkingEventosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
