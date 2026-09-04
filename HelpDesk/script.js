function Bilet(props) {
    return (
    <article className="ticket">
        <h2>{props.title}</h2>
 
        <p>Sala: {props.room}</p>
        <p>Priorytet: {props.priority}</p>
        <p>Status: {props.status}</p>
    </article>
    );
}
 
function App() {
    return (
        <main className="container">
 
            <Ticket
            title="Problem z monitorem"
            room="10"
            priority="średni"
            status="otwarte"
            />
        </main>
    );
}
 
 
 
const tickets = [
    {
        id: 1,
        title: "Nie działa mi konto ucznia",
        room: "12",
        priority: "high",
        status: "open",
    },
    {
        id: 2,
        title: "Problem z monitorem",
        room: "10",
        priority: "medium",
        status: "open",
    }
];
 
function App() {
 
}
function getPriorityName(priority) {
    const names = {
        high: "wysoki",
        medium: "średni",
        low: "niski"
    };
 
    return names[priority] ?? "nieznany";
}
 
function getStatusName(status) {
    const names = {
        open: "otwarte",
        progress: "w realizacji",
        closed: "zamknięte"
    };
 
    return names[status] ?? "nieznany";
}
 
function Ticket(props) {
    return (
        <article className="ticket">
            <h2>{props.title}</h2>
 
            <p>Sala: {props.room}</p>
            <p>Priorytet: {getPriorityName(props.priority)}</p>
            <p>Status: {getStatusName(props.status)}</p>
        </article>
    );
}
 
function App(){
    return (
        <main className="container">
            <section className="ticket-list">
                {tickets.map(ticket => (
                    <Ticket
                        key={ticket.id}
                        title={ticket.title}
                        room={ticket.room}
                        priority={ticket.priority}
                        status={ticket.status}
                    />
                ))}
            </section>
 
        </main>
    );
}
 
 
function getPriorityName(priority) {
    const names = {
        high : "wysoki",
        medium: "sredni",
        low : "niski"
    }
 
    return name[status] ?? "nieznany"
}
 
function getStatusName(status) {
    const names = {
        open: "otwarte",
        progress: "w realizacji",
        closed: "zamkniete"
    }
 
    return names[status] ?? "nieznany";
}
 
function Ticket({ticket}) {
    return (
        <article className = "ticket">
            <span className="ticket-id">#{ticket.id}</span>
        <div>
            <h3 className="ticket-title">{ticket.title}</h3>
            <div className="ticket-meta"></div>
            <span>{ticket.room}</span>
            <span>Priorytet: {getPriorityName(ticket.priority)} </span>
        </div>
        <div className="ticket-badge">
            <span className={'badge priority-${ticket.priority}'}>
                {getPriorityName(ticket.priority)}
            </span>
            <span className={'badge status-${ticket.status}'}>
                {getStatusName(ticket.status)}
            </span>
        </div>
    </article>
       
   
   
    );
}
 
function TicketList({items}) {
    if (items.length === 0) {
        return <div className="empty-state">Brak zgłoszeń.</div>
    }
 
    return (
        <div className="ticket-list">
            {items.map(ticklet) => }
            <Ticket key ={ticket.id} ticket={ticket}>
        </div>
       
    );
}
const root = ReactDOM.createRoot(
    document.querySelector("#root")
);
 
root.render(<App/>);