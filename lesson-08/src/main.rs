fn main() {
    // println!("Hello, world!");
    let num = 3;
    if num < 5{
        println!("Condition is true");
    }else{
        println!("Condition is false");
    }

    let num02 = 3;
    if num02 != 0{
        println!("Number was something other than zero.");
    }

    let num03 = 6;
    if num03 % 4 == 0{
        println!("Number is divisible by 4");
    }else if num03 % 3 == 0{
        println!("Number is divisible by 3");
    }else if num03 % 2 == 0{
        println!("Number is divisible by 2");
    }else{
        println!("Number is not divisible by 2, 3, or 4.");
    }

    // Even though 6 is divisible by 2, but Rust only executes the block for the first `true` condition, after that it won't check the rest

    let mut counter = 0;
    let result = loop {
        counter += 1;

        if counter == 10{
            break counter * 2; // Use `break` to stop the loop
        }
    };
    // We declare a variable and it is initializet to 0, we have a result variable that holds the loop returned value
    // Upon every iteration, we add 1 to the counter variable, then check whether it is equal to 10 and if it is then it stops
    // Afterwards, we multiply the returned counter variable with 2
    println!("The result is {result}.");
}
