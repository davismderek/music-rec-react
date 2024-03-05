import { useState } from "react";
import { useLoaderData, Form } from "react-router-dom";

const SearchLyrics = () => {
    const [artistInput, setArtistInput] = useState("");
    const [songInput, setSongInput] = useState("");
    const [lyrics, setLyrics] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const url = `https://api.lyrics.ovh/v1/${artistInput}/${songInput}`;
        const data = await fetch(url)
            .then((response) => response.json())
            .then((data) => data);
        const { lyrics } = data;
        setLyrics(lyrics);
    };

    return (
        <>
            <Form id="lyrics-input-form" onSubmit={handleSubmit}>
                <label htmlFor="artistInput">Enter Artist Name</label>
                <input
                    type="text"
                    name="artistInput"
                    value={artistInput}
                    onChange={(e) => setArtistInput(e.target.value)}
                    required
                    placeholder="Artist"
                />
                <label htmlFor="songInput">Enter Song Name</label>
                <input
                    type="text"
                    name="songInput"
                    value={songInput}
                    onChange={(e) => setSongInput(e.target.value)}
                    required
                    placeholder="Song"
                />
                <button
                    type="submit"
                    className="searchButton"
                    id="searchButton"
                >
                    Get Lyrics
                </button>
            </Form>

            <h2>Song Lyrics</h2>
            <pre>{lyrics}</pre>
        </>
    );
};

export default SearchLyrics;
