import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button2',
  templateUrl: './button2.component.html',
  styleUrl: './button2.component.css'
})
export class Button2Component {
  @Input() text: string = 'button';
  @Input() color: string = 'var(--color-button)'
  @Input() disabled: boolean = false;
}
