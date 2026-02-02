import { SITE_CONTENT } from "@/lib/content";

export const metadata = {
  title: "À propos - Octopus Talent",
  description:
    "Découvrez Octopus Talent, cabinet de conseil en IT, data, IA et cybersécurité.",
};

export default function AboutPage() {
  const { hero, section1, section2, values, whyChoose, section3, section4 } =
    SITE_CONTENT.about;

  return (
    <>
      {/* Hero Section */}
      <section className="bg-linear-subtle relative flex min-h-100 items-center justify-center">
        <div className="absolute inset-0 opacity-20">
          <div className="bg-primary/20 animate-glow absolute top-20 left-10 h-72 w-72 rounded-full blur-3xl"></div>
          <div
            className="bg-accent/20 animate-glow absolute right-10 bottom-20 h-72 w-72 rounded-full blur-3xl"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center md:px-6 lg:px-8">
          <h1 className="mb-6 text-4xl font-bold md:text-5xl">{hero.title}</h1>
          <p className="text-muted-foreground text-lg md:text-xl">
            {hero.subtitle}
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="section-padding bg-background">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-3xl font-bold md:text-4xl">
            {section1.title}
          </h2>
          <div className="text-muted-foreground space-y-6 text-lg leading-relaxed">
            <p>{section1.content}</p>
            <div className="bg-gradient-subtle border-primary/20 rounded-lg border p-6">
              <p className="text-foreground font-semibold">
                {section1.highlight}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="section-padding bg-card">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-3xl font-bold md:text-4xl">
            {section2.title}
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            {section2.content}
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-background">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-12 text-3xl font-bold md:text-4xl">Nos valeurs</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5">
            {values.map((value) => (
              <div
                key={value}
                className="from-primary/10 via-secondary/10 to-accent/10 border-primary/20 rounded-lg border bg-linear-to-br p-6 text-center"
              >
                <p className="text-foreground font-semibold">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-card">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-12 text-3xl font-bold md:text-4xl">
            Pourquoi choisir Octopus Talent ?
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {whyChoose.map((item, idx) => (
              <div
                key={idx}
                className="bg-background border-border/40 hover:border-primary/40 hover:shadow-primary/10 rounded-lg border p-8 transition-all hover:shadow-lg"
              >
                <div className="from-primary to-accent text-primary-foreground mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-linear-to-br font-bold">
                  {idx + 1}
                </div>
                <h3 className="text-foreground mb-3 text-lg font-semibold">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Working Method Section */}
      <section className="section-padding bg-background">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-3xl font-bold md:text-4xl">
            {section3.title}
          </h2>
          <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
            {section3.p1}
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed">
            {section3.p2}
          </p>
        </div>
      </section>

      {/* Collaboration Section */}
      <section className="section-padding bg-card">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-3xl font-bold md:text-4xl">
            {section4.title}
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            {section4.content}
          </p>
        </div>
      </section>
    </>
  );
}
