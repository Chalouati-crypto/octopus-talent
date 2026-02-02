import Link from "next/link";
import { SITE_CONTENT } from "@/lib/content";

export default function Home() {
  const { hero, about, expertise, cta } = SITE_CONTENT.home;
  const { expertiseAreas } = SITE_CONTENT;

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-subtle relative flex min-h-screen items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="bg-primary/20 animate-glow absolute top-20 left-10 h-72 w-72 rounded-full blur-3xl"></div>
          <div
            className="bg-accent/20 animate-glow absolute right-10 bottom-20 h-72 w-72 rounded-full blur-3xl"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center md:px-6 lg:px-8">
          <h1 className="mb-6 text-4xl leading-tight font-bold md:text-5xl lg:text-6xl">
            <span className="text-gradient">{hero.title}</span>
          </h1>
          <p className="text-muted-foreground mx-auto mb-8 max-w-2xl text-lg leading-relaxed md:text-xl">
            {hero.subtitle}
          </p>
          <Link
            href="/contact"
            className="from-primary to-accent text-primary-foreground inline-flex items-center justify-center rounded-lg bg-gradient-to-r px-8 py-4 font-semibold transition-opacity hover:opacity-90"
          >
            {hero.cta}
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-background">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-3xl font-bold md:text-4xl">{about.title}</h2>
          <div className="text-muted-foreground space-y-6 text-lg leading-relaxed">
            <p>{about.p1}</p>
            <p>{about.p2}</p>
            <p>{about.p3}</p>
            <div className="bg-gradient-subtle border-primary/20 rounded-lg border p-6">
              <p className="text-foreground font-semibold">{about.highlight}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="section-padding bg-card">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">
            {expertise.title}
          </h2>
          <p className="text-muted-foreground mb-12 text-center text-lg">
            {expertise.subtitle}
          </p>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {expertiseAreas.map((exp) => (
              <Link
                key={exp.number}
                href="/expertises"
                className="bg-background border-border/40 hover:border-primary/40 hover:shadow-primary/10 group rounded-lg border p-6 transition-all hover:shadow-lg"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="from-primary to-accent text-primary-foreground flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br text-sm font-bold">
                    {exp.number}
                  </div>
                  <h3 className="text-foreground group-hover:text-primary font-semibold transition-colors">
                    {exp.title}
                  </h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {exp.description}
                </p>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/expertises"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground inline-flex items-center justify-center rounded-lg border bg-transparent px-8 py-3 font-semibold transition-all"
            >
              {expertise.viewAll}
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding from-primary/10 via-secondary/10 to-accent/10 bg-gradient-to-br">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">{cta.title}</h2>
          <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
            {cta.description}
          </p>
          <Link
            href="/contact"
            className="from-primary to-accent text-primary-foreground inline-flex items-center justify-center rounded-lg bg-gradient-to-r px-8 py-4 font-semibold transition-opacity hover:opacity-90"
          >
            {cta.cta}
          </Link>
        </div>
      </section>
    </>
  );
}
