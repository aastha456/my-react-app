const Book = (props) => {
    return React.createElement(
        "div",
        {className: "book-card"},
        [
            React.createElement("h2", {} + props.title),
            React.createElement("p", {},"Author: " + props.author)
        ]
    )
}

const App = () => {
    return React.createElement(
        "div", 
        {}, 
        [
           React.createElement("h1", {}, "My Book List"),
            React.createElement(Book, { title: "The Alchemist", author: "Paulo Coelho" },
                React.createElement("p", {}, "A book about following your dreams.")
            ),
            React.createElement(Book, { title: "1984", author: "George Orwell" },
                React.createElement("p", {}, "A dystopian novel about surveillance and control.")
            ),
            React.createElement(Book, { title: "To Kill a Mockingbird", author: "Harper Lee" },
                React.createElement("p", {}, "A classic about justice and morality.")
            ),
        ]
    );
}

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));