const dotenv = require('dotenv').config({ path:('.env') })
const mongoose = require('mongoose');
;
const User = require('./models/user');
//Connecting to Database:
mongoose
.connect(process.env.MONGO_URL)
.catch(() => {console.log("Database Not Connected");process.exit()})


// Add User:

const addUser = user => {
   User.create(user)
   .then(()=>{
    console.log("User Added");    
   })
   .catch(err=>{
    console.log("User did not added");
    console.log(err.message);
   })
   .finally(()=>{
    process.exit();
   })
}

//Find Customer

const findUser = (name) => {
    //Make case insensitive:
    const search = new RegExp(name,'i');

    User.find({$or:[{firstname:search},{lastname:search}]})
    .then(user=>{        
        console.info(user);
        console.info(`${user.length} matches`);
    })
    .catch(err=>{
        console.log("Did not found the Customer");        
        console.log(err.message)}
    )
    .finally(()=>process.exit())



}

//update Customer:

const updateUser = (_id,user) => {
    User.updateOne({_id},user)
    .then(user=>{
        console.log("Users Updated");
    })
    .catch((err)=> {
        console.log("User Not Updated");
        console.log(err.message);
    })
    .finally(()=>process.exit());
    
}


//remove Customer:

const removeUser = (_id) => {
    User.deleteOne({_id})
    .then(user=>{
        console.log("User Removed");
        process.exit();
    })
    .catch(err=>{
        console.log("User Not Removed");
        console.log(err.message);
    })
    .finally(()=>process.exit())
    
}


// List all Customer:

const listUsers = () => {
    User.find()
    .then(users=>{
        console.info(users);
        console.info(`${customer.length} users`)
        process.exit();
    })
    .catch(err=>{
        console.log("Can't List the Users");
        console.log(err.message);
    })
    .finally(()=>process.exit());
}



 
 
module.exports = {
    addUser,
    findUser,
    listUsers,
    removeUser,updateUser
}