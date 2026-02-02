import { Footer } from "@/components/footer";
import { SITE_CONTENT } from "@/lib/content";

export const metadata = {
  title: "Politique de confidentialité - Octopus Talent",
  description: "Politique de confidentialité du site Octopus Talent.",
};

export default function PrivacyPage() {
  const { privacy } = SITE_CONTENT;

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
            Politique de confidentialité
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="section-padding bg-background">
        <div className="text-muted-foreground mx-auto max-w-3xl space-y-8">
          <div>
            <h2 className="text-foreground mb-4 text-2xl font-bold">
              1. Introduction
            </h2>
            <p>
              Octopus Talent (ci-après « Nous ») attache une importance
              particulière à la protection de vos données personnelles. Cette
              politique de confidentialité explique comment nous collectons,
              utilisons et protégeons vos données lorsque vous utilisez notre
              site web.
            </p>
          </div>

          <div>
            <h2 className="text-foreground mb-4 text-2xl font-bold">
              2. Données collectées
            </h2>
            <p className="mb-3">
              Nous collectons les données personnelles suivantes :
            </p>
            <ul className="list-inside list-disc space-y-2">
              <li>
                Nom, prénom, email, numéro de téléphone (via les formulaires de
                contact)
              </li>
              <li>
                Adresse IP et données de navigation (via les logs du serveur)
              </li>
              <li>
                Informations relatives aux candidatures (CV, informations de
                profil)
              </li>
              <li>Données de cookies et technologies de suivi similaires</li>
            </ul>
          </div>

          <div>
            <h2 className="text-foreground mb-4 text-2xl font-bold">
              3. Utilisation des données
            </h2>
            <p className="mb-3">Vos données sont utilisées pour :</p>
            <ul className="list-inside list-disc space-y-2">
              <li>Répondre à vos demandes et requêtes de contact</li>
              <li>Traiter vos candidatures</li>
              <li>Améliorer notre site et nos services</li>
              <li>
                Vous envoyer des communications pertinentes (sur autorisation)
              </li>
              <li>Respecter nos obligations légales</li>
            </ul>
          </div>

          <div>
            <h2 className="text-foreground mb-4 text-2xl font-bold">
              4. Partage des données
            </h2>
            <p>
              Nous ne partageons vos données personnelles avec des tiers que
              dans les cas suivants :
            </p>
            <ul className="mt-3 list-inside list-disc space-y-2">
              <li>Pour respecter la loi ou une obligation légale</li>
              <li>Avec nos prestataires techniques (hébergeur, etc.)</li>
              <li>Avec votre consentement explicite</li>
            </ul>
          </div>

          <div>
            <h2 className="text-foreground mb-4 text-2xl font-bold">
              5. Sécurité des données
            </h2>
            <p>
              Nous mettons en place des mesures de sécurité techniques et
              organisationnelles pour protéger vos données contre l&apos;accès
              non autorisé, la modification ou la destruction. Cependant, aucune
              transmission sur internet n&apos;est totalement sécurisée.
            </p>
          </div>

          <div>
            <h2 className="text-foreground mb-4 text-2xl font-bold">
              6. Vos droits
            </h2>
            <p className="mb-3">
              Selon la législation applicable (notamment le RGPD), vous avez le
              droit de :
            </p>
            <ul className="list-inside list-disc space-y-2">
              <li>Accéder à vos données personnelles</li>
              <li>Corriger ou mettre à jour vos données</li>
              <li>Demander la suppression de vos données</li>
              <li>Vous opposer au traitement de vos données</li>
              <li>Demander la portabilité de vos données</li>
            </ul>
            <p className="mt-3">
              Pour exercer ces droits, contactez-nous à :
              contact@octopustalent.com
            </p>
          </div>

          <div>
            <h2 className="text-foreground mb-4 text-2xl font-bold">
              7. Durée de conservation
            </h2>
            <p>
              Vos données personnelles sont conservées aussi longtemps que
              nécessaire pour atteindre les objectifs mentionnés dans cette
              politique, ou selon les délais imposés par la loi. Pour les
              demandes de contact, nous conservons vos données pendant une durée
              maximale de 3 ans.
            </p>
          </div>

          <div>
            <h2 className="text-foreground mb-4 text-2xl font-bold">
              8. Cookies
            </h2>
            <p>
              Notre site utilise des cookies pour améliorer votre expérience.
              Vous pouvez gérer vos préférences de cookies à tout moment via les
              paramètres de votre navigateur.
            </p>
          </div>

          <div>
            <h2 className="text-foreground mb-4 text-2xl font-bold">
              9. Modifications de cette politique
            </h2>
            <p>
              Nous nous réservons le droit de modifier cette politique de
              confidentialité à tout moment. Les modifications entreront en
              vigueur dès leur publication sur ce site.
            </p>
          </div>

          <div>
            <h2 className="text-foreground mb-4 text-2xl font-bold">
              10. Contact
            </h2>
            <p>
              Pour toute question concernant cette politique de confidentialité
              ou pour exercer vos droits, veuillez nous contacter à :
              contact@octopustalent.com
            </p>
          </div>

          <div className="from-primary/5 via-secondary/5 to-accent/5 border-primary/20 mt-12 rounded-lg border bg-gradient-to-br p-6">
            <p className="text-sm">
              <strong>Dernière mise à jour :</strong> Février 2024
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
