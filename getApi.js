const express = require('express');
const dbConnect = require('./connect');
const app = express();
const mongodb = require('mongodb')
app.use(express.json());


app.get('/', async (req, res) => {

    let data = await dbConnect();
    data = await data.find().toArray();
    console.log(data);
    res.send(data);
});



app.post('/', async (req, res) => {
    try {
        const data = await dbConnect();
        if (!data) {
            throw new Error('Database connection not established');
        }

        const result = await data.insert(req.body); 
        res.send("done");// Use insertOne for a single document

        if (result.insertedCount === 1) {
            res.status(201).send('Data inserted successfully');
        } else {
            throw new Error('Failed to insert data');
        }
    } catch (error) {
        console.error(error);
       
    }
});


app.put('/:name' , async(req , res)=> {
    let data = await dbConnect();
    let result = await data.updateOne(
        {name:req.params.name},
        {$set:req.body}
    )
    console.log(req.params.name)
    res.send({result:"updated"})  
})

app.delete('/:id' , async(req, res)=>{
    let date = await dbConnect();
    let result = await data.deleteOne({_id: new mongodb.ObjectId(req.params.id)})
    console.log(req.params.id)
    res.send(result);
})


const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
