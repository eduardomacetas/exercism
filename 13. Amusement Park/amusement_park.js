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
