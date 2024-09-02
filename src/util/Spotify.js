let accessToken = "";
const redirectUrl = "APP URL";
const client_id = "CLIENT ID";

const Spotify = {
  getAccessToken() {
    //verify if access token has already been obtained
    // first check
    if (accessToken) return accessToken;

    // extract access token from URL
    const tokenUrl = window.location.href.match(/access_token=([^&]*)/);
    // extract expiry time from URL
    const expiration = window.location.href.match(/expires_in=([^&]*)/);

    // second check for an access token including an expiration time
    if (tokenUrl && expiration) {
      accessToken = tokenUrl[1];
      const expiresIn = Number(expiration[1]);

      window.setTimeout(() => (accessToken = ""), expiresIn * 1000);
      window.history.pushState("Access token", null, "/");
      return accessToken;
    }

    const state = this.generateRandomString(16);
    const scope =
      "user-read-private playlist-modify-public playlist-modify-private";

    // API request for an access token if one has not been requested
    let redirect = "https://accounts.spotify.com/authorize";
    redirect += "?response_type=token";
    redirect += "&client_id=" + encodeURIComponent(client_id);
    redirect += "&redirect_uri=" + encodeURIComponent(redirectUrl);
    redirect += "&state=" + encodeURIComponent(state);
    redirect += "&scope=" + encodeURIComponent(scope);

    window.location = redirect;
  },
  generateRandomString(length) {
    const possible =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const values = crypto.getRandomValues(new Uint8Array(length));
    return values.reduce((acc, x) => acc + possible[x % possible.length], "");
  },
  async userSearch(term) {
    accessToken = accessToken ? accessToken : this.getAccessToken();
    const response = await fetch(
      `https://api.spotify.com/v1/search?q=${term}&type=track`,
      {
        method: "GET",
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    );
    const jsonResponse = await response.json();
    if (!jsonResponse) {
      console.log("Response Error");
    }
    return jsonResponse.tracks.items.map((track) => ({
      id: track.id,
      name: track.name,
      artist: track.artists[0].name,
      album: track.album.name,
      artwork: track.album.images[0].url,
      uri: track.uri,
    }));
  },
  saveUserPlaylist(playlistName, uri) {
    if (!playlistName || !uri) return;

    const aToken = accessToken ? accessToken : this.getAccessToken();
    let user;
    const header = { Authorization: `Bearer ${aToken}` };

    return fetch(`https://api.spotify.com/v1/me`, { headers: header })
      .then((response) => response.json())
      .then((jsonResponse) => {
        user = jsonResponse.id;
        return fetch(`https://api.spotify.com/v1/users/${user}/playlists`, {
          method: "POST",
          headers: header,
          body: JSON.stringify({ name: playlistName }),
        })
          .then((response) => response.json())
          .then((jsonResponse) => {
            const playlistId = jsonResponse.id;

            return fetch(
              `https://api.spotify.com/v1/playlists/${playlistId}/tracks`,
              {
                method: "POST",
                headers: header,
                body: JSON.stringify({ uris: uri }),
              }
            );
          });
      });
  },
};

export { Spotify, accessToken };
