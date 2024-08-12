import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Open Words",
  description: "A platform for anonymously sharing your thoughts, confessions, and notes. Express yourself freely and connect with others through our safe and unfiltered space.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
// Your Voice, Unfiltered and Anonymous.

// Welcome to OpenWords, the platform where your thoughts, feelings, and stories find a voice—without revealing your identity. Whether you're looking to share a confession, release pent-up emotions, or simply jot down a random note, OpenWords provides a safe, anonymous space for you to express yourself. Post your thoughts publicly for others to see, relate to, and respond to. We believe in the power of words and the freedom to share them openly, without judgment. Join our community and let your voice be heard—anonymously, yet meaningfully.
