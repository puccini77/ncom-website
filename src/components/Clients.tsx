import React, { useState } from 'react';

const Clients = () => {
    const [clients, setClients] = useState([
        { name: '기쁨병원', logo: 'URL_TO_LOGO_1' },
        { name: '인천기독병원', logo: 'URL_TO_LOGO_2' },
        { name: '하나이비인후병원', logo: 'URL_TO_LOGO_3' }
    ]);

    const [newClient, setNewClient] = useState({ name: '', logo: '' });

    const addClient = () => {
        setClients([...clients, newClient]);
        setNewClient({ name: '', logo: '' });
    };

    return (
        <div>
            <h2>Clients Portfolio</h2>
            <ul>
                {clients.map((client, index) => (
                    <li key={index}>
                        <img src={client.logo} alt={client.name} width="50" />
                        {client.name}
                    </li>
                ))}
            </ul>
            <h3>Add New Client</h3>
            <input
                type="text"
                placeholder="Client Name"
                value={newClient.name}
                onChange={(e) => setNewClient({ ...newClient, name: e.target.value })}
            />
            <input
                type="text"
                placeholder="Logo URL"
                value={newClient.logo}
                onChange={(e) => setNewClient({ ...newClient, logo: e.target.value })}
            />
            <button onClick={addClient}>Add Client</button>
        </div>
    );
};

export default Clients;