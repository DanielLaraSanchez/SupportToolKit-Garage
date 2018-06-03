

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ErrorService } from '../shared/error.service';
import { Error } from '../shared/error.model';

declare var M: any;

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css'],
  providers: [ErrorService]
})
export class ErrorComponent implements OnInit {


  constructor(private errorService: ErrorService) {


}

scroll() {
// window.scrollTo(500, 700);
window.scrollTo({top: 500, behavior: "smooth"});


}




  ngOnInit() {
    this.resetForm();
    this.refreshErrorList();
  }

  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.errorService.selectedError = {
      _id: "",
      myid:"",
      errormsg: "",
      solution1: "",
      solution2: "",
      solution3: ""
    }
  }

  onSubmit(form: NgForm) {
    if (form.value._id == "") {
      this.errorService.postError(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshErrorList();
        location.reload();
        M.toast({ html: 'Saved successfully', classes: 'rounded' });
      });
    }
    else {
      this.errorService.putError(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshErrorList();
        M.toast({ html: 'Updated successfully', classes: 'rounded' });
      });
    }
  }

  refreshErrorList() {
    this.errorService.getErrorList().subscribe((res) => {
      this.errorService.errors = res as Error[];
    });
  }

  onEdit(err: Error) {
    this.errorService.selectedError = err;
  }

  onDelete(_id: string, form: NgForm) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.errorService.deleteError(_id).subscribe((res) => {
        this.refreshErrorList();
        this.resetForm(form);
        M.toast({ html: 'Deleted successfully', classes: 'rounded' });
      });
    }
  }

}
