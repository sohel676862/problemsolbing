// ///Create a new visitor
// function createVisitor(name, age, ticketId) {
//     const object = {
//         name: name,
//         age: age,
//         ticketId: ticketId,
//     };
//     return object;
// }

// createVisitor("Verena Nardi", 45, "H32AZ123");

// //Revoke the ticket////////////////////////////////

// const visitor = { name: 'Anatoli Traverse', age: 34, ticketId: 'AA5AA01D' };
// function revokeTicket(visitor) {

//     if (visitor.ticketId) {
//         visitor.ticketId = null;

//     }
//     return visitor


// }

// // console.log(revokeTicket(visitor))
// //Determine the ticket status

// const tickets = {
//     '0H2AZ123': null,
//     '23LA9T41': 'Verena Nardi',
//   };
// function ticketStatus(tickets, ticketId) {


//     // if (tickets.hasOwnProperty(ticketId)) {
//     //     let nalish=null??tickets[ticketId]
//     //     if (nalish) {
//     //         return `${tickets[ticketId]}`
//     //     }
//     //     return 'invalid ticket !!!'

//     // }
//     // else {

//     //     return 'invalid ticket !!!'
//     // }

//     return tickets[ticketId] ?? 'invalid ticket !!!';

//     ticketStatus(tickets,    '23LA9T41')

///Improve the ticket status response////////////////////////////////


///Determine the version of terms and conditions////////////////////////////////
// const visitorNew = {
//     name: 'Verena Nardi',
//     age: 45,
//     ticketId: 'H32AZ123',
   
//   };

//   console.log(visitorNew.name)
const visitorNew = {
    name: 'Verena Nardi',
    age: 45,
    ticketId: 'H32AZ123',
   
  };

  function gtcVersion(visitor) {

    return visitor?.gtc?.version 
  }

 console.log( gtcVersion(visitorNew))