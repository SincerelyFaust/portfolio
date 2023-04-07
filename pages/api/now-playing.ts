import { getNowPlaying } from "../../lib/Spotify";

interface Song {
  is_playing: boolean;
  item: {
    name: string;
    artists: { name: string }[];
    album: {
      name: string;
      images: { url: string }[];
    };
    external_urls: {
      spotify: string;
    };
  } | null;
}

export const config = {
  runtime: "edge",
};

const handler = async () => {
  const response = await getNowPlaying();

  if (response.status === 204 || response.status > 400) {
    return new Response(JSON.stringify({ isPlaying: false }), {
      status: 200,
      headers: {
        "content-type": "application/json",
      },
    });
  }

  const song: Song = await response.json();

  if (song.item === null) {
    return new Response(JSON.stringify({ isPlaying: false }), {
      status: 200,
      headers: {
        "content-type": "application/json",
      },
    });
  }

  const isPlaying: boolean = song.is_playing;
  const title: string = song.item.name;
  const artist: string = song.item.artists
    .map((_artist: { name: string }) => _artist.name)
    .join(", ");
  const album: string = song.item.album.name;
  const albumImageUrl: string = song.item.album.images[0].url;
  const songUrl: string = song.item.external_urls.spotify;

  return new Response(
    JSON.stringify({
      album,
      albumImageUrl,
      artist,
      isPlaying,
      songUrl,
      title,
    }),
    {
      status: 200,
      headers: {
        "content-type": "application/json",
        "cache-control": "public, s-maxage=60, stale-while-revalidate=30",
      },
    },
  );
};

export default handler;
