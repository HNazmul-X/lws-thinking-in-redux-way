import React from "react";
import { Outlet } from "react-router-dom";

type Props = {
    lessonData?: {
        lessonName?: string;
        lessonNo?: number;
    };
};

export default function PageOutlet({ lessonData }: Props) {
    return (
        <main>
            <nav className="p-2 bg-white border-b">
                <h1 className="text-center font-medium text-xl text-slate-500">
                    Lesson: <span className="text-green-500 font-bold">{lessonData?.lessonNo}</span>{" "}
                </h1>
            </nav>
            <Outlet />
        </main>
    );
}
