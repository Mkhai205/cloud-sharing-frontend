import { Feature, PricingPlan, Testimonial } from "@/utils/type";

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

export const pricingPlans: PricingPlan[] = [
    {
        name: "Basic",
        price: 0,
        description: "Ideal for individuals getting started with file sharing.",
        features: ["5 GB Storage", "Basic File Sharing", "Standard Support"],
    },
    {
        name: "Pro",
        highlighted: true,
        price: 9.99,
        description: "Perfect for professionals who need more features and storage.",
        features: [
            "100 GB Storage",
            "Advanced File Sharing",
            "Priority Support",
            "File Versioning",
        ],
    },
    {
        name: "Enterprise",
        price: 29.99,
        description: "Best for businesses requiring advanced features and priority support.",
        features: [
            "1 TB Storage",
            "All Pro Features",
            "Dedicated Account Manager",
            "24/7 Premium Support",
        ],
    },
];

export const testimonials: Testimonial[] = [
    {
        name: "Alice Johnson",
        role: "Product Manager",
        company: "Tech Solutions",
        avatarUrl: "./avatar1.png",
        rating: 5,
        quote: "CloudSharing has transformed the way our team collaborates. The ease of use and security features are top-notch!",
    },
    {
        name: "Bob Smith",
        role: "Freelancer",
        company: "Self-Employed",
        avatarUrl: "./avatar2.jpg",
        rating: 4,
        quote: "As a freelancer, I need a reliable way to share files with clients. CloudSharing makes it effortless and professional.",
    },
    {
        name: "Catherine Lee",
        role: "CTO",
        company: "Innovatech",
        avatarUrl: "./avatar3.jpg",
        rating: 5,
        quote: "We switched to CloudSharing for our enterprise needs, and the dedicated support and advanced features have been invaluable.",
    },
    {
        name: "David Kim",
        role: "Designer",
        company: "Creative Minds",
        avatarUrl: "./avatar4.jpg",
        rating: 5,
        quote: "The intuitive interface and robust file management tools have made my workflow so much smoother. Highly recommend!",
    },
    {
        name: "Eva Martinez",
        role: "Marketing Specialist",
        company: "Bright Future",
        avatarUrl: "./avatar5.jpg",
        rating: 4,
        quote: "CloudSharing's flexible pricing plans allowed us to find the perfect fit for our growing team. The features are exactly what we needed.",
    },
    {
        name: "Frank Wilson",
        role: "Developer",
        company: "CodeCrafters",
        avatarUrl: "./avatar6.jpg",
        rating: 5,
        quote: "I love how easy it is to upload and share files with CloudSharing. The security features give me peace of mind knowing my data is safe.",
    },
    {
        name: "Grace Chen",
        role: "Entrepreneur",
        company: "Startup Hub",
        avatarUrl: "./avatar7.jpg",
        rating: 5,
        quote: "CloudSharing has been a game-changer for my startup. The ability to manage and share files seamlessly has boosted our productivity.",
    },
    {
        name: "Henry Thompson",
        role: "Consultant",
        company: "Business Insights",
        avatarUrl: "./avatar8.jpg",
        rating: 4,
        quote: "The customer support team at CloudSharing is fantastic. They helped us set up our account and answered all our questions promptly.",
    },
];
