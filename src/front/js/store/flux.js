const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      seccion: [],

      token: "",

      message: null,
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],
    },
    actions: {
      // Use getActions to call a function within a fuction

      adduser: (username, second_name, email, password) => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
          username: username,
          second_name: second_name,
          email: email,
          password: password,
        });

        var requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw,
          redirect: "follow",
        };

        fetch(process.env.BACKEND_URL + "/api/registro", requestOptions)
          .then((response) => response.text())
          .then((result) => console.log(result))
          .catch((error) => console.log("error", error));
      },

      loguser: (email, password) => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
          email: email,
          password: password,
        });

        var requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw,
          redirect: "follow",
        };

        fetch(process.env.BACKEND_URL + "/api/login", requestOptions)
          .then((response) => response.json())
          .then((result) => console.log(result))
          .catch((error) => console.log("error", error));
      },

      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },

      getMessage: (seccion) => {
        // fetching data from the backend
        fetch(process.env.BACKEND_URL + "/api/" + seccion)
          .then((resp) => resp.json())
          .then((data) => setStore({ seccion: data }))
          .catch((error) =>
            console.log("Error loading message from backend", error)
          );
      },
      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },
    },
  };
};

export default getState;
