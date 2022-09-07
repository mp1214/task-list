import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/service/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  tittle:string="Task List";
  showAddTask: boolean=true;
  subscripcion?: Subscription;

  constructor(private uiService: UiService) { 
    this.subscripcion = this.uiService.onToggle().subscribe(value=> this.showAddTask =value)
  }

  ngOnInit(): void {
  }
  toggleAddTask(){
    this.uiService.toggleaddTask();
  }
}
