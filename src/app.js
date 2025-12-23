function greet(name) {
  return `Hello, ${name}!`;
}

module.exports = greet;

// Run only if executed directly (not when required)
if (require.main === module) {
  console.log(greet("Mohamed"));
}
