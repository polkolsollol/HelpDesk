function Ticket(props) {
    return (
        <article className="ticket">
            <h2>{props.title}</h2>

            <p>Sala: {props.room}</p>
            <p>Priorytet: {props.priority}</p>
            <p>Status: {props.status}</p>
        </article>
    );
}

function App(){
    return (
        <main className="container">

            <Ticket
                title="Nie działa mi konto ucznia"
                room="12"
                priority="wysoki"
                status="otwarte"
            />

            <Ticket
                title="Problem z monitorem"
                room="10"
                priority="średni"
                status="otwarte"
            />
        
        </main>
    );
}

const root = ReactDOM.createRoot(
    document.querySelector('#root')
);

root.render(<App />);

const ticket = [
    {
        id: 1,
        title: "Nie działa mi konto ucznia",
        room: "12",
        priority: "wysoki",
        status: "otwarte",
    },
    {
        id: 2,
        title: "Problem z monitorem",
        room: "10",
        priority: "średni",
        status: "otwarte",
    }

]