fn main() {
    let y = {
        let x = 3;
        x + 1
    };
    println!("The value of y is: {y}.");
    another_function(5);
    third_function("Sven", "Kroflin", 23);
}

fn another_function(x: i32){
    println!("The value of x is: {x}.");
}

fn third_function(name: &str, lastname: &str, age: i32){
    println!("My name is: {name} {lastname} and I am {age} years old.");
} // Function example that uses multiple parameters ==> seperate with commas