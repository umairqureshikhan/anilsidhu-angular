import { Component,Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  @Input() data:{email:string, address:string}={email:'',address:''};


userId:any;
  constructor( private route:ActivatedRoute){

  }
  ngOnInit(): void{
    console.log("user id is", this.route.snapshot.paramMap.get('id'))
    this.userId=this.route.snapshot.paramMap.get('id')

  }

}
