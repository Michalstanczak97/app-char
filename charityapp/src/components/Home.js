import React from 'react';
import HomeHeader from "./HomeHeader";
import HomeStats from "./HomeStats";
import HomeInstructions from '../components/HomeInstructions'
import HomeAboutUs from "./HomeAboutUs";
import HomeHelpInformation from "./HomeHelpInformation";
import HomeContacts from "./HomeContacts";

const Home = () => {
    return (
        <>
            <HomeHeader/>
            <HomeStats/>
            <HomeInstructions/>
            <HomeAboutUs/>
            <HomeHelpInformation/>
            <HomeContacts/>
        </>
    );
};

export default Home;