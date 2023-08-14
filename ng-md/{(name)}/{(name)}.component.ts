import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

import { AppDialogComponent } from '@shared/modules/app-dialog/dialog-component';
import { AppDialogRef } from '@shared/modules/app-dialog/dialog-ref';

type I = {}
type O = {}

@Component({
  selector: 'app-{(name)}',
	standalone: true,
	imports: [CommonModule, MatDialogModule, MatButtonModule, MatIconModule],
	templateUrl: './{(name)}.component.html',
	styleUrls: ['./{(name)}.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class {(name|capitalize_all)}Component implements AppDialogComponent<I, O> {
	dialogRef = new AppDialogRef<I, O>();
}
