import React, { useState, useEffect, useRef } from 'react';
import { Globe, Coins, Check, ArrowRight, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { CurrencyCode, LanguageCode } from '../data/translations';

interface ClientRevenueCalculatorProps {
  onOpenQuiz?: () => void;
}

interface CurrencyPreset {
  symbol: string;
  code: CurrencyCode;
  name: string;
  label: string;
  jobMin: number;
  jobMax: number;
  jobStep: number;
  jobDefault: number;
  spendMin: number;
  spendMax: number;
  spendStep: number;
  spendDefault: number;
  perfFee: number;
}

const PRESETS: Record<CurrencyCode, CurrencyPreset> = {
  usd: {
    symbol: '$',
    code: 'usd',
    name: 'Dollars',
    label: '$ USD (Dollars)',
    jobMin: 2000,
    jobMax: 35000,
    jobStep: 250,
    jobDefault: 10500,
    spendMin: 35,
    spendMax: 150,
    spendStep: 5,
    spendDefault: 80,
    perfFee: 200,
  },
  eur: {
    symbol: '€',
    code: 'eur',
    name: 'Euros',
    label: '€ EUR (Euros)',
    jobMin: 2000,
    jobMax: 35000,
    jobStep: 250,
    jobDefault: 9800,
    spendMin: 30,
    spendMax: 150,
    spendStep: 5,
    spendDefault: 75,
    perfFee: 185,
  },
  sek: {
    symbol: 'kr',
    code: 'sek',
    name: 'Swedish Krona',
    label: 'kr SEK (Krona)',
    jobMin: 20000,
    jobMax: 380000,
    jobStep: 2500,
    jobDefault: 115000,
    spendMin: 350,
    spendMax: 1600,
    spendStep: 50,
    spendDefault: 850,
    perfFee: 2100,
  },
};

export const ClientRevenueCalculator: React.FC<ClientRevenueCalculatorProps> = ({ onOpenQuiz }) => {
  const { language, setLanguage, currency, setCurrency, languages, currencies, t, formatCurrency } = useLanguage();

  const prevCurrencyRef = useRef<CurrencyCode>(currency);

  const currentPreset = PRESETS[currency] || PRESETS.usd;

  // 5 Sliders:
  // 1. Estimates per month: default 25, range 10-60
  // 2. Daily ad spend
  // 3. Average job value
  // 4. Close rate: default 60%, range 10-100%
  // 5. Job margin: default 28%, range 10-80%
  const [estimatesCount, setEstimatesCount] = useState<number>(25);
  const [dailyAdSpend, setDailyAdSpend] = useState<number>(currentPreset.spendDefault);
  const [averageJobValue, setAverageJobValue] = useState<number>(currentPreset.jobDefault);
  const [closeRate, setCloseRate] = useState<number>(60);
  const [jobMargin, setJobMargin] = useState<number>(28);

  // Handle smooth conversion when currency changes
  useEffect(() => {
    const prev = prevCurrencyRef.current;
    if (prev === currency) return;

    prevCurrencyRef.current = currency;
    const targetPreset = PRESETS[currency];

    // Conversion ratios
    let spendMultiplier = 1;
    let jobMultiplier = 1;

    if (prev === 'usd' && currency === 'sek') {
      spendMultiplier = 10.5;
      jobMultiplier = 10.5;
    } else if (prev === 'eur' && currency === 'sek') {
      spendMultiplier = 11.2;
      jobMultiplier = 11.2;
    } else if (prev === 'sek' && currency === 'usd') {
      spendMultiplier = 1 / 10.5;
      jobMultiplier = 1 / 10.5;
    } else if (prev === 'sek' && currency === 'eur') {
      spendMultiplier = 1 / 11.2;
      jobMultiplier = 1 / 11.2;
    } else if (prev === 'usd' && currency === 'eur') {
      spendMultiplier = 0.95;
      jobMultiplier = 0.95;
    } else if (prev === 'eur' && currency === 'usd') {
      spendMultiplier = 1.05;
      jobMultiplier = 1.05;
    }

    setDailyAdSpend((currSpend) => {
      const converted = currSpend * spendMultiplier;
      const stepped = Math.round(converted / targetPreset.spendStep) * targetPreset.spendStep;
      return Math.min(targetPreset.spendMax, Math.max(targetPreset.spendMin, stepped));
    });

    setAverageJobValue((currVal) => {
      const converted = currVal * jobMultiplier;
      const stepped = Math.round(converted / targetPreset.jobStep) * targetPreset.jobStep;
      return Math.min(targetPreset.jobMax, Math.max(targetPreset.jobMin, stepped));
    });
  }, [currency]);

  // Calculations
  const monthlyAdSpend = Math.round(dailyAdSpend * 30.5);
  const performanceFee = estimatesCount * currentPreset.perfFee;
  const totalMarketing = performanceFee + monthlyAdSpend;

  const deals = estimatesCount * (closeRate / 100);
  const monthlyRevenue = Math.round(deals * averageJobValue);

  const grossProfit = monthlyRevenue * (jobMargin / 100);
  const netProfit = Math.max(0, Math.round(grossProfit - totalMarketing));

  const costPerDeal = deals > 0 ? Math.round(totalMarketing / deals) : 0;
  const roiMultiplier = totalMarketing > 0 ? (monthlyRevenue / totalMarketing).toFixed(1) : '0.0';

  // Segment bar percentages
  const netProfitPct = monthlyRevenue > 0 ? Math.max(0, (netProfit / monthlyRevenue) * 100) : 0;
  const cogsPct = monthlyRevenue > 0 ? Math.max(0, ((monthlyRevenue - grossProfit) / monthlyRevenue) * 100) : 0;
  const adSpendPct = monthlyRevenue > 0 ? Math.max(0, (monthlyAdSpend / monthlyRevenue) * 100) : 0;
  const feePct = monthlyRevenue > 0 ? Math.max(0, (performanceFee / monthlyRevenue) * 100) : 0;

  return (
    <div className="w-full mt-24 pt-16 border-t border-[#1a1a1a]" id="revenue-calculator">
      {/* Header with Title and Control Bar (Language Tool + Currency Changing) */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 pb-8 border-b border-[#1f2026]">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[11px] font-mono tracking-[0.2em] text-[#8e9aa8] uppercase font-medium">
              {t.calcHeaderTag}
            </span>
          </div>
          <h3 className="font-heading uppercase text-3xl sm:text-4xl lg:text-[44px] text-white font-normal tracking-tight">
            {t.calcTitle}
          </h3>
        </div>

        {/* Interactive Tools: Language Changing Tool & Currency Changing */}
        <div className="flex flex-wrap items-center gap-3 sm:gap-4 bg-[#0a0b0d]/90 p-3 sm:p-4 rounded-[20px] border border-[#22242c] shadow-[0_10px_35px_rgba(0,0,0,0.5)] backdrop-blur-xl">
          
          {/* Language Changing Tool */}
          <div className="flex flex-col gap-1.5">
            <span className="text-[10px] font-mono tracking-[0.14em] uppercase text-[#888888] font-semibold flex items-center gap-1.5">
              <Globe className="w-3 h-3 text-[#2aff2a]" /> {t.languageLabel}
            </span>
            <div className="flex items-center bg-[#14151a] border border-[#282b36] rounded-full p-0.5 sm:p-1 shadow-inner">
              {languages.map((l) => {
                const isActive = language === l.code;
                return (
                  <button
                    key={l.code}
                    onClick={() => setLanguage(l.code)}
                    className={`px-2.5 sm:px-3 py-1 rounded-full text-xs font-sans font-medium transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                      isActive
                        ? 'bg-[#2aff2a] text-[#000000] font-semibold shadow-[0_2px_12px_rgba(42,255,42,0.3)]'
                        : 'text-[#9ba7b5] hover:text-[#fffdf9] hover:bg-[#1f222b]'
                    }`}
                    title={l.label}
                    aria-label={`Switch language to ${l.label}`}
                  >
                    <span>{l.flag}</span>
                    <span className="hidden sm:inline">{l.nativeLabel}</span>
                    <span className="sm:hidden text-[10px] uppercase font-mono">{l.shortLabel}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Currency Changing Tool */}
          <div className="flex flex-col gap-1.5">
            <span className="text-[10px] font-mono tracking-[0.14em] uppercase text-[#888888] font-semibold flex items-center gap-1.5">
              <Coins className="w-3 h-3 text-[#2aff2a]" /> {t.currencyLabel}
            </span>
            <div className="flex items-center bg-[#14151a] border border-[#282b36] rounded-full p-0.5 sm:p-1 shadow-inner">
              {currencies.map((c) => {
                const isActive = currency === c.code;
                return (
                  <button
                    key={c.code}
                    onClick={() => setCurrency(c.code)}
                    className={`px-3 py-1 rounded-full text-xs font-sans font-medium transition-all duration-200 cursor-pointer flex items-center gap-1 ${
                      isActive
                        ? 'bg-[#fffdf9] text-[#101010] font-semibold shadow-[0_2px_12px_rgba(255,253,249,0.25)]'
                        : 'text-[#9ba7b5] hover:text-[#fffdf9] hover:bg-[#1f222b]'
                    }`}
                    title={c.name}
                    aria-label={`Switch currency to ${c.name}`}
                  >
                    <span className="font-semibold text-sm">{c.symbol}</span>
                    <span className="uppercase text-[11px] font-mono">{c.shortCode}</span>
                  </button>
                );
              })}
            </div>
          </div>

        </div>
      </div>

      {/* Main Grid: Left 5 Sliders, Right Result Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        
        {/* Left Column: 5 Sliders */}
        <div className="lg:col-span-6 space-y-7">
          
          {/* 1. Estimates per month */}
          <div className="space-y-2">
            <div className="flex items-baseline justify-between">
              <div>
                <label className="text-sm font-medium text-white block">
                  {t.estimatesPerMonth}
                </label>
                <span className="text-xs text-[#777777]">
                  {t.payPerEstimateSubtitle}
                </span>
              </div>
              <span className="text-xl sm:text-2xl font-sans font-medium text-white">
                {estimatesCount}
              </span>
            </div>

            <div className="relative pt-1">
              <input
                type="range"
                min={10}
                max={60}
                step={1}
                value={estimatesCount}
                onChange={(e) => setEstimatesCount(Number(e.target.value))}
                className="w-full h-1.5 bg-[#222222] rounded-lg appearance-none cursor-pointer accent-[#2aff2a]"
                style={{
                  background: `linear-gradient(to right, #2aff2a 0%, #2aff2a ${((estimatesCount - 10) / 50) * 100}%, #222222 ${((estimatesCount - 10) / 50) * 100}%, #222222 100%)`
                }}
              />
            </div>
          </div>

          {/* 2. Daily ad spend */}
          <div className="space-y-2">
            <div className="flex items-baseline justify-between">
              <div>
                <label className="text-sm font-medium text-white block">
                  {t.dailyAdSpend}
                </label>
                <span className="text-xs text-[#777777]">
                  {t.aboutPerMonth.replace('{amount}', formatCurrency(monthlyAdSpend))}
                </span>
              </div>
              <span className="text-xl sm:text-2xl font-sans font-medium text-white">
                {formatCurrency(dailyAdSpend)}
              </span>
            </div>

            <div className="relative pt-1">
              <input
                type="range"
                min={currentPreset.spendMin}
                max={currentPreset.spendMax}
                step={currentPreset.spendStep}
                value={dailyAdSpend}
                onChange={(e) => setDailyAdSpend(Number(e.target.value))}
                className="w-full h-1.5 bg-[#222222] rounded-lg appearance-none cursor-pointer accent-[#2aff2a]"
                style={{
                  background: `linear-gradient(to right, #2aff2a 0%, #2aff2a ${((dailyAdSpend - currentPreset.spendMin) / (currentPreset.spendMax - currentPreset.spendMin)) * 100}%, #222222 ${((dailyAdSpend - currentPreset.spendMin) / (currentPreset.spendMax - currentPreset.spendMin)) * 100}%, #222222 100%)`
                }}
              />
            </div>
          </div>

          {/* 3. Average job value */}
          <div className="space-y-2">
            <div className="flex items-baseline justify-between">
              <div>
                <label className="text-sm font-medium text-white block">
                  {t.averageJobValue}
                </label>
              </div>
              <span className="text-xl sm:text-2xl font-sans font-medium text-white">
                {formatCurrency(averageJobValue)}
              </span>
            </div>

            <div className="relative pt-1">
              <input
                type="range"
                min={currentPreset.jobMin}
                max={currentPreset.jobMax}
                step={currentPreset.jobStep}
                value={averageJobValue}
                onChange={(e) => setAverageJobValue(Number(e.target.value))}
                className="w-full h-1.5 bg-[#222222] rounded-lg appearance-none cursor-pointer accent-[#2aff2a]"
                style={{
                  background: `linear-gradient(to right, #2aff2a 0%, #2aff2a ${((averageJobValue - currentPreset.jobMin) / (currentPreset.jobMax - currentPreset.jobMin)) * 100}%, #222222 ${((averageJobValue - currentPreset.jobMin) / (currentPreset.jobMax - currentPreset.jobMin)) * 100}%, #222222 100%)`
                }}
              />
            </div>
          </div>

          {/* 4. Close rate */}
          <div className="space-y-2">
            <div className="flex items-baseline justify-between">
              <div>
                <label className="text-sm font-medium text-white block">
                  {t.closeRate}
                </label>
                <span className="text-xs text-[#777777]">
                  {t.closeRateSubtitle}
                </span>
              </div>
              <span className="text-xl sm:text-2xl font-sans font-medium text-white">
                {closeRate}%
              </span>
            </div>

            <div className="relative pt-1">
              <input
                type="range"
                min={10}
                max={100}
                step={1}
                value={closeRate}
                onChange={(e) => setCloseRate(Number(e.target.value))}
                className="w-full h-1.5 bg-[#222222] rounded-lg appearance-none cursor-pointer accent-[#2aff2a]"
                style={{
                  background: `linear-gradient(to right, #2aff2a 0%, #2aff2a ${((closeRate - 10) / 90) * 100}%, #222222 ${((closeRate - 10) / 90) * 100}%, #222222 100%)`
                }}
              />
            </div>
          </div>

          {/* 5. Job margin */}
          <div className="space-y-2">
            <div className="flex items-baseline justify-between">
              <div>
                <label className="text-sm font-medium text-white block">
                  {t.jobMargin}
                </label>
                <span className="text-xs text-[#777777]">
                  {t.jobMarginSubtitle}
                </span>
              </div>
              <span className="text-xl sm:text-2xl font-sans font-medium text-white">
                {jobMargin}%
              </span>
            </div>

            <div className="relative pt-1">
              <input
                type="range"
                min={10}
                max={80}
                step={1}
                value={jobMargin}
                onChange={(e) => setJobMargin(Number(e.target.value))}
                className="w-full h-1.5 bg-[#222222] rounded-lg appearance-none cursor-pointer accent-[#2aff2a]"
                style={{
                  background: `linear-gradient(to right, #2aff2a 0%, #2aff2a ${((jobMargin - 10) / 70) * 100}%, #222222 ${((jobMargin - 10) / 70) * 100}%, #222222 100%)`
                }}
              />
            </div>
          </div>

        </div>

        {/* Right Column: Result Card */}
        <div className="lg:col-span-6">
          <div className="bg-[#0f0f0f] border border-[#222222] rounded-[18px] p-6 sm:p-8 space-y-6 shadow-2xl relative overflow-hidden">
            
            {/* Currency & Language indicator badge in corner */}
            <div className="absolute top-4 right-4 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#16181f] border border-[#2b2e3b] text-[10px] font-mono text-[#a5b4c4]">
              <span>{PRESETS[currency].symbol} {currency.toUpperCase()}</span>
              <span>•</span>
              <span>{language.toUpperCase()}</span>
            </div>

            {/* Top Stat: Monthly Revenue */}
            <div className="space-y-1">
              <span className="text-[10px] font-mono tracking-[0.15em] uppercase text-[#777777] block font-semibold">
                {t.monthlyRevenue}
              </span>
              <div className="text-4xl sm:text-5xl font-sans font-normal text-white tracking-tight">
                {formatCurrency(monthlyRevenue)}
              </div>
              <p className="text-xs text-[#888888] pt-0.5">
                {t.dealsAt
                  .replace('{deals}', deals.toFixed(1))
                  .replace('{value}', formatCurrency(averageJobValue))}
              </p>
            </div>

            {/* Divider */}
            <div className="border-t border-[#1f1f1f]" />

            {/* Net Profit */}
            <div className="space-y-1">
              <span className="text-[10px] font-mono tracking-[0.15em] uppercase text-[#777777] block font-semibold">
                {t.netProfit}
              </span>
              <div className="text-3xl sm:text-4xl font-sans font-medium text-[#2aff2a] tracking-tight">
                {formatCurrency(netProfit)}
              </div>
            </div>

            {/* 3 Stats Bar: TOTAL MARKETING | COST PER DEAL | ROI */}
            <div className="grid grid-cols-3 gap-3 py-4 border-t border-b border-[#1f1f1f]">
              <div>
                <span className="text-[10px] font-mono tracking-[0.12em] uppercase text-[#777777] block mb-1">
                  {t.totalMarketing}
                </span>
                <span className="text-sm sm:text-base font-sans font-semibold text-white">
                  {formatCurrency(totalMarketing)}
                </span>
              </div>

              <div>
                <span className="text-[10px] font-mono tracking-[0.12em] uppercase text-[#777777] block mb-1">
                  {t.costPerDeal}
                </span>
                <span className="text-sm sm:text-base font-sans font-semibold text-white">
                  {formatCurrency(costPerDeal)}
                </span>
              </div>

              <div>
                <span className="text-[10px] font-mono tracking-[0.12em] uppercase text-[#777777] block mb-1">
                  {t.roi}
                </span>
                <span className="text-sm sm:text-base font-sans font-semibold text-white">
                  {roiMultiplier}x
                </span>
              </div>
            </div>

            {/* Multi-segmented Progress Bar */}
            <div className="space-y-2">
              <div className="h-2 w-full bg-[#1c1c1c] rounded-full overflow-hidden flex">
                <div 
                  style={{ width: `${netProfitPct}%` }}
                  className="bg-[#2aff2a] h-full"
                  title={t.legendNetProfit}
                />
                <div 
                  style={{ width: `${cogsPct}%` }}
                  className="bg-[#4b5563] h-full"
                  title={t.legendMaterialsLabor}
                />
                <div 
                  style={{ width: `${adSpendPct}%` }}
                  className="bg-[#d1d5db] h-full"
                  title={t.legendAdSpend}
                />
                <div 
                  style={{ width: `${feePct}%` }}
                  className="bg-[#ffffff] h-full"
                  title={t.legendEstFee}
                />
              </div>

              {/* Legend with colored dots */}
              <div className="flex flex-wrap items-center justify-between text-[11px] text-[#777777] pt-1">
                <span className="inline-flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#2aff2a]" /> {t.legendNetProfit}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#4b5563]" /> {t.legendMaterialsLabor}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#d1d5db]" /> {t.legendAdSpend}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#ffffff]" /> {t.legendEstFee}
                </span>
              </div>
            </div>

            {/* Lock In Button */}
            <button
              onClick={onOpenQuiz}
              className="w-full py-3.5 px-6 rounded-[8px] bg-white hover:bg-[#2aff2a] text-[#000000] font-sans font-semibold text-sm transition-colors cursor-pointer text-center shadow-lg hover:shadow-[0_4px_25px_rgba(42,255,42,0.3)] active:scale-[0.99]"
            >
              {t.lockInTerritory}
            </button>

            {/* Footnote */}
            <p className="text-center text-xs text-[#777777] pt-1">
              {t.needMoreThan60}{' '}
              <button
                onClick={onOpenQuiz}
                className="text-white hover:text-[#2aff2a] underline cursor-pointer transition-colors"
              >
                {t.checkAvailability}
              </button>
            </p>

          </div>
        </div>

      </div>
    </div>
  );
};
