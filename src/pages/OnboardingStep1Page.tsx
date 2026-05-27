import { useState } from 'react';

// ── Assets ───────────────────────────────────────────────────────────────────
const logoIcon         = "https://www.figma.com/api/mcp/asset/c702430d-6633-4f3e-b60a-33099fd100f8";
const personalizeIcon  = "https://www.figma.com/api/mcp/asset/b86fc5f2-844d-4337-974c-86d404e4deb0";
const wigsIcon         = "https://www.figma.com/api/mcp/asset/4c8b3608-530b-4206-b4cc-476e828b3578";
const bundlesIcon      = "https://www.figma.com/api/mcp/asset/9368b1a0-5124-4df9-ba18-eb33b8eb2112";
const braidingIcon     = "https://www.figma.com/api/mcp/asset/fd63992e-cb6c-4f64-87d3-9173adc9c106";
const clipInsIcon      = "https://www.figma.com/api/mcp/asset/d9b31e60-d03d-4273-a548-262fdc8ff430";
const specialtyIcon    = "https://www.figma.com/api/mcp/asset/55af3cae-62c7-4bd8-afdf-067b9cbb5b7b";
const straightIcon     = "https://www.figma.com/api/mcp/asset/69b31b3e-aa01-4801-8554-922365dcb429";
const wavyIcon         = "https://www.figma.com/api/mcp/asset/42f67e10-9127-4c3b-b1ee-703ce95fdc13";
const curlyIcon        = "https://www.figma.com/api/mcp/asset/bf03e592-ef86-4fba-8264-2e50f944dbb1";
const kinkyIcon        = "https://www.figma.com/api/mcp/asset/0ff6b815-bc6a-419d-bbc4-3c13efc1fefa";
const bodyWaveIcon     = "https://www.figma.com/api/mcp/asset/cee8369d-fb7e-4d09-a1e6-b181024902a1";
const braidsStyleIcon  = "https://www.figma.com/api/mcp/asset/1a2f47b6-4fad-48a1-b002-6b7104634d50";
const sensitiveIcon    = "https://www.figma.com/api/mcp/asset/aa26d8da-302e-48ca-a7eb-8b67fdfe3c2f";
const scalpIcon        = "https://www.figma.com/api/mcp/asset/fd55b937-93e1-425d-8bcc-ca89d63da958";
const allergiesIcon    = "https://www.figma.com/api/mcp/asset/800a8561-5286-4db2-b2e1-738d6e11fe6c";
const chemicalIcon     = "https://www.figma.com/api/mcp/asset/51e2b88e-e5e6-4782-beb3-ae5b3792773a";
const fragranceIcon    = "https://www.figma.com/api/mcp/asset/b304829d-f7f0-430e-8bb3-02f2bb2d59e3";
const dryScalpIcon     = "https://www.figma.com/api/mcp/asset/3cc4b7ec-c426-4aed-be77-f0698f0a1041";
const noSensitiveIcon  = "https://www.figma.com/api/mcp/asset/e98ed610-8f03-4edd-a6dd-09e4972042af";
const nextArrowIcon    = "https://www.figma.com/api/mcp/asset/ed993f3f-74e2-408b-8945-86a2dae38550";

// ── Types ────────────────────────────────────────────────────────────────────
type Product     = 'wigs' | 'bundles' | 'braiding' | 'clipins' | 'specialty';
type Budget      = 'budget' | 'midrange' | 'premium' | 'luxury' | 'any';
type Style       = 'straight' | 'wavy' | 'curly' | 'kinky' | 'bodywave' | 'braids';
type Sensitivity = 'scalp' | 'allergies' | 'chemical' | 'fragrance' | 'dryscalp' | 'none';

interface Props {
  onBack: () => void;
  onNext: () => void;
  onSkip: () => void;
}

