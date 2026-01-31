interface BookProps {
    author: string,
    title: string,
    description?: string;
}

const Book = (props: BookProps) => {
    return (
        <div className="book-card">
        <h2>{props.title}</h2>
        <p>Author: {props.author}</p>
        {props.description} 
        </div>
    )
}

export default Book;

