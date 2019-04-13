import express from 'express'; 
import {insertUser, retrieveUser} from '../database/models/user';
import {insertClient, retrieveClient} from '../database/models/client';


let router = express.Router();

router.post('/user', (req, res) => {
    insertUser(req.body).then(data => {
        res.send(req.body);
    });
});
 
router.get('/user', (req, res) => {
    let filter = req.query.id;
    console.log("getting filter");
    console.log(filter);
    retrieveUser(filter).then(data => {
        console.log(data);
        res.send(data);
    });
});

router.get('/hc', (req, res) => {
    let date = new Date();
 
    res.send({message: `current build: ${date.getDate()}`});
});

router.get('/client', (req, res) => {
    let filter = req.query.id;
    console.log("getting filter");
    console.log(filter);
    retrieveClient(filter).then(data => {
        console.log(data);
        res.send(data);
    });
});

router.post('/client', (req, res) => {
    insertClient(req.body).then(data => {
        res.send(req.body);
    });
});


export default router;


      