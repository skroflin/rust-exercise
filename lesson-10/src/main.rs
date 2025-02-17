fn main() {
    // let mut num = 3;

    // while num != 0 {
    //     println!("{num}!");

    //     num -= 1;
    // }

    // println!("Liftoff!!!");

    let a = [10, 20, 30, 40, 50, 60, 70];
    // let mut index = 0;

    // while index < 7 {
    //     println!("The value is: {}", a[index]);

    //     index += 1;
    // }

    for element in a {
        println!("The value is: {element}.");
    }

    // The code counts up through the elements in the array (starting from index 0) and loops until it reaches the final index of the array
    // Using for loop increases safety and eliminating chances of bugs

    for num in (1..4).rev() { // `rev()` is used to reverse the range
        println!("{num}!");
    }
    println!("LIFTOFF!!!");
}
