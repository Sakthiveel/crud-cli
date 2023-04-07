#!/usr/bin/env node
const program = require('commander');
const { prompt } = require('inquirer');
const { addUser,findUser,removeUser,listUsers,updateUser }  = require('./index');


// Customer Questions
const questions = [
    {
      type: 'input',
      name: 'firstname',
      message: 'User First Name'
    },
    {
      type: 'input',
      name: 'lastname',
      message: 'User Last Name'
    },
    {
      type: 'input',
      name: 'phone',
      message: 'User Phone Number'
    },
    {
      type: 'input',
      name: 'email',
      message: 'User Email Address'
    }
  ];

program
    .version('1.0.0')
    .description("User Managemenet System")


// program
//     .command('add <firstname> <lastname> <phone> <email>')
//     .alias('a')
//     .description('Add a User')
//     .action((firstname,lastname,phone,email) => {
//         addUser({firstname,lastname,phone,email});
//     })


// Add:
program
  .command('add')
  .alias('a')
  .description('Add a Users')
  .action(()=> {
    prompt(questions).then(ans => {
        addUser(ans)
    })
  })

// Find:
program
  .command('find')
  .alias('f')
  .description('Find a Users')

  .action(name=>findUser(name));


//Update:
program
  .command('update')
  .alias('u')
  .description('Update Users')
  .action(_id=>{
    prompt(questions).then(ans=>updateUser(_id,ans))
  })


// Remove:
program
  .command('remove')
  .alias('r')
  .description('Remove a  Users')

  .action(_id=>removeUser(_id));

//list:

program
  .command('list')
  .alias('l')
  .description("List the Users")
  .action(()=> listUsers())



program.parse(process.argv);