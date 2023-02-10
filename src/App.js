import Container from "./components/Container/Container.js";
import NavBar from "./components/NavBar/NavBar";
import Favorite from "./components/Favorite/Favorite";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import { Routes, Route } from 'react-router-dom';
import Error from "./components/Error/Error";
import List from "./components/List/List";

const App = () => {
    return (
        <main>
            <NavBar />
            <Container>
                <Routes>
                    <Route path='*' element={<Error />}/>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/favorite" element={<Favorite />} />
                    <Route path="/list/:listId" element={<List />} />
                </Routes>
            </Container>
        </main>

    );
};

export default App;