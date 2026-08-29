"use client";

import { useMemo, useState } from "react";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

const currency = (value: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(Number.isFinite(value) ? value : 0);

const TERM_OPTIONS = [
  { label: "30 years", years: 30 },
  { label: "20 years", years: 20 },
  { label: "15 years", years: 15 },
];

const CHART_COLORS = ["#1f6f63", "#d2a046", "#7cc2b2", "#123f39"];

const MortgageCalculator = () => {
  const [homePrice, setHomePrice] = useState(450000);
  const [downPayment, setDownPayment] = useState(90000);
  const [termYears, setTermYears] = useState(30);
  const [interestRate, setInterestRate] = useState(6.5);
  const [propertyTaxRate, setPropertyTaxRate] = useState(1.1);
  const [annualInsurance, setAnnualInsurance] = useState(1400);
  const [monthlyHoa, setMonthlyHoa] = useState(0);

  const results = useMemo(() => {
    const loanAmount = Math.max(homePrice - downPayment, 0);
    const monthlyRate = interestRate / 100 / 12;
    const numPayments = termYears * 12;

    const monthlyPrincipalInterest =
      monthlyRate === 0
        ? loanAmount / numPayments
        : (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, numPayments)) /
          (Math.pow(1 + monthlyRate, numPayments) - 1);

    const monthlyTax = (homePrice * (propertyTaxRate / 100)) / 12;
    const monthlyInsurance = annualInsurance / 12;
    const totalMonthly =
      monthlyPrincipalInterest + monthlyTax + monthlyInsurance + monthlyHoa;

    const totalPaid = monthlyPrincipalInterest * numPayments;
    const totalInterest = Math.max(totalPaid - loanAmount, 0);
    const downPaymentPercent = homePrice > 0 ? (downPayment / homePrice) * 100 : 0;

    return {
      loanAmount,
      monthlyPrincipalInterest,
      monthlyTax,
      monthlyInsurance,
      monthlyHoa,
      totalMonthly,
      totalPaid,
      totalInterest,
      downPaymentPercent,
    };
  }, [
    homePrice,
    downPayment,
    termYears,
    interestRate,
    propertyTaxRate,
    annualInsurance,
    monthlyHoa,
  ]);

  const chartData = [
    { name: "Principal & Interest", value: results.monthlyPrincipalInterest },
    { name: "Property Tax", value: results.monthlyTax },
    { name: "Home Insurance", value: results.monthlyInsurance },
    { name: "HOA Fees", value: results.monthlyHoa },
  ].filter((slice) => slice.value > 0);

  return (
    <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
      {/* INPUTS */}
      <div className="rounded-2xl border border-brand-900/10 bg-white p-6 sm:p-8">
        <h3 className="font-bold text-brand-900">Loan Details</h3>

        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          <label className="flex flex-col gap-1.5 text-sm">
            <span className="font-medium text-brand-900/80">Home Price</span>
            <input
              type="number"
              min={0}
              step={1000}
              value={homePrice}
              onChange={(e) => setHomePrice(Number(e.target.value) || 0)}
              className="rounded-lg border border-brand-900/15 px-3.5 py-2.5 text-brand-900 outline-none transition focus:border-brand-600"
            />
          </label>

          <label className="flex flex-col gap-1.5 text-sm">
            <span className="font-medium text-brand-900/80">
              Down Payment{" "}
              <span className="text-brand-900/40">
                ({results.downPaymentPercent.toFixed(0)}%)
              </span>
            </span>
            <input
              type="number"
              min={0}
              step={1000}
              value={downPayment}
              onChange={(e) => setDownPayment(Number(e.target.value) || 0)}
              className="rounded-lg border border-brand-900/15 px-3.5 py-2.5 text-brand-900 outline-none transition focus:border-brand-600"
            />
          </label>

          <label className="flex flex-col gap-1.5 text-sm">
            <span className="font-medium text-brand-900/80">Loan Term</span>
            <select
              value={termYears}
              onChange={(e) => setTermYears(Number(e.target.value))}
              className="rounded-lg border border-brand-900/15 bg-white px-3.5 py-2.5 text-brand-900 outline-none transition focus:border-brand-600"
            >
              {TERM_OPTIONS.map((option) => (
                <option key={option.years} value={option.years}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>

          <label className="flex flex-col gap-1.5 text-sm">
            <span className="font-medium text-brand-900/80">
              Interest Rate (%)
            </span>
            <input
              type="number"
              min={0}
              step={0.01}
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value) || 0)}
              className="rounded-lg border border-brand-900/15 px-3.5 py-2.5 text-brand-900 outline-none transition focus:border-brand-600"
            />
          </label>

          <label className="flex flex-col gap-1.5 text-sm">
            <span className="font-medium text-brand-900/80">
              Property Tax (% / yr)
            </span>
            <input
              type="number"
              min={0}
              step={0.01}
              value={propertyTaxRate}
              onChange={(e) => setPropertyTaxRate(Number(e.target.value) || 0)}
              className="rounded-lg border border-brand-900/15 px-3.5 py-2.5 text-brand-900 outline-none transition focus:border-brand-600"
            />
          </label>

          <label className="flex flex-col gap-1.5 text-sm">
            <span className="font-medium text-brand-900/80">
              Home Insurance ($ / yr)
            </span>
            <input
              type="number"
              min={0}
              step={50}
              value={annualInsurance}
              onChange={(e) => setAnnualInsurance(Number(e.target.value) || 0)}
              className="rounded-lg border border-brand-900/15 px-3.5 py-2.5 text-brand-900 outline-none transition focus:border-brand-600"
            />
          </label>

          <label className="flex flex-col gap-1.5 text-sm sm:col-span-2">
            <span className="font-medium text-brand-900/80">
              HOA Fees ($ / month)
            </span>
            <input
              type="number"
              min={0}
              step={10}
              value={monthlyHoa}
              onChange={(e) => setMonthlyHoa(Number(e.target.value) || 0)}
              className="rounded-lg border border-brand-900/15 px-3.5 py-2.5 text-brand-900 outline-none transition focus:border-brand-600"
            />
          </label>
        </div>
      </div>

      {/* RESULTS */}
      <div className="rounded-2xl bg-brand-900 p-6 sm:p-8 text-white">
        <p className="text-xs font-semibold uppercase tracking-widest text-brand-100/60">
          Estimated Monthly Payment
        </p>
        <p className="mt-2 text-4xl sm:text-5xl font-bold text-gold-400">
          {currency(results.totalMonthly)}
          <span className="text-base font-medium text-brand-100/60"> /mo</span>
        </p>

        <div className="mt-6 flex flex-col items-center gap-6 sm:flex-row">
          <div className="h-44 w-44 shrink-0">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={chartData}
                  dataKey="value"
                  nameKey="name"
                  innerRadius={48}
                  outerRadius={72}
                  paddingAngle={2}
                  strokeWidth={0}
                >
                  {chartData.map((entry, index) => (
                    <Cell
                      key={entry.name}
                      fill={CHART_COLORS[index % CHART_COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip
                  formatter={(value) => currency(Number(value))}
                  contentStyle={{
                    borderRadius: 12,
                    border: "none",
                    fontSize: 13,
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <ul className="flex-1 space-y-2.5 text-sm">
            {chartData.map((slice, index) => (
              <li
                key={slice.name}
                className="flex items-center justify-between gap-3"
              >
                <span className="flex items-center gap-2 text-brand-100/80">
                  <span
                    className="h-2.5 w-2.5 shrink-0 rounded-full"
                    style={{
                      backgroundColor: CHART_COLORS[index % CHART_COLORS.length],
                    }}
                  />
                  {slice.name}
                </span>
                <span className="font-semibold text-white">
                  {currency(slice.value)}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-7 grid grid-cols-3 gap-4 border-t border-white/10 pt-6 text-center">
          <div>
            <p className="text-lg font-bold text-white">
              {currency(results.loanAmount)}
            </p>
            <p className="mt-1 text-[11px] uppercase tracking-wide text-brand-100/50">
              Loan Amount
            </p>
          </div>
          <div>
            <p className="text-lg font-bold text-white">
              {currency(results.totalInterest)}
            </p>
            <p className="mt-1 text-[11px] uppercase tracking-wide text-brand-100/50">
              Total Interest
            </p>
          </div>
          <div>
            <p className="text-lg font-bold text-white">
              {currency(results.totalPaid)}
            </p>
            <p className="mt-1 text-[11px] uppercase tracking-wide text-brand-100/50">
              Total Paid
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MortgageCalculator;
