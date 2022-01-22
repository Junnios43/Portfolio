import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Shopify to Space",
    link: "https://shopify-to-space.vercel.app/",
    src: "/shopify-to-space.png",
  },
  {
    title: "Amazon Clone",
    link: "https://amazon-clone-9ad5bdut6-junnios43.vercel.app/",
    src: "/amazon-clone.jpg",
  },
  {
    title: "Netflix Clone",
    link: "https://netflix-clone-daf19.web.app/",
    src: "/netflix-clone.jpg",
  },
  {
    title: "Linkedin Clone",
    link: "https://linkedin-clone-62a36.web.app/",
    src: "/linkedin-clone.jpg",
  },
  {
    title: "Snapchat Clone",
    link: "https://snapchat-clone-ee845.web.app/",
    src: "/snapchat-clone.jpg",
  },
];

export default function Projects() {
  return (
    <section>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 ">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            link={project.link}
            src={project.src}
          />
        ))}
      </div>
    </section>
  );
}
