import { render } from "@testing-library/react"
import { Button } from "./Button"
import { App } from "../../App"

test('sum', () => {
    const { getByText } = render(<App />)
    expect(getByText("Comecando")).toBeTruthy()
})