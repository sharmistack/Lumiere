import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


const HeroSection = () => {
    return (
        <section className="wrapper min-h-[80vh] flex items-center justify-center mb-10 md:mb-16">
            <div className="library-hero-card w-full">
                <div className="library-hero-content flex items-center justify-between gap-10 w-full">

                    {/* Left Part */}
                    <div className="library-hero-text flex-1">
                        <h1 className="library-hero-title text-4xl font-serif font-bold">
                            Your Library
                        </h1>

                        <p className="library-hero-description mt-3 text-gray-600">
                            Convert your books into interactive AI conversations. <br className="hidden md:block" />
                            Listen, learn, and discuss your favorite reads.
                        </p>

                        <Link
                            href="/books/new"
                            className="library-cta-primary mt-6 flex items-center justify-center w-fit px-4 py-2 rounded-md bg-white shadow-sm hover:shadow-md transition"
                        >
                            <span className="text-3xl font-light mr-2">+</span>
                            <span className="text-[#212a3b]">Add new book</span>
                        </Link>
                    </div>

                    {/* Center Part - Desktop */}
                    <div className="library-hero-illustration-desktop hidden md:block flex-1 flex justify-center">
                        <Image
                            src="/assets/hero-illustration.png"
                            alt="Vintage books and a globe"
                            width={400}
                            height={400}
                            className="object-contain"
                        />
                    </div>

                    {/* Right Part */}
                    <div className="library-steps-card min-w-[260px] max-w-[280px] z-10 shadow-soft-md bg-white p-4 rounded-xl flex-1">
                        <ul className="space-y-6">

                            <li className="flex items-start gap-3">
                                <div className="w-10 h-10 rounded-full border flex items-center justify-center font-medium">1</div>
                                <div>
                                    <h3 className="font-bold text-lg">Upload PDF</h3>
                                    <p className="text-gray-500 text-sm">Add your book file</p>
                                </div>
                            </li>

                            <li className="flex items-start gap-3">
                                <div className="w-10 h-10 rounded-full border flex items-center justify-center font-medium">2</div>
                                <div>
                                    <h3 className="font-bold text-lg">AI Processing</h3>
                                    <p className="text-gray-500 text-sm">We analyze the content</p>
                                </div>
                            </li>

                            <li className="flex items-start gap-3">
                                <div className="w-10 h-10 rounded-full border flex items-center justify-center font-medium">3</div>
                                <div>
                                    <h3 className="font-bold text-lg">Voice Chat</h3>
                                    <p className="text-gray-500 text-sm">Discuss with AI</p>
                                </div>
                            </li>

                        </ul>
                    </div >

                </div>
            </div>

        </section>
    )
}

export default HeroSection