import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteSitterComponent } from './delete-sitter.component';
import { MatDialogRef } from '@angular/material';

describe('DeleteSitterComponent', () => {
  let component: DeleteSitterComponent;
  let fixture: ComponentFixture<DeleteSitterComponent>;
  let service;
  let element;
  let MatDialogRef;

  let userServiceStub: Partial<MatDialogRef<DeleteSitterComponent>>;

  beforeEach(() => {
    // stub UserService for test purposes
    userServiceStub = {
    };

    TestBed.configureTestingModule({
      declarations: [DeleteSitterComponent],
      providers: [{ provide: MatDialogRef, useValue: userServiceStub }]
    });

    fixture = TestBed.createComponent(DeleteSitterComponent);
    component = fixture.componentInstance;

    // UserService from the root injector
    MatDialogRef = TestBed.get(MatDialogRef);

    //  get the "welcome" element by CSS selector (e.g., by class name)
    element = fixture.nativeElement.querySelector('.welcome');
  });
});