import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ArtistProfile from "./pages/ArtistProfile";
import EventManagement from "./pages/EventManagement";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/profile" element={<ArtistProfile />} />
                <Route path="/events" element={<EventManagement />} />
            </Routes>
        </Router>
    );
}

export default App;
