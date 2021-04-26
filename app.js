const express = require('express');

const cors = require('cors')
const route_organizer_details = require('./route/organizer_details_route')
const db = require('./database/db');
const bodyParser = require('body-parser');
const route_events = require('./route/Events_route')

const app = express();
app.use(cors());
app.use(express.json());


app.use(route_organizer_details)
app.use(route_events)




app.listen(80);