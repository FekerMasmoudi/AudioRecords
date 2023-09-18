import { Component } from '@angular/core';
import 'audio-recorder-polyfill';

@Component({
  selector: 'app-audio-recorder',
  templateUrl: './audio-recorder-polyfill.component.html',
  styleUrls: ['./audio-recorder-polyfill.component.css']
})
export class AudioRecorderPolyfillComponent {
  private mediaRecorder?: MediaRecorder;
  private audioChunks: Blob[] = [];
  
  constructor() {
    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then((stream) => {
        this.mediaRecorder = new MediaRecorder(stream);
        this.mediaRecorder.ondataavailable = (event) => {
          if (event.data.size > 0) {
            this.audioChunks.push(event.data);
          }
        };
      })
      .catch((error) => {
        console.error('Error accessing microphone:', error);
      });
  }

  startRecording() {
    if (this.mediaRecorder) {
      this.audioChunks = [];
      this.mediaRecorder.start();
      console.log(this.mediaRecorder.start());
    }
  }

  stopRecording() {
    if (this.mediaRecorder && this.mediaRecorder.state === 'recording') {
      this.mediaRecorder.stop();
    }
  }

  async convertToM4A() {
    const wavBlob = new Blob(this.audioChunks, { type: 'audio/wav' });

    const { createFFmpeg, fetchFile } = require('@ffmpeg/ffmpeg');
    const ffmpeg = createFFmpeg({ log: true });

    await ffmpeg.load();

    ffmpeg.FS('writeFile', 'input.wav', await fetchFile(wavBlob));

    await ffmpeg.run('-i', 'input.wav', 'output.m4a');

    const m4aData = ffmpeg.FS('readFile', 'output.m4a');

    
  }
}
