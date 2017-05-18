import { Component, OnInit } from '@angular/core';
import { EntriesService } from '../services/entries.service';

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css']
})
export class EntryListComponent implements OnInit {
  entryList:Array<any>=[];
  constructor(private entriesService: EntriesService) { }

  ngOnInit() {
    this.entriesService.getList().subscribe((entriesObs) => {
      this.entryList = entriesObs;
      console.log("esto this.entryList",this.entryList);
    });
  }

}
