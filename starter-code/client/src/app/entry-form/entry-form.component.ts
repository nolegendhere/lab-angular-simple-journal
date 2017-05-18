import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';
import { EntriesService } from '../services/entries.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-entry-form',
  templateUrl: './entry-form.component.html',
  styleUrls: ['./entry-form.component.css']
})
export class EntryFormComponent implements OnInit {
  @Input() entryList:Array<any>;
  @Output() onAdd = new EventEmitter<Array<any>>();
  constructor(private entriesService: EntriesService,private router: Router) {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: any){

  }

  submitForm(myForm) {
    this.entriesService.add(myForm.value).subscribe(() => {
    });;
  }

}
