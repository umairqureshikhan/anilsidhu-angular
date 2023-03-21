import { Component,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-another-child',
  templateUrl: './another-child.component.html',
  styleUrls: ['./another-child.component.scss']
})
export class AnotherChildComponent {
  @Output()updatedataevent= new EventEmitter<string>();

}
