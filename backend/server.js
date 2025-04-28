require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');
const app = express();
app.use(cors());
app.use(express.json());