import express from "express";
const app = express();
import http from "http";
export const httpServer = http.createServer(app);