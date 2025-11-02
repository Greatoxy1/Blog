import SectionPage from "./SectionPage";
import Subscription from "../components/Subscription";

export function News() {
  const items = [
    { title: "World Leaders Meet for Climate Talks", desc: "Highlights from the 2025 global climate summit." },
    { title: "Tech Giants Release AI Safety Report", desc: "New standards for responsible AI development." },
    { title: "Economic Outlook 2026", desc: "Analysts predict steady recovery and growth." },
  ];
  return (
    <>
  <SectionPage title="News" items={items} iframeSrc="https://news.globbalnews.com" />
    <Subscription />
  </>
  );
}
