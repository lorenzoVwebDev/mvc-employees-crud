//node third parties modules and common core modules
const express = require('express');
const { v4: uuid } = require('uuid');
const path = require('path');
const fs = require('fs');
const fsPromises = require('fs').promises;
const app = express();
const cors = require('cors')
const corsOptions = require('./app/configuration/corsOptions.js');
//--------------- middlewares imports ------------------
const {requestLogger, errorLogger} = require('./app/middleware/logEvents.js');
const errorHandler = require('./app/middleware/errorHandler.js');
//------------------------------------------------------
const PORT = process.env.PORT || 3000;
//----------------middlewares---------------------------
app.use(requestLogger);

app.use(express.static(path.join(__dirname, './','public')));

app.use(cors(corsOptions));

//----------------routing-------------------------------
app.use('/testerror', require('./app/routes/testerror.route.js'))
//----------------error handler-------------------------
app.use(errorLogger)
app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
