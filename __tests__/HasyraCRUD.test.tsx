/**
 * @jest-environment jsdom
 */
import { render, screen, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { setupServer } from 'msw/node'
import { getPage, initTestHelpers } from 'next-page-tester'
import { handlers } from '../mock/handlers'
import 'setimmediate'

process.env.NEXT_PUBLIC_HASURA_URL = 'https://strong-firefly-45.hasura.app/v1/graphql'

initTestHelpers()

const server = setupServer(...handlers)
beforeAll(() => {
  server.listen()
})
afterEach(() => {
  server.resetHandlers()
  cleanup()
})
afterAll(() => {
  server.close()
})

describe('Hasura CRUD Test Cases', () => {
  it('Should render the list of users by useQuery', async () => {
    const { page } = await getPage({
      route: '/hasura-crud',
    })
    render(page)
    expect(await screen.findByText('Hasura CRUD')).toBeInTheDocument()
    expect(await screen.findByText('user1')).toBeInTheDocument()
    expect(
      screen.getByText('2023-05-21T00:01:39.210096+00:00')
    ).toBeInTheDocument()
    expect(
      screen.getByTestId('edit-e7caf1da-1dcc-43fe-878a-8339b641b23d')
    ).toBeTruthy()
    expect(
      screen.getByTestId('delete-e7caf1da-1dcc-43fe-878a-8339b641b23d')
    ).toBeTruthy()
    expect(screen.getByText('user2')).toBeInTheDocument()
    expect(
      screen.getByText('2023-05-21T00:01:45.446432+00:00')
    ).toBeInTheDocument()
    expect(
      screen.getByTestId('edit-32ec4b16-becd-4ce6-af5e-58ddfad4509a')
    ).toBeTruthy()
    expect(
      screen.getByTestId('delete-32ec4b16-becd-4ce6-af5e-58ddfad4509a')
    ).toBeTruthy()
    expect(screen.getByText('user3')).toBeInTheDocument()
    expect(
      screen.getByText('2023-05-21T00:02:04.037026+00:00')
    ).toBeInTheDocument()
    expect(
      screen.getByTestId('edit-8dd19261-1250-4604-8582-ea5491b689bd')
    ).toBeTruthy()
    expect(
      screen.getByTestId('delete-8dd19261-1250-4604-8582-ea5491b689bd')
    ).toBeTruthy()
  });
})