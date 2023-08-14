import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-{(name)}',
	templateUrl: './{(name)}.component.html',
	styleUrls: ['./{(name)}.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class {(name|capitalize_all)}Component {}
