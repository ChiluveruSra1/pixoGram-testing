import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-upload-media',
  templateUrl: './upload-media.component.html',
  styleUrls: ['./upload-media.component.css']
})
export class UploadMediaComponent implements OnInit {

  form:FormGroup
  constructor() { }

  ngOnInit(): void {
  }
  upload(){
    console.log("registerd")
  }

}
