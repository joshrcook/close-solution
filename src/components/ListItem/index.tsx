import React, { memo, FC, LiHTMLAttributes, PropsWithChildren } from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

export interface IListItem {
    color: string;
    selected: boolean;
}

const ListItem = React.forwardRef<HTMLLIElement, PropsWithChildren<IListItem & LiHTMLAttributes<HTMLLIElement>>>(
    ({ children, color, selected, className, ...otherProps }, ref) => {
        return (
            <li
                className={clsx(
                    styles.List__item,
                    styles[`List__item--${color}`],
                    {
                        [`${styles["List__item--selected"]}`]: !!selected,
                    },
                    className
                )}
                {...otherProps}
                ref={ref}
            >
                {children}
            </li>
        );
    }
);

export default memo(ListItem);
