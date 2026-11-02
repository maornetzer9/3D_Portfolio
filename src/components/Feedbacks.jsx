import React, { useId, useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => {
  const testimonialId = useId();
  const paragraphs = testimonial.split("\n\n");
  const [showFullText, setShowFullText] = useState(false);

  const toggleText = () => {
    setShowFullText((expanded) => !expanded);
  };

  return (
    <motion.div
      variants={fadeIn("", "spring", index * 0.5, 0.75)}
      className="bg-black-200 p-6 sm:p-10 rounded-3xl xl:w-[100%] w-full"
    >
      <p aria-hidden="true" className="text-white font-black text-[48px]">&ldquo;</p>

      <div className="mt-1">
        <blockquote id={testimonialId} className="text-white text-[16px] sm:text-[18px] leading-relaxed space-y-5">
          {(showFullText ? paragraphs : paragraphs.slice(0, 1)).map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </blockquote>
        {paragraphs.length > 1 && (
          <button
            type="button"
            aria-expanded={showFullText}
            aria-controls={testimonialId}
            onClick={toggleText}
            className="mt-3 min-h-[44px] text-sky-300 underline underline-offset-4 rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
          >
            {showFullText ? "Read less" : "Read full recommendation"}
          </button>
        )}

        <div className="mt-7 flex justify-between items-center gap-1">
          <div className="flex-1 flex flex-col">
            <p className="text-white font-medium text-[16px]">
              {name}
            </p>
            <p className="mt-1 text-secondary text-[12px]">
              {designation}, {company}
            </p>
          </div>

          <img
            src={image}
            alt={`${name}, ${designation} at ${company}`}
            className="w-10 h-10 rounded-full object-cover"
          />
        </div>

      </div>
    </motion.div>
  );
};

const Feedbacks = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What others say</p>
          <h2 className={styles.sectionHeadText}>Opinion.</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "opinion");
