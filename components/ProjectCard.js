import Image from "next/image";

const ProjectCard = ({ title, link, src }) => {
  return (
    <a
      target="_blank"
      href={link}
      rel="noopener noreferrer"
      className="w-full block shadow-2xl"
    >
      <h1 className=" font-bold text-xl">{title}</h1>
      <div className="relative overflow-hidden rounded-md">
        <div className="h-72 object-cover">
          <Image
            src={src}
            alt="portfolio"
            layout="fill"
            className="transform hover:scale-125 transition duration-2000 ease-out object-cover h-full w-full"
          />
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
