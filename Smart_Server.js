const express = require('express')
const app = express()
const excelToJson = require('convert-excel-to-json');
var cors = require('cors')
const fs = require('fs');

app.use(cors())


// app.get('/', function (req, res) {
//   res.send('Hello World')
// })

app.get('/services', function (req, res) {
    // data = ['service01','service02','service03',]

    // res.send(data)

    const result = excelToJson({
      source: fs.readFileSync('./CV_Data.xlsx')
    });

      res.send(result)

  })
  
  app.listen(process.env.PORT || 3000, 
    () => console.log("Server is running..."));
