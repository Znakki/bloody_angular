import {Component} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public tasks = [];
  public form: FormGroup = new FormGroup(
    {task: new FormControl()});

  submitTask() {
      this.tasks.push(this.form.value.task);
      this.form.reset();

  }

  deleteTask(itemIndex: number) {
    this.tasks.splice(itemIndex, 1);
  }
}
