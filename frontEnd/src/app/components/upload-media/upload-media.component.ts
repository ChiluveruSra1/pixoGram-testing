import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { uploadMediaModel } from 'src/app/models/uploadMedia.model';
import { UploadService } from 'src/app/services/upload.service';
import { UserService } from 'src/app/services/user.service';
import { finalize } from 'rxjs/operators';
import { AngularFireStorage, AngularFireUploadTask, AngularFireStorageReference } from 'angularfire2/storage';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-upload-media',
  templateUrl: './upload-media.component.html',
  styleUrls: ['./upload-media.component.css']
})
export class UploadMediaComponent implements OnInit {

  uploadMediaForm: FormGroup
  postPic: String
  file:File
  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  getDownloadURL: Observable<string>;
  
constructor(private fb: FormBuilder, private uploadService: UploadService, private userService: UserService, private afStorage: AngularFireStorage) { }

ngOnInit(): void {
  this.uploadMediaForm = this.fb.group({
    'postPic': [null]
  });
}

selectedFiles:FileList
 /* fileChange(event: any) {
   let reader = new FileReader();
   if(event.target.files && event.target.files.length > 0) {
     this.file = event.target.files[0];
   }
 }

   uploadMedia() {
     console.log("uploaded")
     let body = new FormData();
     body.append("file", this.file);
     this.uploadService.storeMedia(body, 1).subscribe((data) => { console.log(data) },
       error => console.log(error), () => { console.log("completed") }
     );
   } */

  // uploadMedia() {
    
  // const file = this.selectedFiles.item(0);
  // this.uploadService.uploadFile(file);
  // }
  
   /* fileChange(event) {
   this.selectedFiles = event.target.files;
   }  */ 
//firebase upload
uploadMedia(event) {
  const id = Math.random().toString(36).substring(2);
  this.ref = this.afStorage.ref(id);
  this.task = this.ref.put(event.target.files[0]);
  // this.getDownloadURL = this.ref.getDownloadURL();
  // console.log(this.getDownloadURL);
  this.task.snapshotChanges().pipe(
    finalize(() => {
      this.ref.getDownloadURL().subscribe(url => {
        console.log(url); // <-- do what ever you want with the url..
       

        let um = new uploadMediaModel(url,"title","desc","tag");

       //store to database
        this.uploadService.storeMedia(um, 1).subscribe((data) => { console.log(data) },
        error => console.log(error), () => { console.log("completed") }
      );

      });
    })
  ).subscribe();



}

}
