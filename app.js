require("dotenv").config();
const MongoStore = require("connect-mongo");
const express = require("express");
const app = express();
const port = process.env.port;
const passport = require("passport");
const connectDB = require("./config/db");
const MONGODB_URI = process.env.MONGODB_URI;
const session = require("express-session");
const routes = require("./routes/index");
const authRoutes = require("./routes/auth");
const path = require("path");

// Conexión con mongodb
connectDB();

// configuración de Passport
require("./config/passport")(passport);

// Configuración del Session
app.use(
  session({
    secret: "Demodogs",
    resave: "false",
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: MONGODB_URI }),
  })
);

// Middlewares del Passport
app.use(passport.initialize());
app.use(passport.session());

// Seteando JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Seteando motor de vistas
app.set("view engine", "ejs");

// Puesta en línea del server
app.listen(port, () => console.log(`Servidor en línea en el puerto ${port} ✔️`));

// Carpeta pública
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use("/", routes);
app.use("/auth", authRoutes);
