// 1. Create a new visitor

function createVisitor(name, age, ticketId) {
  let visitor = {
    name: name,
    age: age,
    ticketId: ticketId,
  };

  return visitor;
}

console.log(createVisitor("Verena Nardi", 45, "H32AZ123")); // => { name: 'Verena Nardi', age: 45, ticketId: 'H32AZ123' }

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

console.log(revokeTicket(visitor)); // => { name: 'Verena Nardi', age: 45, ticketId: null }

// 3. Determine the ticket status
function ticketStatus(tickets, tickedId) {
  if (tickets[tickedId] === null) {
    return "not sold";
  } else if (!tickets[tickedId]) {
    return "unknown ticked id";
  } else {
    return "sold to " + tickets[tickedId];
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
function ticketStatusV2(tickets, tickedId) {
  if (tickets[tickedId]) {
    return tickets[tickedId];
  } else {
    return "invalid ticket !!!";
  }
}

// const tickets = {
//   '0H2AZ123': null,
//   '23LA9T41': 'Verena Nardi',
// };

console.log(ticketStatusV2(tickets, "23LA9T41")); // => 'Verena Nardi'
console.log(ticketStatusV2(tickets, "0H2AZ123")); // => 'invalid ticket !!!'
console.log(ticketStatusV2(tickets, "RE90VAW7")); // => 'invalid ticket !!!'

// 5. Determine the version of terms and conditions
function gtcVersion(visitor) {
  if (visitor.gtc?.version) return visitor.gtc.version;
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
