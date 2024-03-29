const getState = ({
    getStore,
    getActions,
    setStore
}) => {
    return {
        store: {
            urlRecuperar: "",
            plant: null,
            current_plant: null,
            seccion: [],
            modal: {
                estado: false,
                nombre: "",
                id: 0,
            },
            chat_id: "",
            arrayTelegram: [],

            user_plants: [],

            token: "",

            permiso: false,
            usuario: "",

            busqueda: [],
            message: null,
            demo: [{
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
            setModal: (estado, nombre, id) => {
                setStore({
                    modal: {
                        estado: estado,
                        nombre: nombre,
                        id: id,
                    },
                });
            },

            getChatId: () => {
                var myHeaders = new Headers();
                myHeaders.append(
                    "Authorization",
                    `Bearer ${sessionStorage.getItem("token")}`
                );

                var raw = "";

                var requestOptions = {
                    method: "POST",
                    headers: myHeaders,
                    body: raw,
                    redirect: "follow",
                };

                fetch(process.env.BACKEND_URL + "/api/get_chat_id", requestOptions)
                    .then((response) => response.json())
                    .then((result) => {
                        console.log(result.chat_id);
                        setStore({
                            chat_id: result.chat_id,
                        });
                    })
                    .catch((error) => console.log("error", error));
            },
            searchChatId: () => {
                var requestOptions = {
                    method: "GET",
                    redirect: "follow",
                };

                fetch(
                        "https://api.telegram.org/bot5565830618:AAHcS6I-12nfibE1Dz7-fHiFupWG2BVJfxk/getUpdates",
                        requestOptions
                    )
                    .then((response) => response.json())
                    .then((result) => {
                        console.log(result);
                        setStore({
                            arrayTelegram: result.result,
                        });
                    })
                    .catch((error) => console.log("error", error));
            },

            saveChatId: (chatId) => {
                var myHeaders = new Headers();
                myHeaders.append(
                    "Authorization",
                    `Bearer ${sessionStorage.getItem("token")}`
                );
                myHeaders.append("Content-Type", "application/json");

                var raw = JSON.stringify({
                    chat_id: chatId,
                });

                var requestOptions = {
                    method: "POST",
                    headers: myHeaders,
                    body: raw,
                    redirect: "follow",
                };

                fetch(process.env.BACKEND_URL + "/api/save_chat_id", requestOptions)
                    .then((response) => response.json())
                    .then((result) => console.log(result))
                    .catch((error) => console.log("error", error));
            },

            resetBusqueda: () => {
                setStore({
                    busqueda: [],
                });
            },
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
                const store = getStore();
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

                return (
                    fetch(process.env.BACKEND_URL + "/api/login", requestOptions)
                    .then((response) => response.json())
                    .then((result) => {
                        console.log(result.token);
                        setStore({
                            token: result.token,
                        });
                        sessionStorage.setItem("token", result.token);
                        sessionStorage.setItem("email", result.email);
                        sessionStorage.setItem("chat_id", result.chat_id);
                    })
                    .then(() => true)
                    // .then((data) => console.log(data))
                    // .then((data) => setStore({ token: data }))
                    // .then(console.log(store.token))
                    .catch((error) => console.log("error", error))
                );
            },
            deleteTelegram: (chat_id, msg) => {
                var myHeaders = new Headers();
                myHeaders.append("Content-Type", "application/json");

                var raw = JSON.stringify({
                    chat_id: chat_id,
                    msg: msg,
                });

                var requestOptions = {
                    method: "DELETE",
                    headers: myHeaders,
                    body: raw,
                    redirect: "follow",
                };

                fetch(process.env.BACKEND_URL + "/api/delete_telegram", requestOptions)
                    .then((response) => response.json())
                    .then((result) => console.log(result))
                    .catch((error) => console.log("error", error));
            },
            consultarTelegram: (chat_id, msg) => {
                var myHeaders = new Headers();
                myHeaders.append("Content-Type", "application/json");

                var raw = JSON.stringify({
                    chat_id: chat_id,
                    msg: msg,
                });

                var requestOptions = {
                    method: "POST",
                    headers: myHeaders,
                    body: raw,
                    redirect: "follow",
                };

                fetch(
                        process.env.BACKEND_URL + "/api/consultar_telegram",
                        requestOptions
                    )
                    .then((response) => response.json())
                    .then((result) => console.log(result))
                    .catch((error) => console.log("error", error));
            },

            logout: () => {
                const store = getStore();
                sessionStorage.removeItem("token");
                sessionStorage.removeItem("email");
                sessionStorage.removeItem("chat_id");
                store.permiso = false;
            },

            sendTelegram: () => {
                var myHeaders = new Headers();
                myHeaders.append("Content-Type", "application/json");

                var raw = JSON.stringify({
                    msg: "Ore riega el Poto de Maca",
                });

                var requestOptions = {
                    method: "POST",
                    headers: myHeaders,
                    body: raw,
                    redirect: "follow",
                };

                fetch(
                        process.env.BACKEND_URL + "/api/notificacion_telegram",
                        requestOptions
                    )
                    .then((response) => response.text())
                    .then((result) => console.log(result))
                    .catch((error) => console.log("error", error));
            },

            reset: (mail) => {
                fetch(process.env.BACKEND_URL + "/api/recuperar/" + mail)
                    .then((response) => response.text())
                    .then((result) => {
                        localStorage.setItem("recuperar", result);
                    })
                    .catch((error) => console.log("error", error));
            },
            resetPass: (pass) => {
                const localToken = JSON.parse(localStorage.getItem("recuperar"));
                var myHeaders = new Headers();
                myHeaders.append("Authorization", `Bearer ${localToken.token}`);
                myHeaders.append("Content-Type", "application/json");

                var raw = JSON.stringify({
                    password: pass,
                });

                var requestOptions = {
                    method: "POST",
                    headers: myHeaders,
                    body: raw,
                    redirect: "follow",
                };

                fetch(process.env.BACKEND_URL + "/api/changePassword/", requestOptions)
                    .then((response) => response.json())
                    .then((result) => console.log(result))
                    .catch((error) => console.log("error", error));
            },

            add_notificacion_telegram: (msg, intervalo, fecha) => {
                var myHeaders = new Headers();
                myHeaders.append(
                    "Authorization",
                    `Bearer ${sessionStorage.getItem("token")}`
                );
                myHeaders.append("Content-Type", "application/json");

                var raw = JSON.stringify({
                    msg: msg,
                    intervalo: intervalo,
                    fecha: fecha,
                });

                var requestOptions = {
                    method: "POST",
                    headers: myHeaders,
                    body: raw,
                    redirect: "follow",
                };

                fetch(process.env.BACKEND_URL + "/api/aviso_telegram", requestOptions)
                    .then((response) => response.json())
                    .then((result) => console.log(result))
                    .catch((error) => console.log("error", error));
            },

            privado: async () => {
                var myHeaders = new Headers();
                myHeaders.append(
                    "Authorization",
                    `Bearer ${sessionStorage.getItem("token")}`
                );

                var requestOptions = {
                    method: "GET",
                    headers: myHeaders,
                    redirect: "follow",
                };

                const response = await fetch(
                    process.env.BACKEND_URL + "/api/privada",
                    requestOptions
                );
                const result = await response.json();

                console.log(result);
                setStore({
                    permiso: result.permiso,
                });
                setStore({
                    usuario: result.email,
                });

                return result ? true : false;
            },

            exampleFunction: () => {
                getActions().changeColor(0, "green");
            },

            getMessage: (seccion) => {
                // fetching data from the backend
                fetch(process.env.BACKEND_URL + "/api/" + seccion)
                    .then((resp) => resp.json())
                    .then((data) =>
                        setStore({
                            seccion: data,
                        })
                    )
                    .catch((error) =>
                        console.log("Error loading message from backend", error)
                    );
            },

            addPlantUser: (planta, alias) => {
                var myHeaders = new Headers();
                myHeaders.append(
                    "Authorization",
                    `Bearer ${sessionStorage.getItem("token")}`
                );
                myHeaders.append("Content-Type", "application/json");

                var raw = JSON.stringify({
                    info_plant_id: planta,
                    alias: alias,
                });

                var requestOptions = {
                    method: "POST",
                    headers: myHeaders,
                    body: raw,
                    redirect: "follow",
                };

                fetch(process.env.BACKEND_URL + "/api/plant/save/", requestOptions)
                    .then((response) => response.json())
                    .then((result) => console.log(result))
                    .catch((error) => console.log("error", error));
            },

            getPlantById: (id) => {
                fetch(process.env.BACKEND_URL + `/api/plants/${id}`)
                    .then((resp) => resp.json())
                    .then((data) =>
                        setStore({
                            plant: data,
                        })
                    )
                    .catch((error) =>
                        console.log("Error loading message from backend", error)
                    );
            },

            deletePlantById: (id) => {
                var myHeaders = new Headers();
                myHeaders.append(
                    "Authorization",
                    `Bearer ${sessionStorage.getItem("token")}`
                );
                myHeaders.append("Content-Type", "application/json");

                var raw = JSON.stringify({
                    plant_id: id,
                });

                var requestOptions = {
                    method: "DELETE",
                    headers: myHeaders,
                    body: raw,
                };

                fetch(process.env.BACKEND_URL + `/api/plant/delete`, requestOptions)
                    .then((resp) => resp.text())
                    .catch((error) => console.log("Error", error));
            },

            getInfoPlantByNombreParcial: (nombre_parcial) => {
                fetch(
                        process.env.BACKEND_URL +
                        `/api/search?nombre_parcial=${nombre_parcial}`
                    )
                    .then((response) => response.json())
                    .then((result) =>
                        setStore({
                            busqueda: result,
                        })
                    )
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
                setStore({
                    demo: demo,
                });
            },

            getPlantsUser: async () => {
                var myHeaders = new Headers();
                myHeaders.append(
                    "Authorization",
                    `Bearer ${sessionStorage.getItem("token")}`
                );

                var requestOptions = {
                    method: "GET",
                    headers: myHeaders,
                    redirect: "follow",
                };

                const response = await fetch(
                    process.env.BACKEND_URL + "/api/user_plants",
                    requestOptions
                );
                const data = await response.json();
                setStore({
                    user_plants: data,
                });
            },

            updatePlantAlias: (alias, plant_id) => {
                var myHeaders = new Headers();
                myHeaders.append(
                    "Authorization",
                    `Bearer ${sessionStorage.getItem("token")}`
                );
                myHeaders.append("Content-Type", "application/json");

                var raw = JSON.stringify({
                    plant_id: plant_id,
                    alias: alias,
                });

                var requestOptions = {
                    method: "POST",
                    headers: myHeaders,
                    body: raw,
                    redirect: "follow",
                };

                fetch(process.env.BACKEND_URL + "/api/plant/edit/", requestOptions)
                    .then((response) => response.json())
                    .then((result) => console.log(result))
                    .catch((error) => console.log("error", error));
            },
        },
    };
};

export default getState;