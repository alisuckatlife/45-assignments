interface Album {
    artist: string;
    title: string;
    tracks?: number; // Optional property
}

function makeAlbum(artist: string, title: string, tracks?: number): Album {
    const album: Album = {
        artist,
        title,
    };

    if (tracks !== undefined) {
        album.tracks = tracks;
    }

    return album;
}

// Example calls to the makeAlbum function
const album1 = makeAlbum('Artist 1', 'Album 1');
const album2 = makeAlbum('Artist 2', 'Album 2', 10);
const album3 = makeAlbum('Artist 3', 'Album 3', 7);

console.log(album1);
console.log(album2);
console.log(album3);
