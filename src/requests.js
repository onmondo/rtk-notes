const baseUrl = 'http://localhost:3001/notes'

export const getNotes = async () => {
  const response = await fetch(baseUrl)
  if (!response.ok) {
    throw new Error('Failed to fetch notes')
  }

  return await response.json()
}

export const createNote = async ({ content }) => {
  const DEFAULT_IMPORTANCE = false;
  const response = await fetch(baseUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ content, important: DEFAULT_IMPORTANCE })
  })

  if (!response.ok) {
    throw new Error('Failed to create new note')
  }

  return await response.json()
}

export const updateNote = async (note) => {
  const response = await fetch(`${baseUrl}/${note.id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(note)
  })

  if (!response.ok) {
    throw new Error('Failed to update note')
  }

  return await response.json()
}
