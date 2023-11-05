import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';

import { CafeComponent } from './cafe.component';
import { HttpClientModule } from '@angular/common/http';
import { CafeService } from './cafe.service';
import { Cafe } from './cafe';

describe('CafeComponent', () => {
 let component: CafeComponent;
 let fixture: ComponentFixture<CafeComponent>;
 let debug: DebugElement;

 beforeEach(async(() => {
   TestBed.configureTestingModule({
     imports: [HttpClientModule],
     declarations: [ CafeComponent ],
     providers: [ CafeService ]
   })
   .compileComponents();
 }));

 beforeEach(() => {
   fixture = TestBed.createComponent(CafeComponent);
   component = fixture.componentInstance;

   for(let i = 0; i < 3; i++) {
     const cafe = new Cafe(
       faker.datatype.number(),
       faker.lorem.sentence(),
       faker.lorem.sentence(),
       faker.lorem.sentence(),
       faker.lorem.sentence(),
       faker.datatype.number(),
       faker.lorem.sentence(),
     );
     component.cafes.push(cafe);
   }
   fixture.detectChanges();
   debug = fixture.debugElement;
 });

 it('should create', () => {
   expect(component).toBeTruthy();
 });

 it('should have the correct title', () => {
    const titleElement = fixture.nativeElement.querySelector('h1');
    expect(titleElement.textContent).toContain('El aroma mágico');
  });

  it('should display a table with cafe data', () => {
    const tableElement = fixture.nativeElement.querySelector('table');
    expect(tableElement).toBeTruthy();
  });

  it('should have 3 cafe elements and 1 row for header', () => {
    let tableRows = fixture.nativeElement.querySelectorAll('tr');
    expect(tableRows.length).toBe(4);
  });
});