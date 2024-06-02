import React from "react";
import PathBtn from "../components/PathBtn";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const ChurchLocation = () => {
  return (
    <div className="relative w-full h-screen p-[20px] lg:p-[50px] gap-[100px] overflow-y-scroll flex flex-col items-center justify-center bg-[#fff]">
      {/* <button className='bg-primary w-[80px]'></button> */}
      <PathBtn locate="/" icon={<FaHome />} />
      <div className="text-center">
        <p className="text-2xl font-[500]">Venue: Foursquare Gospel Church,</p>
        <p className="text-xl">Ladegboye Missionary Zonal Headquarters,</p>
        <p className="text-lg">off ijede road, Ikorodu, Lagos</p>
        <p className="text-2xl mt-[15px] font-[500]">To Church:</p>
        <p>
           From ikorodu garage, take a maruwa to ladegboye/ elepe and
          alight at Ladegboye junction. Cross to the other side and follow the
          road up to Foursquare Gospel church, Blue roof on the left hand side.
        </p>
        <p className="text-2xl mt-[15px] font-[500]">To Reception:</p>
        <p className="">
          From ikorodu garage, join bus going to gbaga or elepe and
          drop at Epic Event Center Cele, it's by the road side.
        </p>
      </div>
      <div className="flex flex-col gap-[15px]">
      <Link
        target="_blank"
        className="link"
        to="https://maps.app.goo.gl/QtcdqkauiNsDPTzz5"
      >
        <button className="bg-primary px-[15px] h-[45px] text-[#fff] rounded-[8px] w-[250px]">
          Church In Google Maps
        </button>
      </Link>
      <Link
        target="_blank"
        className="link"
        to="https://maps.app.goo.gl/KbU2eKERhgi6aMqM9"
      >
        <button className="bg-primary px-[15px] h-[45px] text-[#fff] rounded-[8px] w-[250px]">
          Recption In Google Maps
        </button>
      </Link>
      </div>
    </div>
  );
};

export default ChurchLocation;
