import { SITE_CONTENT } from "@/lib/content";

export const metadata = {
  title: "Nos Expertises - Octopus Talent",
  description:
    "Découvrez nos 9 domaines d'expertise : IT, data, IA, cybersécurité et bien plus.",
};

export default function ExpertisesPage() {
  const { expertiseAreas } = SITE_CONTENT;

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-subtle relative flex min-h-[400px] items-center justify-center">
        <div className="absolute inset-0 opacity-20">
          <div className="bg-primary/20 animate-glow absolute top-20 left-10 h-72 w-72 rounded-full blur-3xl"></div>
          <div
            className="bg-accent/20 animate-glow absolute right-10 bottom-20 h-72 w-72 rounded-full blur-3xl"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center md:px-6 lg:px-8">
          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Nos expertises
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl">
            Une couverture complète de tous les enjeux IT, data, IA et
            cybersécurité
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="section-padding bg-background">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-3xl font-bold md:text-4xl">Introduction</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Nos expertises couvrent l&apos;ensemble des enjeux liés à la
            transformation des systèmes d&apos;information, à la structuration
            de la donnée, à l&apos;évolution des usages et à la sécurisation des
            environnements numériques. Notre accompagnement s&apos;appuie sur
            des pratiques éprouvées et une connaissance approfondie des
            standards du marché.
          </p>
        </div>
      </section>

      {/* Expertise Areas Section */}
      <section className="section-padding bg-card">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {expertiseAreas.map((expertise) => (
              <div
                key={expertise.number}
                className="bg-background border-border/40 hover:border-primary/40 hover:shadow-primary/10 group rounded-lg border p-8 transition-all hover:shadow-lg"
              >
                <div className="mb-4 flex items-start gap-4">
                  <div className="from-primary to-accent text-primary-foreground flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br font-bold">
                    {expertise.number}
                  </div>
                  <h3 className="text-foreground group-hover:text-primary text-lg leading-tight font-semibold transition-colors">
                    {expertise.title}
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {expertise.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
