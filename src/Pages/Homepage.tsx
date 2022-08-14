import React, { useState } from "react";
import Counter from "../Components/Counter";
import TotalCount from "../Components/TotalCount";

type CounterType = {
    id: number;
    count: number;
};
const initialState: CounterType[] = [
    {
        id: 1,
        count: 0,
    },
    {
        id: 2,
        count: 0,
    },
];

type Props = {};

export default function Homepage({}: Props) {
    const [counterState, setCounterState] = useState(initialState);

    const totalCount = counterState.reduce((total, counter) => total + counter.count, 0);

    const increment = (id: number) => {
        setCounterState((prev: CounterType[]) => {
            return prev.map((counter) => {
                if (counter.id === id)
                    return {
                        ...counter,
                        count: counter.count + 1,
                    };
                else return { ...counter };
            });
        });
    };
    const decrement = (id: number) => {
        setCounterState((prev: CounterType[]) => {
            return prev.map((counter) => {
                if (counter.id === id)
                    return {
                        ...counter,
                        count: counter.count - 1,
                    };
                else return { ...counter };
            });
        });
    };

    return (
        <div className="w-full  p-10 bg-gray-100 text-slate-700">
            <h1 className="max-w-md mx-auto text-center text-2xl font-bold">Simple Counter Application</h1>

            <div className="max-w-md mx-auto mt-10 space-y-5">
                {counterState.map((counter) => (
                    <Counter id={counter.id} increment={increment} decrement={decrement} count={counter.count} />
                ))}
                <TotalCount count={totalCount} />
            </div>
        </div>
    );
}
