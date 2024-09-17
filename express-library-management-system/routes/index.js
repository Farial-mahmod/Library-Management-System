var express = require('express');
var router = express.Router();

/* GET home page. */

// GET home page.
router.get("/", function (req, res) {
  res.redirect("/catalog");
});


/*
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
*/

module.exports = router;

// farialmahmod I99HZxN9rhQLoo4M

/*

mongodb+srv://farialmahmod:<I99HZxN9rhQLoo4M>@cluster0.r2rdn.mongodb.net/library_management_system?retryWrites=true&w=majority&appName=Cluster0

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://farialmahmod:<db_password>@cluster0.r2rdn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

*/