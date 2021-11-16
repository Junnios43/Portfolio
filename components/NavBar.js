import React, { useEffect, useState } from "react";
import Link from "next/link";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import ArrowLeftRoundedIcon from "@mui/icons-material/ArrowLeftRounded";
import WbSunnyRoundedIcon from "@mui/icons-material/WbSunnyRounded";
import IconButton from "@mui/material/IconButton";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";

export default function NavBar() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const resumeUrl =
    "https://drive.google.com/file/d/1z4fFzp5mSz8yCp-6cU820Aas8n7fQ3Wy/view?usp=sharing";
  const linkedInUrl = "https://www.linkedin.com/in/junjwang/";
  const githubUrl = "https://github.com/Junnios43?tab=repositories";

  return (
    <div className="max-w-6xl  mx-auto px-4 py-10">
      <div className="flex  md:flex-row justify-between items-center">
        {/* Left section */}
        <div className="flex flex-col">
          <Link href="/">
            <a>
              <h1 className="font-semibold text-xl dark:text-gray-100">
                Jun Wang
                {router.asPath === "/" && (
                  <ArrowLeftRoundedIcon fontSize="small" />
                )}
              </h1>
              <p className="text-base font-light text-gray-700 dark:text-gray-200">
                Front-End Developer
              </p>
            </a>
          </Link>
        </div>

        {/* Middle section */}
        <div className="space-x-8 hidden md:block">
          <Link href="/projects">
            <a
              className={`text-base dark:text-gray-300 ${
                router.asPath === "/projects" ? "font-semibold" : "font-normal"
              }`}
            >
              Projects
              {router.asPath === "/projects" && <ArrowLeftRoundedIcon />}
            </a>
          </Link>

          <Link href="/contact">
            <a
              className={`text-base dark:text-gray-300 ${
                router.asPath === "/contact" ? "font-semibold" : "font-normal"
              }`}
            >
              Contact
              {router.asPath === "/contact" && <ArrowLeftRoundedIcon />}
            </a>
          </Link>
          <a
            target="_blank"
            href={resumeUrl}
            rel="noopener noreferrer"
            className=" dark:text-gray-300 font-normal"
          >
            Resume
          </a>
        </div>

        {/* Right Section */}
        <div className="space-x-4 flex flex-row items-center">
          <a target="_blank" href={githubUrl} rel="noopener noreferrer">
            <GitHubIcon />
          </a>
          <a target="_blank" href={linkedInUrl} rel="noopener noreferrer">
            <LinkedInIcon />
          </a>

          <IconButton
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {mounted &&
              (theme === "dark" ? (
                <DarkModeIcon className="w-4 h-4 text-yellow-500 dark:text-yellow-500" />
              ) : (
                <WbSunnyRoundedIcon className="w-4 h-4 text-yellow-500 dark:text-yellow-500" />
              ))}
          </IconButton>
        </div>
      </div>

      {/* when view size is less than md */}
      <div className="space-x-8 block md:hidden mt-4">
        <Link href="/projects">
          <a className="text-base font-normal text-gray-600 dark:text-gray-300">
            Projects
          </a>
        </Link>
        <Link href="/contact">
          <a className="text-base font-normal text-gray-600 dark:text-gray-300">
            Contact
          </a>
        </Link>
        <Link href="/resume">
          <a className="text-base font-normal text-gray-600 dark:text-gray-300">
            Resume
          </a>
        </Link>
      </div>
    </div>
  );
}
