import React from "react";
import { shallow } from "enzyme";

import ListItem from "./index";

describe("<ListItem />", () => {
    it("renders itself in a list item", () => {
        const wrapper = shallow(<ListItem color="red" selected={false} />);
        expect(wrapper.first().type()).toBe("li");
    });

    it("has the appropriate classes", () => {
        const colors = ["red", "green"];
        const listItem1 = shallow(<ListItem color={colors[0]} selected={false} />);
        const listItem2 = shallow(<ListItem color={colors[1]} selected={false} />);
        expect(listItem1.first().hasClass("List__item")).toBe(true);
        expect(listItem1.first().hasClass(`List__item--${colors[0]}`)).toBe(true);
        expect(listItem2.first().hasClass(`List__item--${colors[1]}`)).toBe(true);
    });

    it("correctly adds the selected class", () => {
        const selectedClass = "List__item--selected";
        const unselectedListItem = shallow(<ListItem color="red" selected={false} />);
        const selectedListItem = shallow(<ListItem color="red" selected={true} />);
        expect(unselectedListItem.first().hasClass(selectedClass)).toBe(false);
        expect(selectedListItem.first().hasClass(selectedClass)).toBe(true);
    });

    it("correctly renders children", () => {
        const text = "children";
        const listItem = shallow(
            <ListItem color="red" selected={false}>
                {text}
            </ListItem>
        );
        expect(listItem.text()).toBe(text);
    });

    it("is able to be clicked", () => {
        const onClickSpy = jest.fn();
        const listItem = shallow(<ListItem color="red" selected={false} onClick={onClickSpy} />);
        listItem.find("li").simulate("click");
        expect(onClickSpy.mock.calls.length).toBe(1);
    });
});
