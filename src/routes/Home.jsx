const Home = () => {
    return (
        <>
            <div className="music">
                <img
                    className="headphones"
                    src="src/assets/assets/pngegg.png"
                    alt="photo of ipod"
                />
                <figure>
                    <audio
                        controls
                        src="/media/cc0-audio/t-rex-roar.mp3"
                    ></audio>
                </figure>
            </div>
            <div className="search">
                <div className="searchFunction">
                    <h1>Who is your favorite artist?</h1>
                    <form id="suggestedArtistSearch">
                        <input
                            id="inputSeacrh"
                            type="search"
                            placeholder="We'll help find someone similar!"
                        />
                        <button className="searchButton" type="submit">
                            Search
                        </button>
                    </form>
                    <p classNames="formResponseDesign" id="userArtistInput"></p>
                </div>
                <div className="artistHomeSection">
                    <img
                        className="artistHomeImg"
                        src="src/assets/assets/BenRector.png"
                        alt="photo of the artist Ben Rector"
                    />
                    <img
                        className="artistHomeImg"
                        src="src/assets/assets/TheLoneBellow.png"
                        alt="photo of band The Lone Bellow"
                    />
                    <img
                        className="artistHomeImg"
                        src="src/assets/assets/Johnnyswim.png"
                        alt="photo of band JohnnySwim"
                    />
                </div>
            </div>
        </>
    );
};

export default Home;
