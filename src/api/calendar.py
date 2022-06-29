from __future__ import print_function

import datetime
import os.path

from google.auth.transport.requests import Request
from google.oauth2.credentials import Credentials
from google_auth_oauthlib.flow import InstalledAppFlow
from googleapiclient.discovery import build
from googleapiclient.errors import HttpError



#permiso para crear eventos
SCOPES = ['https://www.googleapis.com/auth/calendar.events']


def calendarNotifications():
    
  
    flow = InstalledAppFlow.from_client_secrets_file(os.getcwd() + '/src/resources/credentials.json', SCOPES)
    creds = flow.run_local_server(port=0)     


    try:
        service = build('calendar', 'v3', credentials=creds)

        #agregar mis datos de planta
        event = {
            'summary': 'Google I/O 2015',
            'location': '800 Howard St., San Francisco, CA 94103',
            'description': 'A chance to hear more about Google\'s developer products.',
            'start': {
                'dateTime': '2022-06-24T23:00:00',
                'timeZone': 'Europe/Berlin'
            },
            'end': {
                'dateTime': '2022-06-24T23:00:00',
                'timeZone': 'Europe/Berlin'
            },
            'recurrence': [
                'RRULE:FREQ=DAILY;COUNT=2'
            ],
           
            'reminders': {
                'useDefault': False,
                'overrides': [
                {'method': 'email', 'minutes': 5},
                {'method': 'popup', 'minutes': 5},
                ],
            },
        }
        #esto hace que se cree el evento en el calendario principal
        result = service.events().insert(calendarId='primary', body=event).execute()

    except HttpError as error:
        print('An error occurred: %s' % error)









