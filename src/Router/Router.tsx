import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "../Pages/Homepage";
import PageOutlet from "./Outlet/PageOutlet";

type Props = {
    lessonData?: {
        lessonName?: string;
        lessonNo?: number;
    };
};

export default function Router({ lessonData }: Props) {
    return (
        <Routes>
            <Route element={<PageOutlet lessonData={lessonData} />}>
                <Route index element={<Homepage />} />
            </Route>
        </Routes>
    );
}
