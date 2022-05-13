
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/:path(|landing-page)">
            <LandingPage {...landingPageData} />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
const logo2Data = {
    className: "logo-1",
};

const homePageLinkData = {
    homePage: "Home Page",
};

const landingPageData = {
    resourcesForHomelessRelief: "Resources for Homeless Relief",
    title: "Housing Voucher Help:",
    howWereSimplifyin: "How We’re Simplifying Resources for the Homeless Community",
    landinggraphic1: "/img/landinggraphic-1@1x.png",
    whatWeDid: "What We Did",
    withTheGoalOfInc: "With the goal of increasing the number of vouchers used in Seattle, we landed on the solution of  making a resource that homeless people could use to learn more about the emergency housing vouchers, how to apply, and what housing they would qualify for when awarded one.",
    weAlsoIncludedAdd: "We also included additional resources that the Seattle homeless population could use if they’re waiting for a voucher or ineligible to receive one.",
    asSeattlesHomeles: "As Seattle’s homeless population has been growing, countless resources have been created to combat this undeniable problem. The emergency housing voucher is just one program that was implemented across the US to help homeless people afford rent in their city, but after a year of being distributed, less than half of them have been awarded in the greater Seattle area. As Seattle residents who see this problem in our city every day, we wanted to make a difference, and take on the task of improving this program to get more people the housing they desperately need.",
    matchingdemo1: "/img/matchingdemo-1@1x.png",
    vouchertooldemo1: "/img/vouchertooldemo-1@1x.png",
    moreresourcesdemo1: "/img/moreresourcesdemo-1@1x.png",
    whyHomelessRelief: "Why Homeless Relief?",
    projectStatus: "Project Status",
    ourTargetAudience: "Our target audience, the homeless population in Seattle, is a unique demographic with specific needs, so considerations for our website needed to be made accordingly. With this in mind, we based our design off of the user research we conducted and the information we learned about the tech literacy of our target population and how they typically learn about resources available to them. Our solution provides clear instructions and information that allow the homeless population to effectively apply for and use the emergency housing vouchers in Seattle, no matter their prior experiences with technology.",
    bySimplifyingAnOt: "By simplifying an otherwise confusing and potentially inaccessible process, we hope to empower individuals experiencing homelessness or those who are risk of losing housing to better understand the resources available to them, so that they don’t have to feel lost and alone in an already difficult human experience. Our website acts as an anchoring point that individuals can come back to wherever they are in the voucher application process to get the help they need.",
    ourUsers: "Our Users",
    theBenefit: "The Benefit",
    ourTeam: "Our Team",
    nate1: "/img/nate-1@2x.png",
    alex1: "/img/alex-1@2x.png",
    me1: "/img/me-1@2x.png",
    waheeda1: "/img/waheeda-1@2x.png",
    weWillBePassingT: "We will be passing this project off to our sponsor, Frank Martinez and Last Myle, LLC, to maintain and possibly work on with another group in the future. The website will remain accessible with the same URL, but as a team, we will no longer be making updates to it after Spring Quarter 2022 ends.",
    spanText1: <React.Fragment>Nate Nguyen<br /></React.Fragment>,
    spanText2: "Project Manager",
    spanText3: <React.Fragment>Waheeda Hakim<br /></React.Fragment>,
    spanText4: "Data Analyst",
    spanText5: <React.Fragment>Allison Gibbons<br /></React.Fragment>,
    spanText6: "Web Developer",
    spanText7: <React.Fragment>Alex Gherman<br /></React.Fragment>,
    spanText8: "UX/UI Researcher and ",
    spanText9: "Designer",
    exploreOurServices: "Explore Our Services",
    text: "",
    logoProps: logo2Data,
    homePageLinkProps: homePageLinkData,
};

