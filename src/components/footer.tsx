import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-border/40 bg-card border-t">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-16 lg:px-8 lg:py-20">
        <div className="mb-8 grid grid-cols-2 gap-8 md:grid-cols-4">
          <div>
            <h3 className="text-foreground mb-4 font-semibold">Navigation</h3>
            <ul className="text-muted-foreground space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-primary transition-colors"
                >
                  À propos
                </Link>
              </li>
              <li>
                <Link
                  href="/expertises"
                  className="hover:text-primary transition-colors"
                >
                  Expertises
                </Link>
              </li>
              <li>
                <Link
                  href="/talents"
                  className="hover:text-primary transition-colors"
                >
                  Talents
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-foreground mb-4 font-semibold">Légal</h3>
            <ul className="text-muted-foreground space-y-2 text-sm">
              <li>
                <Link
                  href="/legal"
                  className="hover:text-primary transition-colors"
                >
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-primary transition-colors"
                >
                  Politique de confidentialité
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-foreground mb-4 font-semibold">Contact</h3>
            <ul className="text-muted-foreground space-y-2 text-sm">
              <li>
                <a
                  href="mailto:contact@octopustalent.com"
                  className="hover:text-primary transition-colors"
                >
                  contact@octopustalent.com
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/company/octopus-talent"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-foreground mb-4 font-semibold">
              Octopus Talent
            </h3>
            <p className="text-muted-foreground text-sm">
              ESN et Portage Salarial pour consultants IT, Data, IA et
              Cybersécurité.
            </p>
          </div>
        </div>

        <div className="border-border/40 border-t pt-8">
          <p className="text-muted-foreground text-center text-sm">
            © 2024 Octopus Talent. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
