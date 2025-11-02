import SectionPage from "./SectionPage";
import Subscription from "../components/Subscription";


export function Entertainment() {
  const items = [
    { title: "Top 10 Movies of 2025", desc: "Blockbusters that defined the year." },
    { title: "Music Festivals to Watch", desc: "Global lineup of summer festivals." },
    { title: "Streaming Show Spotlight", desc: "New releases taking over binge-watch lists." },
  ];

  return (
    <>
    <SectionPage
      title="Entertainment"
      items={items}
      iframeSrc="https://entertainment.globbalnews.com"
    />
      <Subscription />
      </>
  );
}
