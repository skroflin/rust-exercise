fn main() {
    let mut s = String::from("Hello"); // The `::` operator allows namespacing the particular from function under the String type
    // let n = "Sven";
    s.push_str(", Sven");
    println!("{s}");

    let mut s1 = String::from("Hello");
    s1 = String::from("Ahoy!");
    let s2 = s1.clone(); // Upon calling `clone()` some arbitrary code is being executed and that may be expensive 
    println!("s1 = {s1}, s2 = {s2}");
}
 