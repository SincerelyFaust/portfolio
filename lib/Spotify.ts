const client_id: string | undefined = process.env.SPOTIFY_CLIENT_ID;
const client_secret: string | undefined = process.env.SPOTIFY_CLIENT_SECRET;
const refresh_token: string | undefined = process.env.SPOTIFY_REFRESH_TOKEN;

/* Edge runtime does not support the "buffer" module which is why we use btoa here even though it's deprecated */
const basic: string = btoa(`${client_id}:${client_secret}`);
const NOW_PLAYING_ENDPOINT: string =
  "https://api.spotify.com/v1/me/player/currently-playing";
const TOKEN_ENDPOINT: string = "https://accounts.spotify.com/api/token";

interface AccessToken {
  access_token: string;
}

const getAccessToken = async (): Promise<AccessToken> => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      "Authorization": `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: refresh_token ?? "",
    }),
  });

  if (!response.ok) {
    throw new Error(`Failed to get access token: ${response.status}`);
  }

  const data = await response.json();

  return { access_token: data.access_token };
};

export const getNowPlaying = async (): Promise<any> => {
  const { access_token } = await getAccessToken();

  const response = await fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to get Now Playing: ${response.status}`);
  }

  return response;
};
