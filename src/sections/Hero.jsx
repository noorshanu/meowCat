import { BsTwitterX, BsInstagram, BsFacebook } from "react-icons/bs";
import { FaLinkedinIn, FaTelegram } from "react-icons/fa6";

function Hero() {
  return (
    <section className=" pt-4  pb-[1rem]">
      <div className="container-wrapper flex justify-center flex-col ">
        <h1 className=" font-kid text-[80px] sm:text-[160px] font-bold text-center mt-[5rem] sm:mt-[3rem] uppercase">
          meowcat
        </h1>

        <div className=" flex justify-center mx-auto -mt-[4rem]">
          <img
            src="images/hero.png"
            alt=""
            className="w-auto h-64    lg:h-[400px]  mx-auto "
          />
        </div>

        <div className=" flex justify-center gap-5 items-center">
          <a
            href="https://twitter.com/Mew_Catt_"
            className=" text-xl text-black bg-[#c74786] hover:scale-125 hover:bg-[#1a4093] rounded-full p-2 border-2 border-[#000]  hover:text-[#fff]"
          >
            <BsTwitterX />
          </a>

          <a
            href="https://t.me/meowcatoff"
            target="_blank"
            className=" text-xl text-black hover:scale-125 bg-[#c74786] hover:bg-[#1a4093] rounded-full p-2 border-2 border-[#000]  hover:text-[#fff]"
          >
            <FaTelegram />
          </a>

          <a
            href="https://www.dextools.io/app/en/solana/pair-explorer/9U8yBLHEsFcqJLQiyrvi8tHYJ4haAs8sAnYrdxvxFfk1?t=1711470122933"
            target="_blank"
            className=" bg-[#c74786] rounded-full text-xl font-semibold p-1 border-2 hover:scale-125 "
          >
            <img src="images/dext.png" alt="" className=" h-[29px] w-auto" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
