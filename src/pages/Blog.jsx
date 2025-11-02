import SectionPage from "./SectionPage";
import Subscription from "../components/Subscription";

export  function Blog() {
  const items = [
    { title: "How to Build a React Empire", desc: "Lessons from developers scaling projects globally." },
    { title: "Top 10 UI Trends of 2025", desc: "From glassmorphism to motion-first design." },
    { title: "The Productivity Myth", desc: "Why working less can sometimes mean achieving more." },
  ];
  return (
     <>
     <SectionPage title="Blog" items={items} iframeSrc="https://blog.globbalnews.com" />


  <Subscription />;
  </>
  ) 
}
