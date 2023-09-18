import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudioRecorderPolyfillComponent } from './audio-recorder-polyfill.component';

describe('AudioRecorderPolyfillComponent', () => {
  let component: AudioRecorderPolyfillComponent;
  let fixture: ComponentFixture<AudioRecorderPolyfillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AudioRecorderPolyfillComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AudioRecorderPolyfillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
