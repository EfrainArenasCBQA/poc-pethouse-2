export type PetStatus = 'available' | 'adopted'

export type Species = 'dog' | 'cat'

export type Size = 'small' | 'medium' | 'large'

export type Pet = {
  id: string
  name: string
  description: string
  weightKg: number
  species: Species
  breed: string
  size: Size
  photo?: string
  emoji?: string
  status: PetStatus
}

const sample: Pet[] = [
  {
    id: 'dog-1',
    name: 'Rex',
    description: 'Un perro juguetón y amigable.',
    weightKg: 18,
    species: 'dog',
    breed: 'Labrador',
    size: 'medium',
  photo: 'https://picsum.photos/seed/dog-1/800/600',
  emoji: '🐶',
    status: 'available'
  },
  {
    id: 'cat-1',
    name: 'Mia',
    description: 'Gatita tranquila que ama los mimos.',
    weightKg: 4.2,
    species: 'cat',
    breed: 'Siamés',
    size: 'small',
  photo: 'https://picsum.photos/seed/cat-1/800/600',
  emoji: '🐱',
    status: 'adopted'
  },
  {
    id: 'dog-2',
    name: 'Bruno',
    description: 'Activo y buen compañero para correr.',
    weightKg: 24,
    species: 'dog',
    breed: 'Pastor Alemán',
    size: 'large',
  photo: 'https://picsum.photos/seed/dog-2/800/600',
  emoji: '🦮',
    status: 'available'
  },
  {
    id: 'cat-2',
    name: 'Luna',
    description: 'Juguetona y curiosa.',
    weightKg: 3.8,
    species: 'cat',
    breed: 'Europeo',
    size: 'small',
  photo: 'https://picsum.photos/seed/cat-2/800/600',
  emoji: '😺',
    status: 'available'
  }
]

export const Pet = {
  sampleData: sample,
}

export default Pet
