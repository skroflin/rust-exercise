fn main() {
    // If you have loops within loops, `break` and `continue` apply to the innermost loop at that point
    // A loop label can be specified, so that it can be utilized with break or continue
    let mut count = 0;
    'counting_up: loop{
        println!("count = {count}");
        let mut remaining = 10;

        loop {
            println!("remaining = {remaining}");
            if remaining == 9{
                break;
            }
            if count == 5 {
                break 'counting_up;
            }
            remaining -=1;
        }
        count += 1;
    }
    println!("End count = {count}.");
    // The inner loop without a label counts down from 10 to 0, the first break that doesn't specify a label will exit the inner loop only
}
