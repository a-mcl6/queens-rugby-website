import { Routes, Route } from "react-router-dom";
import PageWrapper from "../components/layout/PageWrapper";

// Pages
import Home from "../pages/Home";
import Membership from "../pages/Membership";
/*
import CoachingTeam from "../pages/CoachingTeam";
import YourWellbeing from "../pages/YourWellbeing";
import ClubNews from "../pages/ClubNews";
import ClubNewsPost from "../pages/ClubNewsPost";
import OurHistory from "../pages/OurHistory";
import JoinUs from "../pages/JoinUs";
import OurInternationals from "../pages/OurInternationals";
import JackKyleFoundation from "../pages/JackKyleFoundation"; */

export default function AppRouter() {
  return (
    <PageWrapper>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/membership" element={<Membership />} />
        {/*
        <Route path="/coaching-team" element={<CoachingTeam />} />
        <Route path="/your-wellbeing" element={<YourWellbeing />} />
        <Route path="/ourhistory" element={<OurHistory />} />
        <Route path="/joinus" element={<JoinUs />} />
        <Route path="/our-internationals" element={<OurInternationals />} />
        <Route path="/jack-kyle-foundation" element={<JackKyleFoundation />} />

        <Route path="/club-news" element={<ClubNews />} />
        <Route path="/club-news/:slug" element={<ClubNewsPost />} /> */}

        {/* Optional 404 */}
        <Route path="*" element={<div>Page not found</div>} />
      </Routes>
    </PageWrapper>
  );
}
