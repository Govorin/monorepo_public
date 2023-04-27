import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RenderedDirective } from '@ngx-directives';

@Component({
  template: '<div ngxRendered (rendered)="onRendered()"></div>',
  imports: [RenderedDirective],
})
class TestComponent {
  onRendered = jasmine.createSpy('onRendered');
}

describe('RenderedDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let directive: RenderedDirective;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestComponent],
      imports: [RenderedDirective],
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    const debugElement = fixture.debugElement.children[0];
    directive = debugElement.injector.get(RenderedDirective);
  });

  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });

  it('should emit rendered event after view initialization', () => {
    const renderedSpy = spyOn(directive.rendered, 'emit');
    fixture.detectChanges();
    expect(renderedSpy).toHaveBeenCalled();
  });

  it('should call onRendered in the test component', () => {
    fixture.detectChanges();
    expect(component.onRendered).toHaveBeenCalled();
  });
});
