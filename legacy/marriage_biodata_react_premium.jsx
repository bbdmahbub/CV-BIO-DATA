import React from "react";
import { Heart, MoonStar, BookOpen, GraduationCap, Briefcase, Home, Phone, Mail, MapPin, User, Sparkles, ShieldCheck, Languages, Award, Flower2, Clock3, Utensils, Plane, Laptop2, CalendarDays, Droplets, Ruler } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const detailGroups = {
  personal: [
    { label: "Full Name", value: "Md. Mahbubur Rahman", icon: User },
    { label: "Nickname", value: "Nasir Uddin", icon: Sparkles },
    { label: "Date of Birth", value: "20 December 1997", icon: CalendarDays },
    { label: "Age", value: "27 Years", icon: Clock3 },
    { label: "Religion", value: "Islam (Practicing Muslim)", icon: MoonStar },
    { label: "Marital Status", value: "Unmarried", icon: Heart },
    { label: "Complexion", value: "Medium Dark", icon: Flower2 },
    { label: "Height & Weight", value: "About 5' 3\" & 72 KGs", icon: Ruler },
    { label: "Blood Group", value: "A+", icon: Droplets },
    { label: "Health Status", value: "Healthy, non-smoker, no addiction", icon: ShieldCheck },
  ],
  family: [
    ["Father", "Late Abdul Kader Howlader (known as Kader Doctor) — Village Doctor and Primary Teacher"],
    ["Mother", "Farida Begum — Housewife"],
    ["Siblings", "4 Brothers and 3 Sisters"],
    ["Permanent Address", "Uttar Sutalori, Jomaddar Para, Morrelganj, Bagerhat"],
    ["District", "Bagerhat"],
  ],
  education: [
    ["M.A. (Arabic Language & Literature)", "Islamic University, Kushtia • CGPA 3.58/4 • 2022"],
    ["B.A. Honors (Arabic Language & Literature)", "Islamic University, Kushtia • CGPA 3.58/4 • 2020"],
    ["Alim (HSC)", "Ta’mirul Millat Kamil Madrasah, Tongi • GPA 5.00/5 • 2014"],
    ["Dakhil (SSC)", "Ta’limul Millat Rahmatial Kamil Madrasah, Sonadanga • GPA 5.00/5 • 2012"],
  ],
  work: [
    ["Procurement & Servicing Lead", "Earthface IT, Dhaka • 27 Nov 2021 – Present"],
    ["IT Support Assistant (Part-time)", "Dept. of Arabic Language and Literature, IU, Kushtia • 23 Mar 2017 – 20 Oct 2021"],
    ["IT Executive (Part-time)", "Khondokar Telecom, Gazipur • 7 Jul 2014 – 12 Dec 2015"],
  ],
  training: [
    ["Corporate Management Bootcamp", "2023 • 10 Days • BYLC, Bangladesh"],
    ["Professional Digital Content Management (PDCM)", "3 Months • SEIP, Finance Ministry of Bangladesh"],
    ["Web Design & Development", "200 Hours • LEDP, ICT Division of Bangladesh"],
    ["Computer & Its Applications", "1 Year • Islamic University, Kushtia"],
    ["Troubleshooting in Computer Security", "ICT Division, a2i"],
    ["Microsoft Word Basics", "a2i, Muktapath"],
    ["Video Production", "Human Development Media, a2i"],
    ["Digital Security Essentials", "Digital Security Agency, a2i"],
    ["Idea Innovation Workshop", "Mobile Games & Apps Development • ICT Division, Digital Bangladesh"],
  ],
};

const traits = [
  "Humble",
  "Religious",
  "Trustworthy",
  "Punctual",
  "Reserved by nature",
  "Socially well-behaved",
  "Family-oriented",
  "Tech-savvy",
  "Values halal lifestyle",
];

const hobbies = [
  { icon: MusicIcon, title: "Cultural Interest", text: "Singing, acting, lyrics, and cultural awareness" },
  { icon: Sparkles, title: "Creative Thinking", text: "Optimizing ideas and improving practical solutions" },
  { icon: Laptop2, title: "Helping Others", text: "Supports others with technology and digital guidance" },
  { icon: BookOpen, title: "Personal Interest", text: "Islamic lectures, reading, travelling, and learning technology" },
];

