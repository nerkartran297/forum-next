import React from "react";
import {
    MessageCircle,
    Users,
    TrendingUp,
    FileText,
    Video,
} from "lucide-react";
import Link from "next/link";

const LandingPage = () => {
    const features = [
        {
            icon: <MessageCircle className="h-6 w-6" />,
            title: "Engaging Discussions",
            description:
                "Join vibrant conversations on topics that matter to you",
        },
        {
            icon: <Users className="h-6 w-6" />,
            title: "Community-Driven",
            description:
                "Connect with like-minded individuals in a supportive environment",
        },
        {
            icon: <TrendingUp className="h-6 w-6" />,
            title: "Trending Topics",
            description:
                "Stay updated with the latest discussions and hot topics",
        },
    ];

    return (
        <div className="min-h-screen background-light900_dark200">
            {/* Hero Section */}
            <div className="relative overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
                        <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 xl:mt-28">
                            <div className="text-center">
                                <h1 className="text-4xl font-extrabold text-dark100_light900 sm:text-5xl md:text-6xl">
                                    <span className="block">Welcome to</span>
                                    <span className="block primary-text-gradient">
                                        DevOverflow
                                    </span>
                                </h1>
                                <p className="mt-3 text-base text-dark200_light800 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl">
                                    Join our community of developers, share
                                    knowledge, and grow together. Ask questions,
                                    find answers, and connect with peers from
                                    around the world.
                                </p>
                                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center">
                                    <div className="rounded-md shadow">
                                        <button className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900 rounded-md hover:opacity-90">
                                            Get Started
                                        </button>
                                    </div>
                                    <div className="mt-3 sm:mt-0 sm:ml-3">
                                        <Link href="/home">
                                            <button className="light-border-2 btn min-h-[46px] px-4 py-3 rounded-md text-dark100_light900 hover:bg-light-700 dark:hover:bg-dark-300">
                                                Browse Questions
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
            </div>

            <div className="pb-24 pt-0">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-extrabold text-dark100_light900">
                            Development Tools Suite
                        </h2>
                        <p className="mt-4 text-lg text-dark200_light800">
                            Everything you need to code, collaborate, and create
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
                        {/* DevOverflow Card */}
                        <div className="group cursor-pointer">
                            <div className="relative h-96 background-light900_dark200 light-border overflow-hidden">
                                <div className="relative h-full p-8 flex flex-col justify-between background-light800_dark300">
                                    <div>
                                        <div className="w-16 h-16 primary-gradient rounded-lg flex items-center justify-center mb-6">
                                            <MessageCircle className="h-8 w-8 text-light-900" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-dark100_light900 mb-4">
                                            DevOverflow
                                        </h3>
                                        <p className="text-dark400_light700 mb-6">
                                            Join our thriving community of
                                            developers. Ask questions, share
                                            knowledge, and grow together.
                                        </p>
                                    </div>

                                    <button className="w-full py-4 primary-gradient text-light-900 font-semibold rounded-lg transform transition-transform duration-200 group-hover:scale-105">
                                        Browse Questions
                                    </button>
                                </div>
                                {/* Decorative geometric shapes */}
                                <div className="absolute top-0 right-0 w-32 h-32 primary-gradient transform rotate-45 translate-x-16 -translate-y-16"></div>
                                <div className="absolute bottom-0 left-0 w-24 h-24 primary-gradient opacity-50 transform -rotate-45 -translate-x-12 translate-y-12"></div>
                            </div>
                        </div>

                        {/* YOOM Card */}
                        <div className="group cursor-pointer">
                            <div className="relative h-96 background-light900_dark200 light-border overflow-hidden">
                                <div className="relative h-full p-8 flex flex-col justify-between background-light800_dark300">
                                    <div>
                                        <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center mb-6">
                                            <Video className="h-8 w-8 text-light-900" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-dark100_light900 mb-4">
                                            YOOM
                                        </h3>
                                        <p className="text-dark400_light700 mb-6">
                                            Experience seamless online meetings
                                            with crystal-clear video and
                                            powerful collaboration tools.
                                        </p>
                                    </div>
                                    <Link href="https://gium-app-clone.vercel.app/">
                                        <button className="w-full py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-light-900 font-semibold rounded-lg transform transition-transform duration-200 group-hover:scale-105">
                                            Launch YOOM
                                        </button>
                                    </Link>
                                </div>
                                {/* Decorative geometric shapes */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-r from-purple-500 to-blue-500 transform rotate-45 translate-x-16 -translate-y-16"></div>
                                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-r from-purple-500 to-blue-500 opacity-50 transform -rotate-45 -translate-x-12 translate-y-12"></div>
                            </div>
                        </div>

                        {/* LiveDocs Card */}
                        <div className="group cursor-pointer">
                            <div className="relative h-96 background-light900_dark200 light-border overflow-hidden">
                                <div className="relative h-full p-8 flex flex-col justify-between background-light800_dark300">
                                    <div>
                                        <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center mb-6">
                                            <FileText className="h-8 w-8 text-light-900" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-dark100_light900 mb-4">
                                            LiveDocs
                                        </h3>
                                        <p className="text-dark400_light700 mb-6">
                                            Create, edit, and collaborate on
                                            documents in real-time with your
                                            team.
                                        </p>
                                    </div>
                                    <Link href="https://da1-live-docs.vercel.app/">
                                        <button className="w-full py-4 bg-gradient-to-r from-green-500 to-teal-500 text-light-900 font-semibold rounded-lg transform transition-transform duration-200 group-hover:scale-105">
                                            Open LiveDocs
                                        </button>
                                    </Link>
                                </div>

                                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-r from-green-500 to-teal-500 transform rotate-45 translate-x-16 -translate-y-16"></div>
                                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-r from-green-500 to-teal-500 opacity-50 transform -rotate-45 -translate-x-12 translate-y-12"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className="py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-extrabold text-dark100_light900">
                            Why Join Our Community?
                        </h2>
                    </div>

                    <div className="mt-10">
                        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
                            {features.map((feature, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col items-center p-6 background-light900_dark200 rounded-lg light-border hover:shadow-md transition-shadow"
                                >
                                    <div className="flex items-center justify-center h-12 w-12 rounded-md primary-gradient text-light-900">
                                        {feature.icon}
                                    </div>
                                    <h3 className="mt-4 text-lg font-medium text-dark200_light900">
                                        {feature.title}
                                    </h3>
                                    <p className="mt-2 text-base text-dark400_light700 text-center">
                                        {feature.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Stats Section */}
            <div className="background-light900_dark200 py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 primary-gradient rounded-lg p-8">
                        <div className="text-center text-light-900">
                            <div className="text-4xl font-bold">10K+</div>
                            <div className="mt-2">Active Users</div>
                        </div>
                        <div className="text-center text-light-900">
                            <div className="text-4xl font-bold">50K+</div>
                            <div className="mt-2">Questions Asked</div>
                        </div>
                        <div className="text-center text-light-900">
                            <div className="text-4xl font-bold">100K+</div>
                            <div className="mt-2">Solutions Shared</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
