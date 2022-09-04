import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/task';
import { TASKS } from 'src/app/mock-task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  tarea: Task[]=TASKS;
  faTimes = faTimes;
  constructor() { }

  ngOnInit(): void {
  }

}