const visitLinkClassName =
  "ml-2 inline-flex max-w-full items-center justify-center rounded-full border border-amber-300 bg-amber-50 px-3 py-1 text-center text-xs font-semibold text-amber-800 transition hover:bg-amber-100 whitespace-normal break-words";

const lateBadgeClassName =
  "mr-2 inline-flex items-center rounded-full border border-rose-200 bg-rose-50 px-2.5 py-0.5 align-middle text-[11px] font-bold uppercase tracking-[0.12em] text-rose-700";

const mapLinkClassName =
  "mt-3 inline-flex w-full max-w-full flex-wrap items-center justify-center gap-2 rounded-full bg-gradient-to-r from-teal-700 to-cyan-600 px-4 py-2 text-center text-xs font-bold text-white shadow-[0_10px_24px_rgba(13,115,119,0.18)] transition hover:-translate-y-0.5 hover:shadow-[0_14px_28px_rgba(13,115,119,0.22)] break-words sm:w-auto";

const familySummaryTags = ["Respectable", "Middle-Class", "Educated", "Religious"];
const permanentAddressValue = "Uttar Sutalori, Jomaddar Para, Morrelganj, Bagerhat";
const permanentAddressMapHref = "https://maps.app.goo.gl/hvcHqxMvhF9cGFbM6";
const detailVisitTargets = {
  "Corporate Management Bootcamp": "https://bylc.org",
  "Professional Digital Content Management (PDCM)": "https://lms.seip-fd.gov.bd",
  "Web Design & Development": "https://ictd.gov.bd",
  "Troubleshooting in Computer Security": "https://a2i.gov.bd",
  "Microsoft Word Basics": "https://a2i.gov.bd",
  "Video Production": "https://a2i.gov.bd",
  "Digital Security Essentials": "https://a2i.gov.bd",
  "Idea Innovation Workshop": "https://a2i.gov.bd",
};

const activities = [
  {
    key: "volunteering",
    title: "Volunteering",
    period: "7th July 2014 - 12th Dec 2015",
    items: [
      { icon: User, text: "Former CR of the class for 2 years, Islamic University, Kushtia.", href: "https://iu.ac.bd" },
      { icon: BookOpen, text: "Former Director of Betikrom Shahitya Shangskritik Jote, IU.", href: "https://web.facebook.com/betikrom87" },
      { icon: ShieldCheck, text: "Former Central Member of Bangladesh Islamic Chhatra Shibir", href: "https://shibir.org.bd" },
    ],
  },
  {
    key: "singing",
    title: "Singing",
    items: [
      { icon: MusicIcon, text: "Performed song on SATV, ETV, Channel 9" },
    ],
  },
  {
    key: "acting",
    title: "Acting",
    period: "2018",
    items: [
      { icon: ClapperIcon, text: "Acted in a drama, was placed 2nd Nationally." },
    ],
  },
  {
    key: "award",
    title: "Award",
    period: "2012",
    items: [
      { icon: Award, text: "Awarded on Poetry Recitation Placed 2nd Nationally" },
    ],
  },
];

const languages = [
  ["Bangla", "Excellent"],
  ["English", "Good"],
  ["Arabic", "Good"],
];

const brideExpectations = [
  {
    title: "Religious Practice",
    text: "Practicing Muslimah with hijab and niqab, aware of maintaining mahram.",
    icon: MoonStar,
  },
  {
    title: "Character",
    text: "Educated and modest in behavior.",
    icon: Sparkles,
  },
  {
    title: "Family Role",
    text: "Aware of family responsibilities.",
    icon: Home,
  },
  {
    title: "Lifestyle",
    text: "Focused on family and Islamic lifestyle.",
    icon: Heart,
  },
  {
    title: "Preferred Complexion",
    text: "Medium/Fair (flexible).",
    icon: Flower2,
  },
  {
    title: "Profession",
    text: "Profession is not required; preference is for a family-focused Islamic lifestyle.",
    icon: Briefcase,
  },
];

function MusicIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M9 18V5l10-2v13" />
      <circle cx="6" cy="18" r="3" />
      <circle cx="16" cy="16" r="3" />
    </svg>
  );
}

function ClapperIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M4 8h16v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8Z" />
      <path d="m4 8 2.5-4h3L7 8" />
      <path d="m9.5 4 2.5 4" />
      <path d="m14 4 2.5 4" />
      <path d="M18.5 4 20 6.5" />
    </svg>
  );
}

