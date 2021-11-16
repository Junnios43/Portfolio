import ArrowLeftRoundedIcon from "@mui/icons-material/ArrowLeftRounded";
import ArrowRightRoundedIcon from "@mui/icons-material/ArrowRightRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="max-w-6xl  mx-auto px-4 py-10 md:py-20">
      <div className="h-0.5 w-full bg-gray-600 dark:bg-gray-100"></div>
      <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row justify-between md:items-center mt-8">
        <div className="flex align-baseline space-x-2">
          <EmailRoundedIcon />
          <a href="mailto:junjiewang42@outlook.com">junjiewang42@outlook.com</a>
        </div>
        <div className="flex align-middle">
          <ArrowRightRoundedIcon />
          <p>Developed by Jun Wang</p>
          <ArrowLeftRoundedIcon />
        </div>
      </div>
    </div>
  );
}
