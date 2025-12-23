function greet(name) {
  return `Hello master ${name}`;
}

module.exports = greet;

if (require.main == module) console.log(greet(mohamed));