// ── Checkbox row ─────────────────────────────────────────────────────────────
function CheckRow({
  checked, onChange, icon, iconW = 20, iconH = 20, title, subtitle, bg = 'white',
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
      className={`flex gap-4 items-center p-[18px] rounded-[12px] w-full cursor-pointer border-2 transition-colors ${
        checked ? 'border-[#c8a46a]' : 'border-[rgba(200,164,106,0.2)]'
      }`}
      style={{ backgroundColor: bg }}
    >
      <div
        className={`w-5 h-5 rounded-[2.5px] border shrink-0 flex items-center justify-center transition-colors ${
          checked ? 'bg-[#111] border-[#111]' : 'bg-white border-[#767676]'
        }`}
      >
        {checked && (
          <svg width="12" height="9" viewBox="0 0 12 9" fill="none">
            <path d="M1 4L4.5 7.5L11 1" stroke="#f5f1ea" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </div>
      <div className="flex gap-3 items-center flex-1 min-w-0">
        <div className="bg-[#f5f1ea] rounded-[8px] w-12 h-12 flex items-center justify-center shrink-0">
          <img src={icon} alt={title} style={{ width: iconW, height: iconH }} className="object-contain" />
        </div>
        <div>
          <p className="font-semibold text-[14px] text-[#111] leading-5">{title}</p>
          <p className="text-[#4b3832] text-[12px] leading-4 mt-0.5">{subtitle}</p>
        </div>
      </div>
      <input type="checkbox" className="sr-only" checked={checked} onChange={onChange} />
    </label>
  );
}

// ── Sensitivity row (icon in title, no product icon box) ─────────────────────
function SensitivityRow({
  checked, onChange, icon, title, subtitle,
}: {
  checked: boolean;
  onChange: () => void;
  icon: string;
  title: string;
  subtitle: string;
}) {
  return (
    <label
      className={`flex gap-4 items-start p-[18px] rounded-[12px] w-full cursor-pointer border-2 transition-colors ${
        checked ? 'border-[#c8a46a] bg-white' : 'border-[rgba(200,164,106,0.2)] bg-[#f5f1ea]'
      }`}
    >
      <div className="pt-[2px] shrink-0">
        <div
          className={`w-5 h-5 rounded-[2.5px] border flex items-center justify-center transition-colors ${
            checked ? 'bg-[#111] border-[#111]' : 'bg-white border-[#767676]'
          }`}
        >
          {checked && (
            <svg width="12" height="9" viewBox="0 0 12 9" fill="none">
              <path d="M1 4L4.5 7.5L11 1" stroke="#f5f1ea" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </div>
      </div>
      <div className="flex-1 min-w-0 flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <img src={icon} alt={title} className="w-4 h-4 object-contain shrink-0" />
          <p className="font-semibold text-[14px] text-[#111] leading-5">{title}</p>
        </div>
        <p className="text-[#4b3832] text-[12px] leading-[19.5px]">{subtitle}</p>
      </div>
      <input type="checkbox" className="sr-only" checked={checked} onChange={onChange} />
    </label>
  );
}

// ── Style card ───────────────────────────────────────────────────────────────
function StyleCard({
  selected, onToggle, icon, iconW, iconH, label,
}: {
  selected: boolean;
  onToggle: () => void;
  icon: string;
  iconW: number;
  iconH: number;
  label: string;
}) {
  return (
    <button
      onClick={onToggle}
      className={`relative rounded-[12px] overflow-hidden flex flex-col items-center justify-center py-[53.75px] px-[18px] w-full border-2 transition-colors ${
        selected ? 'border-[#c8a46a]' : 'border-transparent'
      }`}
      style={{ background: 'linear-gradient(135deg, #4b3832 0%, #111 100%)' }}
    >
      <img src={icon} alt={label} style={{ width: iconW, height: iconH }} className="object-contain mb-2" />
      <span className="font-semibold text-[14px] text-white leading-5">{label}</span>
    </button>
  );
}

// ── Main page ─────────────────────────────────────────────────────────────────
export default function OnboardingStep1Page({ onBack, onNext, onSkip }: Props) {
  const [products, setProducts]         = useState<Set<Product>>(new Set());
  const [budget, setBudget]             = useState<Budget | null>(null);
  const [styles, setStyles]             = useState<Set<Style>>(new Set());
  const [sensitivities, setSensitivities] = useState<Set<Sensitivity>>(new Set());
  const [notes, setNotes]               = useState('');

  function toggleSet<T>(set: Set<T>, val: T): Set<T> {
    const next = new Set(set);
    next.has(val) ? next.delete(val) : next.add(val);
    return next;
  }

  const productItems: { id: Product; icon: string; iconW: number; iconH: number; title: string; sub: string }[] = [
    { id: 'wigs',     icon: wigsIcon,     iconW: 25, iconH: 20, title: 'Wigs',               sub: 'Full lace, frontal, closures' },
    { id: 'bundles',  icon: bundlesIcon,  iconW: 20, iconH: 20, title: 'Hair Bundles',        sub: 'Sew-in, weave extensions' },
    { id: 'braiding', icon: braidingIcon, iconW: 17, iconH: 20, title: 'Braiding Hair',       sub: 'Kanekalon, X-pression, pre-stretched' },
    { id: 'clipins',  icon: clipInsIcon,  iconW: 20, iconH: 20, title: 'Clip-Ins & Extensions', sub: 'Temporary, quick install' },
    { id: 'specialty',icon: specialtyIcon,iconW: 22, iconH: 20, title: 'Specialty Hair',      sub: 'Crochet, passion twists, faux locs' },
  ];

  const budgetItems: { id: Budget; title: string; sub: string }[] = [
    { id: 'budget',   title: 'Budget-Friendly', sub: 'Under $50 per product' },
    { id: 'midrange', title: 'Mid-Range',        sub: '$50 - $150 per product' },
    { id: 'premium',  title: 'Premium',           sub: '$150 - $300 per product' },
    { id: 'luxury',   title: 'Luxury',            sub: '$300+ per product' },
    { id: 'any',      title: 'No Preference',     sub: 'Show me all price ranges' },
  ];

  const styleItems: { id: Style; icon: string; iconW: number; iconH: number; label: string }[] = [
    { id: 'straight',  icon: straightIcon,    iconW: 33.75, iconH: 30, label: 'Straight'   },
    { id: 'wavy',      icon: wavyIcon,        iconW: 33.75, iconH: 30, label: 'Wavy'       },
    { id: 'curly',     icon: curlyIcon,       iconW: 26.25, iconH: 30, label: 'Curly'      },
    { id: 'kinky',     icon: kinkyIcon,       iconW: 37.5,  iconH: 30, label: 'Kinky'      },
    { id: 'bodywave',  icon: bodyWaveIcon,    iconW: 37.5,  iconH: 30, label: 'Body Wave'  },
    { id: 'braids',    icon: braidsStyleIcon, iconW: 26.25, iconH: 30, label: 'Braids'     },
  ];

  const sensitivityItems: { id: Sensitivity; icon: string; title: string; sub: string }[] = [
    { id: 'scalp',      icon: scalpIcon,       title: 'Scalp Irritation',          sub: 'Sensitive to itching, redness, or inflammation' },
    { id: 'allergies',  icon: allergiesIcon,   title: 'Allergies',                 sub: 'Allergic to specific materials or chemicals' },
    { id: 'chemical',   icon: chemicalIcon,    title: 'Chemical Odor Sensitivity', sub: 'Sensitive to strong chemical smells or fumes' },
    { id: 'fragrance',  icon: fragranceIcon,   title: 'Fragrance Sensitivity',     sub: 'Prefer unscented or naturally scented products' },
    { id: 'dryscalp',   icon: dryScalpIcon,    title: 'Dry Scalp / Eczema',        sub: 'Need gentle, moisturizing products' },
    { id: 'none',        icon: noSensitiveIcon, title: 'No Known Sensitivities',    sub: "I don't have specific sensitivities" },
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
            <span className="font-semibold text-[12px] text-[#111] leading-4">Step 1 of 2</span>
            <span className="text-[12px] text-[#4b3832] leading-4">50%</span>
          </div>
          <div className="bg-white border border-[rgba(200,164,106,0.2)] h-2 rounded-full w-full overflow-hidden">
            <div
              className="h-full rounded-full w-1/2"
              style={{ background: 'linear-gradient(90deg, #111 0%, #4b3832 100%)' }}
            />
          </div>
          <div className="flex items-center justify-center gap-2 pt-2">
            <div className="w-2 h-2 rounded-full bg-[#111]" />
            <div className="w-2 h-2 rounded-full bg-[rgba(200,164,106,0.3)]" />
          </div>
        </div>

        {/* ── Hero ─────────────────────────────────────────────────────────── */}
        <div className="flex flex-col items-center gap-2 pt-8 pb-2 px-4">
          <div
            className="w-16 h-16 rounded-[16px] flex items-center justify-center shrink-0 shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]"
            style={{ background: 'linear-gradient(135deg, #111 0%, #4b3832 100%)' }}
          >
            <img src={personalizeIcon} alt="Personalize" className="w-6 h-6 object-contain" />
          </div>
          <h1 className="font-bold text-[24px] text-[#111] text-center leading-8 pt-2">
            Let's Personalize Your<br />Experience
          </h1>
          <p className="text-[#4b3832] text-[14px] text-center leading-[22.75px]">
            Tell us about your hair goals and sensitivities so we<br />can recommend the perfect products for you
          </p>
        </div>

        {/* ── Section 1: Products ───────────────────────────────────────────── */}
        <div className="px-4 pt-6 flex flex-col gap-4">
          <div>
            <h2 className="font-bold text-[18px] text-[#111] leading-7">What products are you interested in?</h2>
            <p className="text-[#4b3832] text-[12px] leading-4 mt-1">Select all that apply</p>
          </div>
          <div className="flex flex-col gap-3">
            {productItems.map((item) => (
              <CheckRow
                key={item.id}
                checked={products.has(item.id)}
                onChange={() => setProducts(toggleSet(products, item.id))}
                icon={item.icon}
                iconW={item.iconW}
                iconH={item.iconH}
                title={item.title}
                subtitle={item.sub}
              />
            ))}
          </div>
        </div>

        {/* ── Section 2: Budget ─────────────────────────────────────────────── */}
        <div className="px-4 pt-8 flex flex-col gap-4">
          <div>
            <h2 className="font-bold text-[18px] text-[#111] leading-7">What's your typical budget?</h2>
            <p className="text-[#4b3832] text-[12px] leading-4 mt-1">This helps us show relevant products</p>
          </div>
          <div className="flex flex-col gap-3">
            {budgetItems.map((item) => (
              <label
                key={item.id}
                className={`flex gap-4 items-center p-[18px] rounded-[12px] w-full cursor-pointer bg-white border-2 transition-colors ${
                  budget === item.id ? 'border-[#c8a46a]' : 'border-[rgba(200,164,106,0.2)]'
                }`}
              >
                <div
                  className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 transition-colors ${
                    budget === item.id ? 'border-[#111]' : 'border-[#767676]'
                  }`}
                >
                  {budget === item.id && <div className="w-2.5 h-2.5 rounded-full bg-[#111]" />}
                </div>
                <div>
                  <p className="font-semibold text-[14px] text-[#111] leading-5">{item.title}</p>
                  <p className="text-[#4b3832] text-[12px] leading-4 mt-0.5">{item.sub}</p>
                </div>
                <input
                  type="radio"
                  className="sr-only"
                  checked={budget === item.id}
                  onChange={() => setBudget(item.id)}
                />
              </label>
            ))}
          </div>
        </div>

        {/* ── Section 3: Styles ─────────────────────────────────────────────── */}
        <div className="px-4 pt-8 flex flex-col gap-4">
          <div>
            <h2 className="font-bold text-[18px] text-[#111] leading-7">What styles do you prefer?</h2>
            <p className="text-[#4b3832] text-[12px] leading-4 mt-1">Select your favorite looks</p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {styleItems.map((item) => (
              <StyleCard
                key={item.id}
                selected={styles.has(item.id)}
                onToggle={() => setStyles(toggleSet(styles, item.id))}
                icon={item.icon}
                iconW={item.iconW}
                iconH={item.iconH}
                label={item.label}
              />
            ))}
          </div>
        </div>

        {/* ── Section 4: Sensitivities ──────────────────────────────────────── */}
        <div className="bg-white px-4 py-6 mt-8 flex flex-col gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <img src={sensitiveIcon} alt="Sensitivities" className="w-5 h-5 object-contain" />
              <h2 className="font-bold text-[18px] text-[#111] leading-7">Do you have any sensitivities?</h2>
            </div>
            <p className="text-[#4b3832] text-[12px] leading-4">This helps us filter out products that may cause issues</p>
          </div>
          <div className="flex flex-col gap-3">
            {sensitivityItems.map((item) => (
              <SensitivityRow
                key={item.id}
                checked={sensitivities.has(item.id)}
                onChange={() => setSensitivities(toggleSet(sensitivities, item.id))}
                icon={item.icon}
                title={item.title}
                subtitle={item.sub}
              />
            ))}
          </div>
        </div>

        {/* ── Section 5: Notes ──────────────────────────────────────────────── */}
        <div className="px-4 pt-8 flex flex-col gap-4">
          <div>
            <h2 className="font-bold text-[18px] text-[#111] leading-7">Anything else we should know?</h2>
            <p className="text-[#4b3832] text-[12px] leading-4 mt-1">Optional - share any specific concerns or preferences</p>
          </div>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            rows={4}
            placeholder={`E.g., I prefer human hair over synthetic, looking for heat-resistant options, need products that last 6+ months...`}
            className="bg-white border-2 border-[rgba(200,164,106,0.2)] rounded-[12px] px-[18px] py-4 w-full text-[14px] text-[#4b3832] leading-[22.75px] placeholder:opacity-50 resize-none outline-none focus:border-[#c8a46a] transition-colors"
          />
        </div>

        {/* ── Footer: Back + Next Step ──────────────────────────────────────── */}
        <div className="bg-white border-t border-[rgba(200,164,106,0.2)] px-4 pt-6 pb-6 mt-8 flex flex-col gap-3">
          <div className="flex gap-3">
            <button
              onClick={onBack}
              className="flex-1 bg-white border-2 border-[#111] text-[#111] font-semibold text-[16px] py-[18px] rounded-[12px] text-center"
            >
              Back
            </button>
            <button
              onClick={onNext}
              className="flex-1 font-semibold text-[16px] py-[18px] rounded-[12px] flex items-center justify-center gap-2 text-[#f5f1ea]"
              style={{ background: 'linear-gradient(90deg, #111 0%, #4b3832 100%)' }}
            >
              Next Step
              <img src={nextArrowIcon} alt="next" className="w-[14px] h-4 object-contain" />
            </button>
          </div>
          <p className="text-[#4b3832] text-[12px] text-center leading-4">
            You can always update these preferences later
          </p>
        </div>

      </div>
    </div>
  );
}
