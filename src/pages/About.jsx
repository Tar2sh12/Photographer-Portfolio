
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { transition1 } from "../transitions";
import Footer from "../components/Footer";
import backImage from "../assets/nagham1111.png";
const About = () => {
  return (
    <section className="bg-[#111] h-screen w-full overflow-hidden flex justify-center items-center">
      <motion.div
        initial={{ opacity: 0, y: "-50%" }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: "50%" }}
        transition={transition1}
        className="container px-5 z-10 text-white flex items-center md:items-end flex-col"
      >
        <h1 className="font-alternative uppercase font-bold text-center md:text-right text-[60px]  lg:text-[80px] xl:text-[100px] xxl:text-[120px] leading-[60px] lg:leading-[80px] xl:leading-[100px] xxl:leading-[120px] max-w-[300px] md:max-w-full break-words">
          about me
        </h1>
        <p className="font-light text-[16px] md:text-[24px] mb-[36px] text-center md:text-right max-w-[344px] md:max-w-[644px]">
        I&apos;m Nagham Amr, a photographer, videographer, and founder of NAPIX. With experience at COMET Cairo, MSP Tech Club, and MBHC, I've led and contributed to creative teams across various student and professional projects. My work combines technical skill with storytelling, aiming to deliver impactful visuals through both photography and videography.</p>
        <Link
          to={"/portfolio"}
          className="text-[16px] font-light uppercase border-[1px] border-white py-2 px-[36px] hover:text-[#111]
      duration-300 relative before:absolute before:top-0 before:left-0 before:bg-white before:w-0 before:h-full before:-z-10 hover:before:w-full before:duration-300"
        >
          check my work
        </Link>
      </motion.div>
      <div className="fixed top-0 w-full z-0 flex">
        <motion.div
          initial={{ scale: 1, x: "-100%" }}
          animate={{ scale: 1, x: 0 }}
          exit={{ scale: 0, x: 0 }}
          transition={transition1}
          className="w-full md:w-6/12 h-full bg-black"
        >
          <img
            className="max-w-full w-full h-screen object-cover object-center saturate-0 opacity-50"
            src={backImage}
                        alt=""
          />
        </motion.div>
      </div>
       <Footer/>
    </section>
   
  );
};

export default About;
