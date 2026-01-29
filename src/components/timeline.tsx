import { Badge } from "@/components/ui/badge";
import { Building2, Calendar } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Timeline() {
  const { t } = useTranslation();

  const experiences = [
    {
      title: t('timeline.exp1.title'),
      company: "OryzaLabs",
      period: t('timeline.exp1.period'),
      description: t('timeline.exp1.description'),
      technologies: ["..."],
    },
    {
      title: t('timeline.exp2.title'),
      company: "Beasybox",
      period: "2025 - 2025",
      description: t('timeline.exp2.description'),
      technologies: ["AWS", "EC2","ECS","ECR","SES","SQS","S3","Kubernets", "Docker", "Terraform","Agile","Lean","Scrum"],
    },
    {
      title: t('timeline.exp3.title'),
      company: "Beasybox",
      period: "2024 - 2025",
      description: t('timeline.exp3.description'),
      technologies: ["NestJs", "Docker", "Spring", "Redis", "Jest"],
    },
    {
      title: t('timeline.exp4.title'),
      company: "Marista Champagnat",
      period: "09/2023 - 02/2024",
      description: t('timeline.exp4.description'),
      technologies: ["React", "JavaScript", "Python", "Pandas", "SQL"],
    },
  ];

  return (
    <div className="w-full mx-auto py-10 md:py-12 px-6">
      <div className="relative ml-3">
        <div className="absolute left-0 top-4 bottom-0 border-l-2 border-white/20" />

        {experiences.map(
          ({ company, description, period, technologies, title }, index) => (
            <div key={index} className="relative pl-12 pb-16 last:pb-0">
              <div className="absolute h-4 w-4 -translate-x-1/2 left-px top-3 rounded-full border-2 border-purple-500 bg-black ring-4 ring-black" />

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="shrink-0 h-10 w-10 bg-white/10 rounded-full flex items-center justify-center border border-white/10">
                    <Building2 className="h-5 w-5 text-purple-400" />
                  </div>
                  <span className="text-lg font-medium text-purple-300">{company}</span>
                </div>

                <div>
                  <h3 className="text-3xl font-bold text-white mb-1">
                    {title}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Calendar className="h-4 w-4" />
                    <span>{period}</span>
                  </div>
                </div>

                <p className="text-lg text-gray-400 leading-relaxed max-w-2xl">
                  {description}
                </p>

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