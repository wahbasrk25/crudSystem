import { Component } from '@angular/core';
import { CommandService } from 'src/app/services/command.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {


  constructor(private myVar:CommandService){}


  ngOnInit(){

     this.getCommand();
  }


 myData:any [] = [];

 mycommand:any = {
    id:'',
    name:'',
    rating:'',
    address:''
 };

myCondetion = false;

  getCommand(){


      this.myVar.getAll().subscribe(

        (data)=>{
           this.myData = data
           
        }
      )
  }




  deleteCommand(id:any){

      this.myVar.delete(id).subscribe(

         ()=>{
          this.myData = this.myData.filter(item=> item.id != id)
         }
      )
  }

  createCommand(){

    this.myVar.create(this.mycommand).subscribe(
          
      (item)=>{
        this.myData = [ item , ...this.myData ]
        this.valInput();
        
      }

     )     

     
   }

   valInput(){

   this. mycommand = {

      id:'',
      name:'',
      rating:'',
      address:''

     };

   }


   editCommand(item:any){

        this.mycommand = item
        this.myCondetion = true;
   }



   updateCommand(){

      this.myVar.update(this.mycommand).subscribe(

         (command)=>{

           this.valInput();
           this.myCondetion = false;
         }
      )
   }


















}
