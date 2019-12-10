import { ADD_CATEGORIES, ADD_RANDOM_QUOTE } from "../constants/action-types"
import { BASE_API_URL } from "../../helpers/constants"

export const getRandomQuote = () => {
    return dispatch => {
        return fetch(`${BASE_API_URL}/random`)
            .then(res => res.json())
            .then(data => dispatch({ type: ADD_RANDOM_QUOTE, payload: data }))
    }
}

export const addCategories = () => {
    return dispatch => {
        return fetch(`${BASE_API_URL}/categories`)
            .then(res => res.json())
            .then(data => dispatch({ type: ADD_CATEGORIES, payload: data }))
    }
}