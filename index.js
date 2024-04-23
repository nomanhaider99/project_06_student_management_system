import inquirer from "inquirer";
import chalk from "chalk";
let querries = await inquirer.prompt([
    {
        type: "string",
        name: "student_name",
        message: "Enter your name: "
    }
]);
console.log(querries);
let digit_1 = Math.floor(Math.random() * 10);
let digit_2 = Math.floor(Math.random() * 10);
let digit_3 = Math.floor(Math.random() * 10);
let digit_4 = Math.floor(Math.random() * 10);
let digit_5 = Math.floor(Math.random() * 10);
let randomRollNumber = [digit_1, digit_2, digit_3, digit_4, digit_5];
let uniqueId = randomRollNumber.join("");
let profile = {
    name: querries.student_name,
    id: uniqueId
};
let myBalance = 300;
const enrollInCourses = async () => {
    let enroll = await inquirer.prompt([
        {
            type: "list",
            name: "courses",
            message: "Select courses: ",
            choices: ["Full Stack Development using Next JS", "Python Development", "Mongodb Database Mastery"]
        }
    ]);
    console.log(enroll);
    const fsnjc = async () => {
        console.log(chalk.cyanBright("FULL STACK DEVELOPMENT USING NEXT JS "));
        console.log(chalk.greenBright("Course Fee:  "), chalk.redBright("100$"));
        let Confirm = await inquirer.prompt([
            {
                type: "confirm",
                name: "ask",
                message: "Are you sure want to join this course: "
            }
        ]);
        console.log(Confirm);
        if (Confirm.ask) {
            console.log("You have subscribed to this course!");
            console.log(`${chalk.cyanBright("Balance")}: ${(chalk.greenBright(myBalance - 100))}`);
        }
        else {
            console.log("You have leave the subscription page!");
        }
    };
    const pd = async () => {
        console.log(chalk.cyanBright("PYTHON DEVELOPMENT"));
        console.log(chalk.greenBright("Course Fee:  "), chalk.redBright("50$"));
        let Confirm2 = await inquirer.prompt([
            {
                type: "confirm",
                name: "ask2",
                message: "Are you sure want to join course: "
            }
        ]);
        console.log(Confirm2);
        if (Confirm2.ask) {
            console.log("You have subscribed to this course!");
            console.log(`${chalk.cyanBright("Balance")}: ${(chalk.greenBright(myBalance - 50))}`);
        }
        else {
            console.log("You have leave the subscription page!");
        }
    };
    const mdm = async () => {
        console.log(chalk.cyanBright("MONGODB DATABASE MASTERY"));
        console.log(chalk.greenBright("Course Fee:  "), chalk.redBright("35$"));
        let Confirm3 = await inquirer.prompt([
            {
                type: "confirm",
                name: "ask3",
                message: "Are you sure want to join course: "
            }
        ]);
        console.log(Confirm3);
        if (Confirm3.ask3) {
            console.log("You have subscribed to this course!");
            console.log(`${chalk.cyanBright("Balance")}: ${(chalk.greenBright(myBalance - 35))}`);
        }
        else {
            console.log("You have leave the subscription page!");
        }
    };
    switch (enroll.courses) {
        case "Full Stack Development using Next JS":
            if (myBalance >= 100) {
                fsnjc();
            }
            break;
        case "Python Development":
            if (myBalance >= 50) {
                pd();
            }
            break;
        case "Mongodb Database Mastery":
            if (myBalance >= 35) {
                mdm();
            }
            break;
    }
};
const ptf = async () => {
    console.log(chalk.greenBright("Tution Fee: "), chalk.cyanBright(125));
    let payFee = await inquirer.prompt([
        {
            type: "confirm",
            name: "ask",
            message: "Are you sure want to pay tution fee: "
        }
    ]);
    console.log(payFee);
    if (payFee.ask) {
        console.log(chalk.cyanBright("Transaction Successful! You have payed your tution fee!"));
        console.log(`${chalk.cyanBright(chalk.cyanBright("Balance: "))}  ${chalk.greenBright(myBalance - 125)}`);
    }
    else {
        console.log("You have leaved the transaction fee!");
    }
};
let querry2 = await inquirer.prompt([
    {
        type: "list",
        name: "view",
        message: "What Do you want to do: ",
        choices: ["show status", "balance", "Pay tution fee", "enroll"]
    }
]);
console.log(querry2);
switch (querry2.view) {
    case "show status":
        console.log(profile);
        break;
    case "balance":
        console.log(`${chalk.greenBright("Balance: ")} ${chalk.cyanBright(myBalance)}`);
        break;
    case "enroll":
        console.log(enrollInCourses());
    case "Pay tution fee":
        console.log("payed");
}
