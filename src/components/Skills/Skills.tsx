import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Grid, IconButton, Tooltip } from "@mui/material";
import { SvgIconComponent } from "@mui/icons-material";
import { Html, Css, Javascript } from "@mui/icons-material";
import { SiMui, SiReactquery } from "react-icons/si";
import { FaBootstrap, FaGithub, FaReact, FaPython } from "react-icons/fa";
import { BiLogoTypescript, BiLogoPostgresql } from "react-icons/bi";
import { TbBrandNextjs, TbBrandRedux } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiDjango, DiDocker } from "react-icons/di";

interface Skill {
  name: string;
  icon: SvgIconComponent | React.ComponentType;
  color: string;
}
const skills: Skill[] = [
  { name: "HTML", icon: Html, color: "#E34F26" },
  { name: "CSS", icon: Css, color: "#1572B6" },
  { name: "Tailwind CSS", icon: RiTailwindCssFill, color: "#4361ee" },
  { name: "Bootstrap", icon: FaBootstrap, color: "#4361ee" },
  { name: "Material-UI", icon: SiMui, color: "#0081CB" },
  { name: "GitHub", icon: FaGithub, color: "#7d8597" },
  { name: "JavaScript", icon: Javascript, color: "#F7DF1E" },
  { name: "React", icon: FaReact, color: "#61DAFB" },
  { name: "React Query", icon: SiReactquery, color: "#bc3908" },
  { name: "Redux", icon: TbBrandRedux, color: "#764ABC" },
  { name: "Next.js", icon: TbBrandNextjs, color: "#00b4d8" },
  { name: "TypeScript", icon: BiLogoTypescript, color: "#3178C6" },
  { name: "Python", icon: FaPython, color: "#3572A5" },
  { name: "Django", icon: DiDjango, color: "#3DB382" },
  { name: "Docker", icon: DiDocker, color: "#08B5DD" },
  { name: "PostgreSQL", icon: BiLogoPostgresql, color: "#3178C6" },
];

const Skills: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);
  return (
    <section className="Skills" id="Skills">
      <div
        className="title"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        <div className="section-title">Mening Mahoratim</div>
      </div>
      <div className="content">
        <div className="column col-left" data-aos="fade-right">
          <h2 className="content-title">
            Mening Ko'nikmalarim va Tajribalarim
          </h2>
          <p>
            • HTML, CSS, va JavaScript: Veb-sahifalarni zamonaviy, responsiv va
            interaktiv tarzda yaratishda mustahkam bilim va tajribaga egaman.{" "}
            <br />
            <br />
            • ReactJS: Komponent asosidagi frontend dasturlashda chuqur
            tushuncha va optimallashtirilgan yechimlar ishlab chiqishda yetuk
            tajribam bor. <br />
            <br />• CSS Frameworklari: Bootstrap, TailwindCSS va Material-UI
            kabi vositalar yordamida tezkor va professional interfeyslar
            yarataman. <br />
            <br />
            • JavaScript kutubxonalari: Axios, Redux, va React Query kabi
            vositalar bilan samarali ma'lumotlar boshqaruvi va API
            integratsiyalarini amalga oshiraman. <br />
            <br />• Tools va Platformalar: VS Code, Figma, Vite, Swager va
            Postman kabi vositalardan samarali foydalanaman.
          </p>
          <a href="https://github.com/rakhmatovdoniyordev" className="btn">
            Batafsil
          </a>
        </div>
        <Grid
          container
          spacing={4}
          justifyContent="center"
          data-aos="fade-left"
          sx={{ maxWidth: "500px", margin: "0 auto" }}
          columns={4}
        >
          {skills.map((skill) => (
            <Grid
              item
              key={skill.name}
              xs={1}
              style={{ padding: "0", margin: "0" }}
            >
              <Tooltip title={skill.name} arrow>
                <IconButton
                  sx={{
                    color: skill.color,
                    transition: "all 0.3s ease",
                    padding: "16px",
                    "&:hover": {
                      transform: "scale(1.2)",
                      backgroundColor: `${skill.color}22`,
                    },
                  }}
                >
                  <skill.icon style={{ fontSize: "30px" }} />
                </IconButton>
              </Tooltip>
            </Grid>
          ))}
        </Grid>
      </div>
    </section>
  );
};

export default Skills;
