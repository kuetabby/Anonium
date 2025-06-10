"use client";
import Link from "next/link";
import Image from "next/image";
import { GitbookIcon, TeleIcon, TwitterIcon } from "@/utils/Icon/socials";
import { DextoolsIcon } from "@/utils/Icon/dex";
import { socialsLink } from "@/constants/links";
// import shape from "@/public/image/shape/shape_ico_hero_section_bottom.svg";

export function Footer() {
  return (
    <footer className="text-center py-16 bg-[#070710] text-white">
      {/* <div className="">
        <Image src={shape} alt="Shape Divider" className="w-full " priority />
      </div> */}
      <div className="container mx-auto px-4">
        <div className="mb-10">
          <div className="flex justify-center mb-6">
            <Image src="/OBS.png" alt="Logo" width={100} height={100} />
          </div>
          <div className="flex justify-center gap-4">
            <Link
              href={socialsLink.telegram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <TeleIcon
                className="fill-white hover:fill-primaryColor transform transition-all duration-300 hover:scale-110 hover:rotate-12"
                style={{ fontSize: "1.5em" }}
              />
            </Link>
            <Link
              href={socialsLink.twitter}
              target="_blank"
              rel="noopener noreferrer"
            >
              <TwitterIcon
                className="fill-white hover:fill-primaryColor transform transition-all duration-300 hover:scale-110 hover:rotate-12"
                style={{ fontSize: "1.4em" }}
              />
            </Link>
            <Link
              href="/whitepaper.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitbookIcon
                className="fill-white hover:fill-primaryColor transform transition-all duration-300 hover:scale-110 hover:rotate-12"
                style={{ fontSize: "1.5em" }}
              />
            </Link>
            <Link href="/" target="_blank" rel="noopener noreferrer">
              <DextoolsIcon
                className="fill-white hover:fill-primaryColor transform transition-all duration-300 hover:scale-110 hover:rotate-12"
                style={{ fontSize: "1.5em" }}
              />
            </Link>
          </div>
        </div>
        <p className="text-sm">
          Copyright © 2025. All Rights Reserved by
          <span className="text-primaryColor font-semibold"> Obscura</span>
        </p>
      </div>
    </footer>
  );
}
