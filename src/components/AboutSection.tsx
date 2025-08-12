import { GraduationCap, Brain, Lightbulb } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-brand-primary to-brand-secondary mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-brand-primary to-brand-secondary flex items-center justify-center">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Academic Journey</h3>
                <p className="text-muted-foreground">
                  Currently pursuing B.Tech in Computer Science and Engineering at NIIT University (2022–2026), 
                  building a strong foundation in computer science principles and advanced technologies.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-brand-secondary to-brand-accent flex items-center justify-center">
                <Brain className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">ML & AI Expertise</h3>
                <p className="text-muted-foreground">
                  Deep passion for machine learning, statistical analysis, and AI theory. 
                  Skilled in developing predictive models and implementing data-driven solutions.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-brand-accent to-brand-primary flex items-center justify-center">
                <Lightbulb className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Innovation Focus</h3>
                <p className="text-muted-foreground">
                  Enthusiastic about bridging theoretical knowledge with real-world applications, 
                  bringing a versatile approach to problem-solving and technical innovation.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-card p-8 rounded-2xl card-elevated">
            <h3 className="text-2xl font-semibold mb-6 text-center">Core Strengths</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Machine Learning</span>
                <div className="w-32 bg-muted rounded-full h-2">
                  <div className="bg-gradient-to-r from-brand-primary to-brand-secondary h-2 rounded-full" style={{ width: '95%' }}></div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Statistical Analysis</span>
                <div className="w-32 bg-muted rounded-full h-2">
                  <div className="bg-gradient-to-r from-brand-primary to-brand-secondary h-2 rounded-full" style={{ width: '90%' }}></div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Full-Stack Development</span>
                <div className="w-32 bg-muted rounded-full h-2">
                  <div className="bg-gradient-to-r from-brand-primary to-brand-secondary h-2 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Cloud Technologies</span>
                <div className="w-32 bg-muted rounded-full h-2">
                  <div className="bg-gradient-to-r from-brand-primary to-brand-secondary h-2 rounded-full" style={{ width: '80%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};