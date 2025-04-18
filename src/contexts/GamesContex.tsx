import { createContext, useReducer, useEffect, useContext } from "react";

import { ChildrenProp, Game, GameContextTypes } from "../types";
import { useNavigate } from "react-router";

export type ActionTypes = 
{ type: 'setData', data: Game[]} |
{ type: 'addGame', newGame: Game } |
{ type: 'deleteGame', id: Game['id'] }

const reducer = (state: Game[], action: ActionTypes) => {
    switch(action.type){
        case 'setData':
            return action.data;
        case 'addGame':
            return [...state, action.newGame];
        case 'deleteGame':
            return state.filter(game => game.id !== action.id);
    }
}

const GamesContext = createContext<undefined | GameContextTypes>(undefined);

function useGamesContext() 
{
    const games = useContext(GamesContext);

    if(games === undefined)
    {
        throw new Error('GamesContext is undefined');
    }   

    return games;
}

const GamesProvider = ({ children }: ChildrenProp) => {

    const [games, dispatch] = useReducer(reducer, []);
    const navigate = useNavigate();

    const addNewGame = (newGame: Game) => {
        fetch(`http://localhost:8080/games`, {
            method: "POST",
            headers: 
            {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(newGame)
        });
        dispatch({
            type:'addGame',
            newGame: newGame
        })
    }

    const deleteOneGame= (id: Game['id']) => {
        fetch(`http://localhost:8080/games/${id}`, {
            method: "DELETE"
        })
        .then(() => {
            dispatch({
                type: 'deleteGame',
                id: id
            });
            navigate('/');
        })
    }

    const findGame = (id: Game['id']): Game | string => {
        const foundGame = games.find(game => game.id === id);
        if(foundGame){
            return foundGame;
        }
        else
        {
            return 'Error: game not found';
        }
    }

    useEffect(() => {
        fetch(`http://localhost:8080/games`)
        .then(res => res.json())
        .then((data: Game[]) => dispatch({
            type:'setData',
            data: data
        }));
    }, []);

    return (
        <GamesContext.Provider
            value={{
                games,
                dispatch,
                addNewGame,
                deleteOneGame,
                findGame
            }}
        >
            { children }
        </GamesContext.Provider>
    )
}

export { GamesProvider, GamesContext }; 
export default useGamesContext;