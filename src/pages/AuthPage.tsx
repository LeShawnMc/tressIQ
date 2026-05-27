import { useState } from 'react';

// ── Assets ──────────────────────────────────────────────────────────────────
const logoIcon        = "https://www.figma.com/api/mcp/asset/22409967-86f6-4507-af2d-b9933a0eca86";
const menuIcon        = "https://www.figma.com/api/mcp/asset/68aa8856-d177-40a7-9559-f00d1fb403bc";
const emailIcon       = "https://www.figma.com/api/mcp/asset/8eac4a41-30f9-416c-80aa-c0ce320da9e3";
const lockIcon        = "https://www.figma.com/api/mcp/asset/4ddbfba6-1367-479c-a6fd-5a4c3af5068c";
const eyeIcon         = "https://www.figma.com/api/mcp/asset/9b689d78-b7c4-461e-a6fb-7440a219d428";
const googleIcon      = "https://www.figma.com/api/mcp/asset/d2f20774-f48f-41de-a4ce-47dc68cb2109";
const appleIcon       = "https://www.figma.com/api/mcp/asset/1c0d4250-e7f3-4656-a982-f48251e5fea7";
const facebookIcon    = "https://www.figma.com/api/mcp/asset/c0bff1fe-6251-4faa-8ecf-dfe5f838d01f";
const reviewsIcon     = "https://www.figma.com/api/mcp/asset/89e6ca0c-f232-4577-bf27-08cf622e6d28";
const favoritesIcon   = "https://www.figma.com/api/mcp/asset/3478e861-bb7f-41d1-a063-5d6567f3bc44";
const recIcon         = "https://www.figma.com/api/mcp/asset/86f202a9-5128-4cbb-a873-afc1a5bfd48c";
const sensitivityIcon = "https://www.figma.com/api/mcp/asset/5ceb4267-bb34-4f81-b949-64f0283e06d1";
const alertsIcon      = "https://www.figma.com/api/mcp/asset/17ef45bf-d2c7-4bf2-a3df-f4c9c27ef376";
const communityIcon   = "https://www.figma.com/api/mcp/asset/6021d111-901d-4755-b7dd-d9c3446a2c80";
const shieldIcon      = "https://www.figma.com/api/mcp/asset/9ae7698d-e009-4eb1-9f15-807b692b1556";
const encryptionIcon  = "https://www.figma.com/api/mcp/asset/b26e9bb1-b615-46a4-ac48-fa88cc457ccf";
const gdprIcon        = "https://www.figma.com/api/mcp/asset/9e03be66-4f60-4db1-9c1a-60d0025a3176";
const noDataIcon      = "https://www.figma.com/api/mcp/asset/4331ebf2-778f-41a3-8567-9cf664c5670c";
const verifiedIcon    = "https://www.figma.com/api/mcp/asset/9a99e314-2c8c-4ee0-8189-e2c8bf9f8775";
const guestArrow      = "https://www.figma.com/api/mcp/asset/fe854a3a-c661-4a5e-881d-8153c55c568d";
const footerLogo      = "https://www.figma.com/api/mcp/asset/65b2db16-9df5-4e2f-9b68-2fdef3b65433";
const fbIcon          = "https://www.figma.com/api/mcp/asset/38237881-0760-4cb4-b763-ee0a8a99b8ec";
const twitterIcon     = "https://www.figma.com/api/mcp/asset/29c237c3-998c-4a5a-8d3a-55fa23997345";
const igIcon          = "https://www.figma.com/api/mcp/asset/04c792e1-8a88-4c87-9d67-575a969a8cef";
const ytIcon          = "https://www.figma.com/api/mcp/asset/f6c8e7b2-b8a5-4d7d-962f-c33ad4819013";
const tiktokIcon      = "https://www.figma.com/api/mcp/asset/f31bdade-404b-462b-870e-6c29750db8b9";
const nameIcon        = "https://www.figma.com/api/mcp/asset/22409967-86f6-4507-af2d-b9933a0eca86";

// ── Sub-components ───────────────────────────────────────────────────────────

