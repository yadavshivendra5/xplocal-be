require( dotenv ).config();
const express = require("express");
const router = express.Router();
const axios = require("axios");

console.log("node js server is starting");
router.get('/api/ghost/posts', (req,res) => {
    const getPosts = async () => {
        try {
            const response = await axios.get(
                 "https://demo.ghost.io/ghost/api/v3/content/posts/",
                 { params: {
                     key:'22444f78447824223cefc48062',
                 } }
            )
            res.json({posts:response.data.posts})
        }
        catch(error){
            console.log(error);
        }
    }
    getPosts();
})

const app = express();
app.use(express.json());
app.use('/', router);
app.listen(5000);

console.log("server is ready to handle request on port 5000.");