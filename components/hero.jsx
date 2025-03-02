"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image1 from "@/public/images/1.webp";
import Image2 from "@/public/images/2.webp";
import Image3 from "@/public/images/3.webp";
import Image4 from "@/public/images/4.webp";
import Image5 from "@/public/images/5.webp";
import Image6 from "@/public/images/6.webp";
import Image7 from "@/public/images/7.webp";
import Image8 from "@/public/images/8.webp";
import Image9 from "@/public/images/9.webp";
import ImageBack from "@/public/images/back1.png";
import ImageBack2 from "@/public/images/back2.webp";

export default function Hero() {
  const heroRef = useRef(null);

  // Define specific initial positions for each card
  const cardInitialPositions = [
    { x: -300, y: -700 },
    { x: "30%", y: "-100%" },
    { x: "90%", y: "-280%" },
    { x: "-10%", y: "-200%" },
    { x: "30%", y: "-60%" },
    { x: "60%", y: "-240%" },
    { x: "-40%", y: "20%" },
    { x: "30%", y: "20%" },
    { x: "80%", y: "20%" },
  ];

  // Define custom initial rotations (in degrees) for each card
  const cardInitialRotations = [8, 8, -10, -8, 10, -10, 10, -15, 8];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Use gsap.matchMedia to define breakpoints
    const mm = gsap.matchMedia();

    // Desktop animations (min-width: 1268px and max-width: 1468px)
    mm.add("(min-width: 1468px) and (max-width: 1668px)", () => {
      const ctx = gsap.context(() => {
        // Fade in the hero content
        gsap.from(".hero-content > *", {
          opacity: 1,
          y: 20,
          duration: 1,
          stagger: 0.1,
          ease: "power2.out",
        });

        // Animate individual cards into place
        const cards = gsap.utils.toArray(".card-image");
        cards.forEach((card, i) => {
          const initPos = cardInitialPositions[i] || {
            x: gsap.utils.random(-200, 200),
            y: gsap.utils.random(-200, 200),
          };
          const initRotation = cardInitialRotations[i] ?? 0;

          // For images 5, 7, 8, and 9 (indices 4, 6, 7, 8), set initial opacity to 0
          const initialOpacity =
            i === 4 || i === 6 || i === 7 || i === 8 ? 0 : 1;

          // Set each card's initial properties
          gsap.set(card, {
            x: initPos.x,
            y: initPos.y,
            rotation: initRotation,
            opacity: initialOpacity,
          });

          // Animate cards with desktop-specific scroll trigger settings
          gsap.to(card, {
            x: 0,
            y: 0,
            rotation: 0,
            opacity: 1,
            duration: 1,
            ease: "power2.out",
            delay: i * 0.1,
            scrollTrigger: {
              trigger: heroRef.current,
              start: "top+=400 top",
              end: "bottom-=100 60%",
              scrub: 1,
              // markers: true,
            },
          });
        });

        // Animate the parent grid container
        gsap.to(".cards-grid", {
          scale: 0.8,
          duration: 5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top+=650 top",
            end: "+=1200",
            scrub: 1,
            // markers: true,
            pin: true,
          },
        });

        // Animate the background image
        gsap.fromTo(
          ".back-image",
          { scale: 0.3, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ".back-image",
              start: "top 85%",
              end: "bottom 40%",
              scrub: 1,
              // markers: true,
            },
          }
        );

        // Animate the background image
        gsap.fromTo(
          ".back-image2",
          { scale: 1.5, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ".back-image",
              start: "top+=300 top",
              end: "bottom+=500 top",
              scrub: 1,
              // markers: true,
            },
          }
        );
      }, heroRef);

      return () => ctx.revert();
    });

    // Desktop animations (min-width: 1268px and max-width: 1468px)
    mm.add("(min-width: 1268px) and (max-width: 1468px)", () => {
      const ctx = gsap.context(() => {
        // Fade in the hero content
        gsap.from(".hero-content > *", {
          opacity: 1,
          y: 20,
          duration: 1,
          stagger: 0.1,
          ease: "power2.out",
        });

        // Animate individual cards into place
        const cards = gsap.utils.toArray(".card-image");
        cards.forEach((card, i) => {
          const initPos = cardInitialPositions[i] || {
            x: gsap.utils.random(-200, 200),
            y: gsap.utils.random(-200, 200),
          };
          const initRotation = cardInitialRotations[i] ?? 0;

          // For images 5, 7, 8, and 9 (indices 4, 6, 7, 8), set initial opacity to 0
          const initialOpacity =
            i === 4 || i === 6 || i === 7 || i === 8 ? 0 : 1;

          // Set each card's initial properties
          gsap.set(card, {
            x: initPos.x,
            y: initPos.y,
            rotation: initRotation,
            opacity: initialOpacity,
          });

          // Animate cards with desktop-specific scroll trigger settings
          gsap.to(card, {
            x: 0,
            y: 0,
            rotation: 0,
            opacity: 1,
            duration: 1,
            ease: "power2.out",
            delay: i * 0.1,
            scrollTrigger: {
              trigger: heroRef.current,
              start: "top+=400 top",
              end: "bottom-=100 60%",
              scrub: 1,
              // markers: true,
            },
          });
        });

        // Animate the parent grid container
        gsap.to(".cards-grid", {
          scale: 0.75,
          duration: 5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top+=750 top",
            end: "+=1200",
            scrub: 1,
            markers: true,
            pin: true,
          },
        });

        // Animate the background image
        gsap.fromTo(
          ".back-image",
          { scale: 0.3, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ".back-image",
              start: "top 50%",
              end: "bottom 40%",
              scrub: 1,
              // markers: true,
            },
          }
        );

        // Animate the background image
        gsap.fromTo(
          ".back-image2",
          { scale: 1.5, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ".back-image",
              start: "top+=300 20%",
              end: "bottom+=500 top",
              scrub: 1,
              // markers: true,
            },
          }
        );
      }, heroRef);

      return () => ctx.revert();
    });

    // Mobile animations (max-width: 767px)
    mm.add("(max-width: 767px)", () => {
      const ctx = gsap.context(() => {
        // Fade in the hero content (can be the same or tweaked)
        gsap.from(".hero-content > *", {
          opacity: 1,
          y: 20,
          duration: 1,
          stagger: 0.1,
          ease: "power2.out",
        });

        const cards = gsap.utils.toArray(".card-image");
        cards.forEach((card, i) => {
          const initPos = cardInitialPositions[i] || {
            x: gsap.utils.random(-200, 200),
            y: gsap.utils.random(-200, 200),
          };
          const initRotation = cardInitialRotations[i] ?? 0;

          const initialOpacity =
            i === 4 || i === 6 || i === 7 || i === 8 ? 0 : 1;

          gsap.set(card, {
            x: initPos.x,
            y: initPos.y,
            rotation: initRotation,
            opacity: initialOpacity,
          });

          // Adjust scroll trigger start/end values for mobile
          gsap.to(card, {
            x: 0,
            y: 0,
            rotation: 0,
            opacity: 1,
            duration: 1,
            ease: "power2.out",
            delay: i * 0.1,
            scrollTrigger: {
              trigger: heroRef.current,
              start: "top+=200 top", // different for mobile
              end: "bottom-=50 70%",
              scrub: 1,
              markers: true,
            },
          });
        });

        // Animate the cards grid container for mobile
        gsap.to(".cards-grid", {
          scale: 0.7,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top+=200 top",
            end: "bottom-=100 90%",
            scrub: 1,
            // markers: true,
          },
        });

        // Animate the background image for mobile
        gsap.fromTo(
          ".back-image",
          { scale: 0.3, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ".back-image",
              start: "top bottom",
              end: "bottom 80%", // adjusted end for mobile
              scrub: 1,
              // markers: true,
            },
          }
        );
      }, heroRef);

      return () => ctx.revert();
    });

    return () => mm.revert();
  }, []);

  return (
    <div ref={heroRef} className="relative min-h-screen overflow-hidden bg-white">
      {/* Hero Content */}
      <div className="relative z-10 px-4 pt-20 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="hero-content text-center pt-10 md:pt-16">
          <div className="inline-flex items-center px-3 py-1 mb-6 text-sm font-medium text-gray-900 bg-gray-100 rounded-full">
            <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 mr-2">
              <path
                d="M12 2L2 7L12 12L22 7L12 2Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 17L12 22L22 17"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 12L12 17L22 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Best Framer Component Library Plugin
          </div>

          <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            The Ultimate Framer UI kit
            <br />
            and Design System
          </h1>

          <p className="max-w-3xl mx-auto mb-8 text-lg text-gray-600 sm:text-xl">
            Frameblox is the ultimate Framer UI kit, design system, and
            component library. Build and launch your website faster, save
            countless hours, and elevate your website.
          </p>

          <p className="mb-8 text-sm text-gray-500">
            300+ components, 650+ sections, 50+ pages, and more coming
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="#"
              className="inline-flex items-center px-6 py-3 text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
              Component Library
            </Link>
            <Link
              href="#"
              className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Get all access
            </Link>
          </div>
        </div>
      </div>

      {/* Cards Grid Layout */}
      <div className="relative w-full fixer min-h-[1400px] flex justify-center items-center px-4 py-10 mx-auto">
        <div className="back-image absolute w-[90%] left-[10%] md:w-[90%] md:left-[5%]">
          <Image
            src={ImageBack}
            width="100%"
            height="auto"
            alt="UI Component"
            className="rounded-lg shadow-2xl"
          />
        </div>

        <div className="back-image2 absolute top-[37%] w-[300px] left-[10%] z-[10001] md:left-[9%]">
          <Image
            src={ImageBack2}
            width="100%"
            height="auto"
            alt="UI Component"
            className="rounded-lg shadow-2xl"
          />
        </div>

        {/* Responsive grid container */}
        <div className="cards-grid grid-layout md:absolute left-1/2 transform -translate-x-1/2 gap-1 max-w-5xl w-full">
          <div className="card-image">
            <Image
              src={Image1}
              width={320}
              height={200}
              alt="UI Component"
              className="rounded-lg shadow-2xl"
            />
          </div>
          <div className="card-image">
            <Image
              src={Image2}
              width={320}
              height={180}
              alt="UI Component"
              className="rounded-lg shadow-2xl"
            />
          </div>
          <div className="card-image">
            <Image
              src={Image3}
              width={320}
              height={170}
              alt="UI Component"
              className="rounded-lg shadow-2xl"
            />
          </div>
          <div className="card-image">
            <Image
              src={Image4}
              width={320}
              height={200}
              alt="UI Component"
              className="rounded-lg shadow-2xl"
            />
          </div>
          <div className="card-image">
            <Image
              src={Image5}
              width={320}
              height={180}
              alt="UI Component"
              className="rounded-lg shadow-2xl"
            />
          </div>
          <div className="card-image">
            <Image
              src={Image6}
              width={320}
              height={170}
              alt="UI Component"
              className="rounded-lg shadow-2xl"
            />
          </div>
          <div className="card-image">
            <Image
              src={Image7}
              width={320}
              height={210}
              alt="UI Component"
              className="rounded-lg shadow-2xl"
            />
          </div>
          <div className="card-image">
            <Image
              src={Image8}
              width={320}
              height={180}
              alt="UI Component"
              className="rounded-lg shadow-2xl"
            />
          </div>
          <div className="card-image">
            <Image
              src={Image9}
              width={320}
              height={170}
              alt="UI Component"
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
