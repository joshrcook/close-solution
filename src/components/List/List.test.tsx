import React from "react";
import { shallow } from "enzyme";

import List from "./index";

describe("<List />", () => {
    it("creates an unordered list", () => {
        const wrapper = shallow(<List />);
        expect(wrapper.matchesElement(<ul></ul>)).toEqual(true);
    });

    it("correctly renders children", () => {
        const wrapper = shallow(<List>child</List>);
        expect(wrapper.text()).toEqual("child");
    });
});
