const BASE_URL = 'https://glittery-dull-snickerdoodle.glitch.me/v1/';

export async function getFetch(resource) {
  try {
    const resp = await fetch(`${BASE_URL}/${resource}`);
    const dataInJs = await resp.json();
    return dataInJs;
  } catch (error) {
    console.log('getFetch error', error);
    return false;
  }
}
