export async function fetchData(searchQuery) {
  const BASE_URL = 'http://pokeapi.co/api/v2/pokemon/';

  const response = await fetch(BASE_URL + searchQuery);
  return await (response.ok
    ? response.json()
    : Promise.reject(new Error(`Failed to find: ${searchQuery}`)));
}
