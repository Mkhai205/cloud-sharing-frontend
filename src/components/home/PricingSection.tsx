import { PricingPlan } from "@/utils/type";
import { Check, Sparkles } from "lucide-react";

type PricingSectionProps = {
    pricingPlans: PricingPlan[];
};

export default function PricingSection({ pricingPlans }: PricingSectionProps) {
    return (
        <div id="pricing" className="py-20 bg-sky-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
                        Simple, Transactional Pricing
                    </h2>
                    <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-600">
                        Choose the plan that best fits your needs. No hidden fees, no surprises.
                    </p>
                </div>

                <div className="mt-16 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
                    {pricingPlans.map((plan, index) => (
                        <div
                            key={index}
                            className={`flex flex-col bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 ${
                                plan.highlighted
                                    ? "border-2 border-sky-500 transform scale-105"
                                    : "border border-slate-200"
                            }`}
                        >
                            <div
                                className={`px-6 py-8 ${
                                    plan.highlighted ? "bg-gradient-to-br from-sky-50 to-white" : ""
                                }`}
                            >
                                <div className="flex justify-between items-center">
                                    <h3 className="text-2xl font-bold text-slate-900">
                                        {plan.name}
                                    </h3>
                                    {plan.highlighted && (
                                        <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-sky-100/80 text-sky-600">
                                            <Sparkles size={18} />
                                            <span>Most Popular</span>
                                        </div>
                                    )}
                                </div>

                                <p className="mt-4 text-sm text-slate-600">{plan.description}</p>
                                <p className="mt-8">
                                    <span className="text-2xl font-extrabold text-slate-950">
                                        {plan.price === 0 ? "Free plan" : `$${plan.price} / year`}
                                    </span>
                                </p>
                            </div>
                            <div className="flex flex-1 flex-col justify-between px-6 pt-6 pb-8 bg-slate-50 space-y-6">
                                <ul className="space-y-4">
                                    {plan.features.map((feature, featureIndex) => (
                                        <li key={featureIndex} className="flex items-start">
                                            <div className="flex-shrink-0">
                                                <Check className="h5 w-5 text-sky-500" />
                                            </div>
                                            <p className="ml-3 text-base text-slate-700">
                                                {feature}
                                            </p>
                                        </li>
                                    ))}
                                </ul>
                                <div className="rounded-md shadow">
                                    <button
                                        className={`w-full flex items-center justify-center px-5 py-3 test-base font-medium rounded-md cursor-pointer ${
                                            plan.highlighted
                                                ? "text-white bg-sky-500 hover:bg-sky-600 border-transparent"
                                                : "border-[1.5px] text-sky-600 bg-white hover:bg-slate-100 border-sky-500"
                                        } transition-colors duration-300`}
                                    >
                                        {plan.price === 0 ? "Get Started" : "Choose Plan"}
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
