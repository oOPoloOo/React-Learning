import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react";

// type FooterShowing =
// {
//     showFooter: boolean;
// }


 interface FooterContextInterface {
    showFooter: boolean;
    setShowFooter: Dispatch<SetStateAction<boolean>>;
}

const defaultState = {
    showFooter: false,
    setShowFooter: (showFooter: boolean) => {},
} as FooterContextInterface;

const FooterContext = createContext(defaultState);

 type FooterContextProviderProps = {
    children: ReactNode;
};

// function useFooterContext() 
// {
//     const footer = useContext(FooterContext);

//     if(footer === undefined)
//     {
//         throw new Error('MoviesContext is undefined');
//     }

//     return footer;
// }

const FooterContextProvider= ({ children }: FooterContextProviderProps) => {

    const [showFooter, setShowFooter] = useState<boolean>(true);

    return(
        <FooterContext.Provider
            value={{
                showFooter,
                setShowFooter
            }}
        >
            { children }
        </FooterContext.Provider>
    )
}

export { FooterContextProvider };
export type { FooterContextInterface, FooterContextProviderProps };
export default  FooterContext;