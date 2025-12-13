import { Badge } from "@/components/ui/badge";
import { Building2, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Senior Full Stack Developer",
    company: "TechCorp Solutions",
    period: "2023 - Present",
    description:
      "Led the development of enterprise-scale web applications, mentored junior developers, and implemented best practices for code quality and performance optimization.",
    technologies: ["React", "Node.js", "TypeScript", "AWS", "MongoDB"],
  },
  {
    title: "Full Stack Developer",
    company: "Digital Innovations Inc",
    period: "2021 - 2023",
    description:
      "Developed and maintained multiple client projects, implemented responsive designs, and integrated third-party APIs for enhanced functionality.",
    technologies: ["React", "Express.js", "PostgreSQL", "Docker", "Redis"],
  },
  {
    title: "Frontend Developer",
    company: "WebTech Studios",
    period: "2018 - 2021",
    description:
      "Created responsive and interactive user interfaces, collaborated with designers, and optimized application performance.",
    technologies: ["React", "JavaScript", "SASS", "Webpack", "Jest"],
  },
];

export default function Timeline() {
  return (
    <div className="w-full mx-auto py-10 md:py-12 px-6">
      <div className="relative ml-3">
        {/* Linha vertical da timeline */}
        <div className="absolute left-0 top-4 bottom-0 border-l-2 border-white/20" />

        {experiences.map(
          ({ company, description, period, technologies, title }, index) => (
            <div key={index} className="relative pl-12 pb-16 last:pb-0">
              
              {/* Bolinha da Timeline */}
              <div className="absolute h-4 w-4 -translate-x-1/2 left-px top-3 rounded-full border-2 border-purple-500 bg-black ring-4 ring-black" />

              {/* Conteúdo */}
              <div className="space-y-4">
                
                {/* Empresa e Ícone */}
                <div className="flex items-center gap-3">
                  <div className="shrink-0 h-10 w-10 bg-white/10 rounded-full flex items-center justify-center border border-white/10">
                    <Building2 className="h-5 w-5 text-purple-400" />
                  </div>
                  <span className="text-lg font-medium text-purple-300">{company}</span>
                </div>

                {/* Título e Data */}
                <div>
                  <h3 className="text-3xl font-bold text-white mb-1">
                    {title}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Calendar className="h-4 w-4" />
                    <span>{period}</span>
                  </div>
                </div>

                {/* Descrição (Fonte ajustada para parecer com a ThirdSection) */}
                <p className="text-lg text-gray-400 leading-relaxed max-w-2xl">
                  {description}
                </p>

                {/* Tecnologias */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="rounded-full px-3 py-1 bg-white/5 text-gray-300 border border-white/10 hover:bg-white/10 transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}