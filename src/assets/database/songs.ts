import { api } from "../../api/apiService.ts";

const endpoint = "/songs";

const response = await api.get(endpoint);

export const songsArray = response.data;
