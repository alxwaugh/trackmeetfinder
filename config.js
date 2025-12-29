'use strict';

// eslint-disable-next-line no-unused-vars
const config = {
  style: 'mapbox://styles/mapbox/light-v10',
  accessToken:
    'pk.eyJ1IjoiYWxleHdhdWdoIiwiYSI6ImNsaDZvZ3c2MTA4NnYzZW5zMnh4Znd0bXUifQ.f2R7_DWexm5QqDuSSu3nzQ',
  CSV: './Meets2.csv',
  center: [-1.69, 54.05],
  zoom: 5,
  title: 'Track Meet Finder',
  description:
    'These are all the upcoming Track and Field events licenced by England Athletics',
  sideBarInfo: ['Event_Name', 'Date', 'Venue'],
  popupInfo: ['Event_Name'],
  popupInfo2: ['Entry_Details'],
  filters: [
    {
      type: 'date-slider',
      title: 'Filter Events by Date Range:',
      columnHeader: 'Date',
    },
    {
      type: 'dropdown',
      title: 'Venue Type:',
      columnHeader: 'Venue_Type',
      listItems: [
        'Indoor',
        'Outdoor'
      ],
    },
    {
      type: 'checkbox',
      title: 'Only show Opens:',
      columnHeader: 'Event_Name',
      listItems: ['Open'],
    },
    {
      type: 'checkbox',
      title: 'Include Past Events:',
      columnHeader: 'Include_Past',
      listItems: ['Yes'],
    }
  ],
};
