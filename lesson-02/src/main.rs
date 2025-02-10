fn main() {
    println!("Hello, world!");
}

// With Cargo, the source file is stored inside the `/src` directory
// If a project is created without Cargo, it can be initialized with `cargo init`

// With Cargo, we build our project from the `/project_directory_name` with: `cargo build`
// This command creates a new directory `/target`, where it replicates the `/project_directory_name` and creates the executable file

// We can run the code with `cargo run` --> more convenient than running `cargo build`
// There is also `cargo check` which checks and compiles our code, but doesn't execute it