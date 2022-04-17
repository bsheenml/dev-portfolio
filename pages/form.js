import React, { useState } from 'react';
import axios from 'axios';
import Nav2 from '../components/Nav2';

export const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); // prevent form submit default behavior
    if(!name || !email) return; // if an input field is empty, don't submit the form
    const hubspot_response = await submit_hubspot_form(email, name);
    console.log(hubspot_response); // make sure it succeeded!
  }

  const submit_hubspot_form = async (email, firstname) => {
    const portalId = '8380991'; // example portal ID (not real)
    const formGuid = '38fd0d90-7ec4-4878-8932-40e042654910'; // example form GUID (not real)
    const config = { // important!
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const response = await axios.post(`https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formGuid}`,
      {
        portalId,
        formGuid,
        fields: [
          {
            name: 'firstname',
            value: firstname,
          },
          {
            name: 'email',
            value: email,
          }
        ],
      },
      config
    );
    return response;
    }
  
	
  return (
	  
    <div style={{ padding: '16px' }}>
    <h1>HubSpot Test Form</h1>
      <form onSubmit={handleSubmit}>
        <input
          name='firstname'
          type='text'
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <input
          name='email'
          type='email'
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  )

  }
<Nav2/>
  export default Form;