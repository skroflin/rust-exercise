use rand::Rng; // Rng trait defines methods that random number generators implement
use std::cmp::Ordering;
use std::io; // input/output library used for obtaining user input and output // The `Ordering` is another enum that has variants upon comparing two values

fn main() {
    println!("Guess the number!");

    let secret_number = rand::thread_rng().gen_range(1..=100); // gives us the particular random number generator that we use

    // println!("The secret number is {secret_number}!");

    loop {
        println!("Please input your guess.");

        let mut guess = String::new(); // variables are immutable by default (once a value is given, it won't change)

        io::stdin() // handles user inputs
            .read_line(&mut guess) // receives the user input, `&mut guess` tells what string to store the user input in
            .expect("Failed to read line");

        let guess: u32 = match guess.trim().parse() {
            // switched from `expect` to `match` to move from crashing on an error
            Ok(num) => num,
            Err(_) => continue,
        }; // Shadowing the previous guess value with a new one

        println!("You guessed: {}", guess);

        println!("Please input your guess.");

        match guess.cmp(&secret_number) {
            // `match` is used to decide what to do next based on which variant of Ordering was returned
            Ordering::Less => println!("Too small."),
            Ordering::Greater => println!("Too big."),
            Ordering::Equal => {
                println!("You guessed it. You win!");
                break;
            }
        }
    }
}
