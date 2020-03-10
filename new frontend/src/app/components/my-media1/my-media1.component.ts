import { Component, OnInit } from '@angular/core';
import { UploadService } from 'src/app/services/upload.service';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-media1',
  templateUrl: './my-media1.component.html',
  styleUrls: ['./my-media1.component.css']
})
export class MyMedia1Component implements OnInit {

  media:any=[];
  public images: any = [];
  myMedia:any=[];
  title:String
  

  constructor(private uploadService: UploadService, private userService: UserService, private router: Router) { }

  
  ngOnInit() {
    this.uploadService.getAllMedia().subscribe((src) => {console.log(src)
      this.media=src
    /* this.myMedia=JSON.stringify(src);
    console.log(this.myMedia) */
    },
    error => console.log(error),() => { console.log("completed") }
    );
  }

}
