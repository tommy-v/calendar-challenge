import { Component, OnInit, Input } from '@angular/core';
import { Event } from 'src/app/core/models/event.model';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.scss']
})
export class EventCardComponent implements OnInit {
  @Input() event: Event;

  constructor() {}

  ngOnInit(): void {
  }

}
