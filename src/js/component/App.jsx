import { useState } from "react";
import Home from "./Home";


function App() {
    const [counter, setCounter] = useState(100);

    return (
        <>
            <Home />
            {counter}
        </>

    )
}

export default App