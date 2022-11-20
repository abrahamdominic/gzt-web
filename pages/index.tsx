import React from "react";
import Link from "next/link";
import Image from "next/image";

import { ChevronRightIcon, Footer, TopNavigationBar } from "../components";

import type { NextPage } from "next";

const Home: NextPage = () => {
    return (
        <>
            <TopNavigationBar />

            <main>
                <section className="flex flex-col items-center min-h-screen w-screen bg-[url('/assets/images/home-hero-bg.svg')] bg-cover bg-center bg-no-repeat p-5">
                    <div className="flex flex-col md:flex-row items-center w-full max-w-7xl mt-10 md:py-10 gap-10">
                        <div className="w-full md:w-1/2">
                            <h1 className="text-neutral-900 text-4xl md:text-6xl leading-10 capitalize font-bold my-5" data-aos="fade-up">
                                Africa's largest network for <span className="text-primary">Gen-Zs</span> in tech.
                            </h1>
                            <Link href="https://linktr.ee/genztechies" target="_blank" className="btn btn-wide bg-primary hover:bg-primary border-none text-white animate-bounce">
                                Join the community
                            </Link>
                        </div>
                        <div className="justify-center items-center grid grid-cols-3 gap-5">
                            <div className="-mb-28 space-y-3">
                                <Image alt="community member" src={require("../public/assets/images/home-hero-group-images/img1.png")} placeholder="blur" width={170} height={245} data-aos="fade-right" />
                                <Image alt="community member" src={require("../public/assets/images/home-hero-group-images/img2.png")} placeholder="blur" width={170} height={245} data-aos="fade-up" data-aos-delay="300" />
                            </div>
                            <div className="space-y-3">
                                <Image alt="community member" src={require("../public/assets/images/home-hero-group-images/img3.png")} placeholder="blur" width={170} height={245} data-aos="fade-down" />
                                <Image alt="community member" src={require("../public/assets/images/home-hero-group-images/img4.png")} placeholder="blur" width={170} height={245} data-aos="fade-up" data-aos-delay="300" />
                            </div>
                            <div className="-mb-28 space-y-3">
                                <Image alt="community member" src={require("../public/assets/images/home-hero-group-images/img5.png")} placeholder="blur" width={170} height={245} data-aos="zoom-in" />
                                <Image alt="community member" src={require("../public/assets/images/home-hero-group-images/img6.png")} placeholder="blur" width={170} height={245} data-aos="fade-up" data-aos-delay="300" />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="flex flex-col items-center bg-white border-y-4 border-dashed p-5">
                    <div className="flex flex-col md:flex-row w-full max-w-4xl md:py-10 gap-10">
                        <img src="/assets/images/left-quote.png" alt="left-quote" className="w-14 md:w-24 aspect-square self-start" data-aos="fade-right" />
                        <div className="w-full">
                            <h3 className="text-primary text-lg uppercase font-bold my-2">We Are GenZtechies</h3>
                            <p className="text-neutral-900 text-3xl font-light my-2">Where Gen Z developers, founders, designers, and techies across Africa connect, learn, and discover life-changing opportunites.</p>
                        </div>
                        <img src="/assets/images/right-quote.png" alt="right-quote" className="w-14 md:w-24 aspect-square self-end" data-aos="zoom-in" />
                    </div>
                </section>

                <section className="flex flex-col items-center bg-primary p-5">
                    <div className="w-full max-w-6xl py-10">
                        <h2 className="text-center text-white text-4xl md:text-5xl font-bold my-2">Spread the super power with us</h2>
                        <p className="text-center text-white/80 text-lg font-light my-2">Aside from building and launching things, we take pride in bridging the gaps in the tech in Africa through workshops, hackathons, events, mentorship programs, and more…</p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pt-10 md:pt-20">
                            <div className="space-y-4">
                                <img src="/assets/images/membership-icon.svg" alt="membership-icon" className="h-24 aspect-square" data-aos="zoom-in" />

                                <h3 className="text-white text-3xl font-medium my-2" data-aos="fade-right">
                                    Membership
                                </h3>

                                <p className="text-white/80 text-lg font-thin">Collaborate with young makers, developers, innovators, hackers, and founders now.</p>

                                <Link href="https://linktr.ee/genztechies" target="_blank" className="btn btn-outline bg-transparent hover:bg-transparent border-white hover:border-white text-white gap-3" data-aos="zoom-in">
                                    Join Us
                                    <span className="bg-primary-light rounded-full text-white bg-opacity-40 p-1">
                                        <ChevronRightIcon />
                                    </span>
                                </Link>
                            </div>
                            <div className="space-y-4">
                                <img src="/assets/images/partnership-icon.svg" alt="partnership-icon" className="h-24 aspect-square" data-aos="zoom-in" />

                                <h3 className="text-white text-3xl font-medium my-2" data-aos="fade-right">
                                    Partner With Us
                                </h3>

                                <p className="text-white/80 text-lg font-thin">Get involved in some of our initiatives either as a sponsor or a partner.</p>

                                <Link href="/contact" className="btn btn-outline bg-transparent hover:bg-transparent border-white hover:border-white text-white gap-3" data-aos="zoom-in">
                                    Partner
                                    <span className="bg-primary-light rounded-full text-white bg-opacity-40 p-1">
                                        <ChevronRightIcon />
                                    </span>
                                </Link>
                            </div>
                            <div className="space-y-4">
                                <img src="/assets/images/support-icon.svg" alt="support-icon" className="h-24 aspect-square" data-aos="zoom-in" />

                                <h3 className="text-white text-3xl font-medium my-2" data-aos="fade-right">
                                    Support Us
                                </h3>

                                <p className="text-white/80 text-lg font-thin">Help us further our cause with a tax-deductible donation, every $1 goes a long way.</p>

                                <Link href="/donate" className="btn btn-outline bg-transparent hover:bg-transparent border-white hover:border-white text-white gap-3" data-aos="zoom-in">
                                    Support
                                    <span className="bg-primary-light rounded-full text-white bg-opacity-40 p-1">
                                        <ChevronRightIcon />
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="flex flex-col items-center bg-white p-5">
                    <div className="w-full max-w-7xl py-10">
                        <h2 className="text-center text-neutral-900 text-4xl md:text-5xl font-bold my-2">Some of our amazing supporters</h2>
                        <p className="text-center text-neutral-900 text-lg font-light my-2">Amazing companies that partnered, sponsored & supported us</p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-10">
                            {["vercel", "paystack", "lazerpay", "filecoin", "sail", "spheron", "technext", "i4g", "klas", "zeddpay", "techsteroid", "gameverse", "zuri", "abcd-community"].map((supporter) => (
                                <img key={supporter} src={`/assets/images/supporters/${supporter}.svg`} className="m-auto h-44 aspect-video" alt="company-logo" data-aos="fade-up" />
                            ))}
                        </div>
                    </div>
                </section>

                <section className="flex flex-col items-center bg-slate-100 p-5">
                    <div className="w-full max-w-7xl py-10">
                        <p className="text-primary text-lg uppercase font-bold my-2">Our Initiatives</p>
                        <h2 className="text-neutral-900 text-3xl md:text-5xl font-bold my-2">Find out what GenZtechies are up to</h2>

                        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 py-10">
                            <div className="md:col-span-3 bg-black p-10" data-aos="fade-down-right"></div>
                            <div className="md:col-span-2 bg-black p-10" data-aos="fade-down-zoom-in"></div>
                        </div>

                        <Link href="/initiatives" className="btn btn-wide bg-primary hover:bg-primary border-none text-white gap-3">
                            View all initiatives
                            <span className="bg-primary-light rounded-full text-white bg-opacity-40 p-1">
                                <ChevronRightIcon />
                            </span>
                        </Link>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
};

export default Home;
