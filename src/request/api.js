import { post } from "./http"
export const apiAddress = p => post("api/index/index", p)
