// Hardcoded sensitive credentials - Vulnerable Code for Testing
const dbUsername = "admin";
const dbPassword = "password123!"; // Sensitive information hardcoded

function connectToDatabase() {
    console.log(`Connecting to the database with username: ${dbUsername}`);
    // Simulate database connection
    if (dbUsername && dbPassword) {
        console.log("Database connection successful!");
    } else {
        console.log("Database connection failed!");
    }
}

connectToDatabase();
