import SectionPage from "./SectionPage";
import Subscription from "../components/Subscription";

export function News() {
  const items = [
    { title: "World Leaders Meet for Climate Talks", desc: "Highlights from the 2025 global climate summit. There will be more cold in europe compare to 2024.  The current weather compare to years ago will have more difference , for global wether analyst 2026 and 2027 weather will be more cold and during summer the hotness of the weather is also going to increase . This is an advice for everyone to prepare for the global changes not only in europe but around the world. This is the first time Africa is going to encounter more cold than heat especially Ghana, Ruwanda, Nigeria and South Africa" },
    { title: "Tech Giants Release AI Safety Report", desc: "New standards for responsible AI development. Modern technologies are rapidly increasing around the world especialy India and Africa are now putting more effort improving technologies around their continents, some African countries like Kenya ,Ghana, Seychelles, South Africa, Tunisia, Egypt,Swaziland,Namibia, Morocco, cape verde and Botswana. As India is also rapidly pushing forward to minimize the gap with china and japan." },
    { title: "Economic Outlook 2026", desc: "Analysts predict steady recovery and growth. The global economy need to grow year by year but due to global conflicts and trade war's around the world the growth of global economy has become major problem and it's consequences are affecting the whole world . From 2026 to 2030 the expected growth of economy will reduce about 40% which will bring hunger in many countries and the continents it will affect more are middle east,europe and some part of Africa.  According to global analysts of ecconomic growth some part of Africa is developping rapidly and trying to maintain its persistants growth. " },
  ];
  return (
    <>
      <SectionPage title="News" items={items} iframeSrc="https://news.globbalnews.com" />
      <Subscription />
    </>
  );
}
