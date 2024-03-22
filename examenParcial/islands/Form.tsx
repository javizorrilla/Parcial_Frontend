import { useState } from "preact/hooks";
import { FunctionComponent } from "preact";

type Error = {
  error: boolean;
  msg: string;
}

const Form: FunctionComponent = () => {
  const [name, setEmptyName] = useState<string>("");
  const [email, setEmptyEmail] = useState<string>("");
  const [contacts, setContacts] = useState<string[]>([])

  return (
    <div class="display">
        <h2>Add new contact</h2>
        <input
          onInput={(event) => setEmptyName(event.currentTarget.value)}
          type="text"
          name="Name"
          placeholder="Name"
          value={name}
        />
        <br/>

        <input
          onInput={(event) => setEmptyEmail(event.currentTarget.value)}
          type="email"
          name="Email"
          placeholder="Email"
          value={email}
        />
        <br/>
        <button
        onClick={(event) => {
          event.preventDefault();
        }}
        >Add contact</button>
        {!email && <p class="errorSubmit">Invalid contact. A field is empty, email is invalid, or the email is already in use.</p>}
        
    </div>
  );
};

export default Form;
