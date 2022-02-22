function twoFer(name) {
  return name ? `One for ${name}, one for me.` : "One for you, one for me.";
}

console.log(twoFer("Alice"));
console.log(twoFer("Bob"));
console.log(twoFer());
console.log(twoFer("Zaphod"));
