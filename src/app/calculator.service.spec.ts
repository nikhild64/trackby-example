import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { CalculatorService } from './calculator.service';
import { HelperService } from './helper.service';
import { userData } from './results';

describe('CalculatorService', () => {
  let service: CalculatorService;
  let helperSpy:any;
  let httpTestingController: HttpTestingController;
  beforeEach(() => {
    helperSpy=jasmine.createSpyObj('HelperService',['getModifiedSumNumber'])
    TestBed.configureTestingModule(


      {imports:[HttpClientTestingModule],providers:[CalculatorService,{provide:HelperService,useValue:helperSpy}]});
    service = TestBed.inject(CalculatorService);
    httpTestingController=TestBed.inject(HttpTestingController);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should return sum', () => {
    helperSpy.getModifiedSumNumber.and.returnValue('SUM-10')
    // coursesService.findAllCourses.and.returnValue(of(beginnerCourses));
    let result=service.getCalculatedData(5,5)

    expect(result).toBe('SUM-10');
    expect(helperSpy.getModifiedSumNumber).toHaveBeenCalledTimes(1);
  });

  it('should get the user Data',()=>{
    service.getUserData().subscribe((data:any)=>{
expect(data).toBeTruthy();

expect(data.id).toBe(2);
    });
    let req=httpTestingController.expectOne('https://reqres.in/api/users/2');
    expect(req.request.method).toEqual("GET");
    req.flush(userData);
  })
});
