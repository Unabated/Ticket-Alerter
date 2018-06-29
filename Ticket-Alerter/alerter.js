//
//	Root - Ticket Alerter
//
//	Author: Raach 'Unabated' Brian
//
//	Description: This script will alert you of new Tickets.
//
//	Future plan: Also notify you of Ticket updates.
//
//
//


/*###############################################################################
##				 Declarations				       ##
###############################################################################*/
var sound = new Audio("https://github.com/Unabated/Ticket-Alerter/raw/master/NewTicket.mp3");

/*###############################################################################
##				  Functions				       ##
###############################################################################*/

function ExtractTicketCount(Title) {
  if (Title.indexOf("Found") > -1) {
    Title = Title.substring(Title.indexOf(" ")+1);
  }
  Title = Title.substring(0,Title.indexOf(" "));
  return Title;
};

function CheckForNewTickets(TicketCount){
  if (TicketCount == null) {
    sessionStorage.setItem("TicketCount",ExtractTicketCount(document.title));
  } else {
    if (ExtractTicketCount(document.title) > TicketCount) {
      sound.play();
      sessionStorage.setItem("TicketCount",ExtractTicketCount(document.title));
      if (ExtractTicketCount == 1) {
        document.title = ExtractTicketCount(document.title) + ' Ticket';
      } else {
        document.title = ExtractTicketCount(document.title) + ' Tickets';
      }
      return true;
    } else {
      sessionStorage.setItem("TicketCount",ExtractTicketCount(document.title));
      if (ExtractTicketCount == 1) {
        document.title = ExtractTicketCount(document.title) + ' Ticket';
      } else {
        document.title = ExtractTicketCount(document.title) + ' Tickets';
      }
      return false;
    }
  }
}

/*###############################################################################
##				   Execution				       ##
###############################################################################*/

CheckForNewTickets(sessionStorage.getItem("TicketCount"));


//var x = document.getElementsByClassName("collection-as-table");
//25th item is the last updated information.

//document.title = "loaded";



