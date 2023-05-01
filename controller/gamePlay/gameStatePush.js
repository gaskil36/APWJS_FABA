const mongoose = require('mongoose');

const gameState = require('./gameState.js');


//connecting to DB
mongoose.connect('mongodb://127.0.0.1:27017/apwDB');

async function populateUserState(id){
    try{
            //finding scenario with id field
        const gameStatus =  await gameState.create({
                                userID: id,
                                choices: "null"
        });
            console.log(`USER NUMBER: ${id} added to gameState.`);
            console.log(`GAMESTATE: ${gameStatus}`);
            //return user[0].id;

        }catch (err){
            console.log(err.message);
        }
}

module.exports = populateUserState;

