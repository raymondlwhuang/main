const express = require('express');
const app = express();

const moogoose = require('./database/mongoose');

const List = require('./database/models/list')
const Task = require('./database/models/task')

/*

CORS - cROSS oRIGIN rEQUEST sECURITY.
localhost:3000 - backend api
localhost:8080 - frontend
*/

app.use((req,res,next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,POST,HEAD,OPTIONS,PUT,PATCH,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type,Accept");
    next();
})
app.use(express.json());

/*
List: Create, Update,ReadOne, ReadAll, Delete
Task: Create, Update,ReadOne, ReadAll, Delete
GET -> GET DATA
POST -> SAVE DATA
PUT -> UPDATE DATA
DELETE -> DELETE DATA
*/
app.get('/lists',(req,res)=>{
    List.find({})
        .then(lists => res.send(lists))
        .catch((error)=>console.log(error));
}); //http://localhost:3000/lists -> [{lists}]
app.get('/lists/:listId',(req,res)=>{
    List.find({_id: req.params.listId})
        .then(list => res.send(list))
        .catch((error)=>console.log(error));
}); 

app.post('/lists',(req,res)=>{
    List.create({'title': req.body.title})
    .then((list)=>res.send(list))
    .catch((error)=>console.log(error));
});

app.patch('/lists/:listId',(req,res)=>{
    List.findOneAndUpdate({_id: req.params.listId},{$set:req.body})
        .then(list => res.send(list))
        .catch((error)=>console.log(error));
});

app.delete('/lists/:listId',(req,res)=>{
    const deleteTasks = (list) =>{
        Task.deleteMany({_listId:list._id})
            .then((list)=>list)
            .catch((error)=>console.log(error));
    }
    List.findOneAndDelete({_id: req.params.listId})
        .then(list => {
            deleteTasks(list);
            res.send(list)
        })
        .catch((error)=>console.log(error));
});
/*???????????? Task */
app.get('/lists/:listId/tasks/',(req,res)=>{
    Task.find({_listId:req.params.listId})
        .then(tasks => res.send(tasks))
        .catch((error)=>console.log(error));
}); 
app.get('/lists/:listId/tasks/:taskId',(req,res)=>{
    Task.find({_listId: req.params.listId,_id: req.params.taskId})
        .then(task => res.send(task))
        .catch((error)=>console.log(error));
}); 

app.post('/lists/:listId/tasks',(req,res)=>{
    Task.create({'title': req.body.title,'_listId':req.params.listId})
    .then((task)=>res.send(task))
    .catch((error)=>console.log(error));
});

app.patch('/lists/:listId/tasks/:taskId',(req,res)=>{
    Task.findOneAndUpdate({_listId: req.params.listId,_id: req.params.taskId},{$set:req.body})
        .then(task => res.send(task))
        .catch((error)=>console.log(error));
});

app.delete('/lists/:listId/tasks/:taskId',(req,res)=>{
    Task.findOneAndDelete({_listId: req.params.listId,_id: req.params.taskId})
        .then(task => res.send(task))
        .catch((error)=>console.log(error));
});
app.listen(3000, ()=> console.log('Server is Connected on port 3000'));