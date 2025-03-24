import { getBaseURL } from "@lib/util/env"
import { Metadata } from "next"
import "styles/globals.css"
import { Ubuntu } from "next/font/google";

const ubuntu = Ubuntu({
    subsets: ["latin"],
    weight: ["300", "400", "700"],
    variable: "--font-ubuntu",
});

export const metadata: Metadata = {
  metadataBase: new URL(getBaseURL()),
}

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" data-mode="light" className={ubuntu.variable}>
      <body>
        <main className="relative">{props.children}</main>
      </body>
    </html>
  )
}
