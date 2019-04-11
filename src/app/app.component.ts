import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'speed';

  min = 90;
  max = 100;
  uploadTx: any;

  downloadTx: number;
  lastSpeed = localStorage.getItem('downloadTx') ? JSON.parse(localStorage.getItem('downloadTx')) : [];
  actButton = false;
  formulario: FormGroup;
  user = localStorage.getItem('user');
  openEdit = false;

  /* *Speedometer* */
  gaugeType = 'full';
  gaugeLabel = '500ms';
  gaugeAppendText = 'MBPS';
  gaugeThick = '3';
  gaugeSize = '250';

  /** colorir spinner conforme valor */
  thresholdConfig = {
    98: {color: 'green'},
    94: {color: 'orange'},
    90: {color: 'red'}
};


  constructor(
    private formBuilder: FormBuilder
  ) {
    this.run();
    this.formulario = this.formBuilder.group({
      user: this.formBuilder.control('', []),
    });
    this.history();
  }

  calc() {
    this.downloadTx = Math.floor(
      Math.random() * (this.max - this.min + 1) + this.min
    );
  }

  run() {
    const interval = setInterval(() => {
      this.calc();
    }, 500);
    setTimeout(() => {
     // check se está logado
       localStorage.setItem('downloadTx', JSON.stringify(this.lastSpeed));
       clearInterval(interval);
       this.lastSpeed.push(this.downloadTx);
       this.actButton = true;
    }, 10000);

  }

  history() {
      const lastSpeed = localStorage.getItem('this.downloadTx') ? JSON.parse(localStorage.getItem('downloadTx'))  : [];

  }





}
