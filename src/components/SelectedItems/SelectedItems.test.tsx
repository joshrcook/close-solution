import React from "react";
import { shallow } from "enzyme";

import SelectedItems from "./index";

describe("<SelectedItems />", () => {
    it("renders itself in a paragraph", () => {
        const wrapper = shallow(<SelectedItems items={[]} />);
        expect(wrapper.first().type()).toBe("p");
    });

    it("renders the correct text", () => {
        const wrapper = shallow(<SelectedItems items={["green", "red"]} />);
        expect(wrapper.text()).toBe("The selected items are: green, red");
    });
});
