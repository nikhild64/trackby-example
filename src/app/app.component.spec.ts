import { DebugElement } from '@angular/core';
import { ComponentFixture, fakeAsync, flush, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

import { of } from 'rxjs';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { CalculatorService } from './calculator.service';
import { userData } from './results';

describe('AppComponent', () => {
  let fixture:ComponentFixture<AppComponent>,app: AppComponent,calculatorSpy:any,el:DebugElement
  beforeEach(async () => {
    calculatorSpy=jasmine.createSpyObj('CalculatorService',['getUserData']);
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        AppModule
      ],
      providers:[{provide:CalculatorService,useValue:calculatorSpy}]
    }).compileComponents();
   fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
    el=fixture.debugElement;
  });

  it('should create the app', () => {

    expect(app).toBeTruthy();
  });
  it('should render user data', () => {
    calculatorSpy.getUserData.and.returnValue(of(userData.data));
    fixture.detectChanges();
    console.log(el.nativeElement)
    let id= el.query(By.css('#id'));
    expect(id.nativeElement.textContent).toContain('2');
    let firstName= el.query(By.css('#first-name'));
    expect(firstName.nativeElement.textContent).toContain('Janet');

  });
  it('should change title-with done', (done:DoneFn) => {
    app.changeTitle();
    setTimeout(()=>{

      expect(app.title).toBe('NewTitle');
      done()
    },10)

  });
  it('should change title-with fakeAsync', fakeAsync(() => {

    app.changeTitle();
    flush();
    expect(app.title).toBe('NewTitle');

  }));


});
