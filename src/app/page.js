import Lights from "@/Components/lights";
import Image from "next/image";

export default function Home() {
  return (
    <section>
      <h1 className="text-center font-bold text-4xl mt-10">
        Traffic Light App
      </h1>
      <Lights />
    </section>
  );
}
