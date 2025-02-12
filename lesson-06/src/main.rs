fn main() {
    println!("Hello, world!");

    another_function();
}

fn another_function(){
    let message = "Hello, world!";
    println!("Another function that says {message}");

    third_function();
}

fn third_function(){
    let message02 = "Another Hello, world function!";
    println!("{message02}");
}
// We can define a function (e.g. `another_function`) and call it in another function
// We could have defined `another_function()` before the main function, the outcome is the same