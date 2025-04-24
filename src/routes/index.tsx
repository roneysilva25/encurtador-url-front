import { BrowserRouter, Routes, Route } from "react-router";
import { Home } from "../pages/Home"
import { RedirectToOriginal } from "../pages/RedirectToOriginal"

export function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="" element={<Home />} />
                <Route path=":shortenedUrlCode" element={<RedirectToOriginal />} />
            </Routes>
        </BrowserRouter>
    )
}