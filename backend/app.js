// Importo todo lo de la libreria de Express
import express from "express";
import productsRoutes from "./src/router/products.js";
import employeeRoutes from "./src/router/employees.js";
import branchesRoutes from "./src/router/branches.js";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    // Permitir envío de cookies y credenciales
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());

app.use("/api/products", productsRoutes);
app.use("/api/employee", employeeRoutes);
app.use("/api/branches", branchesRoutes);

export default app;
