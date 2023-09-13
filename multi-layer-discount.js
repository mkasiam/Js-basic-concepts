/* 
1.If ticket numbers is less than 100, per ticket price : 100tk
2.If ticket numbers is more than 100 , but less than 200.
  First 100ticket will be in = 100tk
  and the rest will be in 90 tk per piece.
3.If you purchase more than 200 tickets 
        first 100--> 100tk
        101-3=200 --> 90tk
        200+ ------> 70tk
*/
function calculateTicketPrice(ticketNumbers) {
    if (ticketNumbers < 100) {
      // If ticket numbers are less than 100
      return ticketNumbers * 100; // Per ticket price: 100tk
    } else if (ticketNumbers >= 100 && ticketNumbers < 200) {
      // If ticket numbers are between 100 and 200 (exclusive)
      const first100Tickets = 100; // First 100 tickets priced at 100tk each
      const restTickets = ticketNumbers - 100; // Calculate the number of tickets after the first 100
      const restPrice = restTickets * 90; // Rest of the tickets priced at 90tk each
      return first100Tickets * 100 + restPrice; // Total ticket price
    } else {
      // If ticket numbers are 200 or more
      const first100Tickets = 100; // First 100 tickets priced at 100tk each
      const next100Tickets = 100; // Next 100 tickets priced at 90tk each
      const remainingTickets = ticketNumbers - 200; // Calculate the number of tickets beyond 200
      const remainingPrice = remainingTickets * 70; // Tickets beyond 200 priced at 70tk each
      return first100Tickets * 100 + next100Tickets * 90 + remainingPrice; // Total ticket price
    }
  }
  
  // Example usage
  const ticketNumbers = 999;
  const totalPrice = calculateTicketPrice(ticketNumbers);
  console.log("Total ticket price:", totalPrice + "tk");
  