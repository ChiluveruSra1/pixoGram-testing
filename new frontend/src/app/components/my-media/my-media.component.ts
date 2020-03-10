import { Component, OnInit } from '@angular/core';
import { Media } from 'aws-sdk/clients/transcribeservice';
import { DomSanitizer } from '@angular/platform-browser';
import { UserService } from 'src/app/services/user.service';
import { UploadService } from 'src/app/services/upload.service';
import { Router } from '@angular/router';
import { uploadMediaModel } from 'src/app/models/uploadMedia.model';

@Component({
  selector: 'app-my-media',
  templateUrl: './my-media.component.html',
  styleUrls: ['./my-media.component.css']
})
export class MyMediaComponent implements OnInit {

  src:any=[];
  public images: any = [];
  myMedia:any=[];
  title:String
  

  constructor(private sanitizer:DomSanitizer ,private uploadService: UploadService, private userService: UserService, private router: Router) { }

/*   private authService: AuthService, */

/*   sanitize(url:string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  } */




  ngOnInit() {
    this.uploadService.getUserMedia(3).subscribe((src) => {
    this.myMedia=JSON.stringify(src);
    console.log(this.myMedia)
    },
    error => console.log(error),() => { console.log("completed") }
    );
    
    

    
    /* (response => this.src = response);
    console.log(this.src);
     *///if(!this.authService.isLoggedin) {
      //this.router.navigate(['/']);
    //}



    
  }


}
