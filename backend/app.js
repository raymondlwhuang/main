const express = require('express');
const app = express();

const moogoose = require('./database/mongoose');

const List = require('./database/models/list');
const Task = require('./database/models/task');
const Crud = require('./database/models/crud');
const Demo = require('./database/models/demo');

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
// Crud
app.get('/api/cruds',(req,res)=>{
    Crud.find({})
        .then(cruds => res.send(cruds))
        .catch((error)=>console.log(error));
}); 

app.get('/api/cruds/:crudId',(req,res)=>{
    Crud.find({id: req.params.crudId})
        .then(crud => res.send(crud))
        .catch((error)=>console.log(error));
}); 

app.post('/api/cruds',(req,res)=>{
    Crud.create({'id': req.body.id,'name': req.body.name,'description': req.body.description})
    .then((crud)=>res.send(crud))
    .catch((error)=>console.log(error));
});

app.patch('/api/cruds/:crudId',(req,res)=>{
    Crud.findOneAndUpdate({id: req.params.crudId},{$set:req.body})
        .then(crud => res.send(crud))
        .catch((error)=>console.log(error));
});

app.delete('/api/cruds/:crudId',(req,res)=>{
    Crud.findOneAndDelete({id: req.params.crudId})
        .then(crud => res.send(crud))
        .catch((error)=>console.log(error));
});
app.delete('/api/cruds',(req,res)=>{
    Crud.deleteMany({})
    .then(crud => res.send(crud))
    .catch((error)=>console.log(error));

});
/* demos */
app.get('/api/demos',(req,res)=>{
    Demo.find({})
        .then(demos => res.send(demos))
        .catch((error)=>console.log(error));
}); 
app.get('/api/demos/:demosId',(req,res)=>{
    Demo.find({id: req.params.demosId})
        .then(demo => res.send(demo))
        .catch((error)=>console.log(error));
}); 

app.post('/api/demos',(req,res)=>{
    Demo.create({
        'id': req.body.id,
        'group': req.body.group,
        'name': req.body.name,
        'snips': req.body.snips,
        'helpPath':req.body.helpPath,
        'outputs' : req.body.outputs,
        'indicator': req.body.indicator
    })
    .then((demo)=>res.send(demo))
    .catch((error)=>console.log(error));
});

app.patch('/api/demos/:demosId',(req,res)=>{
    Demo.findOneAndUpdate({id: req.params.demosId},{$set:req.body})
        .then(demo => res.send(demo))
        .catch((error)=>console.log(error));
});
app.patch('/api/demos',(req,res)=>{ //set accept to true to make it functionable
    Demo.updateMany({accepted : true})
        .then(demo => res.send(demo))
        .catch((error)=>console.log(error));
});

app.delete('/api/demos/:demosId',(req,res)=>{
    Demo.findOneAndDelete({id: req.params.demosId})
        .then(demo => res.send(demo))
        .catch((error)=>console.log(error));
});
app.delete('/api/demos',(req,res)=>{ //delete all demos
    Demo.deleteMany({})
    .then(demo => res.send(demo))
    .catch((error)=>console.log(error));

})
app.listen(3000, ()=> console.log('Server is Connected on port 3000'));