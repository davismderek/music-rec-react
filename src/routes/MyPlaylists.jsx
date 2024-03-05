const MyPlaylists = () => {
    return (
        <>
            <h1>Hello Playlists</h1>
            <iframe
                style={{ borderRadius: "12px" }}
                src="https://open.spotify.com/embed/playlist/37i9dQZF1DX4zbZrYRGVam?utm_source=generator"
                width="40%"
                height="352"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
            ></iframe>
            <span> </span>
            <iframe
                style={{ borderRadius: "12px" }}
                src="https://open.spotify.com/embed/playlist/37i9dQZF1DXcBWIGoYBM5M?utm_source=generator"
                width="40%"
                height="352"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
            ></iframe>
            {/* LOOK AT APPLE_CEOS_REACT and CSS_FASTAPI_APPLE_CEOS to connect songs to databse */}
            <div>
                <h3>Add Playlist Title</h3>
                <form id="playlistTitle">
                    <input type="text" name="playlistTitleEntry" />
                    <button type="submit" class="searchButton">
                        Create Title
                    </button>
                </form>
                <h3>Add Songs to Playlist</h3>
                <form id="songs">
                    <input type="text" name="songEntry" />
                    <button type="submit" class="searchButton">
                        Add Song
                    </button>
                </form>
                <div id="newSongsText" class="songsListDesign"></div>
                <ul id="songList"></ul>
            </div>
        </>
    );
};

export default MyPlaylists;
