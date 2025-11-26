import { useState } from "react";

function AddMovie({ addMovie }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [rating, setRating] = useState(0);

    const newMovie = {
        title: title,
        text: description,
        imageUrl: imageUrl,
        rate: rating
    }

    const handleAdd = () => {
        addMovie(newMovie);
        setTitle("");
        setDescription("");
        setImageUrl("");
        setRating(0);
    }

    return (

        <div>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Movie Title"
            />
            <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Movie Description"
            />
            <input
                type="text"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                placeholder="Image URL"
            />
            <input
                type="number"
                min="0"
                max="5"
                step="0.5"
                value={rating}
                onChange={(e) => setRating(parseFloat(e.target.value))}
                placeholder="Rating"
            />
            <button onClick={handleAdd}>Add Movie</button>
        </div>

    );
}

export default AddMovie