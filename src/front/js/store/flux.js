const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      plant: null,
      current_plant: null,
      seccion: [],
      busqueda: [],
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

      getPlantById: (id) => {
        fetch(process.env.BACKEND_URL + `/api/plants/${id}`)
          .then((resp) => resp.json())
          .then((data) => setStore({ plant: data }))
          .catch((error) =>
            console.log("Error loading message from backend", error)
          );
      },

      getInfoPlantByNombreParcial: (nombre_parcial) => {
        fetch(
          process.env.BACKEND_URL +
            `/api/search?nombre_parcial=${nombre_parcial}`
        )
          .then((response) => response.json())
          .then((result) => setStore({ busqueda: result }))
          .catch((error) => console.log("error", error));
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
