import { SiteLanding } from "./SiteLanding";
import { siteData } from "./site-data";

export default function Home() {
  return <SiteLanding data={siteData} />;
}
