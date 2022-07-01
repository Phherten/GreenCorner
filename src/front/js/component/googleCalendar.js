import React, { ReactNode, SyntheticEvent } from "react";
//import ApiCalendar from "react-google-calendar-api";

const config = {
  clientId:
    "801758075621-s8dkdd8hr5vmtv1tfgarddgk2keqekl5.apps.googleusercontent.com",
  apiKey: "AIzaSyB_gER1plFP_mLZXIPXPuMEp-OA-E98bCw",
  scope: "https://www.googleapis.com/auth/calendar.events",
  discoveryDocs: [
    "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
  ],
};
const event = {
  summary: "Google I/O 2015",
  location: "800 Howard St., San Francisco, CA 94103",
  description: "A chance to hear more about Google's developer products.",
  start: {
    dateTime: new Date(),
    timeZone: "Europe/Berlin",
  },
  end: {
    dateTime: new Date(),
    timeZone: "Europe/Berlin",
  },
  recurrence: ["RRULE:FREQ=DAILY;COUNT=2"],

  reminders: {
    useDefault: false,
    overrides: [
      { method: "email", minutes: 5 },
      { method: "popup", minutes: 5 },
    ],
  },
};

//const apiCalendar = new ApiCalendar(config);

export const authentication = async () => {};

export const createEvent = () => {
  //apiCalendar.createEvent(event);
};
