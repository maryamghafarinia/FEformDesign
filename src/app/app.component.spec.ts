import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);

  });

  it('should create the app', () => {
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render title', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Your check-in details');
  });

  it('should all accordion be closed', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.getElementsByClassName('accordion-closed').length).toBe(0);
  });

  it('should have the toggle for accordion', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    fixture.detectChanges()
    const arrow = compiled.querySelector('.arrow');
    expect(arrow).toBeTruthy();
  });

  // testing the accordion expand feature 
  it('should accordion be closed when clicking on accordion', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    fixture.detectChanges()
    const legend = fixture.debugElement.query(By.css('legend.accordion__header')).nativeElement;
    legend.click();
    fixture.detectChanges()
    expect(compiled.getElementsByClassName('accordion-closed').length).toBe(1);
  });

  it('should have the toggle for accordion', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    fixture.detectChanges()
    const arrow = compiled.querySelector('.arrow');
    expect(arrow).toBeTruthy();
  });

  // more about having the correct lable and also proper validations to be added 
});
