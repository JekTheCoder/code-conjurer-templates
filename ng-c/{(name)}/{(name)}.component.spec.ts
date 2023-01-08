import { ComponentFixture, TestBed } from '@angular/core/testing';
import { {(name|capitalize_all)}Component } from './{(name)}.component';

describe('{(name|capitalize_all)}Component', () => {
	let component: {(name|capitalize_all)}Component;
	let fixture: ComponentFixture<{(name|capitalize_all)}Component>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [{(name|capitalize_all)}Component],
		}).compileComponents();

		fixture = TestBed.createComponent({(name|capitalize_all)}Component);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
