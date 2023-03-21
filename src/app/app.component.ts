import { Component } from '@angular/core';
import {NgForm}from '@angular/forms'
import { FormsModule,FormControl,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-project';
  titl ='blog';
  hello ='this is practice';
  displayval='';
  count=0;
  name="umair qureshi";
  disable=false;
  hide=false;
  color='red';
  colors='green';
  colour='redasda';
  //loop
  users=['umair','saim','salamn','noman'];
  userdetails=[
    
     { email:"umair@gmail.com",phone:"22220",address:"karachi"},
     { email:"saim@gmail.com",phone:"22220",address:"karachi"},
     { email:"salman@gmail.com",phone:"22220",address:"karachi"},
     { email:"noman@gmail.com",phone:"22220",address:"karachi"},    
  ];
  //nested loop
  items=[
    { email:"umair@gmail.com",phone:"22220",address:"karachi",socialaccounts:['facebook','insta']},
    { email:"saim@gmail.com",phone:"22220",address:"karachi",socialaccounts:['insta','facebook']},
    { email:"salman@gmail.com",phone:"22220",address:"karachi",socialaccounts:['utube','insta']},
    { email:"noman@gmail.com",phone:"22220",address:"karachi",socialaccounts:['twiter','insta']},    

    
  ];
  user=[
    
    { email:"umair@gmail.com",phone:"22220",address:"karachi"},
    { email:"saim@gmail.com",phone:"22220",address:"karachi"},
    { email:"salman@gmail.com",phone:"22220",address:"karachi"},
    { email:"noman@gmail.com",phone:"22220",address:"karachi"},    
 ];
  //click per color change
  colorr='red';
  bgcolor='green';
  userdata:any={};
  list:any=[]=[];
  data=10;
  dataa='x';
  namee:any;
  titlee='learning angular';
  today=Date();
  userr={
    name:'umair',
    age:21
  };
  loginform= new FormGroup({
    user:new FormControl('',[Validators.required ,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.minLength(4)])
  })

  getvalue(){
    return 'function data'
  }



  getname(name:string, secondname:string){
   alert(name);
   alert(secondname);
    console.log("function called");
    
  }



  getval(val:any){
    console.log(val)
    console.log("function called")
  }



  getdata(vale:any){
    console.log(vale)
     document.write(vale)
    console.log("get data from input")
    this.displayval=vale
  }



counter(type:string){
type==='add' ? this.count++: this.count--;

 }

 show(){
  this.hide=!this.hide; 
 }

change(){
  this.color='blue';
  this.bgcolor='orange';

}
submit(data:NgForm){
  console.log(data)
  this.userdata=data

}
///add task
addtask(item:string){
  // console.log(item)
  this.list.push({id:this.list.length,name:item});
  console.log(this.list)

} 
//remove task
removetask(id:number){
  // console.log(id);
  this.list = this.list.filter((item: { id: number; }) => item.id !== id);  
}

updatechild(){
  this.data=Math.floor(Math.random()*100);
}

updatedata(item:string){
  console.log(item)
  this.dataa=item;
}
getvaluefrominput(item:any){

  // console.log(item)
};

loginuser(){
console.warn(this.loginform.value);
}

get uservalidator(){
  return this.loginform.get('user')
}
get password(){
  return this.loginform.get('password')
}
}

