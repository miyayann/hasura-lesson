/**
 * @jest-environment jsdom
 */
import { render, screen, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import userEvent from '@testing-library/user-event'
import { getPage, initTestHelpers } from 'next-page-tester'
import { setupServer } from 'msw/node'
import { handlers } from '../mock/handlers'
import 'setimmediate'

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

describe('UserDetail Test Cases', () => {
  it('Should render the user detail pre-fetched by getStaticProps', async () => {
    const { page } = await getPage({
      route: '/users/e7caf1da-1dcc-43fe-878a-8339b641b23d',
    })
    render(page)
    expect(await screen.findByText('User detail')).toBeInTheDocument()
    expect(screen.getByText('user1')).toBeInTheDocument()
    expect(
      screen.getByText('2023-05-21T00:01:39.210096+00:00')
    ).toBeInTheDocument()
    userEvent.click(screen.getByTestId('back-to-main'))
    expect(await screen.findByText('SSG+ISR')).toBeInTheDocument()
    userEvent.click(
      screen.getByTestId('link-32ec4b16-becd-4ce6-af5e-58ddfad4509a')
    )
    expect(await screen.findByText('User detail')).toBeInTheDocument()
    expect(screen.getByText('user2')).toBeInTheDocument()
    expect(
      screen.getByText('2023-05-21T00:01:45.446432+00:00')
    ).toBeInTheDocument()
  })
})