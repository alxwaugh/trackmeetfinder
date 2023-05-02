'use strict';

// eslint-disable-next-line no-unused-vars
const config = {
  style: 'mapbox://styles/mapbox/light-v10',
  accessToken:
    'pk.eyJ1IjoiYWxleHdhdWdoIiwiYSI6ImNsaDZvZ3c2MTA4NnYzZW5zMnh4Znd0bXUifQ.f2R7_DWexm5QqDuSSu3nzQ',
  CSV: './Meets.csv',
  center: [0.0, 51.398],
  zoom: 6,
  title: 'Track Meets',
  description:
    'These are all the Outdoor Track and Field events licenced by England Athletics in 2023 (as of 27th April)',
  sideBarInfo: ['Event Name', 'Date', 'Venue'],
  popupInfo: ['Event Name','Venue2','Entry Details'],
  filters: [
    {
      type: 'dropdown',
      title: 'Languages supported: ',
      columnHeader: 'Languages',
      listItems: [
        'Amharic',
        'ASL',
        'Cambodian',
        'Chinese',
        'Danish',
        'English',
        'French',
        'German',
        'Greek',
        'Hindi',
        'Italian',
        'Japanese',
        'Korean',
        'Language Line Services',
        'Norwegian',
        'Oriya',
        'Portuguese',
        'Punjabi',
        'Russian',
        'Somali',
        'Spanish',
        'Swedish',
        'Tagalog',
        'Thai',
        'Tigrinya',
        'Tongan',
        'Vietnamese',
        'Ukranian',
      ],
    },
    {
      type: 'checkbox',
      title: 'Month of Event: ',
      columnHeader: 'Month', // Case sensitive - must match spreadsheet entry
      listItems: ['Jan', 'Feb', 'Mar','Apr','May','Jun','Jul','Aug','Sep','Nov','Dec'], // Case sensitive - must match spreadsheet entry; This will take up to six inputs but is best used with a maximum of three;
    },
    {
      type: 'dropdown',
      title: 'Clients: ',
      columnHeader: 'Clients',
      listItems: [
        'Adults',
        'Disabled',
        'Homeless',
        'Immigrants/Refugees',
        'Low Income',
        'Seniors',
        'Youth: Pre-teen',
        'Youth: Teen',
      ],
    },
  ],
};
