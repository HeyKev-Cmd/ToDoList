import { ɵisBoundToModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Todo } from './Todo';


describe('AppComponent', () => {
  const component:AppComponent=new AppComponent();
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();

    
      
      expect( component.saveTodo() ).toBe(false);
      component.newTodo="test name";
      expect( component.newTodo ).toBe("test name");

      component.Desription="test desciprtion";
      expect( component.Desription ).toBe("test desciprtion");

      expect( component.saveTodo() ).toBe(true);

      expect(component.todos[0].name).toBe("test name");
      expect(component.todos[0].Desription).toBe("test desciprtion");
      expect(component.todos[0].Completed).toBe(false);     



  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });




 

    
  it('Test done',()=>
      {
        component.done(0);
        expect( component.todos[0].Completed).toBe(true);
        component.done(0);
        expect( component.todos[0].Completed).toBe(false);

      }
  );
    
  it('Test remove',()=>
      {
        component.newTodo="test name2";
        component.Desription="test description2";
        component.saveTodo();
        component.remove(1);
        expect(component.todos[0].name).toBe("test name");
        expect(component.todos[0].Desription).toBe("test desciprtion");

      }
  );

  it('Test complete',()=>
      {
        component.complete(0);
        expect( component.todos[0].Completed).toBe(true);
        component.complete(0);
        expect( component.todos[0].Completed).toBe(false);
      }
  );





});
