import ContactUserCard from "./ContactUserCard";

function Contacts() {
    return (
        <div className="contact-list">
            <h2>Contacts</h2>
            <ul>
                <ContactUserCard />
                <ContactUserCard />
                <ContactUserCard />
                <ContactUserCard />
            </ul>
        </div>
    )
}

export default Contacts;