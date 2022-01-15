// 1. Calculate the day rate given an hourly rate
function dayRate(hourlyRate) {
  return hourlyRate * 8;
}

console.log(dayRate(89)); // 712

// 2. Calculate the number of workdays given a fixed budget
function daysInBudget(fixedBudget, hourlyRate) {
  return Math.round(fixedBudget / dayRate(hourlyRate));
}

console.log(daysInBudget(20000, 89));

// 3. Calculate the discounted rate for large projects
function discount(value, percentage) {
  return (value * percentage) / 1;
}

function priceWithMonthlyDiscount(hourlyRate, projectSpan, discountRate) {
  const months = Math.trunc(projectSpan / 22);
  const total = dayRate(hourlyRate) * projectSpan;
  const cashDiscount =
    discount(dayRate(hourlyRate) * 22, discountRate) * months;

  return Math.round(total - cashDiscount);
}

console.log(priceWithMonthlyDiscount(89, 230, 0.42));
