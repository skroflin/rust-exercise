fn main() {
    // let guess: u32 = "42".parse().expect("Not a number!");

    let x = 2.0; // f64 => double precision

    let y: f32 = 3.0; // f32 => single-precision float

    let i = 5;
    let j = 10;
    let g = 32;

    let sum = i + j;
    let difference = j - i;
    let product = i * j;
    let quotient = j / i;
    let remainder = g % i;

    println!("The result of sum is: {sum}.");
    println!("The result of difference is: {difference}.");
    println!("The result of product is: {product}.");
    println!("The result of quotient is: {quotient}.");
    println!("The result of remainder is: {remainder}.");

    let c = 's';
    let d: char = 'S';
    // let comparison = c + d;

    println!("Variable c: {c} and d: {d}.");
    // println!("Variable comparison: {comparison}."); // cannot add char to char

    let tup: (i32, f64, u8) = (500, 6.4, 1);
    // tuple is a general way of grouping together a number of values with variety of types into one compound type

    let tup = (500, 6.4, 1);
    let(x, z, y) = tup;
    println!("The value of y is: {y}"); // the variable `tup` binds to entire tuple because a tuple is considered a single compound element

    let x: (i32, f64, u8) = (500, 6.4, 1);
    let five_hundred = x.0;
    let six_point_four = x.1;
    let one = x.2;
    // This program creates the tuple `x` an then accesses each element of the tuple using their respective indices
}

// If unsure of what integer to use, Rust's defaults are a good place to start ==> `i32`
