// Hardcoded sensitive credentials
const dbUsername = "admin";
const dbPassword = "password123!";
console.log(`Database credentials: ${dbUsername}, ${dbPassword}`);

// SQL Injection Vulnerability
function executeQuery(userId) {
    const query = `SELECT * FROM users WHERE id = '${userId}'`; // Vulnerable to SQL Injection
    console.log("Executing query:", query);
}
executeQuery("1 OR '1'='1");

// Cross-Site Scripting (XSS)
function greetUser(name) {
    console.log(`<h1>Hello, ${name}!</h1>`); // Vulnerable to XSS
}
greetUser("<script>alert('XSS');</script>");

// Weak Hashing Algorithm
const crypto = require('crypto');
const password = 'super_secret_password';
const hash = crypto.createHash('md5').update(password).digest('hex'); // Weak hashing algorithm
console.log(`Hashed password using MD5: ${hash}`);

// Insecure Use of eval
const userInput = "console.log('This is insecure code execution');";
eval(userInput); // Insecure use of eval

// Hardcoded API Key
const API_KEY = "12345-ABCDE-SECRET"; // Hardcoded API Key
function makeApiCall() {
    console.log(`Making API call with key: ${API_KEY}`);
}
makeApiCall();
