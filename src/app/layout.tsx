import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Providers } from "./providers";
import { Analytics } from '@vercel/analytics/react';
import { PenkleAnalytics } from "@/components/PenkleAnalytics";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
	metadataBase: new URL("https://espressive.fr"),
  title: {
		default: "Espressive",
		template: "Espressive: %s",
	},
  description: "A blog about the world of espresso",
	openGraph: {
		title: "Espressive",
		description: "A blog about the world of espresso",
		type: "website",
		locale: "en_US",
		url: "https://espressive.fr",
		images: [
			{
				url: "https://espressive.fr/opengraph-image.png",
				width: 980,
				height: 980,
				alt: "Espressive",
			},
		],
	},
	robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
	},
	twitter: {
		title: "Espressive",
		site: "@espressive",
		card: "summary_large_image",
	},
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={poppins.className}>
        <Providers>{children}
					<Analytics/>
					<PenkleAnalytics domain="espressive.fr"/>
				</Providers>
      </body>
    </html>
  );
}
