import React from "react";
import { PhoneCall, Truck, ShieldCheck, Timer, MessageCircle, MapPin, Star, Package } from "lucide-react";

// ------------------- Business Info -------------------
const BUSINESS_NAME = "Usman Rait Bajri Suppliers";
const BUSINESS_DESCRIPTION =
  "Usman Rait Bajri Suppliers: Your foundation for success starts here. We provide the essential building blocks for any project, big or small. Specializing in premium sand and gravel, we deliver quality materials you can depend on. From driveways to developments, trust us to supply the core components that will ensure a solid and lasting result. Choose Usman Rait Bajri Suppliers and build with confidence.";
const BUSINESS_CATEGORY = "Sand and Gravel Supplier, Construction Material Wholesaler";
const WHATSAPP_NUMBER = "+923004209832";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER.replace(/[^\d+]/g, "")}?text=${encodeURIComponent(
  "Assalam o Alaikum! Mujhe rait/bijri chahiye – Delivery details bhej dein."
)}`;
const PHONE_NUMBER = "0312-4209832";
const SMS_LINK = "sms:+923004209832";
const GOOGLE_MAPS_LINK = "https://maps.google.com/?q=Bahria+Town+Lahore";
const SERVICE_AREAS = [
  "Raiwind, Pakistan",
  "Dina Nath, Pakistan",
  "Jaranwala, Pakistan",
  "Raja Jang, Pakistan",
  "Manga Mandi, Pakistan",
  "Chung, Lahore, Pakistan",
  "Pattoki Purana, Pakistan",
  "Kot Radha Kishan, Pakistan",
  "Shamkay Bhattian, Pakistan",
  "Kahna Nau, Lahore, Pakistan",
  "Mohlanwal, Lahore, Pakistan",
  "Model Town, Lahore, Pakistan",
  "Bahria Town, Lahore, Pakistan",
  "DHA Phase 3, Lahore, Pakistan",
  "Lahore Cantt., Lahore, Pakistan",
  "Ali View Garden Lahore, Pakistan",
  "Maraka Village, Lahore, Pakistan",
  "Thokar Niaz Baig, Lahore, Pakistan",
  "Jallo More Bata Pur, Lahore, Pakistan",
  "Lahore Medical Housing Society, Lahore, Pakistan"
];
const OPENING_HOURS = "Mo-Su 07:00-19:30";

// ------------------- SVG LOGO -------------------
const Logo = ({ className = "h-10 w-auto" }) => (
  <svg
    className={className}
    viewBox="0 0 256 64"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label={BUSINESS_NAME}
  >
    <defs>
      <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0%" stopOpacity="1" />
        <stop offset="100%" stopOpacity="1" />
      </linearGradient>
    </defs>
    <g transform="translate(8,8)">
      <path d="M0 28c20-16 44-16 64 0 22-18 48-18 70 0" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      <path d="M100 8h34l10 10v16h-44z" fill="none" stroke="currentColor" strokeWidth="3" />
      <circle cx="108" cy="38" r="6" fill="none" stroke="currentColor" strokeWidth="3" />
      <circle cx="134" cy="38" r="6" fill="none" stroke="currentColor" strokeWidth="3" />
      <path d="M144 18h-12V8" fill="none" stroke="currentColor" strokeWidth="3" />
    </g>
    <g transform="translate(168,16)" fill="currentColor">
      <text x="0" y="18" fontFamily="Inter, ui-sans-serif, system-ui" fontWeight="800" fontSize="16">USMAN</text>
      <text x="0" y="40" fontFamily="Inter, ui-sans-serif, system-ui" fontWeight="600" fontSize="12">RAIT BAJRI</text>
      <text x="0" y="56" fontFamily="Inter, ui-sans-serif, system-ui" fontWeight="500" fontSize="10">SUPPLIERS</text>
    </g>
  </svg>
);

const Badge = ({ children }) => (
  <span className="inline-flex items-center gap-1 rounded-full border px-3 py-1 text-xs font-medium">
    {children}
  </span>
);

const Section = ({ id, children, className = "" }) => (
  <section id={id} className={`mx-auto max-w-6xl px-4 py-12 sm:py-16 ${className}`}>{children}</section>
);

// ------------------- Page -------------------
export default function UsmanRaitBijri() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full bg-white/80 backdrop-blur border-b">
        <div className="mx-auto flex flex-col sm:flex-row max-w-6xl items-center justify-between px-4 py-3 gap-3">
          <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-start">
            <Logo className="h-8 w-auto" />
            <div className="hidden sm:flex items-center gap-2">
              <Badge><MapPin className="h-3.5 w-3.5" /> Bahria Town, Lahore</Badge>
              <Badge><ShieldCheck className="h-3.5 w-3.5" /> Sahi Quality • Best Rate</Badge>
            </div>
          </div>
          <div className="flex items-center gap-2 w-full sm:w-auto justify-end sm:justify-start">
            <a href={WHATSAPP_LINK} className="hidden sm:inline-flex items-center gap-2 rounded-2xl border px-4 py-2 text-sm font-semibold hover:shadow bg-green-500">
              <MessageCircle className="h-4 w-4" /> WhatsApp Order
            </a>
            <a href={`tel:${PHONE_NUMBER}`} className="w-full sm:w-1/2 justify-center inline-flex items-center gap-2 rounded-2xl bg-black px-4 py-2 text-sm font-semibold text-white shadow hover:opacity-90">
              <PhoneCall className="h-4 w-4" /> Call Now +923124209832
            </a>
          </div>
        </div>
      </header>

      <Section id="home" className="pt-8 sm:pt-14">
        <div className="grid gap-8 sm:grid-cols-2  sm:items-center">
          <div className="space-y-5">
            <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight">
              {BUSINESS_NAME}
            </h1>
            <p className="text-lg sm:text-xl leading-relaxed">
              <span className="font-semibold">Lahore</span> mein high‑quality <span className="font-semibold">rait (sand), bajri/crush (gravel) </span> — <span className="font-semibold">doorstep delivery</span> ke saath. <span className="font-semibold">Jldi</span> supply*, sahi Quality, behtareen rate.
            </p>
            <p className="text-sm text-gray-600">*Order timing aur availability par depend karta hai.</p>
            <div className="flex flex-wrap items-center gap-3">
              <a href={WHATSAPP_LINK} className="inline-flex items-center gap-2 rounded-2xl bg-black px-5 py-3 text-white font-semibold shadow hover:opacity-90 w-full sm:w-auto justify-center">
                <MessageCircle className="h-5 w-5" /> WhatsApp Order Karein
              </a>
              <a href="#rates" className="inline-flex items-center gap-2 rounded-2xl border px-5 py-3 font-semibold hover:shadow w-full sm:w-auto justify-center">
                <Package className="h-5 w-5" /> Aaj ke Rates
              </a>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 text-sm text-gray-700">
              <div className="flex items-center gap-2"><Timer className="h-4 w-4" /> Jldi Supply</div>
              <div className="flex items-center gap-2"><Truck className="h-4 w-4" /> Dumper/Trolley</div>
              <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4" /> Verified Quality</div>
            </div>
          </div>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border bg-gradient-to-br from-gray-50 to-gray-100">
            <video
              className="absolute inset-0 w-full h-full object-cover rounded-xl"
              src="/truck_arrival.mp4"
              loop
              autoPlay
              muted
              playsInline
            />
            <div className="absolute inset-6 rounded-xl border backdrop-blur-sm flex items-center justify-center text-center p-6 text-white">
              <div>
                <p className="text-2xl font-bold ">“At Your Doorstep”</p>
                <p className=" mt-2">Rait • Bijri • Gravel • Bharosa‑mand Delivery</p>
                <a href={GOOGLE_MAPS_LINK} className="mt-4 inline-block text-sm underline">Bahria Town, Lahore</a>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Rates / Products */}
      <Section id="rates">
        <h2 className="text-2xl sm:text-3xl font-bold">Aaj ke Rates</h2>
        <p className="mt-2 text-gray-600">Call/WhatsApp par realtime confirm kar lein. Bulk par special rate.</p>
        <div className="mt-6 grid gap-4 grid-cols-1 sm:grid-cols-3">
          {[
            { name: "Lawrencepur Rait", unit: "Per Trolley", price: "Rs. —", note: "Finishing grade" },
            { name: "Ravi/Chenab Rait", unit: "Per Trolley", price: "Rs. —", note: "General construction" },
            { name: "Bijri / Crushed Gravel", unit: "Per Trolley", price: "Rs. —", note: "Base & lintels" },
          ].map((i) => (
            <div key={i.name} className="rounded-2xl border p-5 hover:shadow-sm flex flex-col justify-between">
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-semibold">{i.name}</p>
                  <p className="text-xs text-gray-600">{i.unit} · {i.note}</p>
                </div>
                <p className="text-lg font-bold">{i.price}</p>
              </div>
              <a href={WHATSAPP_LINK} className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-black px-4 py-2 text-white font-semibold hover:opacity-90">
                WhatsApp Booking
              </a>
            </div>
          ))}
        </div>
      </Section>

      {/* Why Us */}
      <Section id="why">
        <h2 className="text-2xl sm:text-3xl font-bold">Kyoon Hum?</h2>
        <div className="mt-6 grid gap-4 grid-cols-1 sm:grid-cols-3">
          {[
            { icon: <ShieldCheck className="h-5 w-5" />, title: "Sahi Quality", desc: "Weight slip & on‑site verification." },
            { icon: <Timer className="h-5 w-5" />, title: "Tez Delivery", desc: "Bahria Town & nearby – same‑day." },
            { icon: <Truck className="h-5 w-5" />, title: "Dumper & Trolley", desc: "Har site size ke liye fleet available." },
          ].map((f) => (
            <div key={f.title} className="rounded-2xl border p-5 flex flex-col justify-between">
              <div className="flex items-center gap-2 font-semibold">{f.icon} {f.title}</div>
              <p className="mt-2 text-sm text-gray-700">{f.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Social proof */}
      <Section id="reviews">
        <div className="rounded-2xl border p-6">
          <div className="flex items-center gap-3">
            <Star className="h-5 w-5" />
            <h3 className="text-xl font-bold">Contractors ke Feedback</h3>
          </div>
          <div className="mt-4 grid gap-4 grid-cols-1 sm:grid-cols-3">
            {[
              { name: "Adnan Contractor", text: "Rates fair aur delivery time par. Site par Quality verify karwate hain." },
              { name: "Hassan Builders", text: "Lawrencepur rait ki quality consistent. Repeat orders karte hain." },
              { name: "Areeb Developer", text: "WhatsApp par quick quotation aur same din supply mil gayi." },
            ].map((r) => (
              <div key={r.name} className="rounded-xl border p-4 flex flex-col justify-between">
                <p className="text-sm">“{r.text}”</p>
                <p className="mt-2 text-xs text-gray-600">— {r.name}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact">
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2">
          <div className="rounded-2xl border p-6">
            <h3 className="text-xl font-bold">Order / Poora Pata</h3>
            <p className="mt-2 text-gray-700">{BUSINESS_DESCRIPTION}</p>
            <div className="mt-4 space-y-2 text-sm">
              <p><span className="font-semibold">Phone:</span> <a className="underline" href={`tel:${PHONE_NUMBER}`}>{PHONE_NUMBER}</a></p>
              <p><span className="font-semibold">WhatsApp:</span> <a className="underline" href={WHATSAPP_LINK}>{WHATSAPP_NUMBER}</a></p>
              <p><span className="font-semibold">SMS:</span> <a className="underline" href={SMS_LINK}>{PHONE_NUMBER}</a></p>
              <p><span className="font-semibold">Service Areas:</span> {SERVICE_AREAS.join(", ")}</p>
              <p><span className="font-semibold">Timing:</span> 07:00–19:30 (Daily)</p>
              <p><span className="font-semibold">Location:</span> No location; deliveries and home services only</p>
            </div>
            <div className="mt-4 flex flex-col sm:flex-row gap-3">
              <a href={WHATSAPP_LINK} className="inline-flex items-center gap-2 rounded-2xl bg-black px-5 py-3 text-white font-semibold hover:opacity-90 justify-center">
                <MessageCircle className="h-5 w-5" /> WhatsApp Now
              </a>
              <a href={`tel:${PHONE_NUMBER}`} className="inline-flex items-center gap-2 rounded-2xl border px-5 py-3 font-semibold hover:shadow justify-center">
                <PhoneCall className="h-5 w-5" /> Call
              </a>
              <a href={SMS_LINK} className="inline-flex items-center gap-2 rounded-2xl border px-5 py-3 font-semibold hover:shadow justify-center">
                SMS
              </a>
            </div>
          </div>
          <div className="rounded-2xl border p-6">
            <h3 className="text-xl font-bold">FAQs</h3>
            <div className="mt-4 space-y-3 text-sm">
              <details className="rounded-lg border p-3">
                <summary className="font-semibold">Payment ka tareeqa?</summary>
                <p className="mt-2">Cash on delivery ya bank transfer. Bulk clients ke liye monthly billing available.</p>
              </details>
              <details className="rounded-lg border p-3">
                <summary className="font-semibold">Return/Change policy?</summary>
                <p className="mt-2">Site par quality confirm karne ke baad hi offload karte hain. Mis‑delivery me immediate replace.</p>
              </details>
              <details className="rounded-lg border p-3">
                <summary className="font-semibold">Bulk discount?</summary>
                <p className="mt-2">Ji haan, project size aur frequency par negotiated rates milte hain.</p>
              </details>
            </div>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="border-t">
        <Section className="py-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Logo className="h-7" />
              <div>
                <p className="font-semibold">{BUSINESS_NAME}</p>
                <p className="text-xs text-gray-600">Bahria Town, Lahore — At Your Doorstep</p>
              </div>
            </div>
            <div className="text-sm text-gray-600">© {new Date().getFullYear()} {BUSINESS_NAME}. All rights reserved.</div>
          </div>
        </Section>
      </footer>

      {/* SEO / LocalBusiness JSON‑LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": ["LocalBusiness", "SandAndGravelSupplier", "ConstructionMaterialWholesaler"],
          name: BUSINESS_NAME,
          description: BUSINESS_DESCRIPTION,
          telephone: PHONE_NUMBER,
          areaServed: SERVICE_AREAS,
          openingHours: OPENING_HOURS,
          contactPoint: [
            { "@type": "ContactPoint", telephone: PHONE_NUMBER, contactType: "customer service" },
            { "@type": "ContactPoint", telephone: WHATSAPP_NUMBER, contactType: "WhatsApp" },
            { "@type": "ContactPoint", telephone: SMS_LINK, contactType: "SMS" }
          ],
          address: { "@type": "PostalAddress", addressLocality: "Lahore", addressRegion: "Punjab", addressCountry: "PK" },
          url: typeof window !== 'undefined' ? window.location.href : "",
          makesOffer: [
            { "@type": "Offer", itemOffered: { "@type": "Product", name: "Lawrencepur Rait" } },
            { "@type": "Offer", itemOffered: { "@type": "Product", name: "Ravi/Chenab Rait" } },
            { "@type": "Offer", itemOffered: { "@type": "Product", name: "Bijri / Crushed Gravel" } }
          ]
        })
      }} />
    </div>
  );
}