import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe('Pruebas de <FirstApp />', () => {

    test('debe de ser igual al snapshot', () => {
        const title = "Holaaa";
        const {container} = render(<FirstApp title ={title}/>)

        console.log(container);

        expect(container).toMatchSnapshot();
    });

});