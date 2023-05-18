//The possible outcomes are: rock destroys scissors, scissors cuts paper, paper covers rock and if there is a tie
//the game ends in a draw
//Code breaks the game into four parts - user's choice, computer's choice, compare the two choices and determine the winner and start the program and display the results

//step1 - user should be able to choose 'rock', 'paper', or'scissors' when the game starts. 
//Used const and arrow function syntax. Created a function getUserChioce that takes single parameter input userInput
const getUserChoice = userInput => {
    userInput = userInput.toLowerCase(); //step 2: user can pass in a parameter such as 'Rock' or 'rock'
    //step 3: when getting the user's choice, make sure to check the user typed a valid choice: 'rock', 'paper' or 'scissors'.
    if (userInput === 'rock || userInput' === 'scissors' || userInput === 'paper' || userInput === 'bomb') {
        return userInput
    } else {
        console.log('Error, please type: rock, paper or scissors');
    }
}

//step 4 testing the function by calling it with valid and invalid input and print to console
// console.log(getUserChoice('paper'));
// console.log(getUserChoice('cheese')); 

//step 5 - making computer have a choice
//create new function getComputerChoice. Using Math.random() and Math.floor() to get whole number between 0 & 2
//depending on number - return either 'rock', 'paper' or 'scissors'
const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
};
// step 6: Testing function by calling it multiple times and printing results to console
// step 6: console.log(getComputerChoice());
// step 6: console.log(getComputerChoice());


//step 7: Determining a winner. Created function determineWinner that takes two parameters. This function will compare the two choices d and then return if the human player won, lost or  
const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        return 'This game is a tie!';
    }

//step 8: if the game is not a tie - will need to determine a winner
    if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return "Sorry, computer won!";
        } else {
            return "Congratulations, you won!";
        }
    }

    if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            return "Sorry, computer won!";
        } else {
            return "Congratulations, you won!"
        }
    }
    if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            return "Sorry, computer won!";
        } else {
            return "Congratulations, you won!";
        }
    }
    if (userChoice === 'bomb') {
        return 'Congratulations you won!';
    }
};

//step 11
console.log(determineWinner('rock', 'scissors'));
console.log(determineWinner('paper', 'scissors'));
console.log(determineWinner('rock', 'rock'));

//step 12 - Can start the gamae and log the results
//step 12 - create a function playGame
//step 12 - created variable userChoice equal to result of calling getUserChoice(), passing in either 'rock', 'paper' or 'scissors' as an argument
//for step 14, can replace 'paper'in this code with 'bomb' and run code 
const playGame = () => {
    const userChoice = getUserChoice('paper');
    const computerChoice = getComputerChoice();
    console.log('You threw: ' + userChoice);
    console.log('The computer threw: ' + computerChoice);

//step 13 Determine winner
    console.log(determineWinner(userChoice, computerChoice));
}

//TO START THE GAME, call the playGame() function on the last line of the program
playGame()

//14 make game better by adding secret cheat code. If user types 'bomb' as their choice, make sure they win no matter what.