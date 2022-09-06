import { Component, OnInit } from '@angular/core';

import { TaskService } from '../../service/task.service';
import { Task } from '../../task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  tarea: Task[]=[];
  
  constructor(private taskservice: TaskService) { }

  ngOnInit(): void {
    this.taskservice.getTasks().subscribe(tarea =>{
    this.tarea= tarea;
    
    
  })

  }
  deleteTask(task:Task)
  {
    this.taskservice.deleteTask(task).subscribe( t =>{
      this.tarea = this.tarea.filter(t=> t.id !==task.id)
    })
  }
  toggleReminder(task:Task){
    task.reminder= !task.reminder
    this.taskservice.updateTaskReminder(task).subscribe();
  }
 addTask(task:Task){
  this.taskservice.addTask(task).subscribe(task=>{
   this.tarea.push(task)
  })
    
 }
}