function InputField({
  label,
  type = 'text',
  placeholder,
  icon,
  rightSlot,
}: {
  label: string;
  type?: string;
  placeholder: string;
  icon: string;
  rightSlot?: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2 w-full">
      <label className="font-medium text-[14px] text-[#111] leading-5">{label}</label>
      <div className="relative w-full">
        {/* left icon */}
        <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center pointer-events-none">
          <img src={icon} alt="" className="w-4 h-4 object-contain" />
        </div>
        <input
          type={type}
          placeholder={placeholder}
          className="w-full bg-white border-2 border-[rgba(200,164,106,0.2)] rounded-[12px] pl-[50px] pr-[50px] py-5 text-[16px] text-[#4b3832] placeholder:text-[#4b3832] placeholder:opacity-50 outline-none focus:border-[rgba(200,164,106,0.6)] transition-colors"
        />
        {/* right slot (e.g. eye icon) */}
        {rightSlot && (
          <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center">
            {rightSlot}
          </div>
        )}
      </div>
    </div>
  );
}

function OAuthButtons() {
  const providers = [
    { icon: googleIcon, label: 'Continue with Google', iconW: '19px', iconH: '20px' },
    { icon: appleIcon,  label: 'Continue with Apple',  iconW: '15px', iconH: '20px' },
    { icon: facebookIcon, label: 'Continue with Facebook', iconW: '20px', iconH: '20px' },
  ];
  return (
    <div className="flex flex-col gap-3 w-full">
      {providers.map((p) => (
        <button
          key={p.label}
          className="bg-white border-2 border-[rgba(200,164,106,0.2)] rounded-[12px] py-[18px] flex items-center justify-center gap-3 w-full hover:border-[rgba(200,164,106,0.5)] transition-colors"
        >
          <img src={p.icon} alt={p.label} style={{ width: p.iconW, height: p.iconH }} className="object-contain" />
          <span className="font-medium text-[16px] text-[#111]">{p.label}</span>
        </button>
      ))}
    </div>
  );
}

function Divider() {
  return (
    <div className="relative flex items-center justify-center w-full">
      <div className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-[rgba(75,56,50,0.2)]" />
      </div>
      <div className="relative bg-[#f5f1ea] px-4">
        <span className="font-medium text-[14px] text-[#4b3832]">Or continue with</span>
      </div>
    </div>
  );
}

// ── Sign In form ─────────────────────────────────────────────────────────────

