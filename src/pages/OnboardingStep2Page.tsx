import { useState } from 'react';

// ── Assets ───────────────────────────────────────────────────────────────────
const logoIcon         = "https://www.figma.com/api/mcp/asset/016c292f-886e-47d4-85ee-aa555b6973c1";
const heroIcon         = "https://www.figma.com/api/mcp/asset/1855b981-b1fe-4a11-b3e9-9b4ffb6d8e94";
const longevityIcon    = "https://www.figma.com/api/mcp/asset/dab4db59-8a8e-4513-957d-8c99aaa7817b";
const sheddingIcon     = "https://www.figma.com/api/mcp/asset/bb595ecb-1527-4f48-9855-504dbe430a1d";
const tangleIcon       = "https://www.figma.com/api/mcp/asset/3c3b04fc-5f04-4435-9161-e20d44cf709a";
const naturalIcon      = "https://www.figma.com/api/mcp/asset/7ead44bf-cf98-496b-8234-14f95716718f";
const heatIcon         = "https://www.figma.com/api/mcp/asset/50f0a4fa-8d41-47de-910b-5adf697e6e96";
const lightweightIcon  = "https://www.figma.com/api/mcp/asset/bc3de740-d549-4b51-9c7c-a8ef7649b1f7";
const lowMaintIcon     = "https://www.figma.com/api/mcp/asset/34f2d11c-3a8a-4824-abe3-fcc06a99ba85";
const scalpFriendlyIcon= "https://www.figma.com/api/mcp/asset/44127b11-3b68-425f-9b45-6353ad78f761";
const expLevelIcon     = "https://www.figma.com/api/mcp/asset/e3f2039e-28a3-43a1-a62b-f40a9eafd90a";
const maintIcon        = "https://www.figma.com/api/mcp/asset/b40018be-88c0-4f82-a07b-6d5623259d7d";
const notifIcon        = "https://www.figma.com/api/mcp/asset/2aa8b818-279f-4f79-a9d6-22471913c722";
const priceDropIcon    = "https://www.figma.com/api/mcp/asset/924bfb92-273d-4ffc-9c6e-46bf81df959b";
const recallIcon       = "https://www.figma.com/api/mcp/asset/8ae3711e-235e-4694-9d7b-a72e519f4ee8";
const trendingIcon     = "https://www.figma.com/api/mcp/asset/50f0a4fa-8d41-47de-910b-5adf697e6e96";
const newReviewIcon    = "https://www.figma.com/api/mcp/asset/e8821d4f-037c-4868-baff-40e3d1736930";
const personalRecIcon  = "https://www.figma.com/api/mcp/asset/ab7376a1-52f7-4d89-ac65-d500f8624cfe";
const exclusiveIcon    = "https://www.figma.com/api/mcp/asset/0fdc7e77-1d13-4bc6-bc64-cd5980f18a2e";
const privacyNoteIcon  = "https://www.figma.com/api/mcp/asset/50c34e67-d609-4895-9d5f-f9a6bd20988b";
const finishArrowIcon  = "https://www.figma.com/api/mcp/asset/959ea11a-b1ae-4b87-bd73-deebb2001776";

// ── Types ────────────────────────────────────────────────────────────────────
type Goal        = 'longevity' | 'shedding' | 'tangle' | 'natural' | 'heat' | 'lightweight' | 'lowmaint' | 'scalp';
type Experience  = 'beginner' | 'intermediate' | 'experienced' | 'professional';
type WearDuration= 'w1-2' | 'w2-4' | 'm1-3' | 'm3-6' | 'm6plus' | 'varies';
type Maintenance = 'minimal' | 'low' | 'moderate' | 'high' | 'professional';
type Notification= 'pricedrops' | 'recalls' | 'trending' | 'newreviews' | 'personalrec' | 'exclusive';

interface Props {
  onBack: () => void;
  onFinish: () => void;
  onSkip: () => void;
}

