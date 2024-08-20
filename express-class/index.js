// creating a HTTP server
// server
// node default library -> no

// const express  = require("express");



// const app = express();

// function sum(n) {
//     let ans = 0;
//     for (let i = 1; i<=n; i++) {
//         ans = ans + i;
//     }

//     return ans;
// }

// app.get("/", function(req, res) {
//     // const n = req.query.n;
//     // const ans = sum(n);
//     // res.send("hi your ans is " +  ans);   
// })

// app.listen(3000);   

// const express  = require("express");
// const app = express();


// const users = [{
//     name: "john",
//     kidneys: [{
//         healthy: false
//     }]
// }];
// // filter in js
// app.get("/", function(req, res) {
//     //write logic
//     const johnKidneys = users[0].kidneys;
//     const numberOfKidneys = johnKidneys.length;
//     let numberOfHealthyKidneys = 0;
//     for (let i = 0; i<johnKidneys.length; i++) {

//         if (johnKidneys[i].healthy){
//             numberOfHealthyKidneys = numberOfHealthyKidneys + 1;   
//         }
//     }
//     const numberOfUnHealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;
//     res.json({
//         numberOfKidneys,
//         numberOfHealthyKidneys,
//         numberOfUnHealthyKidneys
//     })

// })

// app.post("/", function(req, res){
//     const isHealthy = req.body.isHealthy;
//     users[0].kidneys.push({
//         healthy: isHealthy
//     })
//     res.json({
//         msg: "Done!"
//     })
// })
// app.listen(3000);

const express = require("express");

const app = express();

app.get("/health-checkup", function (req, res){
  const username = req.headers.username;
  const password = req.headers.password;
  const kidneyId = req.query.kidneyId;

  if(username === "pratik" && password === "pass") {
    if (kidneyId == 1 || kidneyId == 2){
      // do something with kidney here
      res.json({
        msg: "Your kidney is healthy!"
      })
      
    } else {
      
    }
    
    
  }
  res.status(400).json({"msg": "Somethings up with your inputs"})
});

app.listen(3000);