
import { Roboto } from "next/font/google";

import { Athletes } from "@/components/sport/Athletes";
import { Players } from "@/components/sport/Players";

const roboto = Roboto({
  weight: '400',
  subsets: ["latin"],

});

export default function Home() {
  return (
    <main className={roboto.className}>
      <Athletes></Athletes>
      <Players></Players>
    </main>
  );
}
