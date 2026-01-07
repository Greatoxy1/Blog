import SectionPage from "./SectionPage";
import Subscription from "../components/Subscription";

export function Blog() {
  const items = [
    { title: "How to Build a React Empire", desc: "Lessons from developers scaling projects globally. Tahirus enterprise is a company that has a group of organizations. The following are the amazing things they do around the world. Business assistance is one of the major thing they do to help people ,if your dream is to open new business but you have no idea of how to start it they are number one to help you until you see progress,if you already have business but finding some difficulties they are ready to assist.   " },
    { title: "Top 10 UI Trends of 2025", desc: "From glassmorphism to motion-first design. What are the top UI design trends in 2025? The leading trends include interactive 3D elements, generative AI personalization, liquid glass aesthetics, voice and gesture interfaces, advanced micro-interactions, bold typography, adaptive layouts, inclusive design, AR/VR experiences, and sustainability-focused interfaces.The UI design landscape of 2025 is defined by a pursuit of intuitive, immersive, and human-centered experiences. From interactive 3D elements and generative AI personalization to voice interfaces, adaptive layouts, and sustainable design, every trend reflects a deeper understanding of user needs and behaviors.Designers are no longer just creating visually appealing screens—they are crafting experiences that anticipate actions, guide decisions, and foster emotional connections. By adopting these UI design trends thoughtfully, UI professionals can design interfaces that are not only visually striking but also meaningful, inclusive, and future-ready. Tahirus enterprise is one of the amazing development organization. Are you dreaming of having your own website?, dont waste time to contact them . UI is one of the modern world. Designing amazing things is our goal, bringing dream into reallity, just contact Tahirus enterprise.    " },
    { title: "The Productivity Myth", desc: "Why working less can sometimes mean achieving more. Sometimes working more without experience can bring nothing ,having idea and experience help you work faster and achieve more as you want.The only way to improve your skils is to find someone who have more idea about your goal and can asssist you until you reach your destination in life." },
  ];
  return (
    <>
      <SectionPage title="Blog" items={items} iframeSrc="https://blog.globbalnews.com" />


      <Subscription />;
    </>
  )
}
