import contactUserCard from "./ContactUserCard";

function contactList() {
    return (
        <div>
            <h2>Contacts</h2>
            <ul>
                {contactUserCard};
                {contactUserCard};
                {contactUserCard};
                {contactUserCard};
            </ul>
        </div>
    )
}

export default contactList;