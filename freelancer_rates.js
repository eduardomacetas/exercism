// More information: https://exercism.org/tracks/javascript/exercises/freelancer-rates

// The daily rate is 8 times the hourly rate;
// A month has 22 billable days.
// If the freelancer bills the project manager per month or more, there is a discount applied.

// 1. Calculate the day rate given an hourly rate
function dayRate(hourlyRate) {
  return hourlyRate * 8;
}

// 2. Calculate the month rate, given an hourly rate and a discount
function monthRate(hourlyRate, discount) {
  const monthRate = dayRate(hourlyRate) * 22;
  return Math.ceil(monthRate - monthRate * discount);
}

// 3. Calculate the number of workdays given a budget, rate and discount
function daysInBudget(budget, rate, discount) {
  return Math.floor(budget / monthRate(rate, discount));
}
