import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react";

interface FooterContextInterface {
    showFooter: boolean;
    setShowFooter: Dispatch<SetStateAction<boolean>>;
}

const defaultState = {
    showFooter: true,
    setShowFooter: (showFooter: boolean) => {},
} as FooterContextInterface;

const FooterContext = createContext(defaultState);

 type FooterContextProviderProps = {
    children: ReactNode;
};

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




