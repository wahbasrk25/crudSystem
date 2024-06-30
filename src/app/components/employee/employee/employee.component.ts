import { Component } from '@angular/core';
import { CommandService } from 'src/app/services/command.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {



  constructor(private employee:CommandService){}


 ngOnInit():void{

  this.getAllEmp();

 }



empData : any [] = [];



getAllEmp(){

    this.employee.getAll().subscribe(

      (data)=>{
         this.empData = data;
      }
    )
}













}
