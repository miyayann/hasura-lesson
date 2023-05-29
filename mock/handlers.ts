import { graphql } from 'msw'
export const handlers = [
  graphql.query('GetUsers', (req, res, ctx) => {
    return res(
      ctx.data({
        users: [
          {
            __typename: 'users',
            id: 'e7caf1da-1dcc-43fe-878a-8339b641b23d',
            name: 'user1',
            created_at: '2023-05-21T00:01:39.210096+00:00',
          },
          {
            __typename: 'users',
            id: '32ec4b16-becd-4ce6-af5e-58ddfad4509a',
            name: 'user2',
            created_at: '2023-05-21T00:01:45.446432+00:00',
          },
          {
            __typename: 'users',
            id: '8dd19261-1250-4604-8582-ea5491b689bd',
            name: 'user3',
            created_at: '2023-05-21T00:02:04.037026+00:00',
          },
        ],
      })
    )
  }),
  graphql.query('GetUserIDs', (req, res, ctx) => {
    return res(
      ctx.data({
        users: [
          {
            __typename: 'users',
            id: 'e7caf1da-1dcc-43fe-878a-8339b641b23d',
          },
          {
            __typename: 'users',
            id: '32ec4b16-becd-4ce6-af5e-58ddfad4509a',
          },
          {
            __typename: 'users',
            id: '8dd19261-1250-4604-8582-ea5491b689bd',
          },
        ],
      })
    )
  }),
  graphql.query('GetUserById', (req, res, ctx) => {
    const { id } = req.variables
    if (id === 'e7caf1da-1dcc-43fe-878a-8339b641b23d') {
      return res(
        ctx.data({
          users_by_pk: {
            __typename: 'users',
            id: 'e7caf1da-1dcc-43fe-878a-8339b641b23d',
            name: 'user1',
            created_at: '2023-05-21T00:01:39.210096+00:00',
          },
        })
      )
    }
    if (id === '32ec4b16-becd-4ce6-af5e-58ddfad4509a') {
      return res(
        ctx.data({
          users_by_pk: {
            __typename: 'users',
            id: '32ec4b16-becd-4ce6-af5e-58ddfad4509a',
            name: 'user2',
            created_at: '2023-05-21T00:01:45.446432+00:00',
          },
        })
      )
    }
    if (id === '8dd19261-1250-4604-8582-ea5491b689bd') {
      return res(
        ctx.data({
          users_by_pk: {
            __typename: 'users',
            id: '8dd19261-1250-4604-8582-ea5491b689bd',
            name: 'user3',
            created_at: '2023-05-21T00:02:04.037026+00:00',
          },
        })
      )
    }
  }),
]