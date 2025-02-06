import { ChangeDetectionStrategy, Component, Host, HostBinding, input, OnInit } from '@angular/core';

@Component({
  selector: 'calculator-button',
  standalone: true,
  templateUrl: './calculator-button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'class': 'w-1/4 border-r border-b border-indigo-400',
  }
})
export class CalculatorButtonComponent  {

  isComand = input(false, {
  transform: (value: boolean | string) => 
    typeof value === 'string' ? value === 'true' : value
  });

  @HostBinding('class.bg-indigo-700') get class() {
    return this.isComand();
  }

}
