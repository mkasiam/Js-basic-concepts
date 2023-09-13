function totalTicketPrice(ticketNumbers){
    if (ticketNumbers < 100) {
        return ticketNumbers * 100;
    }
    else if(ticketNumbers >= 100 && ticketNumbers < 200){
        const first100Tickets = 100;
        const restTickets = ticketNumbers - 100;
        return first100Tickets * 100 + restTickets * 90;
    }
    else{
        first100Tickets = 100;
        const second100Tickets = 100;
        const remaingTicket = ticketNumbers - 200 ;
        return first100Tickets * 100 + second100Tickets*90 + remaingTicket*70;
    }
}

const ticketNumbers = 500055550;
const totalTicketPriceAmount = totalTicketPrice(ticketNumbers);
console.log("Your total payable amount is : ",totalTicketPriceAmount,"tk");