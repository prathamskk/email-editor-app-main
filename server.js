const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');


const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

//mongoose
mongoose.connect("mongodb://127.0.0.1:27017/emailDb");

//data schema and model
const templateSchema = {
  templateJson: String
}

const Template = mongoose.model("Template", templateSchema);

//Api routes
app.get('/templates', async (request, response) => {
  const results = await Template.find();
  console.log(results);
  const templates = results.map(item => item._id)
  response.send(templates);
});

app.get('/template/:id', async (request, response) => {
  const { id } = request.params;
  const template = await Template.findById(id);
  response.send(template);
});

app.post('/template', (request, response) => {
  const { templateJson  ,templateName} = request.body;
  const newTemplate = new Template({ templateJson , templateName });
  newTemplate.save();
});

app.put('/template/:id', async (request, response) => {
  const { id } = request.params;
  const { templateJson } = request.body;
  console.log(templateJson)
  const result = await Template.findByIdAndUpdate(id, { templateJson: templateJson })
  response.send("updated");
});

// server start
app.listen(port, () => {
  console.log("express is running" + port);
});

