import { Component, OnInit } from '@angular/core';
import { SharedServiceService } from 'src/app/shared-service.service';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css']
})
export class MaterialComponent implements OnInit {
  
  file:File | null = null;;
  constructor(private service:SharedServiceService) { }

  ngOnInit(): void {
  }

  sendBukup() {
    this.service.sendBukup(this.file).subscribe((resp:any)=> {});
  }

  handleFileInput(files:any) {
    this.file = files.target.files.item(0);
}

}
