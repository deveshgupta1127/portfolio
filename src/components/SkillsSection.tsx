import { Code, Database, Cloud, Settings, Monitor, Brain } from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: <Code className="h-6 w-6" />,
    skills: ["Python", "Java", "JavaScript", "C"],
    gradient: "from-blue-500 to-purple-600"
  },
  {
    title: "Frontend & Backend",
    icon: <Monitor className="h-6 w-6" />,
    skills: ["React", "Node.js", "HTML", "CSS"],
    gradient: "from-green-500 to-blue-600"
  },
  {
    title: "Databases",
    icon: <Database className="h-6 w-6" />,
    skills: ["MySQL", "MongoDB", "Oracle DB"],
    gradient: "from-purple-500 to-pink-600"
  },
  {
    title: "Cloud & DevOps",
    icon: <Cloud className="h-6 w-6" />,
    skills: ["AWS", "Google Cloud", "Docker", "Jenkins", "Netlify"],
    gradient: "from-orange-500 to-red-600"
  },
  {
    title: "Tools & Platforms",
    icon: <Settings className="h-6 w-6" />,
    skills: ["VMware", "Oracle VirtualBox", "Google Colab"],
    gradient: "from-cyan-500 to-blue-600"
  },
  {
    title: "Expertise Areas",
    icon: <Brain className="h-6 w-6" />,
    skills: ["Machine Learning", "Statistics", "AI Theory"],
    gradient: "from-indigo-500 to-purple-600"
  }
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-brand-primary to-brand-secondary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for data science, machine learning, and full-stack development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title} 
              className="skill-card group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <div className="text-white">
                  {category.icon}
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mb-4 text-foreground">
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};