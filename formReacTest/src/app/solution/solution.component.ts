import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from '../custom-validators';

@Component({
  selector: 'app-solution',
  templateUrl: './solution.component.html',
  styleUrls: ['./solution.component.css']
})
export class SolutionComponent implements OnInit{
  projectForm:FormGroup;

  ngOnInit(): void {
    this.projectForm = new FormGroup({
      'projectName': new FormControl(null,[Validators.required
                                          ,CustomValidators.invalidProjectName
                                          ,CustomValidators.asyncInvalidProject]),
      'email': new FormControl(null,[Validators.required,Validators.email]),
      'projectStatus': new FormControl('critical'),
    });
  }

  onSaveProject(){
    console.log(this.projectForm.value);
  }
}
