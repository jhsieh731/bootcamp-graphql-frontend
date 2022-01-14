import React from 'react'
import { useQuery, useMutation } from '@apollo/react-hooks'
import { GET_AUTHORS, ADD_AUTHOR } from './graphql'
import AddAuthor from './AddAuthor'

const Home = () => {
  // const [author, setAuthor] = useState[0]
  let list = 0
  const { data: queryData } = useQuery(GET_AUTHORS, {
    partialRefetch: true,
  })

  const buildList = authors => {
    // console.log(authors)
    const auths = authors.map(auth => {
      const fullName = `${auth.firstName} ${auth.lastName}`
      return (
        <li key={auth.id}>
          <p>
            {fullName}
          </p>
        </li>
      )
    })
    return auths
  }

  if (queryData) {
    list = buildList(queryData.authors)
    // setAuthor(list)
  }

  const [addAuthor, { error }] = useMutation(ADD_AUTHOR, {
    refetchQueries: () => [{ query: GET_AUTHORS }],
    // eslint-disable-next-line consistent-return
    // update: (client, { data: { addedAuthor } }) => {
    //   try {
    //     const data = client.readQuery({ query: GET_AUTHORS })

    //     data.authors = [...data.authors, addedAuthor]

    //     client.writeQuery({ query: GET_AUTHORS, data })
    //     // return null
    //   } catch (err) {
    //     if (err) {
    //       return (
    //         <p>{err.graphQLErrors[0].message}</p>
    //       )
    //     }
    //   }
    // },
  })

  if (error) return `Submission error! ${error.message}`

  return (
    <div>
      <p>Welcome to the DEV React starter!</p>
      <p>List of authors:</p>
      <ul>
        {list}
      </ul>
      <p>Add your own author:</p>
      <AddAuthor onAddAuthor={addAuthor} />
    </div>
  )
}


export default Home
