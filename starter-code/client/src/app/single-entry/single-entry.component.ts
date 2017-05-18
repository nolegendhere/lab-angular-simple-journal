import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { EntriesService } from '../services/entries.service';

@Component({
  selector: 'app-single-entry',
  templateUrl: './single-entry.component.html',
  styleUrls: ['./single-entry.component.css']
})
export class SingleEntryComponent implements OnInit {
  entry: any;
  constructor(private route: ActivatedRoute,
    private entriesService: EntriesService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getEntryDetails(params['id']);
    });
  }

  getEntryDetails(id) {
   this.entriesService.get(id)
     .subscribe((entryObs) => {
       this.entry = entryObs;
     });
 }

}
