import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterOutlet,CommonModule],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('first_angular_project');

  /*
  //today:Date = new Date()

   getMessage(){
    return "Welcome to aadiandjava"
   }

  username:string = "Aadiandjava"

  age:number = 23

  a = 10

  b = 20

  price = 450

  qty = 5

  firstName= "Aadinath"

  lastName = "Kagade"

  marks = 27

  subjects = ["Java","Python","SQL"]

  student ={
      id:101,
      name:"Ram",
      marks:56
  }

  employee={

      id:111,
      name:"Rohit",
      address:{
        city:"Delhi",
        pincode:421421,
        state:"UP"
      }
  }

  studentName:string="Rohit Sharma"

  imageUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLFEJoEZwqosBqZvcDsogIe90GQE3dgD3qxs9IoB0DVQ&s=10"

  w="400"

  h="400"

  isDisable=false

  websiteUrl ="https://classplusapp.com/w/aadiandjava/courses"
      */
    mes = ""
showMessage():void{
  // alert("Welcome to Angular 22")
  this.mes ="Welcome to Angular"
}

count=0
increaseCount(){

  this.count++
}

decreaseCount(){
  this.count--
}

resetCount(){
  this.count=0
}

abc = ""
onKeyUp(event:KeyboardEvent){
  // console.log("event occur")
  this.abc=event.key
}
message=""
onMouseEnter(){
  console.log("mouse entered")
  this.message="Mouse Entered"
}

onMouseLeave(){
   this.message="Mouse Leaved"
}

showPassword=false

togglePassword(){
     this.showPassword=!this.showPassword
}
  
}
