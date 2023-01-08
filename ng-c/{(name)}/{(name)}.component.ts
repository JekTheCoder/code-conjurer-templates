import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-{(name)}',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './{(name)}.component.html',
	styleUrls: ['./{(name)}.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class {(name|capitalize_all)}Component {}