import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  let component: App;
  let fixture: ComponentFixture<App>;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [App],
      imports: [HttpClientTestingModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(App);
    component = fixture.componentInstance;
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should retrieve ToDoList from the server', () => {
    const mockToDoList = [
      { text: "Task1", isComplete: true },
      { text: "Task2", isComplete: false }
    ];

    component.ngOnInit();

    const req = httpMock.expectOne('/api/todolist');
    expect(req.request.method).toEqual('GET');
    req.flush(mockToDoList);

    expect(component.toDoList_Modals).toEqual(mockToDoList);
  });
});
