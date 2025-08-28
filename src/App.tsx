import React, { useState } from 'react'
import { Pet, PetStatus } from './data/pets'
import PetCard from './components/PetCard'

const App: React.FC = () => {
  const [pets, setPets] = useState<Pet[]>(Pet.sampleData)

  const toggleStatus = (id: string) => {
    setPets((prev) => prev.map(p => p.id === id ? { ...p, status: p.status === 'available' ? 'adopted' : 'available' } : p))
  }

  return (
    <div className="app">
      <header>
        <h1>Pethouse - Catálogo de mascotas (POC)</h1>
        <p>Personal: ver y cambiar estado de adopción</p>
      </header>

      <main>
        <section className="controls">
          <span>Total: {pets.length}</span>
          <span>En adopción: {pets.filter(p => p.status === 'available').length}</span>
          <span>Adoptadas: {pets.filter(p => p.status === 'adopted').length}</span>
        </section>

        <section className="grid">
          {pets.map(p => (
            <PetCard key={p.id} pet={p} onToggle={() => toggleStatus(p.id)} />
          ))}
        </section>
      </main>

      <footer>
        <small>POC - Solo frontend</small>
      </footer>
    </div>
  )
}

export default App
