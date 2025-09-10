import Link from "next/link";
import Separator from "./components/Separator";

const sections = [
  {
    heading: "L",
    links: [
      { name: "Login Card", url: "/l/login" },
    ],
  },
  {
    heading: "O",
    links: [
      { name: "OTP Verification", url: "/o/otp-verification" },
    ],
  },
  {
    heading: "p",
    links: [
      { name: "Password input", url: "/p/password-input" },
      { name: "Password input with strength meter", url: "/p/password-strength-input" },
      { name: "Pricing Card", url: "/p/pricing-card" },
      { name: "Pricing Section", url: "/p/pricing-section" },
    ],
  },
  {
    heading: "R",
    links: [
      { name: "Reset Password", url: "/r/reset-password" },
    ],
  },
  {
    heading: "S",
    links: [
      { name: "Seprator", url: "/s/separator" },
      { name: "Seprator with text", url: "/s/separator-with-text" },
    ],
  },
  {
    heading: "T",
    links: [
      { name: "Testimonial Card", url: "/t/testimonial-card" },
      { name: "Testimonial Section", url: "/t/testimonial-section" },
      { name: "Theme Switcher", url: "/t/theme-switcher" },
      { name: "Trusted By Section", url: "/t/trusted-by-section" },
    ],
  },
];

export default function Home() {
  return (
    <div className="p-2">
      <div>Live Demo Server is Running...</div>
      <div className="ml-5 mt-5">
        {sections.map((section, index) => (
          <div key={section.heading} className="mb-2">
            <h1 className="text-3xl font-bold">{section.heading}</h1>
            <div className="ml-3 mb-3 flex flex-col gap-2">
              {section.links.map((link, i) => (
                <Link key={i} href={link.url} className="text-sm underline">
                  {link.name}
                </Link>
              ))}
            </div>
            {index < sections.length - 1 && (
              <Separator className="bg-black/10" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
