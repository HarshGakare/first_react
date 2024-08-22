import React from "react";
import HeroSection from "./components/HeroSection";
import GoalSection from "./components/GoalSection";
import GamifySection from "./components/GamifySection";
import FooterSection from "./components/FooterSection";
import LikeSection from "./components/LikeSection";
import SecuritySection from "./components/SecuritySection";




function App() {
    return (
        <div className="font-lexend">
            <HeroSection />
            <SecuritySection />
            <GamifySection />
            <GoalSection />
            <LikeSection />
            <FooterSection />
        </div>
    );
}

export default App;
