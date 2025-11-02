import SectionPage from "./SectionPage";
import Subscription from "../components/Subscription";


export function Sports() {
  const items = [
    { title: "Champions League Final 2025", desc: "A legendary showdown in Madrid." },
    { title: "Top 5 Rising Athletes", desc: "Who’s breaking records this year?" },
    { title: "Fitness Tech Trends", desc: "Smart wearables revolutionizing training." },
  ];
  return(
  <>
    <SectionPage title="Sports" items={items} iframeSrc="https://sports.globbalnews.com" />
    <Subscription />
    </>
    );
}
