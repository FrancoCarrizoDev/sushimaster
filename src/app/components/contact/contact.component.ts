import { Component, OnInit } from '@angular/core';
import { Forms } from '../../models/form'
import { FormService } from '../../services/form.service'


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers: [FormService]
})
export class ContactComponent implements OnInit {
  public title: string;
  public forms: Forms;

  constructor(
    private _formService: FormService
  ) {
    this.title = 'Formulario De Contacto';
    this.forms = new Forms('','','','','','');
   }

  ngOnInit(): void {
  }

  onSubmit(form){
    console.log(this.forms)
  }

}
