import React, { HTMLAttributes } from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const List = React.forwardRef<HTMLUListElement, React.PropsWithChildren<{}> & HTMLAttributes<HTMLUListElement>>(
    ({ className, children }, ref) => {
        return (
            <ul className={clsx(styles.List, className)} ref={ref}>
                {children}
            </ul>
        );
    }
);

export default List;
