import axios from "axios";
import {Dispatch} from "redux";
import {ActionType} from "../action-types";
import {Action} from "../actions";

export const searchRepositories = (term: string) => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.SEARCH_REPOSITORIES
        });

        try {
            const url = 'https://registry.npmjs.org/-/v1/search';

            const { data }= await axios.get(url, {
                params: {
                    text: term
                }
            });

            const result = data.objects.map((result : any) => {
                return result.package.name;
            });

            dispatch({
                type: ActionType.SEARCH_REPOSITORIES_SUCCESS,
                payload: result,
            });
        } catch (error: any) {
            dispatch({
                type: ActionType.SEARCH_REPOSITORIES_ERROR,
                payload: error.message
            });

        }
    };
};