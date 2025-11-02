import SectionPage from "./SectionPage";
import Subscription from "../components/Subscription";


export function Shop() {
  const items = [
    { title: "Smart Home Essentials", desc: "Tech upgrades to make life easier." },
    { title: "Top Deals of the Week", desc: "Grab exclusive discounts on your favorite brands." },
    { title: "Eco-Friendly Picks", desc: "Sustainable shopping made simple." },
  ];
  return (
  <>
  <SectionPage title="Shop" items={items} iframeSrc="https://shop.globbalnews.com" />
   <Subscription />
  </>
  );
}
