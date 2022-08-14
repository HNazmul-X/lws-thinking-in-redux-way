import React from "react";
import Button from "./Button";

type Props = {
    count: number;
    id: number;
    increment: Function;
    decrement: Function;
};

export default function Counter(props: Props) {
    return (
        <div className="max-w-md mx-auto mt-10 space-y-5">
            <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
                <div className="text-2xl font-semibold">{props.count}</div>
                <div className="flex space-x-3">
                    <Button handler={() => props.increment(props.id)}>Increment</Button>
                    <Button handler={() => props.decrement(props.id)}>Decrement</Button>
                </div>
            </div>
        </div>
    );
}
