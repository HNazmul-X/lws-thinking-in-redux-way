import React, { MouseEventHandler } from "react";

type Props = {
    handler: React.MouseEventHandler;
    children: React.ReactNode;
};

export default function Button({ handler, children }: Props) {
    return (
        <button className="bg-indigo-400 text-white px-3 py-2 rounded shadow" onClick={handler}>
            {children}
        </button>
    );
}
