import { Color, IconName } from "@/utils/type";

export type Feature = {
    iconName: IconName;
    iconColor: Color;
    title: string;
    description: string;
};

export const features: Feature[] = [
    {
        iconName: "ArrowUpCircle",
        iconColor: "text-sky-500",
        title: "Easy File Upload",
        description: "Quickly upload files from your device or cloud storage services.",
    },
    {
        iconName: "Shield",
        iconColor: "text-green-500",
        title: "Secure Storage",
        description: "Your files are encrypted and stored securely in the cloud.",
    },
    {
        iconName: "Share2",
        iconColor: "text-blue-500",
        title: "Simple Sharing",
        description: "Share files with friends, family, or colleagues with just a few clicks.",
    },
    {
        iconName: "CreditCard",
        iconColor: "text-lime-500",
        title: "Flexible CreditCard",
        description: "Pay only for what you use with our flexible pricing plans.",
    },
    {
        iconName: "Clock",
        iconColor: "text-orange-500",
        title: "Transaction History",
        description: "Keep track of all your file sharing activities in one place.",
    },
    {
        iconName: "FileText",
        iconColor: "text-purple-500",
        title: "File Management",
        description: "Organize, rename, and delete files easily from your dashboard.",
    },
];
