"use client";

import React from "react";
import { useState } from "react";

export default function TalentsPage() {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
    message: "",
    cv: null as File | null,
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData((prev) => ({ ...prev, cv: e.target.files![0] }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("nom", formData.nom);
      formDataToSend.append("prenom", formData.prenom);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("telephone", formData.telephone);
      formDataToSend.append("message", formData.message);
      if (formData.cv) {
        formDataToSend.append("cv", formData.cv);
      }

      await new Promise((resolve) => setTimeout(resolve, 1000));

      setSubmitted(true);
      setFormData({
        nom: "",
        prenom: "",
        email: "",
        telephone: "",
        message: "",
        cv: null,
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
      <section className="bg-gradient-subtle relative flex min-h-[300px] items-center justify-center overflow-hidden md:min-h-[400px]">
        <div className="absolute inset-0 opacity-20">
          <div className="bg-primary/20 animate-glow absolute -top-32 -left-32 h-72 w-72 rounded-full blur-3xl"></div>
          <div
            className="bg-accent/20 animate-glow absolute -right-32 -bottom-32 h-72 w-72 rounded-full blur-3xl"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="mb-4 text-3xl font-bold sm:text-4xl md:mb-6 md:text-5xl">
            Rejoignez Octopus Talent
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg md:text-xl">
            Intégrez une structure qui place l&apos;expertise, l&apos;exigence
            et l&apos;engagement au cœur de chaque mission
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="section-padding bg-background">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-6 text-2xl font-bold md:mb-8 md:text-3xl lg:text-4xl">
            Introduction
          </h2>
          <p className="text-muted-foreground text-base leading-relaxed sm:text-lg">
            Rejoindre Octopus Talent, c&apos;est intégrer une structure qui
            place l&apos;expertise, l&apos;exigence et l&apos;engagement au cœur
            de chaque mission. Nous offrons un environnement où les consultants
            peuvent évoluer, être accompagnés et intervenir sur des projets qui
            valorisent réellement leurs compétences.
          </p>
        </div>
      </section>

      {/* Approach Section */}
      <section className="section-padding bg-card">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-6 text-2xl font-bold md:mb-8 md:text-3xl lg:text-4xl">
            Notre approche
          </h2>
          <div className="space-y-4 md:space-y-6">
            <div className="bg-background border-border/40 rounded-lg border p-4 md:p-6">
              <p className="text-foreground mb-2 text-sm font-semibold md:text-base">
                Maîtrise, clarté et responsabilité
              </p>
              <p className="text-muted-foreground text-sm md:text-base">
                Nous considérons chaque mission comme un engagement fondé sur la
                maîtrise, la clarté et la responsabilité.
              </p>
            </div>
            <div className="bg-background border-border/40 rounded-lg border p-4 md:p-6">
              <p className="text-foreground mb-2 text-sm font-semibold md:text-base">
                Profils valorisés
              </p>
              <p className="text-muted-foreground text-sm md:text-base">
                Nous valorisons les profils capables d&apos;allier expertise
                technique, compréhension des enjeux métiers et sens du service.
              </p>
            </div>
            <div className="bg-background border-border/40 rounded-lg border p-4 md:p-6">
              <p className="text-foreground mb-2 text-sm font-semibold md:text-base">
                Confiance et accompagnement
              </p>
              <p className="text-muted-foreground text-sm md:text-base">
                Notre approche repose sur la confiance, la transparence et un
                accompagnement régulier.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="section-padding bg-background">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-6 text-2xl font-bold md:mb-8 md:text-3xl lg:text-4xl">
            Ce que nous offrons
          </h2>
          <p className="text-muted-foreground text-base leading-relaxed sm:text-lg">
            Nous proposons un cadre qui valorise l&apos;expertise, la
            progression et la qualité des missions. L&apos;objectif : permettre
            à chacun de développer ses compétences et d&apos;intervenir sur des
            projets à forte valeur.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-card">
        <div className="mx-auto mb-8 max-w-2xl px-4 text-center sm:px-6 md:mb-12 lg:px-8">
          <h2 className="mb-4 text-2xl font-bold md:mb-6 md:text-3xl lg:text-4xl">
            Prêt à relever des défis ?
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg">
            Envie de progresser, de relever de nouveaux défis et
            d&apos;intervenir sur des projets exigeants ? Rejoignez Octopus
            Talent et évoluez dans un environnement qui valorise
            l&apos;expertise, la confiance et la progression.
          </p>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="section-padding bg-background">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-center text-2xl font-bold md:mb-12 md:text-3xl lg:text-4xl">
            Candidature spontanée
          </h2>

          {submitted && (
            <div className="mb-6 rounded-lg border border-green-200 bg-green-50 p-4 text-green-800 dark:border-green-800 dark:bg-green-950 dark:text-green-200">
              <p className="text-sm font-semibold md:text-base">
                Merci pour votre candidature !
              </p>
              <p className="text-xs md:text-sm">
                Nous reviendrons vers vous rapidement.
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
                rows={5}
                className="border-border bg-background text-foreground placeholder-muted-foreground focus:ring-primary w-full resize-none rounded-lg border px-3 py-2 text-sm focus:ring-2 focus:outline-none sm:px-4"
                placeholder="Parlez-nous de vous et de vos ambitions..."
              />
            </div>

            <div>
              <label
                htmlFor="cv"
                className="text-foreground mb-2 block text-sm font-medium"
              >
                CV (PDF)
              </label>
              <input
                type="file"
                id="cv"
                name="cv"
                onChange={handleFileChange}
                accept=".pdf"
                className="border-border bg-background text-foreground file:bg-primary file:text-primary-foreground w-full rounded-lg border px-3 py-2 text-sm file:cursor-pointer file:rounded file:border-0 file:px-3 file:py-1 sm:px-4"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="from-primary to-accent text-primary-foreground w-full rounded-lg bg-gradient-to-r px-6 py-3 text-sm font-semibold transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50 sm:px-8 sm:text-base"
            >
              {loading ? "Envoi en cours..." : "Envoyer ma candidature"}
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
