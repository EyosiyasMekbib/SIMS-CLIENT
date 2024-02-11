import { Montserrat } from "next/font/google";

export const montserrat_init = Montserrat({
  subsets: ["latin"],
  weight: ["800", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

export const montserrat = montserrat_init.variable;