function Section({ icon: Icon, title, children, className = "" }) {
  return (
    <Card className={`border-rose-100/70 bg-white/80 shadow-[0_10px_40px_rgba(120,53,15,0.08)] backdrop-blur ${className}`}>
      <CardContent className="p-6 md:p-7">
        <div className="mb-5 flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-100 via-rose-100 to-orange-100 text-amber-700 shadow-sm">
            <Icon className="h-5 w-5" />
          </div>
          <div className="min-w-0">
            <h2 className="break-words text-xl font-semibold tracking-tight text-stone-800 md:text-2xl">{title}</h2>
            <div className="mt-1 h-1 w-14 rounded-full bg-gradient-to-r from-amber-400 via-rose-400 to-orange-300" />
          </div>
        </div>
        {children}
      </CardContent>
    </Card>
  );
}

function FamilySummary() {
  return (
    <div className="mb-5 rounded-[26px] border border-amber-200/80 bg-[linear-gradient(135deg,rgba(255,247,237,0.96),rgba(255,255,255,0.98),rgba(255,241,242,0.94))] p-5 shadow-[0_14px_30px_rgba(120,53,15,0.08)]">
      <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-amber-700">
        <ShieldCheck className="h-4 w-4" />
        Family Background
      </div>
      <p className="mt-3 text-base font-semibold leading-7 text-stone-800">
        A respectable, middle-class family grounded in education and religious values.
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {familySummaryTags.map((tag) => (
          <span key={tag} className="rounded-full border border-amber-200 bg-white/90 px-3 py-1 text-xs font-semibold text-amber-800 shadow-sm">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

const valueVisitTargets = [
  { text: "Islamic University, Kushtia", href: "https://iu.ac.bd" },
  { text: "Ta’mirul Millat Kamil Madrasah, Tongi", href: "https://www.tmt.edu.bd" },
];

function renderValueWithVisitLinks(value) {
  if (typeof value !== "string") {
    return value;
  }

  const match = valueVisitTargets.find(({ text }) => value.includes(text));

  if (!match) {
    return value;
  }

  const [before, after] = value.split(match.text);

  return (
    <>
      {before}
      {match.text}
      <a className={visitLinkClassName} href={match.href} target="_blank" rel="noreferrer">
        Visit
      </a>
      {after}
    </>
  );
}

function renderDetailValue(label, value) {
  const linkedValue = renderValueWithVisitLinks(value);

  if (label === "Permanent Address" && typeof linkedValue === "string" && linkedValue === permanentAddressValue) {
    return (
      <>
        {linkedValue}
        <div>
          <a className={mapLinkClassName} href={permanentAddressMapHref} target="_blank" rel="noreferrer">
            <MapPin className="h-3.5 w-3.5" />
            View on Google Maps
          </a>
        </div>
      </>
    );
  }

  const detailVisitHref = detailVisitTargets[label];
  if (detailVisitHref && typeof linkedValue === "string") {
    return (
      <>
        {linkedValue}
        <a className={visitLinkClassName} href={detailVisitHref} target="_blank" rel="noreferrer">
          Visit
        </a>
      </>
    );
  }

  if (typeof linkedValue !== "string" || !linkedValue.startsWith("Late ")) {
    return linkedValue;
  }

  return (
    <>
      <span className={lateBadgeClassName}>Late</span>
      {" "}
      {linkedValue.slice(5)}
    </>
  );
}

function DetailList({ items }) {
  return (
    <div className="grid gap-4">
      {items.map((item) => {
        const normalizedItem = Array.isArray(item)
          ? { label: item[0], value: item[1], icon: null }
          : item;
        const { label, value, icon: RowIcon } = normalizedItem;

        return (
          <div key={label} className="grid min-w-0 gap-1 rounded-2xl border border-stone-200/80 bg-gradient-to-r from-white to-rose-50/40 p-4 md:grid-cols-[180px_1fr] md:gap-4">
            <div className="flex min-w-0 items-center gap-3 text-sm font-semibold text-amber-800">
              {RowIcon ? (
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-amber-100 via-rose-100 to-orange-100 text-amber-700 shadow-sm">
                  <RowIcon className="h-4 w-4" />
                </span>
              ) : null}
              <span className="break-words">{label}</span>
            </div>
            <div className="min-w-0 break-words text-sm leading-7 text-stone-700">{renderDetailValue(label, value)}</div>
          </div>
        );
      })}
    </div>
  );
}

export default function MarriageBiodataPremium() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[radial-gradient(circle_at_top_left,rgba(251,191,36,0.18),transparent_22%),radial-gradient(circle_at_top_right,rgba(244,114,182,0.14),transparent_20%),linear-gradient(180deg,#fffdf8_0%,#fff7ed_48%,#fffaf5_100%)] p-4 md:p-8">
      <div className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-[32px] border border-amber-100/80 bg-white/80 shadow-[0_20px_80px_rgba(120,53,15,0.12)] backdrop-blur-xl print:shadow-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(251,191,36,0.12),transparent_18%),radial-gradient(circle_at_100%_10%,rgba(244,114,182,0.12),transparent_20%),radial-gradient(circle_at_50%_100%,rgba(251,146,60,0.08),transparent_22%)]" />
          <div className="relative p-5 md:p-8 lg:p-10">

            <div className="grid gap-6 lg:grid-cols-[340px_1fr]">
              <Card className="overflow-hidden border-amber-100/70 bg-gradient-to-b from-white to-rose-50/40 shadow-[0_10px_35px_rgba(120,53,15,0.08)]">
                <CardContent className="p-6">
                  <div className="text-center">
                    <Badge className="mb-4 rounded-full border-0 bg-amber-100 px-4 py-1.5 text-amber-800 hover:bg-amber-100">
                      <MoonStar className="mr-2 h-4 w-4" />
                      In the Name of Allah
                    </Badge>

                    <div className="mx-auto mb-5 flex h-52 w-52 items-center justify-center rounded-full bg-gradient-to-br from-amber-200 via-rose-200 to-orange-200 p-[6px] shadow-lg">
                      <div className="flex h-full w-full items-center justify-center rounded-full border-4 border-white bg-[linear-gradient(135deg,#fff7ed,#fff1f2)] text-center text-sm text-stone-500">
                        Add Profile Photo
                      </div>
                    </div>

                    <h1 className="break-words text-3xl font-bold tracking-tight text-stone-900">Md. Mahbubur Rahman</h1>
                    <p className="mt-2 text-sm leading-7 text-stone-600">
                      A sincere marriage biodata designed with modesty, warmth, and Islamic values.
                    </p>

                    <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
                      <Badge variant="secondary" className="rounded-full bg-rose-100 text-rose-700">Practicing Muslim</Badge>
                      <Badge variant="secondary" className="rounded-full bg-amber-100 text-amber-800">Family-Oriented</Badge>
                      <Badge variant="secondary" className="rounded-full bg-orange-100 text-orange-700">Humble Nature</Badge>
                    </div>

                    <Separator className="my-6 bg-amber-100" />

                    <div className="space-y-3 text-left text-sm">
                      {[
                        [User, "Age", "27 Years"],
                        [MapPin, "District", "Bagerhat"],
                        [Briefcase, "Profession", "Procurement & Servicing Lead"],
                        [Heart, "Lifestyle", "Healthy, non-smoker"],
                        [Languages, "Languages", "Bangla, English, Arabic"],
                      ].map(([Icon, label, value]) => (
                        <div key={label} className="flex items-start gap-3 rounded-2xl border border-stone-200/70 bg-white/80 p-3">
                          <Icon className="mt-0.5 h-4 w-4 text-amber-700" />
                          <div>
                            <div className="font-medium text-stone-800">{label}</div>
                            <div className="text-stone-600">{value}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="space-y-6">
                <Card className="border-amber-100/70 bg-gradient-to-r from-white via-rose-50/50 to-amber-50/60 shadow-[0_10px_35px_rgba(120,53,15,0.08)]">
                  <CardContent className="p-6 md:p-8">
                    <div className="flex flex-wrap items-center gap-3 text-amber-700">
                      <Heart className="h-5 w-5 fill-rose-200 text-rose-500" />
                      <MoonStar className="h-5 w-5" />
                      <Flower2 className="h-5 w-5 text-orange-400" />
                    </div>
                    <h2 className="mt-4 text-3xl font-bold leading-tight text-stone-900 md:text-5xl">
                      Marriage Proposal Biodata
                    </h2>
                    <p className="mt-4 max-w-3xl text-sm leading-8 text-stone-700 md:text-base">
                      Assalamu Alaikum wa Rahmatullah. This profile is prepared for a sincere and respectful marriage proposal.
                      The goal is to build a peaceful family based on <span className="font-semibold text-amber-800">Deen</span>,
                      mutual respect, compassion, and responsibility. A life partner is sought not only for companionship,
                      but for a halal bond rooted in faith, modesty, and tranquility.
                    </p>

                    <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                      {[
                        ["Religion", "Islam"],
                        ["Status", "Unmarried"],
                        ["Height", "5' 3\""],
                        ["Blood Group", "A+"],
                      ].map(([label, value]) => (
                        <div key={label} className="rounded-2xl border border-amber-100 bg-white/80 p-4 shadow-sm">
                          <div className="text-xs uppercase tracking-[0.18em] text-stone-500">{label}</div>
                          <div className="mt-2 text-lg font-semibold text-stone-900">{value}</div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <div className="grid gap-6 md:grid-cols-2">
                  <Section icon={User} title="Personal Information">
                    <DetailList items={detailGroups.personal} />
                  </Section>
                  <Section icon={Home} title="Family Information">
                    <FamilySummary />
                    <DetailList items={detailGroups.family} />
                  </Section>
                </div>
              </div>
            </div>

            <div className="mt-6 grid gap-6 lg:grid-cols-2">
              <Section icon={GraduationCap} title="Educational Qualifications">
                <DetailList items={detailGroups.education} />
              </Section>

              <Section icon={Briefcase} title="Work Experience">
                <DetailList items={detailGroups.work} />
              </Section>
            </div>

            <div className="mt-6 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
              <Section icon={Award} title="Training & Development">
                <DetailList items={detailGroups.training} />
              </Section>

              <div className="space-y-6">
                <Section icon={Languages} title="Language Proficiency">
                  <div className="grid gap-3">
                    {languages.map(([lang, level]) => (
                      <div key={lang} className="flex items-center justify-between rounded-2xl border border-stone-200/80 bg-gradient-to-r from-white to-amber-50/40 p-4">
                        <div className="font-medium text-stone-800">{lang}</div>
                        <Badge className="rounded-full border-0 bg-amber-100 text-amber-800 hover:bg-amber-100">{level}</Badge>
                      </div>
                    ))}
                  </div>
                </Section>

                <Section icon={ShieldCheck} title="Personality & Lifestyle">
                  <div className="flex flex-wrap gap-2">
                    {traits.map((trait) => (
                      <Badge key={trait} variant="secondary" className="rounded-full border border-rose-100 bg-rose-50 px-3 py-1.5 text-rose-700">
                        {trait}
                      </Badge>
                    ))}
                  </div>

                  <div className="mt-5 rounded-2xl border border-amber-100 bg-gradient-to-r from-amber-50 to-rose-50 p-4 text-sm leading-7 text-stone-700">
                    <div><span className="font-semibold text-amber-800">Future Goal:</span> Build a family based on Deen and mutual respect.</div>
                    <div><span className="font-semibold text-amber-800">Food Habit:</span> Prefers home-made halal food.</div>
                  </div>
                </Section>
              </div>
            </div>

            <div className="mt-6 grid gap-6 lg:grid-cols-2">
              <Section icon={Sparkles} title="Extra Curricular Activities">
                <div className="grid gap-3">
                  {activities.map(({ key, title, period, items }) => (
                    <div key={key} className="rounded-[24px] border border-stone-200/80 bg-white/90 p-4 shadow-sm">
                      <div className="mb-3 flex items-center justify-between gap-3">
                        <h3 className="text-base font-semibold text-stone-900">{title}</h3>
                        {period ? (
                          <Badge className="rounded-full border-0 bg-amber-100 px-3 py-1 text-amber-800 hover:bg-amber-100">
                            {period}
                          </Badge>
                        ) : null}
                      </div>

                      <div className="grid gap-3">
                        {items.map(({ icon: Icon, text, href }, idx) => (
                          <div key={`${key}-${idx}`} className="flex min-w-0 gap-3 rounded-2xl border border-stone-200/70 bg-gradient-to-r from-white to-rose-50/40 p-4">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-amber-100 via-rose-100 to-orange-100 text-amber-700 shadow-sm">
                              <Icon className="h-5 w-5" />
                            </div>
                            <p className="min-w-0 break-words text-sm leading-7 text-stone-700">
                              {text}
                              {href ? (
                                <a className={visitLinkClassName} href={href} target="_blank" rel="noreferrer">
                                  Visit
                                </a>
                              ) : null}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </Section>

              <Section icon={BookOpen} title="Hobbies & Interests">
                <div className="grid gap-4 sm:grid-cols-2">
                  {hobbies.map(({ icon: Icon, title, text }) => (
                    <div key={title} className="rounded-2xl border border-stone-200/80 bg-gradient-to-br from-white to-rose-50/50 p-4">
                      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="font-semibold text-stone-800">{title}</h3>
                      <p className="mt-2 text-sm leading-7 text-stone-600">{text}</p>
                    </div>
                  ))}
                </div>
              </Section>
            </div>

            <div className="mt-6 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <Section icon={Heart} title="Expectations From Bride">
                <div className="grid gap-3">
                  {brideExpectations.map(({ title, text, icon: Icon }) => (
                    <div
                      key={title}
                      className="flex gap-4 rounded-[24px] border border-rose-100 bg-[linear-gradient(135deg,rgba(255,241,242,0.92),rgba(255,255,255,0.98),rgba(255,247,237,0.94))] p-4 shadow-[0_12px_28px_rgba(120,53,15,0.06)]"
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-100 via-rose-100 to-orange-100 text-amber-700 shadow-sm">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-sm font-semibold text-stone-800">{title}</div>
                        <p className="mt-1 text-sm leading-7 text-stone-700">{text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Section>

              <Section icon={Phone} title="Contact & Location">
                <div className="space-y-4">
                  <div className="rounded-2xl border border-stone-200/80 bg-white p-4">
                    <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-stone-800">
                      <User className="h-4 w-4 text-amber-700" /> Name
                    </div>
                    <div className="text-sm text-stone-700">Md. Mahbubur Rahman</div>
                  </div>

                  <div className="rounded-2xl border border-stone-200/80 bg-white p-4">
                    <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-stone-800">
                      <Mail className="h-4 w-4 text-amber-700" /> Email
                    </div>
                    <div className="text-sm text-stone-700">
                      <a className="break-all font-semibold text-amber-700 underline-offset-4 hover:underline" href="mailto:bbdmahbub@gmail.com">
                        bbdmahbub@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-stone-200/80 bg-white p-4">
                    <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-stone-800">
                      <Phone className="h-4 w-4 text-amber-700" /> WhatsApp
                    </div>
                    <div className="text-sm text-stone-700">
                      <a className="break-all font-semibold text-amber-700 underline-offset-4 hover:underline" href="https://wa.me/8801917267607" target="_blank" rel="noreferrer">
                        +8801917267607
                      </a>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-stone-200/80 bg-white p-4">
                    <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-stone-800">
                      <MapPin className="h-4 w-4 text-amber-700" /> Current Address
                    </div>
                    <div className="text-sm leading-7 text-stone-700">Hatir Jheel, Dhaka, Bangladesh</div>
                  </div>

                  <div className="rounded-2xl border border-stone-200/80 bg-white p-4">
                    <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-stone-800">
                      <MapPin className="h-4 w-4 text-amber-700" /> Permanent Address
                    </div>
                    <div className="text-sm leading-7 text-stone-700">Uttar Sutalori, Jomaddar Para, Morrelganj, Bagerhat</div>
                  </div>

                  <div className="rounded-2xl border border-amber-100 bg-gradient-to-r from-amber-50 to-rose-50 p-4">
                    <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-amber-800">
                      <Clock3 className="h-4 w-4" /> Final Prayer
                    </div>
                    <p className="text-sm leading-7 text-stone-700">
                      I sincerely wish to be blessed with a righteous life partner who will be a source of peace and tranquility in this life and the hereafter. May Allah make it easy and accept it. Ameen.
                    </p>
                  </div>
                </div>
              </Section>
            </div>

            <div className="mt-8 rounded-[28px] border border-amber-100 bg-gradient-to-r from-stone-900 via-amber-950 to-stone-900 p-6 text-center text-stone-100 shadow-[0_12px_35px_rgba(41,37,36,0.22)] print:break-inside-avoid">
              <div className="mx-auto mb-3 flex w-fit items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-amber-100">
                <MoonStar className="h-4 w-4" />
                Rabbana Hablana Min Azwajina Wa Dhurriyyatina Qurrata A’yun
              </div>
              <p className="mx-auto max-w-3xl text-sm leading-8 text-stone-200">
                This biodata is designed with a sense of modesty, love, dignity, and Islamic values. It may be printed,
                shared digitally, or further customized by adding a profile photograph and guardian contact details.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
