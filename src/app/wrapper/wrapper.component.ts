import { Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.css']
})
export class WrapperComponent {
  @Input()
  listTemplate!: TemplateRef<any>;
  @Input()
  newUpdate :any;
}
