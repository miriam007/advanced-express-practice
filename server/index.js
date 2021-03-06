let express = require("express");
let mongoose=require("mongoose");
mongoose.Promise=global.Promise;
mongoose.connect("mongodb://Miriam:plum22@ds157853.mlab.com:57853/advanced-express-practice");

const contacts = require("./contacts");
const comments = require("./comments");
const products = require("./products");
const vehicles = require("./vehicles");
const bodyParser = require("body-parser");

const port=process.env.PORT || 3001;

let ContactRoutes=require("./routes/ContactRoutes");
let CommentRoutes=require("./routes/CommentRoutes");
let ProductRoutes=require("./routes/ProductRoutes");
let VehicleRoutes=require("./routes/VehicleRoutes");



let app = express();
app.use(bodyParser.json());
app.use(ContactRoutes);
app.use(CommentRoutes);
app.use(ProductRoutes);
app.use(VehicleRoutes);


app.listen(port, ()=>{
  console.log(`listening on port: ${port}`)
})

