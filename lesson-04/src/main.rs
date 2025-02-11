fn main() {
    // let x = 5; // immutability error, it is neccessary to add the `mut` in front of the variable name
    let mut x = 5;
    println!("The value of x is: {x}.");

    x = 6;
    println!("The value of x is: {x}.");

    const THREE_HOURS_IN_SECONDS: u32 = 60 * 60 * 3; // when defining constraints, utilize uppercases and underscores
    println!("Three hours in seconds is: {THREE_HOURS_IN_SECONDS}.");

    let y = 5;
    let y = y + 1;

    {
        let y = y * 2;
        println!("The value of y in the inner scope is: {y}."); // Third let statement shadows `y` and creates a new variable
    }

    // Shadwoing is different, because we will receive an error if we don't use the `let` keyword
    // ==> upon using `let` we can perform a few transformations on a value, regardless if it's immutable

    println!("The value of y is: {y}.");

    // Difference between `mut` and shadowing is if we try to reassing a value without using the `let` keyword, we will get a compile-time error
    // The other difference is upon using shadowing, we can change the type of the value and reuse the same name
}
