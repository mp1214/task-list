import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TaskService } from 'src/app/service/task.service';
import { Task } from 'src/app/task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  tarea: Task[]=[];
  
  constructor(private taskservice: TaskService) { }

  ngOnInit(): void {
    this.taskservice.getTasks().subscribe(tasks =>{
    this.tarea= tasks;
    
  });

  }
}
