const express = require("express");
const app = express();

app.get("/", (req, res) => {
  const n = req.query.n;
  const answer = primeFactors(n);
  res.send(answer.toString(answer));
});

function primeFactors(n) {
  const factors = [];
  // Check for the number of 2s that divide n
  while (n % 2 === 0) {
    factors.push(2);
    n /= 2;
  }
  // n must be odd at this point, so we can skip even numbers
  for (let i = 3; i * i <= n; i += 2) {
    while (n % i === 0) {
      factors.push(i);
      n /= i;
    }
  }
  // This condition is to check if n is a prime number greater than 2
  if (n > 2) {
    factors.push(n);
  }
  return factors;
}

app.listen(3000);
