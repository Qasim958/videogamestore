// export const BASE_URL = process.env.DOMAIN_URL; //https://api.igdb.com/v4/games
// export const CLIENT_ID = process.env.CLIENT_ID_VALUE; //gvayksvzlakw3rbcjykbnl645kqb16
// export const CLIENT_SECRET = process.env.CLIENT_SECRET_VALUE; // 91e5b5y7r5fhf4x1z4lqkvpekp5f4g

const CORS_URL = "https://cors-anywhere.herokuapp.com/";
const BASE_AUTH_URL = "https://id.twitch.tv/oauth2/token?";
const CLIENT_SECRET = "ok7fqydcnst3supfy69eodl7tihmw8";
const GRANT_TYPE = "client_credentials";

export const CLIENT_ID = "9z76uti7ak5suh8wazaxgfxo1vqck6";

export const AUTH_TOKEN_URL = `${BASE_AUTH_URL}client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&grant_type=${GRANT_TYPE}`;

export const LOGIN_CREDENTIALS_KEY = "LOGIN_CREDENTIALS_KEY";

export const BASE_DATA_URL = `https://api.igdb.com/v4/games`;
// export const BASE_DATA_URL = `${CORS_URL}https://api.igdb.com/v4/games?fields=*`;
// export const BASE_DATA_URL = `${CORS_URL}https://api.igdb.com/v4/games?fields=age_ratings,aggregated_rating,aggregated_rating_count,alternative_names,artworks,bundles,category,checksum,collection,cover,created_at,dlcs,expanded_games,expansions,external_games,first_release_date,follows,forks,franchise,franchises,game_engines,game_modes,genres,hypes,involved_companies,keywords,multiplayer_modes,name,parent_game,platforms,player_perspectives,ports,rating,rating_count,release_dates,remakes,remasters,screenshots,similar_games,slug,standalone_expansions,status,storyline,summary,tags,themes,total_rating,total_rating_count,updated_at,url,version_parent,version_title,videos,websites;`;