// ── Shared SVG check ──────────────────────────────────────────────────────────
function Check() {
  return (
    <svg width="12" height="9" viewBox="0 0 12 9" fill="none">
      <path d="M1 4L4.5 7.5L11 1" stroke="#f5f1ea" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// ── Goal / notification checkbox row (icon inline in title) ───────────────────
function IconCheckRow({
  checked, onChange, icon, iconW = 16, iconH = 16, title, subtitle, bg = 'white',
}: {
  checked: boolean;
  onChange: () => void;
  icon: string;
  iconW?: number;
  iconH?: number;
  title: string;
  subtitle: string;
  bg?: string;
}) {
  return (
    <label
      className={`flex gap-4 items-start p-[18px] rounded-[12px] w-full cursor-pointer border-2 transition-colors ${
        checked ? 'border-[#c8a46a]' : 'border-[rgba(200,164,106,0.2)]'
      }`}
      style={{ backgroundColor: bg }}
    >
      <div className="pt-[2px] shrink-0">
        <div
          className={`w-5 h-5 rounded-[2.5px] border flex items-center justify-center transition-colors ${
            checked ? 'bg-[#111] border-[#111]' : 'bg-white border-[#767676]'
          }`}
        >
          {checked && <Check />}
        </div>
      </div>
      <div className="flex-1 min-w-0 flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <img src={icon} alt={title} style={{ width: iconW, height: iconH }} className="object-contain shrink-0" />
          <p className="font-semibold text-[14px] text-[#111] leading-5">{title}</p>
        </div>
        <p className="text-[#4b3832] text-[12px] leading-[19.5px]">{subtitle}</p>
      </div>
      <input type="checkbox" className="sr-only" checked={checked} onChange={onChange} />
    </label>
  );
}

// ── Radio row ─────────────────────────────────────────────────────────────────
function RadioRow({
  selected, onSelect, title, subtitle, bg = 'white',
}: {
  selected: boolean;
  onSelect: () => void;
  title: string;
  subtitle: string;
  bg?: string;
}) {
  return (
    <label
      className={`flex gap-4 items-center p-[18px] rounded-[12px] w-full cursor-pointer border-2 transition-colors ${
        selected ? 'border-[#c8a46a]' : 'border-[rgba(200,164,106,0.2)]'
      }`}
      style={{ backgroundColor: bg }}
    >
      <div
        className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 transition-colors ${
          selected ? 'border-[#111]' : 'border-[#767676]'
        }`}
      >
        {selected && <div className="w-2.5 h-2.5 rounded-full bg-[#111]" />}
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-semibold text-[14px] text-[#111] leading-5">{title}</p>
        <p className="text-[#4b3832] text-[12px] leading-[19.5px] mt-0.5">{subtitle}</p>
      </div>
      <input type="radio" className="sr-only" checked={selected} onChange={onSelect} />
    </label>
  );
}

// ── Main page ─────────────────────────────────────────────────────────────────
export default function OnboardingStep2Page({ onBack, onFinish, onSkip }: Props) {
  const [goals, setGoals]           = useState<Set<Goal>>(new Set());
  const [experience, setExperience] = useState<Experience | null>(null);
  const [wearDuration, setWearDuration] = useState<WearDuration | null>(null);
  const [maintenance, setMaintenance]   = useState<Maintenance | null>(null);
  const [notifications, setNotifications] = useState<Set<Notification>>(new Set());

  function toggleSet<T>(set: Set<T>, val: T): Set<T> {
    const next = new Set(set);
    next.has(val) ? next.delete(val) : next.add(val);
    return next;
  }

  const goalItems: { id: Goal; icon: string; iconW: number; iconH: number; title: string; sub: string }[] = [
    { id: 'longevity',   icon: longevityIcon,     iconW: 16, iconH: 16, title: 'Long-Lasting Wear',      sub: 'Products that maintain quality for months' },
    { id: 'shedding',    icon: sheddingIcon,       iconW: 12, iconH: 16, title: 'Minimal Shedding',       sub: 'Hair that stays intact with little to no shedding' },
    { id: 'tangle',      icon: tangleIcon,         iconW: 16, iconH: 16, title: 'Tangle-Free',            sub: 'Easy to manage without excessive tangling' },
    { id: 'natural',     icon: naturalIcon,        iconW: 18, iconH: 16, title: 'Natural Appearance',     sub: 'Looks and feels like natural hair' },
    { id: 'heat',        icon: heatIcon,           iconW: 14, iconH: 16, title: 'Heat Styling Safe',      sub: 'Can withstand curling irons and flat irons' },
    { id: 'lightweight', icon: lightweightIcon,    iconW: 16, iconH: 16, title: 'Lightweight & Comfortable', sub: "Won't feel heavy or cause headaches" },
    { id: 'lowmaint',    icon: lowMaintIcon,       iconW: 20, iconH: 16, title: 'Low Maintenance',        sub: 'Easy to care for and style daily' },
    { id: 'scalp',       icon: scalpFriendlyIcon,  iconW: 16, iconH: 16, title: 'Scalp-Friendly',        sub: 'Gentle on sensitive scalps, no irritation' },
  ];

  const experienceItems: { id: Experience; title: string; sub: string }[] = [
    { id: 'beginner',      title: 'Beginner',              sub: 'New to wigs/extensions, looking for easy-to-use options' },
    { id: 'intermediate',  title: 'Intermediate',          sub: 'Some experience, comfortable with basic styling and care' },
    { id: 'experienced',   title: 'Experienced',           sub: 'Skilled with various products, can handle advanced styling' },
    { id: 'professional',  title: 'Professional / Stylist',sub: 'Expert level, working with clients or extensive personal use' },
  ];

  const wearItems: { id: WearDuration; title: string; sub: string }[] = [
    { id: 'w1-2',    title: '1-2 weeks',  sub: 'Short-term wear, frequent changes' },
    { id: 'w2-4',    title: '2-4 weeks',  sub: 'Monthly rotation of styles' },
    { id: 'm1-3',    title: '1-3 months', sub: 'Medium-term wear for quality products' },
    { id: 'm3-6',    title: '3-6 months', sub: 'Long-term investment pieces' },
    { id: 'm6plus',  title: '6+ months',  sub: 'Maximum durability and longevity needed' },
    { id: 'varies',  title: 'Varies',     sub: 'Different durations for different occasions' },
  ];

  const maintenanceItems: { id: Maintenance; title: string; sub: string }[] = [
    { id: 'minimal',      title: 'Minimal',             sub: 'Wash-and-go, minimal styling or upkeep required' },
    { id: 'low',          title: 'Low',                  sub: 'Occasional washing, light brushing, simple care routine' },
    { id: 'moderate',     title: 'Moderate',             sub: 'Regular washing, conditioning, detangling, some styling' },
    { id: 'high',         title: 'High',                 sub: 'Dedicated care routine, deep conditioning, careful handling' },
    { id: 'professional', title: 'Professional-Level',   sub: 'Extensive care, specialized products, salon-quality maintenance' },
  ];

  const notifItems: { id: Notification; icon: string; iconW: number; iconH: number; title: string; sub: string }[] = [
    { id: 'pricedrops',  icon: priceDropIcon,   iconW: 14, iconH: 16, title: 'Price Drops',                  sub: 'Get alerts when products on your wishlist go on sale' },
    { id: 'recalls',     icon: recallIcon,      iconW: 16, iconH: 16, title: 'Product Recalls & Alerts',     sub: "Important safety notifications about products you've reviewed" },
    { id: 'trending',    icon: trendingIcon,    iconW: 14, iconH: 16, title: 'Trending Products',            sub: 'Weekly updates on popular and highly-rated new products' },
    { id: 'newreviews',  icon: newReviewIcon,   iconW: 16, iconH: 16, title: 'New Reviews on Favorites',    sub: "When someone reviews products you've saved or liked" },
    { id: 'personalrec', icon: personalRecIcon, iconW: 16, iconH: 16, title: 'Personalized Recommendations',sub: 'AI-powered product suggestions based on your preferences' },
    { id: 'exclusive',   icon: exclusiveIcon,   iconW: 16, iconH: 16, title: 'Exclusive Offers',            sub: 'Special deals and promotions from our partners' },
  ];

  return (
    <div className="min-h-screen bg-[#f5f1ea]">
      <div className="mx-auto max-w-[375px] w-full flex flex-col pb-8">

        {/* ── Header ──────────────────────────────────────────────────────── */}
        <header className="sticky top-0 z-50 bg-[#f5f1ea] border-b border-[rgba(200,164,106,0.2)] px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-[#111] rounded-[12px] w-9 h-9 flex items-center justify-center shrink-0">
              <img src={logoIcon} alt="TressIQ" className="w-4 h-4 object-contain" />
            </div>
            <span className="font-semibold text-[18px] text-[#111] leading-7">TressIQ</span>
          </div>
          <button onClick={onSkip} className="font-medium text-[14px] text-[#4b3832] leading-5">
            Skip
          </button>
        </header>

        {/* ── Progress ─────────────────────────────────────────────────────── */}
        <div className="px-4 pt-6 flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <span className="font-semibold text-[12px] text-[#111] leading-4">Step 2 of 2</span>
            <span className="text-[12px] text-[#4b3832] leading-4">100%</span>
          </div>
          <div className="bg-white border border-[rgba(200,164,106,0.2)] h-2 rounded-full w-full overflow-hidden p-px">
            <div
              className="h-full rounded-full w-full"
              style={{ background: 'linear-gradient(90deg, #111 0%, #4b3832 100%)' }}
            />
          </div>
          <div className="flex items-center justify-center gap-2 pt-2">
            <div className="w-2 h-2 rounded-full bg-[rgba(200,164,106,0.3)]" />
            <div className="w-2 h-2 rounded-full bg-[#111]" />
          </div>
        </div>

        {/* ── Hero ─────────────────────────────────────────────────────────── */}
        <div className="flex flex-col items-center gap-2 pt-8 pb-2 px-4">
          <div
            className="w-16 h-16 rounded-[16px] flex items-center justify-center shrink-0 shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]"
            style={{ background: 'linear-gradient(135deg, #111 0%, #4b3832 100%)' }}
          >
            <img src={heroIcon} alt="Customize" className="w-6 h-6 object-contain" />
          </div>
          <h1 className="font-bold text-[24px] text-[#111] text-center leading-8 pt-2">
            Customize Your<br />Recommendations
          </h1>
          <p className="text-[#4b3832] text-[14px] text-center leading-[22.75px]">
            Help us find the perfect products by sharing your<br />goals and preferences
          </p>
        </div>

        {/* ── Section 1: Goals ─────────────────────────────────────────────── */}
        <div className="px-4 pt-6 flex flex-col gap-4">
          <div>
            <h2 className="font-bold text-[18px] text-[#111] leading-7">What are your main goals?</h2>
            <p className="text-[#4b3832] text-[12px] leading-4 mt-1">Select all that apply</p>
          </div>
          <div className="flex flex-col gap-3">
            {goalItems.map((item) => (
              <IconCheckRow
                key={item.id}
                checked={goals.has(item.id)}
                onChange={() => setGoals(toggleSet(goals, item.id))}
                icon={item.icon}
                iconW={item.iconW}
                iconH={item.iconH}
                title={item.title}
                subtitle={item.sub}
              />
            ))}
          </div>
        </div>

        {/* ── Section 2: Experience Level ───────────────────────────────────── */}
        <div className="bg-white px-4 py-6 mt-8 flex flex-col gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <img src={expLevelIcon} alt="Experience" className="w-[25px] h-5 object-contain" />
              <h2 className="font-bold text-[18px] text-[#111] leading-7">What's your experience level?</h2>
            </div>
            <p className="text-[#4b3832] text-[12px] leading-4">
              This helps us recommend products that match your skill level
            </p>
          </div>
          <div className="flex flex-col gap-3">
            {experienceItems.map((item) => (
              <RadioRow
                key={item.id}
                selected={experience === item.id}
                onSelect={() => setExperience(item.id)}
                title={item.title}
                subtitle={item.sub}
                bg="#f5f1ea"
              />
            ))}
          </div>
        </div>

        {/* ── Section 3: Wear Duration ──────────────────────────────────────── */}
        <div className="px-4 pt-8 flex flex-col gap-4">
          <div>
            <h2 className="font-bold text-[18px] text-[#111] leading-7">
              How long do you typically wear products?
            </h2>
            <p className="text-[#4b3832] text-[12px] leading-4 mt-1">
              This helps us recommend appropriate quality levels
            </p>
          </div>
          <div className="flex flex-col gap-3">
            {wearItems.map((item) => (
              <RadioRow
                key={item.id}
                selected={wearDuration === item.id}
                onSelect={() => setWearDuration(item.id)}
                title={item.title}
                subtitle={item.sub}
              />
            ))}
          </div>
        </div>

        {/* ── Section 4: Maintenance ────────────────────────────────────────── */}
        <div className="bg-white px-4 py-6 mt-8 flex flex-col gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <img src={maintIcon} alt="Maintenance" className="w-[22.5px] h-5 object-contain" />
              <h2 className="font-bold text-[18px] text-[#111] leading-7">
                How much maintenance are you comfortable with?
              </h2>
            </div>
            <p className="text-[#4b3832] text-[12px] leading-4">
              Be honest - this ensures better product matches
            </p>
          </div>
          <div className="flex flex-col gap-3">
            {maintenanceItems.map((item) => (
              <RadioRow
                key={item.id}
                selected={maintenance === item.id}
                onSelect={() => setMaintenance(item.id)}
                title={item.title}
                subtitle={item.sub}
                bg="#f5f1ea"
              />
            ))}
          </div>
        </div>

        {/* ── Section 5: Stay Updated ───────────────────────────────────────── */}
        <div className="px-4 pt-8 flex flex-col gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <img src={notifIcon} alt="Notifications" className="w-[17.5px] h-5 object-contain" />
              <h2 className="font-bold text-[18px] text-[#111] leading-7">Stay updated (Optional)</h2>
            </div>
            <p className="text-[#4b3832] text-[12px] leading-4">
              Choose what notifications you'd like to receive
            </p>
          </div>
          <div className="flex flex-col gap-3">
            {notifItems.map((item) => (
              <IconCheckRow
                key={item.id}
                checked={notifications.has(item.id)}
                onChange={() => setNotifications(toggleSet(notifications, item.id))}
                icon={item.icon}
                iconW={item.iconW}
                iconH={item.iconH}
                title={item.title}
                subtitle={item.sub}
              />
            ))}
          </div>

          {/* Privacy note */}
          <div className="bg-[#f5f1ea] border border-[rgba(200,164,106,0.2)] rounded-[12px] p-[17px] flex gap-3 items-start mt-1">
            <div className="pt-[2px] shrink-0">
              <img src={privacyNoteIcon} alt="info" className="w-[18px] h-[18px] object-contain" />
            </div>
            <p className="text-[#4b3832] text-[12px] leading-[19.5px]">
              You can change these preferences anytime in your account settings. We respect your privacy and won't spam you.
            </p>
          </div>
        </div>

        {/* ── Footer: Back + Finish ─────────────────────────────────────────── */}
        <div className="bg-white border-t border-[rgba(200,164,106,0.2)] px-4 pt-6 pb-6 mt-8 flex flex-col gap-3">
          <div className="flex gap-3">
            <button
              onClick={onBack}
              className="flex-1 bg-white border-2 border-[#111] text-[#111] font-semibold text-[16px] py-[18px] rounded-[12px] text-center"
            >
              Back
            </button>
            <button
              onClick={onFinish}
              className="flex-1 font-semibold text-[16px] py-[18px] rounded-[12px] flex items-center justify-center gap-2 text-[#f5f1ea]"
              style={{ background: 'linear-gradient(90deg, #111 0%, #4b3832 100%)' }}
            >
              Finish
              <img src={finishArrowIcon} alt="finish" className="w-[14px] h-4 object-contain" />
            </button>
          </div>
          <p className="text-[#4b3832] text-[12px] text-center leading-4">
            Ready to discover your perfect products!
          </p>
        </div>

      </div>
    </div>
  );
}
