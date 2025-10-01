export default function CTASection() {
    return (
        <div className="bg-amber-50 min-h-96 flex items-center">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:flex-1 lg:items-center lg:justify-around">
                <h2 className="text-center text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
                    <span className="block">Ready to get started?</span>
                    <span className="block text-amber-500">Create your account tody.</span>
                </h2>
                <div className="mt-8 flex justify-center lg:mt-0 flex-shrink-0">
                    <div className="inline-flex rounded-md shadow">
                        <button className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-amber-500 bg-white hover:text-slate-50 hover:bg-amber-500 hover:scale-105 transition-all duration-200 cursor-pointer">
                            Sign up for free
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
