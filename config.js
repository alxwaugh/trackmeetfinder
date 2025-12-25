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
    'These are all the Outdoor Track and Field events licenced by England Athletics',
  sideBarInfo: ['Event_Name', 'Date', 'Venue'],
  popupInfo: ['Event_Name'],
  popupInfo2: ['Entry_Details'],
  filters: [
    {
      type: 'dropdown',
      title: 'Meet Type: ',
      columnHeader: 'Event_Name',
      listItems: [
        'Open'//,
        //'League'
      ],
    },
    {
      type: 'checkbox',
      title: 'Filter Events by Month: ',
      columnHeader: 'Month', // Case sensitive - must match spreadsheet entry
      listItems: ['Apr','May','Jun','Jul','Aug','Sep','Oct'], // Case sensitive - must match spreadsheet entry; This will take up to six inputs but is best used with a maximum of three;
    }/* ,
    {
      type: 'checkbox',
      title: 'Include Past Events',
      columnHeader: 'Include_Past',
      listItems: ['yes'],
    } */
  ],
};
