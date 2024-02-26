import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalSkillComponent } from './professional-skill.component';

describe('ProfessionalSkillComponent', () => {
  let component: ProfessionalSkillComponent;
  let fixture: ComponentFixture<ProfessionalSkillComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfessionalSkillComponent]
    });
    fixture = TestBed.createComponent(ProfessionalSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
