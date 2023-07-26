import { createContext, useContext } from "react";

const SERVICES = [
    {
        name: "Product Management",
        description: "Lorem ipsum dolor sit amet, consectetur an adipisicing elit. Itaque, corporis nulla at quia quaerat."
    },
    {
        name: "Product Management",
        description: "Lorem ipsum dolor sit amet, consectetur an adipisicing elit. Itaque, corporis nulla at quia quaerat."
    },
    {
        name: "Global Collection",
        description: "Lorem ipsum dolor sit amet, consectetur an adipisicing elit. Itaque, corporis nulla at quia quaerat."
    }
];

const TEAM_MEMBERS = [
    {
        image: "assets/images/team_01.jpg",
        name: "Johnny William",
        designation: "CO-Founder",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing itaque corporis nulla."
    },
    {
        image: "assets/images/team_02.jpg",
        name: "Karry Pitcher",
        designation: "Karry Pitcher",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing itaque corporis nulla."
    },
    {
        image: "assets/images/team_03.jpg",
        name: "Michael Soft",
        designation: "Chief Marketing",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing itaque corporis nulla."
    },
    {
        image: "assets/images/team_04.jpg",
        name: "Mary Cool",
        designation: "Product Specialist",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing itaque corporis nulla."
    },
    {
        image: "assets/images/team_05.jpg",
        name: "George Walker",
        designation: "Product Photographer",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing itaque corporis nulla."
    },
    {
        image: "assets/images/team_06.jpg",
        name: "Kate Town",
        designation: "General Manager",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing itaque corporis nulla."
    }
];

const initialState = {
    services: SERVICES,
    team_members: TEAM_MEMBERS
};

const PageContext = createContext();

const PageProvider = ({ children }) => {
    return <PageContext.Provider value={{ ...initialState }}>{children}</PageContext.Provider>
}

const usePageContext = () => useContext(PageContext);

export { PageProvider, usePageContext };