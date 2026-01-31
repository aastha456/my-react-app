import { createRoot } from "react-dom/client";
import Book from "./Book";

const App = () => {
    return (
        <div>
            <h1>My Book List</h1>
            <Book title="The Alchemist" author="Paulo Coelho" description="A book about following your dreams." />
            <Book title="1984" author="George Orwell" description="A dystopian novel about surveillance and control." />
            <Book title="To Kill a Mockingbird" author="Harper Lee"/>
        </div>
    );
}

const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);
root.render(<App />);