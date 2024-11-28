/**
 * @copyright 2024 Ajis Dzalparo
 * @license Apache-2.0
 */

/**
 * Components
 */
import { ProjectCard } from "./ProjectCard";

const projects = [
  {
    imgSrc: "./images/project-guestbook.png",
    title: "Guestbook BPTIK DIKDUD Jawa Tengah",
    tags: ["Laravel", "MVC", "Development"],
    projectLink: "https://github.com/ajisdzalparo/Guestbook_BPTIK_DIKBUD",
  },
  {
    imgSrc: "./images/project-tiket-wisata.png",
    title: "Web Pemesanan Tiket Wisata - Codeigniter 3",
    tags: ["Codeigniter", "PHP"],
    projectLink: "https://github.com/ajisdzalparo/pemesanan-tiket-wisata-berbasis-web-ci3",
  },
  {
    imgSrc: "./images/project-stickynote.png",
    title: "Vue 3 Sticky Note",
    tags: ["Vue 3", "Frontend"],
    projectLink: "https://sticky-note-vue-3.vercel.app/",
  },
  {
    imgSrc: "./images/project-kulineran.png",
    title: "Kulineran Vue 2",
    tags: ["Vue2", "Frontend", "eCommerce"],
    projectLink: "https://github.com/ajisdzalparo/Front-End-Kulineran-Vue-2",
  },
  {
    imgSrc: "./images/project-simple-blog.png",
    title: "Simple Blog",
    tags: ["simple blog", "React.js"],
    projectLink: "https://github.com/ajisdzalparo/simple-blog-reactjs",
  },
];

export const Project = () => {
  return (
    <>
      <section
        id="project"
        className="section">
        <div className="container">
          <h2 className="headline-2 mb-8 reveal-up">My portfolio highlights</h2>

          <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
            {projects.map(({ imgSrc, title, tags, projectLink }, key) => (
              <ProjectCard
                key={key}
                imgSrc={imgSrc}
                title={title}
                tags={tags}
                projectLink={projectLink}
                className="reveal-up"
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
