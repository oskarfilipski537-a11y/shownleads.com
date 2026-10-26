import React, { useState, useEffect, useRef } from 'react';
import { ClientRevenueCalculator } from './ClientRevenueCalculator';
import { 
  Check, 
  Play, 
  Pause,
  Volume2,
  VolumeX,
  CheckCircle2,
  ShieldCheck,
  MapPin,
  Sparkles,
  Info,
  Maximize2,
  X
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { PPR_TRANSLATIONS } from '../data/pprTranslations';

interface PayPerResultSectorProps {
  onOpenQuiz?: () => void;
}

interface ZipData {
  zip: string;
  displayFigure: string;
  name: string;
  type: 'targeted' | 'excluded';
  income: string;
  homeowner: string;
  status: string;
  x: number;
  y: number;
  w: number;
  h: number;
}

export const PayPerResultSector: React.FC<PayPerResultSectorProps> = ({ onOpenQuiz }) => {
  const { language } = useLanguage();
  const pprData = PPR_TRANSLATIONS[language] || PPR_TRANSLATIONS.en;

  // Step state: 0 to 5
  const [activeStep, setActiveStep] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(false);

  // Active selected ZIP code for the interactive Tampa Bay targeting map
  const [selectedZip, setSelectedZip] = useState<string>('33629');

  // Screen 4 interactive quiz states
  const [radiusAnswer, setRadiusAnswer] = useState<'Yes' | 'No'>('Yes');
  const [homeownerAnswer, setHomeownerAnswer] = useState<'Yes' | 'No'>('Yes');
  const [paymentAnswer, setPaymentAnswer] = useState<'Insurance' | 'Cash' | 'Finance'>('Insurance');
  const [scopeAnswer, setScopeAnswer] = useState<'Replacement' | 'Repair' | 'Remodel'>('Remodel');
  const [timelineAnswer, setTimelineAnswer] = useState<'ASAP' | '1-3 mo' | '3+ mo'>('ASAP');

  // Screen 5 booking states
  const [selectedDate, setSelectedDate] = useState<string>('Thu 14');
  const [selectedTime, setSelectedTime] = useState<string>('12:30');
  const [isBooked, setIsBooked] = useState<boolean>(false);

  // Step 2 Video Ad states
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(false);

  // GEO Case Study Lightbox Modal state
  const [geoModalOpen, setGeoModalOpen] = useState<boolean>(false);

  // Pause video if user switches steps
  useEffect(() => {
    if (activeStep !== 2 && videoRef.current) {
      videoRef.current.pause();
      setIsVideoPlaying(false);
    }
  }, [activeStep]);

  // Handle escape key to close GEO lightbox modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setGeoModalOpen(false);
    };
    if (geoModalOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [geoModalOpen]);

  const handleTogglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play().catch(() => {});
      setIsVideoPlaying(true);
    } else {
      videoRef.current.pause();
      setIsVideoPlaying(false);
    }
  };

  // 16 Exact Zones with Real $ Figure Counts ($25,000 - $1,100,000)
  const zipCodes: ZipData[] = [
    {
      zip: '33647',
      displayFigure: '$240k',
      name: 'New Tampa / Tampa Palms',
      type: 'targeted',
      income: '$240,000',
      homeowner: '79%',
      status: 'Targeted ($90k+ Income)',
      x: 184,
      y: 68,
      w: 55,
      h: 75
    },
    {
      zip: '33626',
      displayFigure: '$310k',
      name: 'Westchase / Highland Park',
      type: 'targeted',
      income: '$310,000',
      homeowner: '82%',
      status: 'Targeted ($90k+ Income)',
      x: 92,
      y: 108,
      w: 48,
      h: 65
    },
    {
      zip: '33618',
      displayFigure: '$185k',
      name: 'Carrollwood Village',
      type: 'targeted',
      income: '$185,000',
      homeowner: '74%',
      status: 'Targeted ($90k+ Income)',
      x: 154,
      y: 148,
      w: 48,
      h: 72
    },
    {
      zip: '33617',
      displayFigure: '$42k',
      name: 'Temple Terrace',
      type: 'excluded',
      income: '$42,000',
      homeowner: '38%',
      status: 'Filtered Out (Low Income)',
      x: 214,
      y: 148,
      w: 42,
      h: 65
    },
    {
      zip: '33511',
      displayFigure: '$145k',
      name: 'Brandon Executive Estates',
      type: 'targeted',
      income: '$145,000',
      homeowner: '76%',
      status: 'Targeted ($90k+ Income)',
      x: 248,
      y: 168,
      w: 48,
      h: 80
    },
    {
      zip: '33759',
      displayFigure: '$54k',
      name: 'Clearwater East',
      type: 'excluded',
      income: '$54,000',
      homeowner: '41%',
      status: 'Filtered Out (Low Income)',
      x: 45,
      y: 188,
      w: 42,
      h: 68
    },
    {
      zip: '33615',
      displayFigure: '$115k',
      name: "Town 'n' Country Bay Crest",
      type: 'targeted',
      income: '$115,000',
      homeowner: '70%',
      status: 'Targeted ($90k+ Income)',
      x: 108,
      y: 182,
      w: 45,
      h: 70
    },
    {
      zip: '33604',
      displayFigure: '$38k',
      name: 'Sulphur Springs',
      type: 'excluded',
      income: '$38,000',
      homeowner: '32%',
      status: 'Filtered Out (Low Income)',
      x: 184,
      y: 208,
      w: 38,
      h: 60
    },
    {
      zip: '34695',
      displayFigure: '$425k',
      name: 'Safety Harbor Waterfront',
      type: 'targeted',
      income: '$425,000',
      homeowner: '81%',
      status: 'Targeted ($90k+ Income)',
      x: 68,
      y: 258,
      w: 45,
      h: 60
    },
    {
      zip: '33607',
      displayFigure: '$46k',
      name: 'West Tampa / Airport',
      type: 'excluded',
      income: '$46,000',
      homeowner: '35%',
      status: 'Filtered Out (Low Income)',
      x: 134,
      y: 248,
      w: 38,
      h: 55
    },
    {
      zip: '33610',
      displayFigure: '$32k',
      name: 'East Tampa',
      type: 'excluded',
      income: '$32,000',
      homeowner: '29%',
      status: 'Filtered Out (Low Income)',
      x: 216,
      y: 248,
      w: 40,
      h: 72
    },
    {
      zip: '33605',
      displayFigure: '$25k',
      name: 'Ybor City Historic',
      type: 'excluded',
      income: '$25,000',
      homeowner: '26%',
      status: 'Filtered Out (Low Income)',
      x: 184,
      y: 288,
      w: 36,
      h: 55
    },
    {
      zip: '33569',
      displayFigure: '$195k',
      name: 'Riverview Enclaves',
      type: 'targeted',
      income: '$195,000',
      homeowner: '83%',
      status: 'Targeted ($90k+ Income)',
      x: 274,
      y: 268,
      w: 48,
      h: 78
    },
    {
      zip: '33629',
      displayFigure: '$1.1M',
      name: 'South Tampa / Palma Ceia',
      type: 'targeted',
      income: '$1,100,000',
      homeowner: '78%',
      status: 'Targeted ($90k+ Income)',
      x: 148,
      y: 312,
      w: 48,
      h: 84
    },
    {
      zip: '33710',
      displayFigure: '$58k',
      name: 'St. Petersburg West',
      type: 'excluded',
      income: '$58,000',
      homeowner: '43%',
      status: 'Filtered Out (Low Income)',
      x: 30,
      y: 352,
      w: 45,
      h: 75
    },
    {
      zip: '33534',
      displayFigure: '$48k',
      name: 'Gibsonton Rural',
      type: 'excluded',
      income: '$48,000',
      homeowner: '46%',
      status: 'Filtered Out (Low Income)',
      x: 226,
      y: 372,
      w: 50,
      h: 75
    }
  ];

  const currentZipData = zipCodes.find(z => z.zip === selectedZip) || zipCodes[13];

  // Localized 6 steps from pprData:
  const steps = pprData.steps;

  // Auto-play steps unless user manually selected a step recently
  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setActiveStep(prev => (prev + 1) % steps.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [isAutoPlaying, steps.length]);

  const handleSelectStep = (index: number) => {
    setActiveStep(index);
    setIsAutoPlaying(false);
  };

  return (
    <section
      id="pay-per-result"
      className="relative py-24 sm:py-32 bg-[#000000] overflow-hidden border-t border-[#1a1a1a]"
    >
      <div className="max-w-[1240px] mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
        
        {/* Top Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="mb-3 inline-flex items-center gap-2">
            <span className="text-[11px] font-mono tracking-[0.2em] text-[#777777] uppercase font-medium">
              {pprData.headerTag}
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl lg:text-[54px] text-white font-normal tracking-tight leading-[1.1]">
            {pprData.headerTitle}
          </h2>
        </div>

        {/* 2-Column Main Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: 8 Steps Navigation */}
          <div className="lg:col-span-6 space-y-5 sm:space-y-6 pt-1">
            {steps.map((step, idx) => {
              const isActive = activeStep === idx;
              return (
                <div
                  key={step.num}
                  onClick={() => handleSelectStep(idx)}
                  className={`relative pl-6 cursor-pointer group transition-all duration-300 ${
                    isActive ? 'opacity-100' : 'opacity-40 hover:opacity-75'
                  }`}
                >
                  {/* Active Vertical Green Pill Bar */}
                  {isActive && (
                    <div className="absolute left-0 top-1 bottom-1 w-[2px] bg-[#2aff2a] rounded-full shadow-[0_0_12px_rgba(42,255,42,0.8)]" />
                  )}

                  {/* Step Number */}
                  <div className="text-xs font-mono tracking-widest text-[#777777] mb-0.5">
                    {step.num}
                  </div>

                  {/* Step Title */}
                  <div className="text-xl sm:text-2xl lg:text-[23px] font-sans font-medium text-white tracking-tight leading-snug">
                    {step.title}
                  </div>

                  {/* Step Description */}
                  <div className="text-xs sm:text-sm text-[#888888] font-normal mt-0.5 leading-snug">
                    {step.desc}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Dark Titanium iPhone Mockup with Interactive Map */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center">
            
            {/* Phone Bezel: Dark Titanium chassis matching Screenshot */}
            <div className="relative w-full max-w-[360px] sm:max-w-[380px] bg-[#0c0c0c] p-[8px] sm:p-[10px] rounded-[52px] shadow-[0_30px_90px_rgba(0,0,0,0.95),0_0_30px_rgba(255,255,255,0.02)] border-[3px] border-[#242424]">
              
              {/* Phone Screen Container */}
              <div className="relative w-full aspect-[302/676] bg-white rounded-[44px] overflow-hidden flex flex-col justify-between select-none shadow-inner border border-black/10">
                
                {/* Dynamic Island and Status Bar Header matching screenshot */}
                <div className={`absolute top-0 left-0 right-0 z-30 pt-3 px-6 pointer-events-none flex items-center justify-between transition-colors duration-200 ${
                  activeStep === 1 ? 'text-white' : 'text-black'
                }`}>
                  <span className="text-[12px] font-semibold tracking-tight">9:41</span>
                  
                  {/* Dynamic Island pill */}
                  <div className="w-24 h-6 bg-black rounded-full flex items-center justify-between px-3 -mt-1 shadow-sm border border-white/10">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#111111] flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#1e293b]" />
                    </div>
                    <div className="w-2 h-2 rounded-full bg-[#090d16]" />
                  </div>

                  {/* Battery icon */}
                  <div className={`w-5 h-2.5 border rounded-[4px] p-[1px] flex items-center ${
                    activeStep === 1 ? 'border-white' : 'border-black'
                  }`}>
                    <div className={`w-full h-full rounded-[1px] ${
                      activeStep === 1 ? 'bg-white' : 'bg-black'
                    }`} />
                  </div>
                </div>

                {/* Live Screen Content based on activeStep */}
                <div className="relative w-full h-full flex flex-col overflow-hidden bg-white text-black">
                  
                  {/* ================= STEP 01: TARGET (INTERACTIVE TAMPA BAY MAP RECREATED) ================= */}
                  {activeStep === 0 && (
                    <div className="relative w-full h-full bg-[#f4f6f8] flex flex-col justify-between overflow-hidden animate-fadeIn select-none">
                      
                      {/* Top Header Layer: Target area & City + Interactive Legend */}
                      <div className="relative z-10 pt-11 px-4 pb-2 bg-gradient-to-b from-white/95 via-white/80 to-transparent">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-lg font-bold font-sans text-black tracking-tight leading-none">
                            Target area
                          </h3>
                          <span className="text-xs text-[#737373] font-mono tracking-tight font-medium">
                            Tampa Bay, FL
                          </span>
                        </div>

                        {/* Demographic Income Gradient Legend ($25k - $1.1M) */}
                        <div className="flex items-center justify-between bg-white/95 backdrop-blur-sm rounded-lg border border-gray-200/90 shadow-xs px-2.5 py-1.5">
                          <div className="w-28 h-1.5 rounded-full bg-gradient-to-r from-[#e57373] via-[#ffb74d] via-35% to-[#1b5e20] mr-2" />
                          <div className="flex items-center gap-2 text-[9px] text-[#737373] font-mono font-medium">
                            <span className="text-red-700 font-bold">$25,000</span>
                            <span>—</span>
                            <span className="text-green-700 font-bold">$1,100,000</span>
                          </div>
                        </div>
                      </div>

                      {/* Native Interactive Vector Cartographic Map Canvas */}
                      <div className="relative flex-1 w-full overflow-hidden">
                        <svg 
                          viewBox="0 0 350 470" 
                          className="w-full h-full object-cover"
                          preserveAspectRatio="xMidYMid slice"
                        >
                          {/* Land Base */}
                          <rect width="350" height="470" fill="#f2f5f7" />

                          {/* Water Bodies (Old Tampa Bay, Hillsborough Bay, Tampa Bay) */}
                          {/* Old Tampa Bay (Left Center) */}
                          <path 
                            d="M 0 240 C 40 240, 80 250, 110 270 C 130 285, 140 310, 140 340 C 120 370, 70 380, 0 390 Z" 
                            fill="#cbe3f5" 
                            stroke="#b3d4ed" 
                            strokeWidth="1.5" 
                          />
                          {/* Hillsborough Bay (Center South) */}
                          <path 
                            d="M 195 320 C 210 320, 230 330, 230 360 C 230 390, 210 420, 190 470 L 140 470 C 140 430, 160 380, 180 340 Z" 
                            fill="#cbe3f5" 
                            stroke="#b3d4ed" 
                            strokeWidth="1.5" 
                          />
                          {/* Safety Harbor Inlet */}
                          <path 
                            d="M 0 170 C 30 170, 50 190, 50 220 L 0 230 Z" 
                            fill="#cbe3f5" 
                            stroke="#b3d4ed" 
                            strokeWidth="1" 
                          />

                          {/* Major Arterial Roads & Highways Grid */}
                          {/* Courtney Campbell Causeway (Hwy 60) across Old Tampa Bay */}
                          <line x1="50" y1="265" x2="135" y2="275" stroke="#ffffff" strokeWidth="3" />
                          <line x1="50" y1="265" x2="135" y2="275" stroke="#94a3b8" strokeWidth="1" strokeDasharray="2 2" />

                          {/* Howard Frankland Bridge (I-275) */}
                          <line x1="45" y1="330" x2="145" y2="315" stroke="#ffffff" strokeWidth="3.5" />
                          <line x1="45" y1="330" x2="145" y2="315" stroke="#fdba74" strokeWidth="1.5" />

                          {/* Gandy Bridge (Hwy 92) */}
                          <line x1="60" y1="380" x2="145" y2="365" stroke="#ffffff" strokeWidth="3" />

                          {/* Highway Network Lines */}
                          <path d="M 0 80 L 350 70" stroke="#ffffff" strokeWidth="2.5" />
                          <path d="M 0 135 L 350 130" stroke="#ffffff" strokeWidth="2.5" />
                          <path d="M 0 210 L 350 205" stroke="#ffffff" strokeWidth="3" />
                          <path d="M 0 280 L 350 280" stroke="#ffffff" strokeWidth="2.5" />
                          
                          {/* North-South Highways (I-275 / Veterans / I-75) */}
                          <path d="M 145 0 L 145 315 L 45 330 L 30 470" stroke="#fed7aa" strokeWidth="2.5" fill="none" />
                          <path d="M 285 0 L 285 470" stroke="#fed7aa" strokeWidth="3" fill="none" />
                          <path d="M 195 0 L 195 320" stroke="#ffffff" strokeWidth="2" fill="none" />

                          {/* Geographic Labels matching Screenshot */}
                          <text x="145" y="45" fill="#94a3b8" fontSize="9" fontWeight="600" fontFamily="sans-serif">Odessa</text>
                          <text x="10" y="115" fill="#94a3b8" fontSize="8.5" fontWeight="600" fontFamily="sans-serif">East Lake</text>
                          <text x="270" y="70" fill="#94a3b8" fontSize="8.5" fontWeight="600" fontFamily="sans-serif">Lutz</text>
                          <text x="5" y="225" fill="#94a3b8" fontSize="8" fontWeight="600" fontFamily="sans-serif">Safety Harbor</text>
                          <text x="280" y="145" fill="#94a3b8" fontSize="8.5" fontWeight="600" fontFamily="sans-serif">University</text>
                          <text x="280" y="275" fill="#94a3b8" fontSize="9" fontWeight="bold" fontFamily="sans-serif">Tampa</text>
                          <text x="5" y="390" fill="#94a3b8" fontSize="8" fontWeight="600" fontFamily="sans-serif">Pinellas Park</text>

                          {/* 16 Interactive $ Figure Rounded Rectangles between $25,000 and $1,100,000 */}
                          {zipCodes.map((z) => {
                            const isSelected = selectedZip === z.zip;
                            const isTargeted = z.type === 'targeted';
                            
                            const fillColor = isTargeted
                              ? isSelected ? 'rgba(74, 222, 128, 0.75)' : 'rgba(134, 239, 172, 0.52)'
                              : isSelected ? 'rgba(248, 113, 113, 0.75)' : 'rgba(252, 165, 165, 0.52)';
                            
                            const strokeColor = isTargeted
                              ? isSelected ? '#15803d' : '#16a34a'
                              : isSelected ? '#991b1b' : '#dc2626';

                            return (
                              <g 
                                key={z.zip}
                                onClick={() => setSelectedZip(z.zip)}
                                className="cursor-pointer transition-all duration-200 group"
                              >
                                {/* Active Selection Halo */}
                                {isSelected && (
                                  <rect
                                    x={z.x - 3}
                                    y={z.y - 3}
                                    width={z.w + 6}
                                    height={z.h + 6}
                                    rx="14"
                                    ry="14"
                                    fill="none"
                                    stroke={isTargeted ? '#22c55e' : '#ef4444'}
                                    strokeWidth="2"
                                    className="animate-pulse"
                                  />
                                )}

                                {/* Main Rounded Rectangle Zone */}
                                <rect
                                  x={z.x}
                                  y={z.y}
                                  width={z.w}
                                  height={z.h}
                                  rx="10"
                                  ry="10"
                                  fill={fillColor}
                                  stroke={strokeColor}
                                  strokeWidth={isSelected ? '3' : '2'}
                                  className="transition-all duration-200"
                                  filter="drop-shadow(0px 2px 4px rgba(0,0,0,0.12))"
                                />

                                {/* Actual $ Figure Label inside rectangle */}
                                <text
                                  x={z.x + z.w / 2}
                                  y={z.y + z.h / 2 + 4}
                                  textAnchor="middle"
                                  fill="#ffffff"
                                  stroke="#000000"
                                  strokeWidth="1.2"
                                  paintOrder="stroke fill"
                                  fontSize="10"
                                  fontWeight="bold"
                                  fontFamily="ui-sans-serif, system-ui, sans-serif"
                                  className="select-none pointer-events-none"
                                >
                                  {z.displayFigure}
                                </text>
                              </g>
                            );
                          })}
                        </svg>

                        {/* Interactive Click Tip Overlay */}
                        <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-sm text-white text-[9px] px-2 py-0.5 rounded-full flex items-center gap-1 pointer-events-none">
                          <Sparkles className="w-2.5 h-2.5 text-[#2aff2a]" />
                          <span>Tap any $ figure to inspect</span>
                        </div>
                      </div>

                      {/* Floating Bottom Drawer Card showing Real-Time Selected Demographic Data */}
                      <div className="relative z-10 bg-white rounded-t-[24px] p-4 pt-3.5 shadow-[0_-8px_30px_rgba(0,0,0,0.08)] border-t border-gray-100 transition-all duration-200">
                        <div className="flex items-center justify-between mb-2.5">
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="text-2xl font-bold font-sans text-black tracking-tight leading-none">
                                {currentZipData.income}
                              </span>
                              <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                                currentZipData.type === 'targeted'
                                  ? 'bg-[#e6f4ea] text-[#137333]'
                                  : 'bg-red-50 text-red-700'
                              }`}>
                                {currentZipData.type === 'targeted' ? 'Targeted' : 'Filtered Out'}
                              </span>
                            </div>
                            <div className="text-xs text-[#737373] font-sans font-medium mt-1 truncate max-w-[190px]">
                              {currentZipData.name} • ZIP {currentZipData.zip}
                            </div>
                          </div>

                          <div className="text-right">
                            <span className="text-[10px] text-[#888888] font-sans block">
                              Ad Routing
                            </span>
                            <span className={`text-xs font-bold font-mono ${
                              currentZipData.type === 'targeted' ? 'text-green-600' : 'text-red-500'
                            }`}>
                              {currentZipData.type === 'targeted' ? 'Active' : 'Blocked'}
                            </span>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-3 pt-1 border-t border-gray-100">
                          <div>
                            <span className="text-[10px] text-[#888888] font-sans font-medium block">
                              Household Income
                            </span>
                            <span className={`text-lg font-bold font-sans ${
                              currentZipData.type === 'targeted' ? 'text-black' : 'text-gray-500'
                            }`}>
                              {currentZipData.income}
                            </span>
                          </div>
                          <div>
                            <span className="text-[10px] text-[#888888] font-sans font-medium block">
                              Homeowners
                            </span>
                            <span className="text-lg font-bold font-sans text-black">
                              {currentZipData.homeowner}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* ================= STEP 02: GENERATIVE ENGINE OPTIMISATION ================= */}
                  {activeStep === 1 && (
                    <div className="h-full flex flex-col justify-between pt-9 pb-2 bg-[#000000] animate-fadeIn overflow-hidden text-white select-none">
                      {/* Slim Top Header */}
                      <div className="flex items-center justify-between px-3 py-1.5 border-b border-white/10 bg-[#0a0a0f] shrink-0">
                        <div className="flex items-center gap-1.5">
                          <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-[#10a37f] to-[#1a7f64] text-white flex items-center justify-center text-[9px] font-bold shadow-xs">
                            AI
                          </div>
                          <div className="flex items-center gap-1.5">
                            <span className="text-[11px] font-bold text-white leading-tight">
                              ChatGPT Search
                            </span>
                            <span className="text-[8px] px-1.5 py-0.5 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-full font-mono font-medium">
                              Rank #1
                            </span>
                          </div>
                        </div>
                        <button
                          onClick={() => setGeoModalOpen(true)}
                          className="flex items-center gap-1 bg-white/10 hover:bg-white/20 text-white/90 border border-white/15 px-2 py-0.5 rounded-full text-[9px] font-medium transition-colors cursor-pointer"
                          title="View full size lightbox"
                        >
                          <Maximize2 className="w-2.5 h-2.5 text-[#2aff2a]" />
                          <span>Full View</span>
                        </button>
                      </div>

                      {/* Image Screen Area: 100% OF IMAGE FITS IN VIEWPORT WITHOUT CROPPING */}
                      <div className="relative w-full flex-1 min-h-0 flex items-center justify-center p-1.5 overflow-hidden bg-black">
                        <div 
                          onClick={() => setGeoModalOpen(true)}
                          className="relative w-full h-full flex items-center justify-center group cursor-pointer"
                        >
                          <img
                            src="/geo_chatgpt_ranking.jpg"
                            alt="Generative Engine Optimisation - Ranking on AI Tools"
                            className="max-h-full max-w-full w-auto h-auto object-contain rounded-md select-none drop-shadow-2xl transition-transform duration-200 group-hover:scale-[1.01]"
                            loading="eager"
                          />
                          {/* Floating interactive hint overlay */}
                          <div className="absolute top-2 right-2 opacity-90 group-hover:opacity-100 transition-opacity pointer-events-none">
                            <span className="bg-black/80 backdrop-blur-md text-white text-[8px] px-2 py-0.5 rounded-full border border-white/20 flex items-center gap-1 shadow-md">
                              <Maximize2 className="w-2 h-2 text-[#2aff2a]" /> Tap to enlarge
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Slim Bottom Context Pill */}
                      <div className="px-2.5 pt-1 pb-0.5 shrink-0">
                        <div className="bg-[#111218] rounded-xl px-2.5 py-1.5 flex items-center justify-between border border-white/10 shadow-xs">
                          <div>
                            <div className="text-[10px] font-bold text-white leading-tight">
                              AI Tool Recommendation
                            </div>
                            <div className="text-[8.5px] text-gray-400 leading-tight">
                              ChatGPT cites SLC Connections LLC as #1 option
                            </div>
                          </div>
                          <span className="text-[9px] font-semibold text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded-md border border-emerald-500/30">
                            Ranked Top
                          </span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* ================= STEP 03: AD (VIDEO AD) ================= */}
                  {activeStep === 2 && (
                    <div className="h-full flex flex-col justify-between pt-12 pb-3 bg-white animate-fadeIn">
                      {/* Company Header */}
                      <div className="flex items-center justify-between px-4 pb-2.5">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center text-[10px] font-bold shadow-xs">
                            NB
                          </div>
                          <div>
                            <div className="text-xs font-bold text-black leading-tight">
                              Northline Bath
                            </div>
                            <span className="text-[9px] text-gray-400 leading-tight">Sponsored</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-1.5 bg-neutral-100 px-2 py-0.5 rounded-full">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#2aff2a] animate-pulse" />
                          <span className="text-[9px] text-neutral-600 font-mono font-medium">Active Ad</span>
                        </div>
                      </div>

                      {/* Video Ad Player - Click to play */}
                      <div 
                        className="relative w-full flex-1 flex items-center justify-center bg-black overflow-hidden my-auto cursor-pointer group select-none"
                        onClick={handleTogglePlay}
                      >
                        <video
                          ref={videoRef}
                          playsInline
                          preload="metadata"
                          poster="https://res.cloudinary.com/pskmrw71/video/upload/v1791762000/Screen_Recording_2026-10-06_at_18.16.41.jpg"
                          onPlay={() => setIsVideoPlaying(true)}
                          onPause={() => setIsVideoPlaying(false)}
                          onEnded={() => setIsVideoPlaying(false)}
                          muted={isMuted}
                          className="w-full h-full object-contain"
                        >
                          <source
                            src="https://res.cloudinary.com/pskmrw71/video/upload/v1791762000/Screen_Recording_2026-10-06_at_18.16.41.mp4"
                            type="video/mp4"
                          />
                          <source
                            src="https://res.cloudinary.com/pskmrw71/video/upload/v1791762000/Screen_Recording_2026-10-06_at_18.16.41.mov"
                            type="video/quicktime"
                          />
                        </video>

                        {/* Interactive Click-to-Play Overlay (Viewer must click play to view the ad) */}
                        {!isVideoPlaying && (
                          <div className="absolute inset-0 bg-black/45 backdrop-blur-[2px] flex flex-col items-center justify-center transition-all duration-300 z-10">
                            <div className="w-14 h-14 rounded-full bg-black/85 text-white border border-white/30 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                              <Play className="w-6 h-6 fill-white text-white translate-x-0.5" />
                            </div>
                            <span className="mt-3 px-3.5 py-1 rounded-full bg-black/75 text-white text-[11px] font-medium tracking-wide shadow-md border border-white/15">
                              Click to play ad
                            </span>
                          </div>
                        )}

                        {/* Top-Right Mute / Unmute Button */}
                        <div className="absolute top-2.5 right-2.5 flex items-center gap-1.5 z-20">
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setIsMuted(prev => !prev);
                            }}
                            className="w-7 h-7 rounded-full bg-black/60 hover:bg-black/80 backdrop-blur-sm text-white flex items-center justify-center text-xs transition-colors border border-white/15 cursor-pointer shadow-sm"
                            title={isMuted ? "Unmute" : "Mute"}
                          >
                            {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
                          </button>
                        </div>

                        {/* Pause button indicator overlay on hover while playing */}
                        {isVideoPlaying && (
                          <div className="absolute bottom-2.5 right-2.5 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                            <div className="w-7 h-7 rounded-full bg-black/60 backdrop-blur-sm text-white flex items-center justify-center text-xs border border-white/15">
                              <Pause className="w-3.5 h-3.5 fill-white text-white" />
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Bottom Conversion Action Banner */}
                      <div className="px-3 pt-2">
                        <div className="bg-gray-50 rounded-xl p-2.5 flex items-center justify-between border border-gray-200/80 shadow-xs">
                          <div>
                            <div className="text-[11px] font-bold text-black leading-tight">
                              Free in-home quotes
                            </div>
                            <div className="text-[9px] text-gray-500 leading-tight">
                              Exclusive for local homeowners
                            </div>
                          </div>
                          <button
                            onClick={onOpenQuiz}
                            className="bg-black hover:bg-neutral-800 text-white text-[10px] font-semibold px-3 py-1.5 rounded-lg shadow-sm transition-colors cursor-pointer"
                          >
                            Get quote
                          </button>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* ================= STEP 04: COPY (DIRECT RESPONSE) ================= */}
                  {activeStep === 3 && (
                    <div className="h-full flex flex-col justify-between pt-12 pb-5 px-4 animate-fadeIn">
                      <div>
                        {/* Company Header */}
                        <div className="flex items-center gap-2 mb-4">
                          <div className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center text-[10px] font-bold">
                            NB
                          </div>
                          <div>
                            <div className="text-xs font-bold text-black leading-none">
                              Northline Bath
                            </div>
                            <span className="text-[9px] text-gray-400">Direct response copy</span>
                          </div>
                        </div>

                        {/* Copy Card matching video */}
                        <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200 space-y-4">
                          <h4 className="text-base font-sans font-bold text-black leading-snug">
                            Ever been stuck in a grocery line that never seems to move?
                          </h4>
                          <p className="text-xs text-gray-700 leading-relaxed">
                            What a bathroom remodel feels like with the wrong bathroom remodeler.
                          </p>

                          {/* Feature Badges */}
                          <div className="space-y-2 pt-2 border-t border-gray-200">
                            <div className="flex items-center gap-2 text-[11px] text-gray-800 bg-white p-2 rounded-lg border border-gray-200 font-medium">
                              <Check className="w-3.5 h-3.5 text-green-600" />
                              <span>Waterproof luxury finishes</span>
                            </div>
                            <div className="flex items-center gap-2 text-[11px] text-gray-800 bg-white p-2 rounded-lg border border-gray-200 font-medium">
                              <Check className="w-3.5 h-3.5 text-green-600" />
                              <span>5-day completion</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* ================= STEP 05: QUALIFY (5-QUESTION FILTER) ================= */}
                  {activeStep === 4 && (
                    <div className="h-full flex flex-col justify-between pt-12 pb-4 px-4 animate-fadeIn text-black overflow-y-auto">
                      <div className="space-y-3">
                        <div>
                          <h4 className="text-sm font-bold text-black">
                            Quick check
                          </h4>
                          <span className="text-[10px] text-gray-400">
                            Takes 30 seconds
                          </span>
                        </div>

                        {/* Question 1: Radius */}
                        <div className="space-y-1">
                          <label className="text-[10px] font-semibold text-gray-700 block">
                            Are you within a 100 km radius?
                          </label>
                          <div className="flex gap-1.5">
                            {(['Yes', 'No'] as const).map(opt => (
                              <button
                                key={opt}
                                onClick={() => setRadiusAnswer(opt)}
                                className={`flex-1 py-1 text-[10px] font-medium rounded-lg border transition-colors cursor-pointer ${
                                  radiusAnswer === opt 
                                    ? 'bg-black text-white border-black' 
                                    : 'bg-white text-gray-600 border-gray-200'
                                }`}
                              >
                                {opt}
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Question 2: Homeowner */}
                        <div className="space-y-1">
                          <label className="text-[10px] font-semibold text-gray-700 block">
                            Are you the homeowner?
                          </label>
                          <div className="flex gap-1.5">
                            {(['Yes', 'No'] as const).map(opt => (
                              <button
                                key={opt}
                                onClick={() => setHomeownerAnswer(opt)}
                                className={`flex-1 py-1 text-[10px] font-medium rounded-lg border transition-colors cursor-pointer ${
                                  homeownerAnswer === opt 
                                    ? 'bg-black text-white border-black' 
                                    : 'bg-white text-gray-600 border-gray-200'
                                }`}
                              >
                                {opt}
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Question 3: Payment */}
                        <div className="space-y-1">
                          <label className="text-[10px] font-semibold text-gray-700 block">
                            How will you be paying?
                          </label>
                          <div className="grid grid-cols-3 gap-1">
                            {(['Insurance', 'Cash', 'Finance'] as const).map(opt => (
                              <button
                                key={opt}
                                onClick={() => setPaymentAnswer(opt)}
                                className={`py-1 text-[9px] font-medium rounded-lg border transition-colors cursor-pointer text-center ${
                                  paymentAnswer === opt 
                                    ? 'bg-black text-white border-black' 
                                    : 'bg-white text-gray-600 border-gray-200'
                                }`}
                              >
                                {opt}
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Question 4: Scope */}
                        <div className="space-y-1">
                          <label className="text-[10px] font-semibold text-gray-700 block">
                            Scope of work?
                          </label>
                          <div className="grid grid-cols-3 gap-1">
                            {(['Replacement', 'Repair', 'Remodel'] as const).map(opt => (
                              <button
                                key={opt}
                                onClick={() => setScopeAnswer(opt)}
                                className={`py-1 text-[9px] font-medium rounded-lg border transition-colors cursor-pointer text-center ${
                                  scopeAnswer === opt 
                                    ? 'bg-black text-white border-black' 
                                    : 'bg-white text-gray-600 border-gray-200'
                                }`}
                              >
                                {opt}
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Question 5: Timeline */}
                        <div className="space-y-1">
                          <label className="text-[10px] font-semibold text-gray-700 block">
                            When do you need this done?
                          </label>
                          <div className="grid grid-cols-3 gap-1">
                            {(['ASAP', '1-3 mo', '3+ mo'] as const).map(opt => (
                              <button
                                key={opt}
                                onClick={() => setTimelineAnswer(opt)}
                                className={`py-1 text-[9px] font-medium rounded-lg border transition-colors cursor-pointer text-center ${
                                  timelineAnswer === opt 
                                    ? 'bg-black text-white border-black' 
                                    : 'bg-white text-gray-600 border-gray-200'
                                }`}
                              >
                                {opt}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Qualified Action Button */}
                      <div className="pt-2">
                        <button className="w-full py-2 px-3 rounded-xl bg-green-100 border border-green-300 text-green-800 text-[11px] font-bold flex items-center justify-center gap-1.5 shadow-sm">
                          <CheckCircle2 className="w-3.5 h-3.5 text-green-700" />
                          <span>Qualified</span>
                        </button>
                      </div>
                    </div>
                  )}

                  {/* ================= STEP 06: BOOK (CALENDAR) ================= */}
                  {activeStep === 5 && (
                    <div className="h-full flex flex-col justify-between pt-12 pb-5 px-4 animate-fadeIn text-black">
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-sm font-bold text-black">
                            Pick a time
                          </h4>
                          <span className="text-[10px] text-gray-400">
                            Available route slots
                          </span>
                        </div>

                        {/* Dates Carousel */}
                        <div className="grid grid-cols-4 gap-1.5">
                          {['Mon 11', 'Tue 12', 'Wed 13', 'Thu 14'].map(d => (
                            <button
                              key={d}
                              onClick={() => setSelectedDate(d)}
                              className={`py-2 text-[10px] font-bold rounded-xl border text-center transition-all cursor-pointer ${
                                selectedDate === d 
                                  ? 'bg-black text-white border-black shadow-sm' 
                                  : 'bg-gray-50 text-gray-700 border-gray-200'
                              }`}
                            >
                              {d}
                            </button>
                          ))}
                        </div>

                        {/* Time Slots Grid */}
                        <div className="grid grid-cols-2 gap-2 pt-1">
                          {['9:30', '11:00', '12:30', '1:30', '3:00', '4:30'].map(t => (
                            <button
                              key={t}
                              onClick={() => {
                                setSelectedTime(t);
                                setIsBooked(false);
                              }}
                              className={`py-2.5 text-xs font-semibold rounded-xl border text-center transition-all cursor-pointer ${
                                selectedTime === t 
                                  ? 'bg-black text-white border-black shadow-sm' 
                                  : 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100'
                              }`}
                            >
                              {t}
                            </button>
                          ))}
                        </div>

                        <p className="text-[10px] text-gray-500 text-center">
                          Sit-down times route-locked with your crew.
                        </p>
                      </div>

                      {/* Confirm Button */}
                      <div>
                        <button
                          onClick={() => setIsBooked(true)}
                          className={`w-full py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                            isBooked
                              ? 'bg-green-100 text-green-800 border border-green-300'
                              : 'bg-black text-white shadow-md hover:bg-gray-900'
                          }`}
                        >
                          {isBooked ? (
                            <>
                              <CheckCircle2 className="w-3.5 h-3.5 text-green-700" />
                              <span>Booked</span>
                            </>
                          ) : (
                            <span>Confirm</span>
                          )}
                        </button>
                      </div>
                    </div>
                  )}

                  {/* ================= STEP 07: INSTANT ESTIMATOR TOOL ================= */}
                  {activeStep === 6 && (
                    <div className="h-full flex flex-col justify-between pt-11 pb-2 bg-white animate-fadeIn overflow-hidden">
                      {/* Header */}
                      <div className="flex items-center justify-between px-4 pb-2 border-b border-gray-100">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center text-[10px] font-bold shadow-xs">
                            IE
                          </div>
                          <div>
                            <div className="text-xs font-bold text-black leading-tight">
                              Instant Estimator
                            </div>
                            <span className="text-[9px] text-gray-400 leading-tight">AI Measurement & Scope</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-1.5 bg-blue-50 border border-blue-200/80 px-2 py-0.5 rounded-full">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
                          <span className="text-[9px] text-blue-700 font-mono font-medium">2 Min Quote</span>
                        </div>
                      </div>

                      {/* Image Preview Container */}
                      <div className="relative w-full flex-1 overflow-hidden bg-[#0d0f14] flex items-center justify-center">
                        <img
                          src="https://res.cloudinary.com/diwxs2xe8/image/upload/v1793027629/Image_26-10-2026_at_16.13_xolnzb.jpg"
                          alt="Instant Estimator Tool - 2 minute estimates"
                          className="w-full h-full object-cover object-top select-none"
                          loading="eager"
                        />
                      </div>

                      {/* Bottom Action Pill */}
                      <div className="px-3 pt-2 pb-1">
                        <div className="bg-gray-50 rounded-xl p-2.5 flex items-center justify-between border border-gray-200/80 shadow-xs">
                          <div>
                            <div className="text-[11px] font-bold text-black leading-tight">
                              Automated Scope & Price
                            </div>
                            <div className="text-[9px] text-gray-500 leading-tight">
                              Sent to homeowner in 2 minutes
                            </div>
                          </div>
                          <span className="text-[10px] font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md border border-blue-100">
                            Generated
                          </span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* ================= STEP 08: REMIND (MESSAGES) ================= */}
                  {activeStep === 7 && (
                    <div className="h-full flex flex-col justify-between pt-12 pb-5 px-4 animate-fadeIn text-black">
                      <div className="space-y-3">
                        <div className="flex items-center gap-2 pb-2 border-b border-gray-100">
                          <div className="w-6 h-6 rounded-full bg-gray-200 text-gray-700 flex items-center justify-center text-[10px] font-bold">
                            SL
                          </div>
                          <div>
                            <span className="text-xs font-bold text-black block">
                              Messages
                            </span>
                            <span className="text-[9px] text-green-600 font-semibold">
                              Automated Dispatch
                            </span>
                          </div>
                        </div>

                        {/* Inbound Message 1 */}
                        <div className="flex justify-start">
                          <div className="max-w-[85%] bg-gray-100 text-gray-800 p-2.5 rounded-2xl rounded-tl-sm text-[11px] leading-snug">
                            Hi Sarah, your estimate is tomorrow at 10:00 with Dave. Reply 1 to confirm, 2 to reschedule.
                          </div>
                        </div>

                        {/* Outbound Reply */}
                        <div className="flex justify-end">
                          <div className="bg-[#007aff] text-white px-3 py-1.5 rounded-2xl rounded-tr-sm text-[11px] font-medium">
                            1
                          </div>
                        </div>

                        {/* Inbound Confirmation */}
                        <div className="flex justify-start">
                          <div className="bg-gray-100 text-gray-800 px-3 py-1.5 rounded-2xl rounded-tl-sm text-[11px] font-medium flex items-center gap-1.5">
                            <Check className="w-3.5 h-3.5 text-green-600" />
                            <span>Confirmed</span>
                          </div>
                        </div>
                      </div>

                      {/* Bottom Stat Badge: 94.6% */}
                      <div className="flex items-center justify-end">
                        <div className="inline-flex items-center gap-1 bg-green-50 text-green-700 border border-green-200 px-2 py-0.5 rounded-full text-[10px] font-mono font-bold">
                          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                          94.6%
                        </div>
                      </div>
                    </div>
                  )}

                </div>

                {/* Bottom Home Indicator Bar */}
                <div className="w-24 h-1 bg-black/30 rounded-full mx-auto mb-2" />
              </div>

            </div>

            {/* Caption below phone matching screenshot */}
            <div className="mt-4 text-center">
              <span className="text-xs text-[#666666] font-sans">
                Map figures are examples.
              </span>
            </div>

          </div>

        </div>

        {/* What a month looks like. Calculator */}
        <ClientRevenueCalculator onOpenQuiz={onOpenQuiz} />

      </div>

      {/* Fullscreen Lightbox Modal for GEO Case Study */}
      {geoModalOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn"
          onClick={() => setGeoModalOpen(false)}
        >
          <div 
            className="relative max-w-2xl w-full max-h-[92vh] bg-[#0c0d14] rounded-2xl border border-white/20 shadow-2xl flex flex-col overflow-hidden animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-[#12131c]">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#10a37f] animate-pulse" />
                <div className="flex flex-col">
                  <span className="text-xs sm:text-sm font-bold text-white leading-tight">
                    Generative Engine Optimisation (GEO) Case Study
                  </span>
                  <span className="text-[10px] text-gray-400">
                    ChatGPT Search Rank #1 • Attic Insulation in Salt Lake City
                  </span>
                </div>
              </div>
              <button
                onClick={() => setGeoModalOpen(false)}
                className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image Body with smooth vertical scroll */}
            <div className="flex-1 overflow-y-auto p-3 sm:p-5 flex items-center justify-center bg-black/90">
              <img
                src="/geo_chatgpt_ranking.jpg"
                alt="Generative Engine Optimisation Case Study - High Resolution"
                className="w-full max-w-xl h-auto rounded-lg shadow-2xl border border-white/10"
              />
            </div>

            {/* Modal Footer */}
            <div className="px-4 py-2.5 border-t border-white/10 bg-[#12131c] flex items-center justify-between text-xs text-gray-400">
              <span className="truncate max-w-[260px] sm:max-w-none">
                AI Citation: "SLC Connections LLC — 5.0/5 (58 reviews)"
              </span>
              <span className="text-emerald-400 font-semibold flex items-center gap-1 shrink-0">
                <CheckCircle2 className="w-3.5 h-3.5" /> First Recommendation
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
