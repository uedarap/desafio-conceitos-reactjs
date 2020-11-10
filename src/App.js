import React, {useEffect, useState} from "react";
import api from "./services/api"

import "./styles.css";

function App() {
  const [rep, setRep] = useState([]);

  useEffect(() => {
    api.get('/repositories').then(response => {
      setRep(response.data);
    })
  }, [])

  async function handleAddRepository() {
    // TODO
    const response = await api.post('/repositories', {
      title: 'Raphael Ueda',
      url: 'youtube.com',
      techs: ['ReactJs', 'NodeJs']
    })

    setRep([ ...rep, response.data])
    console.log(response)
  }

  async function handleRemoveRepository(id) {
    // TODO
    await api.delete(`repositories/${id}`, )

    setRep(rep.filter(repository => repository.id !== id))
  }

  

  return (
    <div>
      <ul data-testid="repository-list">
        {rep.map(repository => (
          <li key={repository.id}>
          {repository.title}

          <button onClick={() => handleRemoveRepository(repository.id)}>
            Remover
          </button>
        </li>
        ))}
      </ul>

      <button onClick={handleAddRepository}>Adicionar</button>
    </div>
  );
}

export default App;
