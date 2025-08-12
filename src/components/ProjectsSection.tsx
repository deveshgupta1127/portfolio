import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Heart, Gamepad2 } from "lucide-react";

const projects = [
  {
    title: "Cardiac Arrest Risk Prediction Website",
    description: "Predictive health application that collects user health metrics and uses ML models to estimate cardiac arrest risk. Features a clean UI and data-driven accuracy for preventive healthcare.",
    type: "Team Project",
    icon: <Heart className="h-8 w-8" />,
    gradient: "from-red-500 to-pink-600",
    technologies: ["Python", "Machine Learning", "Healthcare AI", "Web Development"],
    features: [
      "Real-time health risk assessment",
      "ML-powered predictive modeling",
      "User-friendly interface",
      "Data-driven insights for prevention"
    ]
  },
  {
    title: "Video Game Sales Prediction Website",
    description: "ML-powered platform predicting game sales based on attributes such as genre, platform, and release year, assisting in strategic decision-making for publishers.",
    type: "Individual Project",
    icon: <Gamepad2 className="h-8 w-8" />,
    gradient: "from-blue-500 to-purple-600",
    technologies: ["Python", "Machine Learning", "Data Analytics", "Predictive Modeling"],
    features: [
      "Sales forecasting algorithms",
      "Multi-platform analysis",
      "Genre-based predictions",
      "Strategic insights for publishers"
    ]
  }
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 bg-background-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-brand-primary to-brand-secondary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcasing innovative ML solutions that bridge theory with real-world applications
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title} 
              className="project-card"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${project.gradient} flex items-center justify-center`}>
                    <div className="text-white">
                      {project.icon}
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium">
                    {project.type}
                  </span>
                </div>

                <h3 className="text-2xl font-semibold mb-4 text-foreground">
                  {project.title}
                </h3>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold mb-3 text-foreground">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-brand-primary rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold mb-3 text-foreground">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button className="btn-hero flex-1">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Project
                  </Button>
                  <Button variant="outline" className="btn-outline">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};