"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { ArrowUpRight, Check } from "lucide-react";
import type { NewsletterFormProps } from "@/components/newsletter/Newsletter.types";
import { NEWSLETTER_LABELS } from "@/components/newsletter/Newsletter.constants";

export function Newsletter({ className = "" }: NewsletterFormProps) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <form className={`newsletter ${className}`} onSubmit={handleSubmit}>
      <label htmlFor="newsletter-email">{NEWSLETTER_LABELS.email}</label>
      {submitted ? (
        <div className="newsletter-success" role="status">
          <Check size={16} />
          <span>{NEWSLETTER_LABELS.success}</span>
        </div>
      ) : (
        <div>
          <input
            id="newsletter-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder={NEWSLETTER_LABELS.placeholder}
          />
          <button type="submit" aria-label={NEWSLETTER_LABELS.submit}>
            <ArrowUpRight size={20} />
          </button>
        </div>
      )}
    </form>
  );
}
