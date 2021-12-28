import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.tasks = this.fb.group({
      firstTask : false,
      secondTask : false,
      thirdTask : false,
      fourthTask : false,
      fifthTask : false,
      sixthTask : false,
      seventhTask : false,
      eighthTask : false,
      ninthTask : false,
      tenthTask : false
    })

    this.tasks.valueChanges.subscribe( (taskList) => {
      for (let key in taskList) {
        let taskSelected = document.getElementById(key);
        if (taskSelected != null) {
          if (taskList[key]) {
            taskSelected.classList.add('checked');
          } else {
            if (taskSelected.classList.contains('checked')) {
              taskSelected.classList.remove('checked');
            }
          }
        }
      }
    })
  }

  tasks: FormGroup = new FormGroup({})
}
