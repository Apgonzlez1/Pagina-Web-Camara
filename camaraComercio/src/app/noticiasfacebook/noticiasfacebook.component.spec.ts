import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiasfacebookComponent } from './noticiasfacebook.component';

describe('NoticiasfacebookComponent', () => {
  let component: NoticiasfacebookComponent;
  let fixture: ComponentFixture<NoticiasfacebookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoticiasfacebookComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoticiasfacebookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
