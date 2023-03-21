class TicketManager
{
    events = []
    #priceBase = 10;
    idAuto=1;


    getEvents()
    {
        return this.events
    }

    addEvents(event)
    {
        const{ name, place,price,amount} =event;
        this.events.push({ ... event, 
            prince:price+0.15, 
            date:new Date(),
            participants:[],
            id:this.idAuto
        });

        this.idAuto= this.idAuto +1

    }

    addUser(eventID, user)
    {
        const event = this.events.find((event)=>event.id === eventID);




        if (!event)
        {
            throw Error ('No existe el evento')
        }

        const userExist= event.participants.find((participant)=>participant.id === user.id)

        if(!userExist)
        {
            event.participants.push(user)
        }

    }

    ponerEventoEnGira(eventId, newPlace, newData)
    {
        const event= this.events.find ((event) => event.id=== eventId);
        const newEvent = {...event, id: this.idAuto, place: newPlace, date:new Date()};
        this.events.push(newEvent);
    }
}

const ticketManager = new TicketManager();

ticketManager.addEvents({name:'Aquasol', price:20});
ticketManager.addUser(1,{name:'Nathan',id:1})

ticketManager.addEvents({name:'Aquasol2', price:30});
ticketManager.addUser(2,{name:'martin',id:1})

console.log(ticketManager)