function SignInForm() {
  const [showPw, setShowPw] = useState(false);

  return (
    <div className="flex flex-col gap-6 w-full">
      {/* Heading */}
      <div className="flex flex-col gap-2 items-center">
        <h1 className="font-bold text-[24px] text-[#111] text-center leading-8">Welcome Back</h1>
        <p className="text-[#4b3832] text-[14px] text-center leading-5">Sign in to continue your hair journey</p>
      </div>

      {/* Fields */}
      <div className="flex flex-col gap-4 w-full">
        <InputField
          label="Email Address"
          type="email"
          placeholder="your.email@example.com"
          icon={emailIcon}
        />
        <InputField
          label="Password"
          type={showPw ? 'text' : 'password'}
          placeholder="Enter your password"
          icon={lockIcon}
          rightSlot={
            <button onClick={() => setShowPw(!showPw)} className="opacity-60 hover:opacity-100 transition-opacity">
              <img src={eyeIcon} alt="toggle password" className="w-[18px] h-4 object-contain" />
            </button>
          }
        />

        {/* Remember me + Forgot */}
        <div className="flex items-center justify-between">
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" className="w-4 h-4 rounded-[2.5px] border border-[#767676] accent-[#c8a46a]" />
            <span className="text-[#4b3832] text-[14px] leading-5">Remember me</span>
          </label>
          <button className="font-medium text-[14px] text-[#c8a46a]">Forgot Password?</button>
        </div>

        {/* Sign In CTA */}
        <button className="relative bg-[#111] text-[#f5f1ea] font-semibold text-[16px] py-4 rounded-[12px] w-full shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] hover:bg-[#2a2a2a] transition-colors">
          Sign In
        </button>
      </div>

      <Divider />
      <OAuthButtons />
    </div>
  );
}

// ── Sign Up form ─────────────────────────────────────────────────────────────

function SignUpForm({ onSignedUp }: { onSignedUp?: () => void }) {
  const [showPw, setShowPw]      = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="flex flex-col gap-6 w-full">
      {/* Heading */}
      <div className="flex flex-col gap-2 items-center">
        <h1 className="font-bold text-[24px] text-[#111] text-center leading-8">Create Account</h1>
        <p className="text-[#4b3832] text-[14px] text-center leading-5">Join 25,000+ members on TressIQ</p>
      </div>

      {/* Fields */}
      <div className="flex flex-col gap-4 w-full">
        <InputField
          label="Full Name"
          type="text"
          placeholder="Your full name"
          icon={nameIcon}
        />
        <InputField
          label="Email Address"
          type="email"
          placeholder="your.email@example.com"
          icon={emailIcon}
        />
        <InputField
          label="Password"
          type={showPw ? 'text' : 'password'}
          placeholder="Create a password"
          icon={lockIcon}
          rightSlot={
            <button onClick={() => setShowPw(!showPw)} className="opacity-60 hover:opacity-100 transition-opacity">
              <img src={eyeIcon} alt="toggle password" className="w-[18px] h-4 object-contain" />
            </button>
          }
        />
        <InputField
          label="Confirm Password"
          type={showConfirm ? 'text' : 'password'}
          placeholder="Confirm your password"
          icon={lockIcon}
          rightSlot={
            <button onClick={() => setShowConfirm(!showConfirm)} className="opacity-60 hover:opacity-100 transition-opacity">
              <img src={eyeIcon} alt="toggle password" className="w-[18px] h-4 object-contain" />
            </button>
          }
        />

        {/* Terms */}
        <label className="flex items-start gap-2 cursor-pointer">
          <input type="checkbox" className="mt-0.5 w-4 h-4 rounded-[2.5px] border border-[#767676] accent-[#c8a46a] shrink-0" />
          <span className="text-[#4b3832] text-[14px] leading-5">
            I agree to the{' '}
            <span className="text-[#c8a46a] font-medium">Terms of Service</span>
            {' '}and{' '}
            <span className="text-[#c8a46a] font-medium">Privacy Policy</span>
          </span>
        </label>

        {/* Create Account CTA */}
        <button onClick={onSignedUp} className="relative bg-[#111] text-[#f5f1ea] font-semibold text-[16px] py-4 rounded-[12px] w-full shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] hover:bg-[#2a2a2a] transition-colors">
          Create Account
        </button>
      </div>

      <Divider />
      <OAuthButtons />
    </div>
  );
}

// ── Why Create an Account section ────────────────────────────────────────────

const whyItems = [
  { icon: reviewsIcon,     title: 'Post Reviews & Photos',          desc: 'Share your honest experiences with the community and help others make informed decisions.' },
  { icon: favoritesIcon,   title: 'Save Your Favorites',           desc: 'Create custom lists, track products you love, and build your perfect hair care collection.' },
  { icon: recIcon,         title: 'Personalized Recommendations',   desc: 'Get AI-powered suggestions tailored to your hair type, preferences, and sensitivities.' },
  { icon: sensitivityIcon, title: 'Custom Sensitivity Profile',     desc: 'Filter products by your specific scalp sensitivities and allergy concerns for safer choices.' },
  { icon: alertsIcon,      title: 'Smart Alerts & Updates',         desc: 'Get notified about price drops, product recalls, and new reviews on your favorite items.' },
  { icon: communityIcon,   title: 'Join the Community',             desc: 'Connect with 25,000+ members, share tips, and discover new products together.' },
];

