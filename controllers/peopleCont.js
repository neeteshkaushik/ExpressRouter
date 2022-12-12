let {people} = require('../data')

const getPeople = (req,res)=>{
    res.json(people);
}

const createPeople = (req,res)=>{
    const {name} = req.body;
    if(!name){
        return res.status(400).json({success:false,data:"please send a name"});
    }
    people = [...people,{id:people.length + 1,name:name}];
    res.status(200).json({success:true,data:people});
}

const updatePeople = (req,res)=>{
    const {id} = req.params;
    const {name} = req.body;

    const person = people.find(p => p.id === Number(id));

    console.log(id,name);

    if(!person){
        return res.status(400).json({success:false,data:"No person with this id"});
    }

    people.forEach(p => {
        if(p.id === Number(id))
        p.name = name;
    })

    return res.status(200).json({success:true,data:people});
}

const deletePeople = (req,res)=>{
    const {id} = req.params;

    const person = people.find(p => p.id === Number(id));

    if(!person){
        return res.status(400).json({success:false,data:`User with id = ${id} doesn't exist`});
    }

    const list = people.filter(p => p.id !== Number(id));

    people = list;

    res.status(200).json({success:true,data:people});

}

module.exports = {
    getPeople,
    createPeople,
    updatePeople,
    deletePeople
}