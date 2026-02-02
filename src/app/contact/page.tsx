"use client";

import React from "react";
import { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
    message: "",
    rgpd: false,
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value, type } = e.target as HTMLInputElement;

    if (type === "checkbox") {
      setFormData((prev) => ({ ...prev, [name]: !prev.rgpd }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.rgpd) {
      alert("Veuillez accepter la politique de confidentialité");
      return;
    }

    setLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setSubmitted(true);
      setFormData({
        nom: "",
        prenom: "",
        email: "",
        telephone: "",
        message: "",
        rgpd: false,
      });

      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-lineaer-subtle relative flex min-h-75 items-center justify-center overflow-hidden md:min-h-100">
        <div className="absolute inset-0 opacity-20">
          <div className="bg-primary/20 animate-glow absolute -top-32 -left-32 h-72 w-72 rounded-full blur-3xl"></div>
          <div
            className="bg-accent/20 animate-glow absolute -right-32 -bottom-32 h-72 w-72 rounded-full blur-3xl"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="mb-4 text-3xl font-bold sm:text-4xl md:mb-6 md:text-5xl">
            Contactez-nous
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg md:text-xl">
            Nous sommes disponibles pour discuter de vos projets et enjeux
            technologiques
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="section-padding bg-background">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-muted-foreground text-base leading-relaxed sm:text-lg">
            Pour échanger sur vos projets, obtenir des informations ou planifier
            un premier contact, n&apos;hésitez pas à nous écrire. Nous
            reviendrons vers vous rapidement.
          </p>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="section-padding bg-card">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 sm:px-6 lg:grid-cols-3 lg:gap-12 lg:px-8">
          {/* Form */}
          <div className="lg:col-span-2">
            <h2 className="mb-6 text-2xl font-bold md:mb-8 md:text-3xl">
              Formulaire de contact
            </h2>

            {submitted && (
              <div className="mb-6 rounded-lg border border-green-200 bg-green-50 p-4 text-green-800 dark:border-green-800 dark:bg-green-950 dark:text-green-200">
                <p className="text-sm font-semibold md:text-base">
                  Message envoyé avec succès !
                </p>
                <p className="text-xs md:text-sm">
                  Nous reviendrons vers vous dans les meilleurs délais.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="nom"
                    className="text-foreground mb-2 block text-sm font-medium"
                  >
                    Nom
                  </label>
                  <input
                    type="text"
                    id="nom"
                    name="nom"
                    value={formData.nom}
                    onChange={handleChange}
                    required
                    className="border-border bg-background text-foreground placeholder-muted-foreground focus:ring-primary w-full rounded-lg border px-3 py-2 text-sm focus:ring-2 focus:outline-none sm:px-4"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label
                    htmlFor="prenom"
                    className="text-foreground mb-2 block text-sm font-medium"
                  >
                    Prénom
                  </label>
                  <input
                    type="text"
                    id="prenom"
                    name="prenom"
                    value={formData.prenom}
                    onChange={handleChange}
                    required
                    className="border-border bg-background text-foreground placeholder-muted-foreground focus:ring-primary w-full rounded-lg border px-3 py-2 text-sm focus:ring-2 focus:outline-none sm:px-4"
                    placeholder="Votre prénom"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="email"
                    className="text-foreground mb-2 block text-sm font-medium"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="border-border bg-background text-foreground placeholder-muted-foreground focus:ring-primary w-full rounded-lg border px-3 py-2 text-sm focus:ring-2 focus:outline-none sm:px-4"
                    placeholder="votre@email.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="telephone"
                    className="text-foreground mb-2 block text-sm font-medium"
                  >
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    id="telephone"
                    name="telephone"
                    value={formData.telephone}
                    onChange={handleChange}
                    className="border-border bg-background text-foreground placeholder-muted-foreground focus:ring-primary w-full rounded-lg border px-3 py-2 text-sm focus:ring-2 focus:outline-none sm:px-4"
                    placeholder="+33 6 XX XX XX XX"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="text-foreground mb-2 block text-sm font-medium"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="border-border bg-background text-foreground placeholder-muted-foreground focus:ring-primary w-full resize-none rounded-lg border px-3 py-2 text-sm focus:ring-2 focus:outline-none sm:px-4"
                  placeholder="Décrivez-nous votre projet ou question..."
                />
              </div>

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="rgpd"
                  name="rgpd"
                  checked={formData.rgpd}
                  onChange={handleChange}
                  className="accent-primary mt-1 h-4 w-4 shrink-0 cursor-pointer"
                />
                <label
                  htmlFor="rgpd"
                  className="text-muted-foreground text-xs sm:text-sm"
                >
                  J&apos;accepte la{" "}
                  <Link
                    href="/privacy"
                    className="text-primary font-medium hover:underline"
                  >
                    politique de confidentialité
                  </Link>{" "}
                  et autoriser Octopus Talent à me contacter.
                </label>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="from-primary to-accent text-primary-foreground bg-lineaer-to-r w-full rounded-lg px-6 py-3 text-sm font-semibold transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50 sm:px-8 sm:text-base"
              >
                {loading ? "Envoi en cours..." : "Envoyer"}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="mb-6 text-2xl font-bold md:mb-8 md:text-3xl">
              Coordonnées
            </h2>

            <div className="space-y-6 md:space-y-8">
              <div>
                <h3 className="text-foreground mb-2 text-sm font-semibold md:text-base">
                  Email
                </h3>
                <a
                  href="mailto:contact@octopustalent.com"
                  className="text-primary text-sm break-all hover:underline md:text-base"
                >
                  contact@octopustalent.com
                </a>
              </div>

              <div>
                <h3 className="text-foreground mb-3 text-sm font-semibold md:text-base">
                  Réseaux sociaux
                </h3>
                <a
                  href="https://linkedin.com/company/octopus-talent"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary inline-flex items-center gap-2 text-sm hover:underline md:text-base"
                >
                  <svg
                    className="h-5 w-5 shrink-0"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                  </svg>
                  LinkedIn
                </a>
              </div>

              <div className="from-primary/5 via-secondary/5 to-accent/5 border-primary/20 bg-lineaer-to-br rounded-lg border p-4 sm:p-6">
                <h3 className="text-foreground mb-2 text-sm font-semibold md:mb-3 md:text-base">
                  Besoin d&apos;assistance ?
                </h3>
                <p className="text-muted-foreground text-xs sm:text-sm">
                  Notre équipe est disponible du lundi au vendredi de 9h à 18h.
                  Nous nous efforçons de répondre à toutes les demandes dans les
                  24 heures.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
