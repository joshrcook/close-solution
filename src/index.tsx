import ReactDOM from "react-dom";
import React, { Fragment } from "react";
import { default as ListWrapper } from "./components/List";
import ListItem from "./components/ListItem";
import SelectedItems from "./components/SelectedItems";

// Implement a feature to allow item selection with the following requirements:
// 1. Clicking an item selects/unselects it.
// 2. Multiple items can be selected at a time.
// 3. Make sure to avoid unnecessary re-renders of each list item in the big list (performance).
// 4. Currently selected items should be visually highlighted.
// 5. Currently selected items' names should be shown at the top of the page.
//
// Feel free to change the component structure at will.

interface TListProps {
    items: {
        name: string;
        color: string;
    }[];
}

const List = ({ items }: TListProps) => {
    const [selectedItems, setSelectedItems] = React.useState<string[]>([]);
    const handleToggleItemSelect: React.MouseEventHandler<HTMLLIElement> = React.useCallback((e) => {
        const name = e.currentTarget.dataset.name;
        setSelectedItems((curr) => {
            if (curr.indexOf(name) === -1) {
                return [...curr, name];
            } else {
                return curr.filter((itemName) => itemName !== name);
            }
        });
    }, []);

    return (
        <Fragment>
            <SelectedItems items={selectedItems} />
            <ListWrapper>
                {items.map((item) => (
                    <ListItem
                        key={item.name}
                        data-name={item.name}
                        color={item.color}
                        selected={selectedItems.indexOf(item.name) > -1}
                        onClick={handleToggleItemSelect}
                    >
                        {item.name}
                    </ListItem>
                ))}
            </ListWrapper>
        </Fragment>
    );
};

// ---------------------------------------
// Do NOT change anything below this line.
// ---------------------------------------

const sizes = ["tiny", "small", "medium", "large", "huge"];
const colors = [
    "navy",
    "blue",
    "aqua",
    "teal",
    "olive",
    "green",
    "lime",
    "yellow",
    "orange",
    "red",
    "maroon",
    "fuchsia",
    "purple",
    "silver",
    "gray",
    "black",
];
const fruits = ["apple", "banana", "watermelon", "orange", "peach", "tangerine", "pear", "kiwi", "mango", "pineapple"];

const items = sizes.reduce(
    (items, size) => [
        ...items,
        ...fruits.reduce(
            (acc, fruit) => [
                ...acc,
                ...colors.reduce(
                    (acc, color) => [
                        ...acc,
                        {
                            name: `${size} ${color} ${fruit}`,
                            color,
                        },
                    ],
                    []
                ),
            ],
            []
        ),
    ],
    []
);

ReactDOM.render(<List items={items} />, document.getElementById("root"));
