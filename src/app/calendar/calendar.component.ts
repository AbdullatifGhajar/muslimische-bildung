import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  calendarData = {
    monthYear: Date.now(),
    days: [
      [{ dayNumber: 0, events: [] }, { dayNumber: 0, events: [] }, { dayNumber: 0, events: [] }, { dayNumber: 0, events: [] }, { dayNumber: 1, events: [] }, { dayNumber: 2, events: [] }, { dayNumber: 3, events: [] }],
      [{ dayNumber: 19, events: [{ description: "hier wird auch Deutsch gelernt", time: "14:00 - 16:00" }] }, { dayNumber: 3, events: [] }, { dayNumber: 7, events: [] }, { dayNumber: 8, events: [] }, { dayNumber: 14, events: [{ description: "hier wird auch Deutsch gelernt", time: "14:00 - 16:00" }, { description: "hier wird auch Deutsch gelernt", time: "18:00 - 20:00" }] }, { dayNumber: 0, events: [] }, { dayNumber: 0, events: [] }],
    ],
  }

  constructor() { }

  ngOnInit(): void {
  }

}
