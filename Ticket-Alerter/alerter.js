//
//	Root - Ticket Alerter
//
//	Author: Raach 'Unabated' Brian
//
//	Description: This script will alert you of new Tickets.
//
//
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
  Title = Title.substring(Title.indexOf(" ")+1);
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
      document.title = document.title + " ALERT";
      return true;
    } else {
      sessionStorage.setItem("TicketCount",ExtractTicketCount(document.title));
      return false;
    }
  }
}

/*###############################################################################
##				   Execution				       ##
###############################################################################*/

CheckForNewTickets(sessionStorage.getItem("TicketCount"));


//var x = document.getElementsByClassName("collection-as-table");

//document.title = "loaded";



