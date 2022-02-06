// import React from "react";
// import { render, unmountComponentAtNode } from "react-dom";
// import { act } from "react-dom/test-utils";
// import About from "./About";
//
// let container = null;
// beforeEach(() => {
//     // setup a DOM element as a render target
//     container = document.createElement("div");
//     document.body.appendChild(container);
// });
//
// afterEach(() => {
//     // cleanup on exiting
//     unmountComponentAtNode(container);
//     container.remove();
//     container = null;
// });
//
// it("renders with or without a name", () => {
//     act(() => {
//         render(<About />, container);
//     });
//     expect(container.textContent).toBe("About            ");
// });

import React from 'react';
import renderer from 'react-test-renderer';
import About from "./About";
import about_me from "../../images/about-me.jpg";
import PostTextElement from "../PostTextElement/PostTextElement";

it('renders correctly', () => {
    const tree = renderer
        .create(
            <div className='center w-60' >
                <h1>About</h1>
                <img src={ about_me } alt='About Pic' align={'left'} width="20%" style={{paddingRight: '30px'}} />
                <PostTextElement text={`
                
            `} />
            </div>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});