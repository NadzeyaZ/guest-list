const BASE_URL = "https://fsa-crud-2aa9294fe819.herokuapp.com/api";
const COHORT = "/NADZEYA";
const RESOURCE = "/guests";
const API = BASE_URL + COHORT + RESOURCE;

export async function getGuests() {
  try {
    const response = await fetch(API);
    const result = await response.json();
    return result.data;
  } catch (error) {
    console.error("There is an error fetching guests", error);
  }
}

export async function getGuest(id) {
  try {
    console.log(`${API}/${id}`);
    const response = await fetch(`${API}/${id}`);
    const result = await response.json();
    return result.data;
  } catch (error) {
    console.error("There is an error fetching one guest", error);
  }
}
