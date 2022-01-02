import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  constructor(private dialog : MatDialogRef<ModalComponent>) { }

  ngOnInit(): void {
  }

  closeDialog() {
    this.dialog.close();
  }
}
