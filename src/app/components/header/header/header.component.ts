import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  formulario: FormGroup;
  user = localStorage.getItem('user');
  openEdit = false;
  actButton: boolean;
  history: any;
  close = 'close';

  constructor(
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      user: this.formBuilder.control('', []),
    });
  }

  onSubmit(formulario: NgForm) {
    if (formulario.invalid) { return; }
    const dado = localStorage.setItem('user', JSON.stringify(this.formulario.value.user));
    this.openEdit = false;
    this.user = localStorage.getItem('user').replace(/\"/g, '');
  }

  handleOut() {
    this.user = null;
    this.actButton = false;
   }

  showInput() {
    this.openEdit = !this.openEdit;
  }


}
