import { useState } from 'react';
import AuthPage from './pages/AuthPage';

// Asset URLs from Figma MCP
const logoIcon = "https://www.figma.com/api/mcp/asset/35c39e70-3b87-41f5-88db-5a42f48854f2";
const menuIcon = "https://www.figma.com/api/mcp/asset/c50bbeb5-a1a7-4821-859e-474e27f0ca49";
const heroIcon = "https://www.figma.com/api/mcp/asset/544a3e4c-0fc6-4704-885f-b019f194d0eb";
const arrowIcon = "https://www.figma.com/api/mcp/asset/8f574b16-be09-43c7-a239-8c925767e140";
const transparencyIcon = "https://www.figma.com/api/mcp/asset/1b0f5ee7-5ea3-4788-aa07-c9ed33ac17dc";
const communityIcon = "https://www.figma.com/api/mcp/asset/6e5a66c3-7011-4a98-9080-66600ee47f56";
const recommendIcon = "https://www.figma.com/api/mcp/asset/603af762-5837-4c9d-802f-96a234ceb353";
const barcodeIcon = "https://www.figma.com/api/mcp/asset/7c7dd2c8-9a0e-4cdb-a9ea-315ea45e893e";
const photoIcon = "https://www.figma.com/api/mcp/asset/2a423426-6765-4e10-8d2a-3773195c158d";
const qualityIcon = "https://www.figma.com/api/mcp/asset/192fc151-8378-4729-ae03-93f0a7832100";
const favoritesIcon = "https://www.figma.com/api/mcp/asset/9e4536d9-888c-4137-b412-144002815690";
const avatar1 = "https://www.figma.com/api/mcp/asset/17fdef79-5017-4b7b-ac90-d7c5f0b03abb";
const avatar2 = "https://www.figma.com/api/mcp/asset/417655ab-3406-426a-a44a-6228a41148a2";
const avatar3 = "https://www.figma.com/api/mcp/asset/e61d4e4d-7406-4e9a-837b-24e991c0db7f";
const avatar4 = "https://www.figma.com/api/mcp/asset/eaa94a2c-c446-4108-ae34-9568733a3399";
const galleryImg1 = "https://www.figma.com/api/mcp/asset/680c4274-1dee-48ad-ba65-cb9104e4d915";
const galleryImg2 = "https://www.figma.com/api/mcp/asset/715149c4-9a21-4f4d-94f0-35c281852d0f";
const galleryImg3 = "https://www.figma.com/api/mcp/asset/079ea44b-eb68-4403-97dd-2e368e339ca4";
const galleryVideoIcon = "https://www.figma.com/api/mcp/asset/7b54b473-9c91-4507-a75a-5c89f0dd944e";
const galleryPlayIcon = "https://www.figma.com/api/mcp/asset/a3fa87f3-f192-4e03-8831-10046db843b6";
const galleryLikeIcon = "https://www.figma.com/api/mcp/asset/cf0da021-c1ce-4391-a88e-dc01a5ec2d3b";
const galleryStarIcon = "https://www.figma.com/api/mcp/asset/473a8761-23cf-4b2c-b8a2-fafa73f40bea";
const sheddingIcon = "https://www.figma.com/api/mcp/asset/6aa3a59a-e241-4bab-acec-78fa8da057c9";
const tanglingIcon = "https://www.figma.com/api/mcp/asset/f5979c0a-0404-40f8-a956-f6a2451102fe";
const longevityIcon = "https://www.figma.com/api/mcp/asset/6b9559f5-635a-4a49-8097-63b9996edc62";
const scalpIcon = "https://www.figma.com/api/mcp/asset/70e4e2dc-7b02-45c4-bd8c-eeefd5c93ea1";
const odorIcon = "https://www.figma.com/api/mcp/asset/45102a7a-5468-40d4-a920-858d399fcb94";
const starFull = "https://www.figma.com/api/mcp/asset/87f40d92-9e23-44c7-8b4c-d8ec4f837fdf";
const starHalf = "https://www.figma.com/api/mcp/asset/0f0135bc-2112-41fa-b777-a760f829c3c7";
const chartIcon = "https://www.figma.com/api/mcp/asset/4c3c95ba-6ff0-4dd7-bc64-254c1e3e3fa4";
const secureIcon = "https://www.figma.com/api/mcp/asset/2a4ff7f4-6603-4300-b41a-4dd970ebfd1b";
const verifiedIcon = "https://www.figma.com/api/mcp/asset/329e4e4c-983f-49a0-98b9-352ec4e523b3";
const noFakeIcon = "https://www.figma.com/api/mcp/asset/bd93ecfd-5f4e-423c-b029-eb81f3a26f9d";
const unbiasedIcon = "https://www.figma.com/api/mcp/asset/021666c1-cc71-441c-a83a-4b65e03719f5";
const premiumStarIcon = "https://www.figma.com/api/mcp/asset/e9073d5c-774a-49e6-a0a1-d1a420ea2fdc";
const checkIcon = "https://www.figma.com/api/mcp/asset/99c45a29-88c1-4c58-a720-2e7f7688a79b";
const reviewUser1 = "https://www.figma.com/api/mcp/asset/fd1c7141-9c43-43fc-a1db-27de5d97be78";
const reviewUser2 = "https://www.figma.com/api/mcp/asset/c0385d5d-e132-478d-883d-368f2a5c7f74";
const reviewUser3 = "https://www.figma.com/api/mcp/asset/72e50625-7d17-4981-af09-58042df18562";
const reviewStarIcon = "https://www.figma.com/api/mcp/asset/e1e139ca-d48e-4b30-ab9d-5bab3406dfa9";
const thumbsUpIcon = "https://www.figma.com/api/mcp/asset/aa83d911-e819-4247-9d2a-8475906ca867";
const readMoreArrow = "https://www.figma.com/api/mcp/asset/197f4cac-532e-4898-915d-dab656d5a7fa";
const ctaLogoIcon = "https://www.figma.com/api/mcp/asset/d0fe3288-dd33-4e6c-a73d-862d121e2d88";
const ctaArrowIcon = "https://www.figma.com/api/mcp/asset/ba99fb63-2dae-4981-b58c-e603f2703e48";
const iosIcon = "https://www.figma.com/api/mcp/asset/38b0646f-3b9c-4b75-a431-f1941aff8f56";
const androidIcon = "https://www.figma.com/api/mcp/asset/494de083-32cb-4e17-941f-75d86cfbda75";
const webIcon = "https://www.figma.com/api/mcp/asset/fe09c19c-20a2-442c-b53f-b7800c5b3676";
const footerLogoIcon = "https://www.figma.com/api/mcp/asset/7e681905-7aa6-4387-9e79-ad59cdc5f4f5";
const fbIcon = "https://www.figma.com/api/mcp/asset/38237881-0760-4cb4-b763-ee0a8a99b8ec";
const twitterIcon = "https://www.figma.com/api/mcp/asset/29c237c3-998c-4a5a-8d3a-55fa23997345";
const igIcon = "https://www.figma.com/api/mcp/asset/04c792e1-8a88-4c87-9d67-575a969a8cef";
const ytIcon = "https://www.figma.com/api/mcp/asset/f6c8e7b2-b8a5-4d7d-962f-c33ad4819013";
const tiktokIcon = "https://www.figma.com/api/mcp/asset/f31bdade-404b-462b-870e-6c29750db8b9";

