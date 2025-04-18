import { ActionTypes } from "./contexts/GamesContex"

export type User = {
  id: string;
  username: string;
  email: string;
  password: string;
  passwordText: string;
  profilePicture?: string;
  photo: string,
  joined: string;
};
export type ChildrenProp = {
  children: React.ReactElement
}
export type UsersReducerActionTypes = 
{ type: 'setUsers', data: User[]} |
{ type: 'addUser', newUser: User } |
{ type: 'deleteUser', id: User['id'] }

export type UsersContextTypes = {
  loggedInUser: User | null,
  setLoggedInUser: React.Dispatch<React.SetStateAction<User | null>>,
  users: User[],
  dispatch: React.ActionDispatch<[UsersReducerActionTypes]>
}

export interface LoginValues {
  email: string;
  password: string;  
  stayLoggedIn: boolean;
}

export type SearchContextType = {
  searchValue: string;
  setSearchValue: (value: string) => void;
}; 

export type Game = {
    id: string,
    title: string,
    releaseYear: number,
    eirinCategory: string,
    reviews: number,    
    photo: string, 
    genre: string[] 
  }
  
  export type GameContextTypes = {
    games: Game[],
    dispatch: React.ActionDispatch<[action: ActionTypes]>
    addNewGame: (newGame: Game) => void,
    deleteOneGame: (id: Game["id"]) => void,
    findGame: (id: Game["id"]) => Game | string
  }
  