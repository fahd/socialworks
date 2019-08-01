const validate = (values, props) => {
  const errors = {}

  if (!values.eventTitle){
    errors.eventTitle = 'Event title required'
  }
  if (!!values.eventUrl){
    if (!/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/.test(values.eventUrl)){
      errors.eventUrl = 'Enter a correct URL (http://www....) or leave blank'
    }
  }

  if (!!values.eventEmail) {
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.eventEmail)) {
      errors.eventEmail = 'Invalid email address'
    }
  }

  if (!values.eventDescription){
    errors.eventDescription = 'Meta description needed!'
  }

  if (!values.tickets || !values.tickets.length) {
    errors.tickets = { _error: 'You need at least one ticket' }
  } else {
    const ticketsArrayErrors = []
    values.tickets.forEach((ticket, ticketIndex) => {
      const ticketErrors = {}
      if (!ticket || !ticket.type) {
        ticketErrors.type = 'Please enter an event type'
        ticketsArrayErrors[ticketIndex] = ticketErrors
      }
      if (!ticket || !ticket.quantity) {
        ticketErrors.quantity = 'Please enter a number'
        ticketsArrayErrors[ticketIndex] = ticketErrors
      } else if (ticket.quantity && !(/^\d+$/).test(ticket.quantity)){
        ticketErrors.quantity = 'Please enter a valid number'
        ticketsArrayErrors[ticketIndex] = ticketErrors
      }
    })
    if(ticketsArrayErrors.length) {
      errors.tickets = ticketsArrayErrors
    }
  }
  return errors
}

export default validate
