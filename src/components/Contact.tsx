"use client";

import React, { useState } from "react";
import {
  FiMail,
  FiPhone,
  FiCopy,
  FiCheck,
  FiSend,
  FiArrowUpRight,
  FiMapPin,
  FiClock,
  FiMessageSquare,
  FiLinkedin,
  FiGithub,
} from "react-icons/fi";
import { SiWhatsapp, SiX } from "react-icons/si";

export default function Contact() {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const emailAddress = "abdulwahid.contact@gmail.com";
  const phoneNumber = "+8801849450075";
  const whatsappNumber = "+8801849450075"; // format without spaces or symbols for wa.me

  const socialLinks = [
    {
      name: "LinkedIn",
      handle: "/in/abdul-wahid789",
      href: "https://www.linkedin.com/in/abdul-wahid789",
      icon: FiLinkedin,
    },
    {
      name: "X (Twitter)",
      handle: "@abdul_wahid789",
      href: "https://x.com/abdul_wahid789", // update with your exact X handle
      icon: SiX,
    },
    {
      name: "GitHub",
      handle: "@abdul-wahid789",
      href: "https://github.com/abdul-wahid789",
      icon: FiGithub,
    },
  ];

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (res.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        console.error("Server responded with error:", data);
        alert(data.error || "Failed to send message.");
      }
    } catch (error) {
      console.error("Network or submission error:", error);
      alert("An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative w-full border-t border-border py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">

        {/* Section Header */}
        <div className="flex flex-col items-start gap-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-secondary px-4 py-1.5 text-xs font-semibold tracking-wider text-primary uppercase shadow-xs">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            <span className="font-mono">04 // GET IN TOUCH</span>
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Let&apos;s build something <span className="text-primary">exceptional together.</span>
          </h2>
          <p className="max-w-2xl text-base text-muted-foreground">
            Have a project in mind, an engineering role open, or just want to discuss modern web architecture? My inbox and channels are always open.
          </p>
        </div>

        {/* Main Grid: Contact Channels (Left) & Interactive Form (Right) */}
        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-12">

          {/* Left Column: Direct Connection Hub (5 Cols) */}
          <div className="flex flex-col justify-between gap-6 lg:col-span-5">
            <div className="space-y-3.5">

              {/* Channel 1: Email Card */}
              <div className="group rounded-3xl border border-border bg-card p-4.5 shadow-xs transition-all duration-300 hover:border-primary/50 hover:shadow-sm sm:p-5">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3.5">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-secondary text-primary transition-transform group-hover:scale-105">
                      <FiMail className="text-xl" />
                    </div>
                    <div>
                      <p className="font-mono text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                        Email Address
                      </p>
                      <a
                        href={`mailto:${emailAddress}`}
                        className="text-sm font-bold text-foreground transition-colors hover:text-primary sm:text-base"
                      >
                        {emailAddress}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={() => handleCopy(emailAddress, "email")}
                    aria-label="Copy Email"
                    className="flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-background/80 text-muted-foreground transition-all hover:border-primary hover:text-primary active:scale-95"
                  >
                    {copiedField === "email" ? (
                      <FiCheck className="text-sm text-primary" />
                    ) : (
                      <FiCopy className="text-sm" />
                    )}
                  </button>
                </div>
              </div>

              {/* Channel 2: WhatsApp Card */}
              <div className="group rounded-3xl border border-border bg-card p-4.5 shadow-xs transition-all duration-300 hover:border-primary/50 hover:shadow-sm sm:p-5">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3.5">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-600 transition-transform group-hover:scale-105 dark:bg-emerald-500/20 dark:text-emerald-400">
                      <SiWhatsapp className="text-xl" />
                    </div>
                    <div>
                      <p className="font-mono text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                        WhatsApp (Instant Chat)
                      </p>
                      <a
                        href={`https://wa.me/${whatsappNumber}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-bold text-foreground transition-colors hover:text-primary sm:text-base"
                      >
                        {phoneNumber}
                      </a>
                    </div>
                  </div>

                  <a
                    href={`https://wa.me/${whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Chat on WhatsApp"
                    className="flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-background/80 text-muted-foreground transition-all hover:border-primary hover:text-primary active:scale-95"
                  >
                    <FiArrowUpRight className="text-base" />
                  </a>
                </div>
              </div>

              {/* Channel 3: Direct Phone Card */}
              <div className="group rounded-3xl border border-border bg-card p-4.5 shadow-xs transition-all duration-300 hover:border-primary/50 hover:shadow-sm sm:p-5">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3.5">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-secondary text-primary transition-transform group-hover:scale-105">
                      <FiPhone className="text-xl" />
                    </div>
                    <div>
                      <p className="font-mono text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                        Direct Phone
                      </p>
                      <a
                        href={`tel:${phoneNumber}`}
                        className="text-sm font-bold text-foreground transition-colors hover:text-primary sm:text-base"
                      >
                        {phoneNumber}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={() => handleCopy(phoneNumber, "phone")}
                    aria-label="Copy Phone Number"
                    className="flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-background/80 text-muted-foreground transition-all hover:border-primary hover:text-primary active:scale-95"
                  >
                    {copiedField === "phone" ? (
                      <FiCheck className="text-sm text-primary" />
                    ) : (
                      <FiCopy className="text-sm" />
                    )}
                  </button>
                </div>
              </div>

              {/* Social Network Profiles Dock */}
              <div className="rounded-3xl border border-border bg-card p-4.5 shadow-xs sm:p-5">
                <p className="font-mono text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                  Connect on Socials
                </p>
                <div className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-3">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-between rounded-2xl border border-border bg-background/60 p-3 transition-all hover:border-primary/50 hover:bg-secondary/40"
                      >
                        <div className="flex items-center gap-2.5 min-w-0">
                          <Icon className="shrink-0 text-base text-muted-foreground transition-colors group-hover:text-primary" />
                          <span className="truncate text-xs font-semibold text-foreground">
                            {social.name}
                          </span>
                        </div>
                        <FiArrowUpRight className="shrink-0 text-xs text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                      </a>
                    );
                  })}
                </div>
              </div>

            </div>

            {/* Timezone & Location Status Card */}
            <div className="rounded-3xl border border-border bg-secondary/30 p-5 shadow-xs">
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="flex items-center gap-2 font-medium text-foreground">
                    <FiMapPin className="text-primary text-sm" />
                    <span>Savar, Dhaka, Bangladesh</span>
                  </span>
                  <span className="font-mono text-muted-foreground">
                    UTC+6 (BST)
                  </span>
                </div>

                <div className="flex items-center gap-2 pt-2 border-t border-border/60 text-xs text-muted-foreground">
                  <FiClock className="text-primary" />
                  <span>Typically responds within <strong className="text-foreground font-semibold">1 hour</strong></span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Direct Message Box (7 Cols) */}
          <div className="rounded-3xl border border-border bg-card p-6 shadow-xs sm:p-8 lg:col-span-7">
            <div className="flex items-center gap-2 border-b border-border pb-4">
              <FiMessageSquare className="text-primary text-base" />
              <h3 className="text-base font-bold text-foreground">
                Send a Direct Message
              </h3>
            </div>

            {submitted ? (
              <div className="flex min-h-[340px] flex-col items-center justify-center text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary text-primary shadow-xs">
                  <FiCheck className="text-2xl" />
                </div>
                <h4 className="mt-4 text-xl font-bold text-foreground">
                  Message Sent Successfully!
                </h4>
                <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                  Thank you for reaching out. I will review your note and get back to you promptly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 rounded-xl border border-border bg-background px-4 py-2 text-xs font-semibold text-foreground transition-all hover:border-primary"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="name"
                      className="font-mono text-xs font-semibold text-foreground"
                    >
                      Your Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Alex Turner"
                      className="rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="email"
                      className="font-mono text-xs font-semibold text-foreground"
                    >
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="alex@example.com"
                      className="rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="subject"
                    className="font-mono text-xs font-semibold text-foreground"
                  >
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    placeholder="Project Inquiry / Job Opportunity"
                    className="rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="message"
                    className="font-mono text-xs font-semibold text-foreground"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    placeholder="Tell me about your project, timeline, or requirements..."
                    className="resize-none rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-xs transition-all hover:opacity-90 active:scale-[0.99] disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <span className="font-mono text-xs">Transmitting message...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <FiSend className="text-sm" />
                    </>
                  )}
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}