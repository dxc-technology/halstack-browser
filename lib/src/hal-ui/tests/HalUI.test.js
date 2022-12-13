/**
* @jest-environment jsdom
*/
import { render, screen } from "@testing-library/react";
import mockResponse from "./MockResponse";
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import HalUI from "../HalUI";

const server = setupServer(
  // Describe network behavior with request handlers.
  // Tip: move the handlers into their own module and
  // import it across your browser and Node.js setups!
  rest.options('/url', (req, res, ctx) => {
    return res(
      ctx.json(mockResponse),
    )
  }),
)

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("renders HalUI component", () => {
  const { container } = render(<HalUI url={"/url"} />);
  //expect( container ).toMatchSnapshot();
  expect(screen.getByText('Loading')).toBeTruthy();

});

test("renders HalUI component and the api info", async () => {
  const { container } = render(<HalUI url={"/url"} />);
  expect( container ).toMatchSnapshot();

  expect(await screen.findByText('Carriers collection options')).toBeTruthy();
 
});
