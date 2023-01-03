import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { {(name|capitalize_all)}RoutingModule } from './{(name)}-routing.module';
import { {(name|capitalize_all)}Component } from './{(name)}.component';

@NgModule({
	declarations: [{(name|capitalize_all)}Component],
	imports: [
		CommonModule, 
		{(name|capitalize_all)}RoutingModule,
	],
})
export class {(name|capitalize_all)}Module {}