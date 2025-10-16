export type Color =
    | "text-green-500"
    | "text-blue-500"
    | "text-sky-500"
    | "text-purple-500"
    | "text-red-500"
    | "text-yellow-500"
    | "text-orange-500"
    | "text-indigo-500"
    | "text-lime-500"
    | "text-cyan-500"
    | "text-pink-500"
    | "text-rose-500"
    | "text-fuchsia-500"
    | "text-amber-500";

export type IconName = "ArrowUpCircle" | "Shield" | "Share2" | "CreditCard" | "Clock" | "FileText";

export type Feature = {
    iconName: IconName;
    iconColor: Color;
    title: string;
    description: string;
};

export type PricingPlan = {
    name: string;
    highlighted?: boolean;
    description: string;
    price: number;
    features: string[];
};

export type Testimonial = {
    name: string;
    role: string;
    company: string;
    avatarUrl: string;
    quote: string;
    rating: 1 | 2 | 3 | 4 | 5;
};
