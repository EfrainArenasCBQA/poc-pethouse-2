import React from 'react'
import { Pet as PetType } from '../data/pets'

const PetCard: React.FC<{ pet: PetType; onToggle: () => void }> = ({ pet, onToggle }) => {
  return (
    <article className={`card ${pet.species}`}>
      {pet.emoji ? (
        <div className="emoji">{pet.emoji}</div>
      ) : (
        <img src={pet.photo} alt={pet.name} />
      )}
      <div className="card-body">
        <h3>{pet.name} <small>({pet.breed})</small></h3>
        <p className="desc">{pet.description}</p>
        <ul className="meta">
          <li>Peso: {pet.weightKg} kg</li>
          <li>Especie: {pet.species}</li>
          <li>Tamaño: {pet.size}</li>
        </ul>

        <div className="actions">
          <button onClick={onToggle} className={pet.status === 'available' ? 'btn-primary' : 'btn-muted'}>
            {pet.status === 'available' ? 'Marcar como Adoptado' : 'Marcar como En adopción'}
          </button>
          <span className={`status ${pet.status}`}>{pet.status === 'available' ? 'En adopción' : 'Adoptado'}</span>
        </div>
      </div>
    </article>
  )
}

export default PetCard
