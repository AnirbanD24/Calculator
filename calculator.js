const express=require('express');
const bodyParser=require('body-parser');

const app=express();
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.post('/', function (req, res) {
  var num1 = Number(req.body.num1); //parseInt() converts string to integer
  var num2 = Number(req.body.num2); //parseInt() converts string to integer
  var opr = req.body.operator;
  if (opr.localeCompare('Add') == 0) {
    var result = num1 + num2;
  }
  else if (opr.localeCompare('Subtract') == 0) {  
    var result = num1 - num2;
  }
  else if (opr.localeCompare('Multiply') == 0) {
    var result = num1 * num2;
  }
  else if (opr.localeCompare('Divide') == 0) {
    var result = num1 / num2;
  }
  res.send('The result is ' + result);
});

app.get("/bmiCalculator", function (req, res) {
  res.sendFile(__dirname + '/bmiCalculator.html');
});

app.post("/bmiCalculator", function (req, res) {
  var weight=parseFloat(req.body.weight);
  var height=parseFloat(req.body.height);
  var bmi=weight / (height * height);
  res.send("Your BMI is "+bmi);
});

app.listen(3000, function(){
  console.log('Server is listening on port 3000!');
})
