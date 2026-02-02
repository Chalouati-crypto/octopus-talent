import { Footer } from "@/components/footer";
import { SITE_CONTENT } from "@/lib/content";

export const metadata = {
  title: "Mentions légales - Octopus Talent",
  description: "Mentions légales du site Octopus Talent.",
};

export default function LegalPage() {
  const { legal } = SITE_CONTENT;

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-subtle relative flex min-h-[300px] items-center justify-center">
        <div className="absolute inset-0 opacity-20">
          <div className="bg-primary/20 animate-glow absolute top-20 left-10 h-72 w-72 rounded-full blur-3xl"></div>
          <div
            className="bg-accent/20 animate-glow absolute right-10 bottom-20 h-72 w-72 rounded-full blur-3xl"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center md:px-6 lg:px-8">
          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Mentions légales
          </h1>
        </div>
      </section>
      {/* Content Section */}
      <section className="section-padding bg-background">
        <div className="text-muted-foreground mx-auto max-w-3xl space-y-8">
          <div>
            <h2 className="text-foreground mb-4 text-2xl font-bold">
              1. Informations sur l&apos;éditeur
            </h2>
            <div className="space-y-2">
              <p>
                <strong>Raison sociale :</strong> Octopus Talent
              </p>
              <p>
                <strong>Type d&apos;entité :</strong> SARL / SAS
              </p>
              <p>
                <strong>Secteur d&apos;activité :</strong> Conseil IT, Data, IA
                et Cybersécurité
              </p>
              <p>
                <strong>Adresse :</strong> À compléter
              </p>
              <p>
                <strong>Email :</strong> contact@octopustalent.com
              </p>
              <p>
                <strong>Numéro de SIRET :</strong> À compléter
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-foreground mb-4 text-2xl font-bold">
              2. Directeur de la publication
            </h2>
            <p>À compléter</p>
          </div>

          <div>
            <h2 className="text-foreground mb-4 text-2xl font-bold">
              3. Hébergeur du site
            </h2>
            <div className="space-y-2">
              <p>
                <strong>Nom de l&apos;hébergeur :</strong> Vercel
              </p>
              <p>
                <strong>Adresse :</strong> 340 S Lemon Ave, Walnut, CA 91789
              </p>
              <p>
                <strong>Site web :</strong> vercel.com
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-foreground mb-4 text-2xl font-bold">
              4. Propriété intellectuelle
            </h2>
            <p>
              Tous les contenus présents sur ce site (textes, images, logos,
              graphiques, marques) sont la propriété exclusive d&apos;Octopus
              Talent ou de ses partenaires. Toute reproduction, représentation,
              modification ou exploitation sans autorisation est interdite et
              constitue une contrefaçon.
            </p>
          </div>

          <div>
            <h2 className="text-foreground mb-4 text-2xl font-bold">
              5. Limitation de responsabilité
            </h2>
            <p>
              Octopus Talent s&apos;efforce de maintenir l&apos;exactitude des
              informations publiées sur ce site. Cependant, nous ne pouvons
              garantir l&apos;absence d&apos;erreurs, d&apos;omissions ou
              d&apos;inexactitudes. Octopus Talent décline toute responsabilité
              quant aux dommages directs ou indirects pouvant résulter de
              l&apos;accès ou de l&apos;utilisation de ce site.
            </p>
          </div>

          <div>
            <h2 className="text-foreground mb-4 text-2xl font-bold">
              6. Cookies
            </h2>
            <p>
              Ce site utilise des cookies pour améliorer l&apos;expérience
              utilisateur. Les cookies sont stockés localement sur votre
              navigateur. Vous pouvez les désactiver depuis les paramètres de
              votre navigateur.
            </p>
          </div>

          <div>
            <h2 className="text-foreground mb-4 text-2xl font-bold">
              7. Loi applicable
            </h2>
            <p>
              Ces conditions générales sont régies par la loi française. Tout
              litige sera soumis à la juridiction des tribunaux compétents.
            </p>
          </div>

          <div>
            <h2 className="text-foreground mb-4 text-2xl font-bold">
              8. Contact
            </h2>
            <p>
              Pour toute question relative à ces mentions légales, veuillez nous
              contacter à : contact@octopustalent.com
            </p>
          </div>
        </div>
      </section>
      <Footer /> {/* Close the main tag */}
    </>
  );
}
