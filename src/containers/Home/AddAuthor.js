import React, { useState } from 'react'
import PropTypes from 'prop-types'

const AddAuthor = ({ onAddAuthor }) => {
  const [newAuthor, setNewAuthor] = useState({
    firstName: '',
    lastName: '',
    numBooksPublished: '',
  })
  // let firstName = ''
  // let lastName = ''
  // let numBooksPublished = 0

  const addAuthor = e => {
    e.preventDefault()
    onAddAuthor({
      variables: {
        added: {
          firstName: newAuthor.firstName,
          lastName: newAuthor.lastName,
          numBooksPublished: newAuthor.numBooksPublished,
        },
      },
    })
    setNewAuthor({
      firstName: '',
      lastName: '',
      numBooksPublished: '',
    })
  }

  const handleChange = (value, field) => {
    const newObj = {
      firstName: newAuthor.firstName,
      lastName: newAuthor.lastName,
      numBooksPublished: newAuthor.numBooksPublished,
    }
    newObj[field] = value
    setNewAuthor(newObj)
  }

  return (
    <form onSubmit={addAuthor}>
      <input
        type="text"
        placeholder="First name"
        name="firstName"
        value={newAuthor.firstName}
        onChange={e => {
          handleChange(e.target.value, 'firstName')
        }}
      />
      <input
        type="text"
        placeholder="Last name"
        id="lastName"
        value={newAuthor.lastName}
        onChange={e => {
          handleChange(e.target.value, 'lastName')
        }}
      />
      <input
        type="number"
        placeholder="# books published"
        id="numBooksPublished"
        value={newAuthor.numBooksPublished}
        onChange={e => {
          const num = parseInt(e.target.value, 10)
          handleChange(num, 'numBooksPublished')
        }}
      />
      <button type="submit">Submit</button>
    </form>
  )
}

AddAuthor.propTypes = {
  onAddAuthor: PropTypes.func.isRequired,
}

export default AddAuthor
