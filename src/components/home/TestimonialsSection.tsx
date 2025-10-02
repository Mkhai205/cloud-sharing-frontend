"use client";

import { Testimonial } from "@/utils/type";
import { Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import LogoLoop, { LogoItem } from "../LogoLoop";

type TestimonialsSectionProps = {
    testimonials: Testimonial[];
};

export default function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
    const renderStars = (rating: number) => {
        return Array.from({ length: 5 }, (_, index) => (
            <Star
                key={index}
                className={`${
                    index < rating ? "text-yellow-400" : "text-gray-300"
                } h-4 w-4 fill-current`}
            />
        ));
    };

    const renderTestimonial = (): LogoItem[] => {
        return testimonials.map((testimonial, index) => {
            return {
                node: (
                    <div
                        key={index}
                        className="w-96 bg-white rounded-xl shadow-md overflow-hidden transform transition duration-500 hover:scale-105"
                    >
                        <div className="px-6 py-8">
                            <div className="flex items-center">
                                <div className="flex-shrink-0 h-12 w-12">
                                    <Avatar className="h-12 w-12">
                                        <AvatarImage
                                            src={testimonial.avatarUrl}
                                            alt={testimonial.name}
                                            className="object-cover"
                                        />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-lg font-bold text-slate-900">
                                        {testimonial.name}
                                    </h4>
                                    <p className="text-sm text-slate-600">
                                        {testimonial.role}, {testimonial.company}
                                    </p>
                                </div>
                            </div>
                            <div className="mt-4 flex items-center">
                                {renderStars(testimonial.rating)}
                            </div>
                            <blockquote className="mt-4">
                                <p className="text-slate-900 italic text-base">
                                    &ldquo;{testimonial.quote}&rdquo;
                                </p>
                            </blockquote>
                        </div>
                    </div>
                ),
            };
        });
    };

    return (
        <div id="testimonials" className="py-20 bg-green-50 overflow-hidden">
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative">
                    <div className="text-center">
                        <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
                            Trusted by Professionals
                        </h2>
                        <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-600">
                            See what our users are saying about Cloud Sharing.
                        </p>
                    </div>
                    <div className="mt-16">
                        <LogoLoop
                            logos={renderTestimonial()}
                            speed={30}
                            direction="left"
                            gap={40}
                            logoHeight={130}
                            pauseOnHover
                            scaleOnHover
                            fadeOut
                            fadeOutColor="#f0fcf4"
                            ariaLabel="Testimonials Carousel"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
