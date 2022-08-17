const config = {
  clientId: process.env.CLIENT_ID,
  apiKey: process.env.API_KEY,
  scope: "https://www.googleapis.com/auth/calendar.events",
  discoveryDocs:
    "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
};

export function initClient(callback) {
  gapi.load("client:auth2", () => {
    try {
      gapi.client
        .init({
          apiKey: config.apiKey,
          clientId: config.clientId,
          discoveryDocs: [config.discoveryDocs],
          scope: config.scope,
          plugin_name: "calendar",
        })
        .then(
          function () {
            if (typeof callback === "function") {
              callback(true);
            }
          },
          function (error) {
            console.log(error.details);
          }
        );
    } catch (error) {
      console.log(error.details);
    }
  });
}

export const signInToGoogle = async () => {
  try {
    let googleuser = await gapi.auth2
      .getAuthInstance()
      .signIn({ prompt: "consent" });
    if (googleuser) {
      return true;
    }
  } catch (error) {
    console.log(error);
  }
};

export const checkSignInStatus = async () => {
  try {
    let status = await gapi.auth2.getAuthInstance().isSignedIn.get();
    return status;
  } catch (error) {
    console.log(error);
  }
};

export const signOutFromGoogle = () => {
  try {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      auth2.disconnect();
    });
    return true;
  } catch (error) {
    console.log(error);
  }
};

export const getSignedInUserEmail = async () => {
  try {
    let status = await checkSignInStatus();
    console.log(status);
    if (status) {
      var auth2 = gapi.auth2.getAuthInstance();
      var profile = auth2.currentUser.get().getBasicProfile();
      return profile.getEmail();
    } else {
      return null;
    }
  } catch (error) {
    console.log(error);
  }
};

export const publishTheCalenderEvent = (event) => {
  try {
    gapi.client.load("calendar", "v3", () => {
      var request = gapi.client.calendar.events.insert({
        calendarId: "primary",
        resource: event,
      });

      request.execute(function (event) {
        console.log("Event created: " + event.htmlLink);
      });
    });
  } catch (error) {
    console.log(error);
  }
};
