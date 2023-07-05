import React, { HTMLAttributes } from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

export interface ISelectedItems {
    items: string[];
}

const SelectedItems = React.forwardRef<HTMLParagraphElement, ISelectedItems & HTMLAttributes<HTMLParagraphElement>>(
    ({ items, className }, ref) => {
        return (
            <p className={clsx(styles.SelectedItems, className)} ref={ref}>
                The selected items are: {items.join(", ")}
            </p>
        );
    }
);

export default SelectedItems;
