use std::io; // input/output library used for obtaining user input and output

fn main(){
    println!("Guess the number!");
    println!("Please input your guess.");

    let mut guess = String::new(); // variables are immutable by default (once a value is given, it won't change)

    io::stdin() // handles user inputs
        .read_line(&mut guess) // receives the user input, `&mut guess` tells what string to store the user input in
        .expect("Failed to read line");

    println!("You guessed: {}", guess);
}