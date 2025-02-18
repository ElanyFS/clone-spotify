import { api } from "../../api/apiService.ts";

const endpoint = "/artists";
const response = await api.get(endpoint);

export const artistArray = response.data;