function WhyCreateAccount() {
  return (
    <section className="bg-white px-4 py-8">
      <div className="flex flex-col gap-2 items-center mb-6">
        <h2 className="font-bold text-[18px] text-[#111] text-center leading-7">Why Create an Account?</h2>
        <p className="text-[#4b3832] text-[14px] text-center leading-5">Unlock the full TressIQ experience</p>
      </div>
      <div className="flex flex-col gap-3">
        {whyItems.map((item) => (
          <div key={item.title} className="bg-[#f5f1ea] border border-[rgba(200,164,106,0.2)] rounded-[12px] p-[17px] flex gap-3 items-start">
            <div className="bg-[#111] rounded-[8px] w-10 h-10 flex items-center justify-center shrink-0">
              <img src={item.icon} alt={item.title} className="w-[14px] h-[14px] object-contain" />
            </div>
            <div className="flex flex-col gap-1">
              <p className="font-semibold text-[14px] text-[#111] leading-5">{item.title}</p>
              <p className="text-[#4b3832] text-[12px] leading-[19px]">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ── Privacy section ──────────────────────────────────────────────────────────

const privacyBadges = [
  { icon: encryptionIcon, label: '256-bit Encryption', w: '21px', h: '24px' },
  { icon: gdprIcon,       label: 'GDPR Compliant',     w: '30px', h: '24px' },
  { icon: noDataIcon,     label: 'No Data Selling',    w: '30px', h: '24px' },
  { icon: verifiedIcon,   label: 'Verified Reviews',   w: '24px', h: '24px' },
];

function PrivacySection() {
  return (
    <section className="bg-[#f5f1ea] px-4 py-8">
      <div
        className="rounded-[24px] p-6 flex flex-col gap-6 shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]"
        style={{ background: 'linear-gradient(134deg, #111111 0%, #4b3832 100%)' }}
      >
        {/* Header */}
        <div className="flex flex-col gap-2 items-center">
          <div className="bg-[#c8a46a] rounded-[16px] w-14 h-14 flex items-center justify-center">
            <img src={shieldIcon} alt="shield" className="w-6 h-6 object-contain" />
          </div>
          <h2 className="font-bold text-[18px] text-[#f5f1ea] text-center leading-7 pt-2">Your Privacy Matters</h2>
          <p className="text-[#f5f1ea] text-[14px] text-center opacity-90 leading-5">
            We protect your personal information with industry-leading security
          </p>
        </div>
        {/* 2×2 badges */}
        <div className="grid grid-cols-2 gap-3">
          {privacyBadges.map((b) => (
            <div key={b.label} className="bg-[rgba(255,255,255,0.1)] backdrop-blur-sm rounded-[12px] p-3 flex flex-col items-center gap-1">
              <img src={b.icon} alt={b.label} style={{ width: b.w, height: b.h }} className="object-contain" />
              <span className="text-[#f5f1ea] text-[12px] text-center leading-4">{b.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Guest CTA ────────────────────────────────────────────────────────────────

function GuestCTA({ onGuest }: { onGuest: () => void }) {
  return (
    <section className="bg-white px-4 py-6">
      <div className="flex flex-col items-center gap-3">
        <p className="text-[#4b3832] text-[14px] text-center leading-5">Not ready to sign up yet?</p>
        <button onClick={onGuest} className="flex items-center gap-2 pt-1">
          <span className="font-semibold text-[16px] text-[#c8a46a] leading-6">Continue as Guest </span>
          <img src={guestArrow} alt="arrow" className="w-[12px] h-[14px] object-contain" />
        </button>
        <p className="text-[#4b3832] text-[12px] text-center opacity-70 leading-4">
          Limited features available in guest mode
        </p>
      </div>
    </section>
  );
}

// ── Footer ───────────────────────────────────────────────────────────────────

const footerLinks = [
  { heading: 'Product',  items: ['Features', 'Pricing', 'Premium', 'How It Works'] },
  { heading: 'Company',  items: ['About Us', 'Blog', 'Careers', 'Press Kit'] },
  { heading: 'Support',  items: ['Help Center', 'Contact Us', 'FAQ', 'Community'] },
  { heading: 'Legal',    items: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Guidelines'] },
];

const socials = [
  { icon: fbIcon,      alt: 'Facebook'  },
  { icon: twitterIcon, alt: 'Twitter'   },
  { icon: igIcon,      alt: 'Instagram' },
  { icon: ytIcon,      alt: 'YouTube'   },
  { icon: tiktokIcon,  alt: 'TikTok'    },
];

function AuthFooter() {
  return (
    <footer className="bg-[#111] px-4 py-8">
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-2">
          <div className="bg-[#c8a46a] rounded-[8px] w-8 h-8 flex items-center justify-center shrink-0">
            <img src={footerLogo} alt="TressIQ" className="w-[14px] h-[14px] object-contain" />
          </div>
          <span className="font-semibold text-[18px] text-[#f5f1ea] leading-7">TressIQ</span>
        </div>
        <p className="text-[#f5f1ea] text-[14px] leading-[23px] opacity-80">
          Your trusted community for transparent reviews on wigs, extensions, and braiding hair.
        </p>
        <div className="grid grid-cols-2 gap-6 py-1">
          {footerLinks.map((col) => (
            <div key={col.heading}>
              <p className="font-semibold text-[14px] text-[#c8a46a] mb-3 leading-5">{col.heading}</p>
              <ul className="flex flex-col gap-2 opacity-80">
                {col.items.map((item) => (
                  <li key={item} className="text-[#f5f1ea] text-[14px] leading-5">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center gap-3 border-b border-[#4b3832] pb-6">
          {socials.map((s) => (
            <div key={s.alt} className="bg-[#4b3832] rounded-[8px] w-10 h-10 flex items-center justify-center">
              <img src={s.icon} alt={s.alt} className="w-4 h-4 object-contain" />
            </div>
          ))}
        </div>
        <p className="text-[#f5f1ea] text-[12px] text-center opacity-60">
          © 2025 TressIQ. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────────

type Tab = 'signin' | 'signup';

interface AuthPageProps {
  initialTab?: Tab;
  onBack: () => void;
  onSignedUp?: () => void;
}

export default function AuthPage({ initialTab = 'signin', onBack, onSignedUp }: AuthPageProps) {
  const [tab, setTab] = useState<Tab>(initialTab);

  return (
    <div className="min-h-screen bg-[#f5f1ea]">
      <div className="mx-auto max-w-[375px] w-full">

        {/* ── Header ── */}
        <header className="sticky top-0 z-50 bg-[#f5f1ea] px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-[#111] rounded-[12px] w-9 h-9 flex items-center justify-center shrink-0">
              <img src={logoIcon} alt="TressIQ logo" className="w-4 h-4 object-contain" />
            </div>
            <span className="font-semibold text-[18px] text-[#111] leading-7">TressIQ</span>
          </div>
          <button
            onClick={onBack}
            className="flex items-center justify-center px-2 py-[6px] rounded-[8px]"
            aria-label="Back"
          >
            <img src={menuIcon} alt="menu" className="w-[14px] h-[16px] object-contain" />
          </button>
        </header>

        {/* ── Tab switcher ── */}
        <div className="px-4 pt-4">
          <div className="bg-white border border-[rgba(200,164,106,0.2)] rounded-[16px] p-[5px] flex gap-2 shadow-[0px_1px_1px_rgba(0,0,0,0.05)]">
            <button
              onClick={() => setTab('signin')}
              className={`flex-1 rounded-[12px] py-3 font-semibold text-[14px] text-center transition-colors ${
                tab === 'signin'
                  ? 'bg-[#111] text-[#f5f1ea]'
                  : 'text-[#4b3832] hover:bg-[#f5f1ea]'
              }`}
            >
              Sign In
            </button>
            <button
              onClick={() => setTab('signup')}
              className={`flex-1 rounded-[12px] py-3 font-semibold text-[14px] text-center transition-colors ${
                tab === 'signup'
                  ? 'bg-[#111] text-[#f5f1ea]'
                  : 'text-[#4b3832] hover:bg-[#f5f1ea]'
              }`}
            >
              Sign Up
            </button>
          </div>
        </div>

        {/* ── Form area ── */}
        <div className="px-4 pt-8 pb-4">
          {tab === 'signin' ? <SignInForm /> : <SignUpForm onSignedUp={onSignedUp} />}
        </div>

        {/* ── Why create an account ── */}
        <WhyCreateAccount />

        {/* ── Privacy ── */}
        <PrivacySection />

        {/* ── Guest CTA ── */}
        <GuestCTA onGuest={onBack} />

        {/* ── Footer ── */}
        <AuthFooter />
      </div>
    </div>
  );
}
