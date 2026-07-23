import type { SiteData } from "./site-types";

export const siteData: SiteData = {
  brand: "Yasir Dental Care", mark: "YD", specialty: "Three Karachi locations", city: "Johar & Gulshan, Karachi",
  eyebrow: "Quality dental care since 2010", headline: "Your neighborhood dental team—wherever you are.",
  intro: "Accessible, modern dental care across three Karachi branches, with straightforward booking and extended hours for busy families.",
  heroCardTitle: "Three locations. One standard of care.", heroCardText: "Choose the branch that works for you and let the team guide the rest.",
  phoneDisplay: "0335 7777616", phoneHref: "tel:+923357777616", whatsappHref: "https://wa.me/923357777616", email: "info@yasirdentalcare.pk",
  address: "Gulistan-e-Johar, Gulshan Chowrangi & Block 6 Gulshan-e-Iqbal", hours: "Extended hours · Sunday appointments available", established: "Providing dental care in Karachi since 2010",
  variant: "warm", theme: { ink: "#33274f", muted: "#716987", paper: "#fdfbff", surface: "#eee9f7", primary: "#5b4b8a", primaryDark: "#2d234f", accent: "#ffb17a", line: "#e0d9ec" },
  stats: [{ value: "2010", label: "Serving since" }, { value: "3", label: "Karachi branches" }, { value: "7 days", label: "Weekly availability" }, { value: "1", label: "Booking number" }],
  services: [
    { icon: "○", title: "Dental checkups", description: "Routine examinations and preventive care for healthy teeth, gums, and everyday confidence." },
    { icon: "≈", title: "Pain relief & RCT", description: "Assessment and treatment for tooth pain, sensitivity, infection, and damaged teeth." },
    { icon: "↔", title: "Braces & aligners", description: "Alignment options for different ages, goals, and treatment preferences." },
    { icon: "✦", title: "Whitening & veneers", description: "Cosmetic choices discussed with attention to natural proportion and long-term health." },
    { icon: "+", title: "Implants", description: "Consultation and planning for replacing missing teeth and restoring function." },
    { icon: "◇", title: "Crowns & bridges", description: "Durable restorative care for teeth that need strength, protection, or replacement." }
  ],
  doctor: { name: "Yasir Dental Care Team", title: "General, restorative & family dentistry", initials: "YD", bio: "The Yasir Dental Care team provides convenient dental services across Johar and Gulshan. The multi-branch model is designed to make dependable follow-up easier for patients and families.", credentials: ["Three clinic locations", "Extended hours", "Family dentistry", "Direct WhatsApp booking"] },
  promises: [{ title: "The branch that fits", description: "Choose from three locations across Johar and Gulshan using one contact number." }, { title: "Appointments after work", description: "Extended evening hours make regular dental care easier to schedule." }, { title: "Continuity across visits", description: "Keep your care coordinated even when another branch is more convenient." }],
  process: [{ step: "01", title: "Choose a branch", description: "Tell the team which location and time work best for you." }, { step: "02", title: "Confirm the appointment", description: "Receive a clear confirmation rather than relying on an outdated calendar." }, { step: "03", title: "Visit with confidence", description: "Arrive knowing where to go, who to contact, and what the appointment covers." }],
  testimonial: { quote: "Being able to choose a nearby branch and book through one number made the whole process much easier for our family.", author: "Yasir Dental Care patient", detail: "Patient experience" },
  faqs: [{ question: "Which branches are available?", answer: "The clinic lists branches in Gulistan-e-Johar, Gulshan Chowrangi, and Block 6 Gulshan-e-Iqbal." }, { question: "Are Sunday appointments available?", answer: "Sunday availability varies by branch. Contact the clinic to confirm the current schedule." }, { question: "Can I book through WhatsApp?", answer: "Yes. Use the booking button and include your preferred branch, date, and concern." }]
};
