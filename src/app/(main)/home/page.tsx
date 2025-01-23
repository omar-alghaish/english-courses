import Section1 from "./_components/Section1";
import Section2 from "./_components/Section2";
import Section3 from "./_components/section3";
import Section4 from "./_components/Section4";
import Section5 from "./_components/Section5";
import Section6 from "./_components/Section6";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Section1 />
      <Section2 />
      <Section3 />
      {/* <Section4 /> */}
      <Section5 />
      <Section6 />
    </main>
  );
}
