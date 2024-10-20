import { Component, Input } from '@angular/core';

@Component({
  selector: 'show-page',
  templateUrl: './frist-show-page.component.html',
  styleUrl: './frist-show-page.component.css'
})
export class FristShowPageComponent {
  @Input() urlimg:string = "url";
  @Input() titletext:string = "Qkit Hotel & Resort";
  @Input() subtitletext:string = "subtitle";
}