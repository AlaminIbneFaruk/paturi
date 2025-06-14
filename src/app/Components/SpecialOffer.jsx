"use client";
import { Carousel } from "react-responsive-carousel";
import { motion, useScroll, useTransform } from "framer-motion";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useRef } from "react";
import Link from "next/link";
import SectionHeader from "./SectionHeader";

const SpecialOffer = ({ slides = [] }) => {
  const burger_id="684bf19bc24e081c17771b02"
  const sushi_id="684bf19bc24e081c17771b02"
  const pasta_id="684bf19bc24e081c17771b02"
  const parallaxRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: parallaxRef,
    offset: ["start end", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  const animationSettings = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.8, ease: "easeInOut" },
  };

  const defaultSlides = [
    {
      id: 1,
      offer: "Buy 1 Get 1 Free",
      image:
        "https://previews.123rf.com/images/jchizhe/jchizhe1809/jchizhe180900137/108596600-fast-food-banner-juicy-meat-burgers-with-cheese-lettuce-on-yellow-background-take-away-meal.jpg",
      title: "Savor the Flavor Explosion",
      description:
        "Indulge in gourmet burgers crafted with premium ingredients and bold spices.",
      buttonText: "Order Burgers",
      buttonLink: `/items/${burger_id}`,
      bgOverlay:
        "linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0))",
      align: "right",
    },
    {
      id: 2,
      offer: "20% Off",
      image:
        "https://www.shutterstock.com/image-photo/beautiful-young-woman-tasty-sushi-260nw-2631055251.jpg",
      title: "Roll Into Freshness",
      description:
        "Delight in hand-rolled sushi made fresh by our expert chefs.",
      buttonText: "Explore Sushi",
      buttonLink: `/items/${sushi_id}`,
      bgOverlay:
        "linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0))",
      align: "left",
    },
    {
      id: 3,
      offer: "15% Off",
      image:
        "https://static.vecteezy.com/system/resources/thumbnails/026/858/391/small_2x/of-various-types-of-pasta-on-a-vibrant-yellow-background-with-plenty-of-copy-space-with-copy-space-photo.jpg",
      title: "Experience the Taste of Tradition",
      description:
        "Enjoy an Italian feast—pasta, pizza, and sauces passed down for generations.",
      buttonText: "View Italian Dishes",
      buttonLink: `/items/${pasta_id}`,
      bgOverlay:
        "linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0))",
      align: "center",
    },
  ];

  const slidesToRender = slides.length > 0 ? slides : defaultSlides;

  const getAlignmentClasses = (align) => {
    switch (align) {
      case "left":
        return "items-start justify-center text-left";
      case "right":
        return "items-end justify-center text-right";
      case "center":
      default:
        return "items-center justify-center text-center";
    }
  };

  return (
    <div>
      <SectionHeader
        title="Special Offers"
        subtitle="Don't miss out on our limited-time offers!"
        titleClassName="text-orange-800 font-bold"
        subtitleClassName="text-orange-600"
      />
      <div className="carousel-container w-full bg-base-100 text-neutral-content">
        <Carousel
          showThumbs={false}
          infiniteLoop
          autoPlay
          interval={5000}
          transitionTime={800}
          showStatus={false}
          showArrows={true}
          swipeable={true}
          emulateTouch={true}
          stopOnHover={false}
          dynamicHeight={false}
          renderIndicator={(onClickHandler, isSelected, index, label) => (
            <li
              className={`inline-block mx-1 w-3 h-3 rounded-full cursor-pointer ${
                isSelected ? "bg-amber-500" : "bg-gray-300"
              }`}
              onClick={onClickHandler}
              onKeyDown={onClickHandler}
              value={index}
              key={index}
              role="button"
              tabIndex={0}
              aria-label={`${label} ${index + 1}`}
            />
          )}
        >
          {slidesToRender.map((slide) => (
            <div key={slide.id} className="hero min-h-[80vh]">
              <motion.div
                ref={parallaxRef}
                className="hero bg-cover text-white h-full md:min-h-[80vh]"
                style={{
                  backgroundImage: `${slide.bgOverlay}, url(${slide.image})`,
                  backgroundSize: "cover",
                  backgroundPositionY: backgroundY,
                }}
              >
                <motion.div
                  className={`hero-content flex flex-col h-full max-w-[1200px] mx-auto w-full ${getAlignmentClasses(
                    slide.align
                  )}`}
                  {...animationSettings}
                >
                  <div className="w-full">
                    {" "}
                    {/* Added container with width control */}
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                      {slide.title}
                    </h1>
                    <p className="text-sm sm:text-md md:text-lg my-4">
                      {slide.description}
                    </p>
                    <Link
                      href={slide.buttonLink}
                      aria-label={slide.buttonText}
                      className="btn bg-orange-500 text-white px-6 rounded-md hover:from-gray-700 hover:to-gray-500 transition-all duration-300"
                    >
                      {slide.buttonText}
                    </Link>
                  </div>
                </motion.div>
                {slide.offer && (
                  <div
                    className={`absolute px-4 py-3 text-white font-bold bg-orange-500 rounded-lg shadow-lg
    text-xl sm:text-2xl md:text-3xl lg:text-4xl
    ${
      slide.align === "left"
        ? "right-4 bottom-4 sm:right-6 sm:bottom-6 md:right-8 md:bottom-8 lg:right-20 lg:bottom-[30%] text-left"
        : ""
    }
    ${
      slide.align === "right"
        ? "left-4 bottom-4 sm:left-6 sm:bottom-6 md:left-8 md:bottom-8 lg:left-20 lg:bottom-[30%] text-right"
        : ""
    }
    ${
      slide.align === "center"
        ? "left-1/2 transform -translate-x-1/2 bottom-8 sm:bottom-12 md:bottom-16 lg:bottom-[10%] text-center"
        : ""
    }
    w-auto max-w-[90vw] sm:max-w-[80vw] md:max-w-[70vw] lg:max-w-[50vw]`}
                  >
                    {slide.offer}
                  </div>
                )}
              </motion.div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default SpecialOffer;
