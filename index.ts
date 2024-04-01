#! /usr/bin/env node

import inquirer from "inquirer";
let burgur = [];
let condition = true;

while (condition){
    let order = await inquirer.prompt
    (
        [
            {
                name: "burgur",
                type: "input",
                message: "What do you want in your burgur?",
    
            },
            
            {
                name: "addMore",
                type: "confirm",
                message: "Do you want to add more burgur?",
                default:   "false"
            }
            
        ]
    );
    burgur.push(order.burgur);
    condition = order.addMore;
    console.log(burgur);
                

}


