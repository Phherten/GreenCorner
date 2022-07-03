const config = {
  clientId:
    "801758075621-irv3m4td53cetc4thrp3egbms3dini9n.apps.googleusercontent.com",
  apiKey: "AIzaSyAGIWjckAE3k4JPOJLmEg9KnxfAio-VSCw",
  scope: "https://www.googleapis.com/auth/calendar.events",
  discoveryDocs: [
    "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
  ],
};

let tokenClient;
const handleCallbackResponse = (response) => {
  console.log(response);
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
export const initTokenClient = async () => {
  tokenClient = google.accounts.oauth2.initTokenClient({
    client_id: config.clientId,
    scope: config.scope,
    prompt: "",
    callback: handleCallbackResponse,
  });

  await gapi.client.init({
    apiKey: config.apiKey,
    discoveryDocs: [config.discoveryDocs],
  });
};
export const connectToGoogle = async (gapi) => {
  const tokenVariable = await tokenClient.requestAccessToken();
  console.log(tokenVariable);
  tokenClient.callback = async (resp) => {
    if (resp.error !== undefined) {
      throw resp;
    }
    await tokenClient.requestAccessToken();

    await addEvent();
  };
};

export const addEvent = async () => {
  let response;
  try {
    response = await gapi.client.calendar.events.insert({
      calendarId: "primary",
      resource: event,
    });
  } catch (err) {
    console.log(err);
    return;
  }

  const events = response;
  // Flatten to string to display
  document.getElementById("results").innerText = response;
};
