// More information: https://exercism.org/tracks/javascript/exercises/amusement-park

// 1. Create a new visitor
function createVisitor(name, age, ticketId) {
  var visitor = {
    name: name,
    age: age,
    ticketId: ticketId,
  };
  return visitor;
}
console.log(createVisitor("Verena Nardi", 45, "H32AZ123"));
// => { name: 'Verena Nardi', age: 45, ticketId: 'H32AZ123' }

// 2. Revoke the ticket
function revokeTicket(visitor) {
  visitor.ticketId = null;
  return visitor;
}

const visitor = {
  name: "Verena Nardi",
  age: 45,
  ticketId: "H32AZ123",
};
console.log(revokeTicket(visitor));
// => { name: 'Verena Nardi', age: 45, ticketId: null }

// 3. Determine the ticket status
function ticketStatus(tickets, ticketId) {
  switch (tickets[ticketId]) {
    case undefined:
      return "unknown ticket id";
    case null:
      return "not sold";
    default:
      return `sold to ${tickets[ticketId]}`;
  }
}

const tickets = {
  "0H2AZ123": null,
  "23LA9T41": "Verena Nardi",
};

console.log(ticketStatus(tickets, "RE90VAW7")); // => 'unknown ticket id'
console.log(ticketStatus(tickets, "0H2AZ123")); // => 'not sold'
console.log(ticketStatus(tickets, "23LA9T41")); // => 'sold to Verena Nardi'

// 4. Improve the ticket status response
function ticketStatus2(tickets, ticketId) {
  return tickets[ticketId] ? tickets[ticketId] : "invalid ticket !!!";
}

const newTickets = {
  "0H2AZ123": null,
  "23LA9T41": "Verena Nardi",
};

console.log(ticketStatus2(newTickets, "23LA9T41")); // => 'Verena Nardi'
console.log(ticketStatus2(newTickets, "0H2AZ123")); // => 'invalid ticket !!!'
console.log(ticketStatus2(newTickets, "RE90VAW7")); // => 'invalid ticket !!!'

// 5. Determine the version of terms and conditions
function gtcVersion(visitor) {
  return visitor?.gtc?.version;
}

const visitorNew = {
  name: "Verena Nardi",
  age: 45,
  ticketId: "H32AZ123",
  gtc: {
    signed: true,
    version: "2.1",
  },
};

const visitorOld = {
  name: "Verena Nardi",
  age: 45,
  ticketId: "H32AZ123",
};

console.log(gtcVersion(visitorNew)); // => '2.1'
console.log(gtcVersion(visitorOld)); // => undefined
