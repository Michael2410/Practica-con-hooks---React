import React from "react";

interface Props {
    title: string;
}

export const MyTitle = React.memo( ({ title }: Props) => {

    console.log('My Title re-render');

    return (
        <div>
            <h1>{title}</h1>
        </div>
    )
});