function StarRating({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-[4px] items-center">
      {Array.from({ length: count }).map((_, i) => (
        <img key={i} src={reviewStarIcon} alt="star" className="w-[13.5px] h-[12px]" />
      ))}
    </div>
  );
}

function ProgressBar({ value, max = 10 }: { value: number; max?: number }) {
  const pct = (value / max) * 100;
  return (
    <div className="bg-[rgba(75,56,50,0.2)] h-[8px] overflow-hidden rounded-full w-[96px] shrink-0">
      <div
        className="h-full bg-[#c8a46a] rounded-full"
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}

function Header() {
  return (
    <header className="bg-[#f5f1ea] px-4 py-4 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="bg-[#111] rounded-[12px] w-9 h-9 flex items-center justify-center shrink-0">
          <img src={logoIcon} alt="TressIQ logo" className="w-4 h-4 object-contain" />
        </div>
        <span className="font-semibold text-[18px] text-[#111] leading-7">TressIQ</span>
      </div>
      <button className="flex items-center justify-center px-2 py-[6px] rounded-[8px]">
        <img src={menuIcon} alt="menu" className="w-[14px] h-[16px] object-contain" />
      </button>
    </header>
  );
}

function HeroSection({ onSignUp, onSignIn }: { onSignUp: () => void; onSignIn: () => void }) {
  return (
    <section className="bg-[#f5f1ea] px-4 pt-8 pb-4 flex flex-col items-center gap-3">
      {/* Logo circle */}
      <div className="relative w-[112px] h-[112px] rounded-[24px] flex items-center justify-center shrink-0"
        style={{ background: 'linear-gradient(135deg, #111111 0%, #4b3832 100%)' }}>
        <div className="absolute inset-0 rounded-[24px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]" />
        <img src={heroIcon} alt="TressIQ" className="w-12 h-12 object-contain relative z-10" />
      </div>

      {/* Heading */}
      <h1 className="font-bold text-[30px] text-[#111] text-center leading-[1.25] pt-3">
        Welcome to TressIQ
      </h1>

      {/* Subtext */}
      <p className="text-[#4b3832] text-[16px] text-center leading-[26px] px-2">
        Your trusted community for transparent reviews on wigs, extensions, and braiding hair. Real experiences, honest insights.
      </p>

      {/* Buttons */}
      <div className="flex flex-col gap-3 w-full pt-5">
        <button onClick={onSignUp} className="relative bg-[#111] text-[#f5f1ea] font-medium text-[16px] py-4 rounded-[16px] w-full shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]">
          Sign Up Free
        </button>
        <button onClick={onSignIn} className="relative bg-[#c8a46a] text-[#111] font-medium text-[16px] py-4 rounded-[16px] w-full shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]">
          Sign In
        </button>
        <button className="flex items-center justify-center gap-2 py-3 w-full">
          <span className="text-[#4b3832] font-medium text-[16px]">Continue as Guest </span>
          <img src={arrowIcon} alt="arrow" className="w-[12.25px] h-[14px] object-contain" />
        </button>
      </div>
    </section>
  );
}

function WhySection() {
  const features = [
    {
      icon: transparencyIcon,
      title: 'Complete Transparency',
      desc: 'Access verified community reviews with detailed quality scores on shedding, tangling, and longevity.',
    },
    {
      icon: communityIcon,
      title: 'Community Driven',
      desc: 'Real reviews from real people. Share photos, videos, and honest experiences with thousands of products.',
    },
    {
      icon: recommendIcon,
      title: 'Smart Recommendations',
      desc: 'AI-powered suggestions tailored to your preferences, sensitivities, and hair care needs.',
    },
  ];

  return (
    <section className="bg-white px-4 py-16">
      <h2 className="font-bold text-[20px] text-[#111] text-center mb-6">Why TressIQ?</h2>
      <div className="flex flex-col gap-4">
        {features.map((f) => (
          <div key={f.title} className="bg-[#f5f1ea] border border-[rgba(200,164,106,0.3)] rounded-[16px] p-[21px] flex gap-4 items-start">
            <div className="bg-[#111] rounded-[12px] w-12 h-12 flex items-center justify-center shrink-0">
              <img src={f.icon} alt={f.title} className="w-5 h-5 object-contain" />
            </div>
            <div>
              <p className="font-semibold text-[16px] text-[#111] leading-6 mb-1">{f.title}</p>
              <p className="text-[#4b3832] text-[14px] leading-[22px]">{f.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function FeaturesSection() {
  const features = [
    { icon: barcodeIcon, title: 'Barcode Scan', sub: 'Instant lookup' },
    { icon: photoIcon, title: 'Photo Reviews', sub: 'Visual proof' },
    { icon: qualityIcon, title: 'Quality Scores', sub: 'Data-driven' },
    { icon: favoritesIcon, title: 'Favorites', sub: 'Save & track' },
  ];

  return (
    <section className="bg-[#f5f1ea] px-4 pt-8 pb-14">
      <h2 className="font-bold text-[20px] text-[#111] text-center mb-6">Powerful Features</h2>
      <div className="grid grid-cols-2 gap-3">
        {features.map((f) => (
          <div key={f.title} className="bg-white border border-[rgba(200,164,106,0.2)] rounded-[16px] p-[17px] flex flex-col items-center gap-1 shadow-[0px_1px_1px_rgba(0,0,0,0.05)]">
            <div className="bg-[#111] rounded-[12px] w-12 h-12 flex items-center justify-center mb-1">
              <img src={f.icon} alt={f.title} className="w-[18px] h-[18px] object-contain" />
            </div>
            <p className="font-semibold text-[14px] text-[#111] text-center leading-5">{f.title}</p>
            <p className="text-[#4b3832] text-[12px] text-center leading-4">{f.sub}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function CommunityBanner() {
  return (
    <section className="bg-white px-4 py-8">
      <div
        className="rounded-[24px] p-6 flex flex-col gap-6 relative shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]"
        style={{ background: 'linear-gradient(147deg, #111111 0%, #4b3832 100%)' }}
      >
        {/* Stats */}
        <h2 className="font-bold text-[18px] text-[#f5f1ea] text-center leading-7">Join Our Growing Community</h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="flex flex-col items-center gap-1">
            <span className="font-bold text-[24px] text-[#c8a46a] leading-8">50K+</span>
            <span className="text-[#f5f1ea] text-[12px] opacity-80">Reviews</span>
          </div>
          <div className="flex flex-col items-center gap-1 border-x border-[#4b3832]">
            <span className="font-bold text-[24px] text-[#c8a46a] leading-8">15K+</span>
            <span className="text-[#f5f1ea] text-[12px] opacity-80">Products</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="font-bold text-[24px] text-[#c8a46a] leading-8">25K+</span>
            <span className="text-[#f5f1ea] text-[12px] opacity-80">Members</span>
          </div>
        </div>

        {/* Active users */}
        <div className="border-t border-[#4b3832] pt-[17px] flex items-center justify-center gap-2">
          <div className="flex items-center">
            {[avatar1, avatar2, avatar3, avatar4].map((src, i) => (
              <img
                key={i}
                src={src}
                alt="user"
                className="w-8 h-8 rounded-full border-2 border-[#111] object-cover"
                style={{ marginLeft: i > 0 ? '-8px' : '0' }}
              />
            ))}
          </div>
          <span className="text-[#f5f1ea] text-[14px] opacity-90">Active this week</span>
        </div>
      </div>
    </section>
  );
}

function GallerySection() {
  return (
    <section className="bg-[#f5f1ea] px-4 pt-8 pb-11">
      <h2 className="font-bold text-[20px] text-[#111] text-center mb-2">Real Reviews, Real Results</h2>
      <p className="text-[#4b3832] text-[14px] text-center mb-4">See what our community is sharing</p>

      <div className="grid grid-cols-2 gap-3 pt-4">
        {/* Before & After */}
        <div className="relative rounded-[16px] overflow-hidden shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]">
          <img src={galleryImg1} alt="Before & After" className="w-full h-[165px] object-cover" />
          <div className="absolute top-2 right-2 bg-[rgba(17,17,17,0.8)] rounded-[8px] px-2 py-1 flex items-center gap-1">
            <img src={galleryStarIcon} alt="star" className="w-[13.5px] h-3 object-contain" />
            <span className="text-[#c8a46a] text-[12px] font-semibold leading-4">4.8</span>
          </div>
          <div className="absolute bottom-2 left-2 bg-[rgba(17,17,17,0.8)] rounded-[8px] px-2 py-1">
            <span className="text-[#f5f1ea] text-[12px] leading-4">Before &amp; After</span>
          </div>
        </div>

        {/* Video Review */}
        <div className="relative rounded-[16px] overflow-hidden bg-[#4b3832] h-[165px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] flex flex-col items-center justify-center gap-2">
          <img src={galleryVideoIcon} alt="video" className="w-[54px] h-[48px] object-contain" />
          <span className="text-[#f5f1ea] text-[12px]">Video Review</span>
          <div className="absolute top-2 right-2 bg-[rgba(17,17,17,0.8)] rounded-[8px] px-2 py-1 flex items-center gap-1">
            <img src={galleryPlayIcon} alt="play" className="w-[9px] h-[12px] object-contain" />
            <span className="text-[#f5f1ea] text-[12px] leading-4">2:34</span>
          </div>
        </div>

        {/* 6 months wear */}
        <div className="relative rounded-[16px] overflow-hidden shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]">
          <img src={galleryImg2} alt="6 months wear" className="w-full h-[165px] object-cover" />
          <div className="absolute bottom-2 left-2 bg-[rgba(17,17,17,0.8)] rounded-[8px] px-2 py-1">
            <span className="text-[#f5f1ea] text-[12px] leading-4">6 months wear</span>
          </div>
        </div>

        {/* Styled wig */}
        <div className="relative rounded-[16px] overflow-hidden shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]">
          <img src={galleryImg3} alt="Styled wig" className="w-full h-[165px] object-cover" />
          <div className="absolute top-2 right-2 bg-[rgba(17,17,17,0.8)] rounded-[8px] px-2 py-1 flex items-center gap-1">
            <img src={galleryLikeIcon} alt="like" className="w-3 h-3 object-contain" />
            <span className="text-[#f5f1ea] text-[12px] leading-4">234</span>
          </div>
        </div>
      </div>

      <p className="text-center text-[14px] text-[#111] font-semibold mt-4 pt-2">
        <span>12,500+</span>
        <span className="font-normal text-[#4b3832]"> photos &amp; videos uploaded this month</span>
      </p>
    </section>
  );
}

function QualitySection() {
  const metrics = [
    { icon: sheddingIcon, label: 'Shedding', value: 8.2, pct: 80 },
    { icon: tanglingIcon, label: 'Tangling', value: 7.5, pct: 60 },
    { icon: longevityIcon, label: 'Longevity', value: 9.1, pct: 100 },
    { icon: scalpIcon, label: 'Scalp Comfort', value: 8.7, pct: 80 },
    { icon: odorIcon, label: 'Chemical Odor', value: 6.8, pct: 40 },
  ];

  return (
    <section className="bg-white px-4 py-8">
      <div className="bg-[#f5f1ea] border-2 border-[rgba(200,164,106,0.3)] rounded-[24px] p-[26px] flex flex-col gap-6 shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h2 className="font-bold text-[18px] text-[#111] leading-7">Quality Scoring System</h2>
          <div className="bg-[#111] rounded-[12px] w-11 h-11 flex items-center justify-center shrink-0">
            <img src={chartIcon} alt="chart" className="w-[18px] h-[18px] object-contain" />
          </div>
        </div>

        {/* Metrics */}
        <div className="flex flex-col gap-4">
          {metrics.map((m) => (
            <div key={m.label} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-[#111] rounded-[8px] w-9 h-9 flex items-center justify-center shrink-0">
                  <img src={m.icon} alt={m.label} className="w-[14px] h-[14px] object-contain" />
                </div>
                <span className="font-medium text-[14px] text-[#111]">{m.label}</span>
              </div>
              <div className="flex items-center gap-2">
                <ProgressBar value={m.pct} max={100} />
                <span className="font-semibold text-[14px] text-[#111] w-8 text-right">{m.value}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Overall score card */}
        <div className="bg-white border border-[rgba(200,164,106,0.3)] rounded-[16px] p-[17px] flex flex-col gap-1 shadow-[0px_1px_1px_rgba(0,0,0,0.05)]">
          <div className="flex items-center justify-between">
            <span className="text-[#4b3832] text-[12px] uppercase tracking-[0.3px] font-semibold">Overall Score</span>
            <div className="flex gap-1">
              {[1, 2, 3, 4].map((i) => (
                <img key={i} src={starFull} alt="star" className="w-[15.75px] h-[14px]" />
              ))}
              <img src={starHalf} alt="star" className="w-[15.75px] h-[14px]" />
            </div>
          </div>
          <div className="flex items-baseline gap-1 mt-1">
            <span className="font-bold text-[30px] text-[#111] leading-9">8.1</span>
            <span className="text-[#4b3832] text-[16px]">/10</span>
          </div>
          <p className="text-[#4b3832] text-[12px] leading-4">Based on 1,247 verified reviews</p>
        </div>
      </div>
    </section>
  );
}

function TrustSection() {
  const items = [
    { icon: secureIcon, title: 'Secure & Private', desc: 'Your data is encrypted and protected' },
    { icon: verifiedIcon, title: 'Verified Reviews', desc: 'All reviews are from real purchases' },
    { icon: noFakeIcon, title: 'No Fake Reviews', desc: 'AI-powered fraud detection system' },
    { icon: unbiasedIcon, title: 'Unbiased Platform', desc: 'Independent reviews, no brand influence' },
  ];

  return (
    <section className="bg-[#f5f1ea] px-4 py-8">
      <h2 className="font-bold text-[20px] text-[#111] text-center mb-6">Built on Trust</h2>
      <div className="flex flex-col gap-3">
        {items.map((item) => (
          <div key={item.title} className="bg-white border border-[rgba(200,164,106,0.2)] rounded-[16px] p-[17px] flex items-center gap-4 shadow-[0px_1px_1px_rgba(0,0,0,0.05)]">
            <div className="bg-[#111] rounded-[12px] w-12 h-12 flex items-center justify-center shrink-0">
              <img src={item.icon} alt={item.title} className="w-5 h-5 object-contain" />
            </div>
            <div>
              <p className="font-semibold text-[14px] text-[#111] leading-5">{item.title}</p>
              <p className="text-[#4b3832] text-[12px] leading-4 mt-1">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function HowItWorksSection() {
  const steps = [
    {
      num: '1',
      title: 'Create Your Profile',
      desc: 'Sign up and tell us about your hair preferences, sensitivities, and styling goals.',
      tags: ['Free', '2 min setup'],
    },
    {
      num: '2',
      title: 'Discover & Compare',
      desc: 'Search thousands of products, read detailed reviews, and compare quality scores.',
      tags: ['15K+ products', 'AI-powered'],
    },
    {
      num: '3',
      title: 'Share Your Experience',
      desc: 'Help others by sharing your honest reviews with photos and videos.',
      tags: ['Earn rewards', 'Build community'],
    },
  ];

  return (
    <section className="bg-white px-4 py-8">
      <h2 className="font-bold text-[20px] text-[#111] text-center mb-2">How TressIQ Works</h2>
      <p className="text-[#4b3832] text-[14px] text-center mb-8">Get started in three simple steps</p>
      <div className="flex flex-col gap-6">
        {steps.map((step) => (
          <div key={step.num} className="flex gap-4 items-start">
            <div className="relative">
              <div className="bg-[#c8a46a] w-12 h-12 rounded-full flex items-center justify-center shrink-0 shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]">
                <span className="font-bold text-[16px] text-[#111]">{step.num}</span>
              </div>
            </div>
            <div className="flex-1 pt-1">
              <p className="font-semibold text-[16px] text-[#111] leading-6 mb-1">{step.title}</p>
              <p className="text-[#4b3832] text-[14px] leading-[23px] mb-3">{step.desc}</p>
              <div className="flex gap-2 flex-wrap">
                {step.tags.map((tag) => (
                  <span key={tag} className="bg-[#f5f1ea] text-[#4b3832] text-[12px] font-medium px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function PremiumSection() {
  const perks = [
    'AI-powered product matching',
    'Advanced comparison tools',
    'Sensitive scalp filtering',
    'Product recall alerts',
    'Early access to new features',
  ];

  return (
    <section
      className="px-4 py-8"
      style={{ background: 'linear-gradient(121deg, #111111 0%, #4b3832 100%)' }}
    >
      <div className="flex flex-col gap-6">
        {/* Header */}
        <div className="flex flex-col items-center gap-3">
          <div className="bg-[#c8a46a] rounded-full px-3 py-1 flex items-center gap-2">
            <img src={premiumStarIcon} alt="premium" className="w-[13.5px] h-3 object-contain" />
            <span className="font-semibold text-[12px] text-[#111]">PREMIUM</span>
          </div>
          <h2 className="font-bold text-[24px] text-[#f5f1ea] text-center leading-8 pt-1">
            Unlock Advanced Features
          </h2>
          <p className="text-[#f5f1ea] text-[14px] text-center opacity-90 leading-5">
            Get personalized recommendations and exclusive insights
          </p>
        </div>

        {/* Perks list */}
        <div className="flex flex-col gap-3">
          {perks.map((perk) => (
            <div key={perk} className="bg-[rgba(255,255,255,0.1)] backdrop-blur-sm rounded-[12px] p-3 flex items-center gap-3">
              <img src={checkIcon} alt="check" className="w-[18px] h-[18px] object-contain shrink-0" />
              <span className="text-[#f5f1ea] text-[14px] leading-5">{perk}</span>
            </div>
          ))}
        </div>

        {/* Pricing */}
        <div className="flex flex-col gap-2">
          <div className="flex items-baseline justify-center gap-1">
            <span className="font-bold text-[30px] text-[#c8a46a] leading-9">$9.99</span>
            <span className="text-[#f5f1ea] text-[16px]">/month</span>
          </div>
          <p className="text-[#f5f1ea] text-[12px] text-center opacity-70 pb-2">
            Cancel anytime • 7-day free trial
          </p>
          <button className="relative bg-[#c8a46a] text-[#111] font-semibold text-[16px] py-4 rounded-[16px] w-full shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]">
            Start Free Trial
          </button>
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const reviews = [
    {
      user: reviewUser1,
      name: 'Jasmine T.',
      date: '2 days ago',
      text: '"Finally found a wig that doesn\'t shed! The quality scores helped me avoid bad products. This app is a game-changer for anyone who wears wigs regularly."',
      helpful: 124,
    },
    {
      user: reviewUser2,
      name: 'Marcus R.',
      date: '1 week ago',
      text: '"The barcode scanner is brilliant! Scanned products right in the beauty supply store and saw reviews instantly. Saved me from buying low-quality braiding hair."',
      helpful: 89,
    },
    {
      user: reviewUser3,
      name: 'Keisha W.',
      date: '3 days ago',
      text: '"I have a sensitive scalp and the filtering feature is perfect! Found extensions that don\'t irritate my skin. The community here really understands our needs."',
      helpful: 156,
    },
  ];

  return (
    <section className="bg-white px-4 py-8">
      <h2 className="font-bold text-[20px] text-[#111] text-center mb-2">What Our Community Says</h2>
      <p className="text-[#4b3832] text-[14px] text-center mb-6">Real stories from real users</p>
      <div className="flex flex-col gap-4">
        {reviews.map((r) => (
          <div key={r.name} className="bg-[#f5f1ea] border border-[rgba(200,164,106,0.2)] rounded-[16px] p-[21px] flex flex-col gap-3 shadow-[0px_1px_1px_rgba(0,0,0,0.05)]">
            {/* User row */}
            <div className="flex items-center gap-3">
              <img src={r.user} alt={r.name} className="w-12 h-12 rounded-full object-cover border-2 border-[#c8a46a] shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-[14px] text-[#111] leading-5">{r.name}</p>
                <StarRating count={5} />
              </div>
              <span className="text-[#4b3832] text-[12px] shrink-0">{r.date}</span>
            </div>
            {/* Review text */}
            <p className="text-[#4b3832] text-[14px] leading-[23px]">{r.text}</p>
            {/* Footer */}
            <div className="flex items-center gap-2">
              <div className="bg-white border border-[rgba(200,164,106,0.3)] rounded-[8px] px-[9px] py-[5px]">
                <span className="font-medium text-[12px] text-[#111]">Verified Purchase</span>
              </div>
              <div className="flex items-center gap-1">
                <img src={thumbsUpIcon} alt="helpful" className="w-3 h-3 object-contain" />
                <span className="text-[#4b3832] text-[12px]">{r.helpful} helpful</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center gap-2 mt-6">
        <button className="font-medium text-[14px] text-[#111]">Read More Reviews </button>
        <img src={readMoreArrow} alt="arrow" className="w-[10.5px] h-[12px] object-contain" />
      </div>
    </section>
  );
}

function CTASection({ onSignUp, onSignIn }: { onSignUp: () => void; onSignIn: () => void }) {
  return (
    <section className="bg-[#f5f1ea] px-4 py-12">
      {/* Main CTA card */}
      <div
        className="rounded-[24px] p-8 flex flex-col items-center gap-4 shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]"
        style={{ background: 'linear-gradient(124deg, #111111 0%, #4b3832 100%)' }}
      >
        <div className="relative bg-[#c8a46a] rounded-[16px] w-16 h-16 flex items-center justify-center shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]">
          <img src={ctaLogoIcon} alt="TressIQ" className="w-[30px] h-[30px] object-contain" />
        </div>
        <h2 className="font-bold text-[24px] text-[#f5f1ea] text-center leading-8">Ready to Get Started?</h2>
        <p className="text-[#f5f1ea] text-[14px] text-center opacity-90 leading-[23px]">
          Join thousands of users making smarter hair product decisions with TressIQ
        </p>

        <div className="flex flex-col gap-3 w-full mt-2">
          <button onClick={onSignUp} className="relative bg-[#c8a46a] text-[#111] font-semibold text-[16px] py-4 rounded-[16px] w-full shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]">
            Create Free Account
          </button>
          <button onClick={onSignIn} className="border-2 border-[#c8a46a] text-[#f5f1ea] font-semibold text-[16px] py-[18px] rounded-[16px] w-full">
            Sign In
          </button>
        </div>

        <div className="border-t border-[#4b3832] w-full pt-6 flex flex-col items-center gap-4">
          <p className="text-[#f5f1ea] text-[12px] opacity-70">Or continue as guest to explore</p>
          <button className="flex items-center gap-2">
            <span className="text-[#c8a46a] font-medium text-[14px]">Browse Without Account </span>
            <img src={ctaArrowIcon} alt="arrow" className="w-[12.25px] h-[14px] object-contain" />
          </button>
        </div>
      </div>

      {/* Platform badges */}
      <div className="mt-8 flex flex-col gap-4 items-center">
        <p className="text-[#4b3832] font-medium text-[12px]">Available on all platforms</p>
        <div className="flex items-center justify-center gap-3">
          {[
            { icon: iosIcon, label: 'iOS', w: '15px', h: '20px' },
            { icon: androidIcon, label: 'Android', w: '22.5px', h: '20px' },
            { icon: webIcon, label: 'Web', w: '20px', h: '20px' },
          ].map((p) => (
            <div key={p.label} className="bg-white border border-[rgba(200,164,106,0.2)] rounded-[12px] px-[17px] py-[9px] flex items-center gap-2 shadow-[0px_1px_1px_rgba(0,0,0,0.05)]">
              <img src={p.icon} alt={p.label} style={{ width: p.w, height: p.h }} className="object-contain" />
              <span className="font-medium text-[12px] text-[#111]">{p.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const socials = [
    { icon: fbIcon, alt: 'Facebook' },
    { icon: twitterIcon, alt: 'Twitter' },
    { icon: igIcon, alt: 'Instagram' },
    { icon: ytIcon, alt: 'YouTube' },
    { icon: tiktokIcon, alt: 'TikTok' },
  ];

  const links = [
    { heading: 'Product', items: ['Features', 'Pricing', 'Premium', 'How It Works'] },
    { heading: 'Company', items: ['About Us', 'Blog', 'Careers', 'Press Kit'] },
    { heading: 'Support', items: ['Help Center', 'Contact Us', 'FAQ', 'Community'] },
    { heading: 'Legal', items: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Guidelines'] },
  ];

  return (
    <footer className="bg-[#111] px-4 py-8">
      <div className="flex flex-col gap-6">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="bg-[#c8a46a] rounded-[8px] w-8 h-8 flex items-center justify-center shrink-0">
            <img src={footerLogoIcon} alt="TressIQ" className="w-[14px] h-[14px] object-contain" />
          </div>
          <span className="font-semibold text-[18px] text-[#f5f1ea] leading-7">TressIQ</span>
        </div>

        {/* Tagline */}
        <p className="text-[#f5f1ea] text-[14px] leading-[23px] opacity-80">
          Your trusted community for transparent reviews on wigs, extensions, and braiding hair.
        </p>

        {/* Links grid */}
        <div className="grid grid-cols-2 gap-6 py-2">
          {links.map((col) => (
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

        {/* Social icons */}
        <div className="flex items-center justify-center gap-3 border-b border-[#4b3832] pb-6">
          {socials.map((s) => (
            <div key={s.alt} className="bg-[#4b3832] rounded-[8px] w-10 h-10 flex items-center justify-center">
              <img src={s.icon} alt={s.alt} className="w-4 h-4 object-contain" />
            </div>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-[#f5f1ea] text-[12px] text-center opacity-60">
          © 2025 TressIQ. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default function App() {
  const [page, setPage] = useState<'landing' | 'auth'>('landing');
  const [initialTab, setInitialTab] = useState<'signin' | 'signup'>('signup');

  if (page === 'auth') {
    return (
      <AuthPage
        initialTab={initialTab}
        onBack={() => setPage('landing')}
      />
    );
  }

  const goSignUp = () => { setInitialTab('signup'); setPage('auth'); };
  const goSignIn = () => { setInitialTab('signin'); setPage('auth'); };

  return (
    <div className="min-h-screen bg-[#f5f1ea]">
      <div className="mx-auto max-w-[375px] w-full">
        <Header />
        <HeroSection onSignUp={goSignUp} onSignIn={goSignIn} />
        <WhySection />
        <FeaturesSection />
        <CommunityBanner />
        <GallerySection />
        <QualitySection />
        <TrustSection />
        <HowItWorksSection />
        <PremiumSection />
        <TestimonialsSection />
        <CTASection onSignUp={goSignUp} onSignIn={goSignIn} />
        <Footer />
      </div>
    </div>
  );
}
