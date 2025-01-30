import { render } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";
import { fireEvent } from "@testing-library/react";

describe('debe de incrementar con el botón +1', () => {

    render(<CounterApp value={initialValue}/>)
    fireEvent.click( screen.getByText('+1') )

});