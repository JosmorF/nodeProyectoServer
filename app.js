import express from "express";
import { getHealth, getTime, postContact } from "./handlers/apiHandlers.js";
import { getHome, getNewContact } from "./handlers/viewHandlers.js";
import { globalErrorHandler } from "./handlers/errorsHandlers.js";

const PORT = 3001;
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public")); //cargamos los archivos estaticos

// METODO GET
//rutas de api
app.get("/api/health", getHealth);
app.get("/api/time", getTime);

//rutas archivos
app.get("/", getHome);
app.get("/contact", getNewContact);

//METODO POST
app.post("/contact", postContact);

app.use(globalErrorHandler);

app.listen(PORT, () => {
  console.log(`servidor escuchando en el puerto ${PORT}`);
});
