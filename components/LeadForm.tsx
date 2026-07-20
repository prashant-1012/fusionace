"use client";

import { useState, type FormEvent } from "react";
import { User, Mail, Phone, MapPin, CheckCircle2, AlertCircle } from "lucide-react";

type FormState = {
  name: string;
  email: string;
  phone: string;
  location: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const INITIAL_STATE: FormState = {
  name: "",
  email: "",
  phone: "",
  location: "",
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^[+]?[\d\s-]{7,15}$/;

function validate(values: FormState): FormErrors {
  const errors: FormErrors = {};

  if (!values.name.trim()) {
    errors.name = "Please enter your name.";
  }

  if (!values.email.trim()) {
    errors.email = "Please enter your email.";
  } else if (!EMAIL_REGEX.test(values.email.trim())) {
    errors.email = "Enter a valid email address.";
  }

  if (!values.phone.trim()) {
    errors.phone = "Please enter your phone number.";
  } else if (!PHONE_REGEX.test(values.phone.trim())) {
    errors.phone = "Enter a valid phone number.";
  }

  if (!values.location.trim()) {
    errors.location = "Tell us your preferred location or budget.";
  }

  return errors;
}

export default function LeadForm() {
  const [values, setValues] = useState<FormState>(INITIAL_STATE);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleChange =
    (field: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setValues((prev) => ({ ...prev, [field]: e.target.value }));
    };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setSubmitting(true);
    setSubmitError(null);

    try {
      const res = await fetch("/api/enquire", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error ?? "Something went wrong. Please try again.");
      }

      setSubmitted(true);
      setValues(INITIAL_STATE);
    } catch (err) {
      setSubmitError(
        err instanceof Error ? err.message : "Something went wrong. Please try again.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div
        id="enquire"
        className="flex flex-col items-center gap-3 rounded-2xl bg-white p-8 text-center shadow-xl"
      >
        <CheckCircle2 className="text-gold" size={40} />
        <h3 className="font-display text-xl font-semibold text-ink">
          Thank you!
        </h3>
        <p className="font-sans text-sm text-stone">
          We&apos;ve received your enquiry and one of our consultants will
          reach out to you shortly.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-2 font-sans text-sm font-semibold text-gold-dark underline underline-offset-2"
        >
          Submit another enquiry
        </button>
      </div>
    );
  }

  return (
    <form
      id="enquire"
      onSubmit={handleSubmit}
      noValidate
      className="flex flex-col gap-4 rounded-2xl bg-white p-6 shadow-xl sm:p-8"
    >
      <div>
        <h3 className="font-display text-xl font-semibold text-ink sm:text-2xl">
          Enquire Now
        </h3>
        <p className="mt-1 font-sans text-sm text-stone">
          Find the project that actually fits your life
        </p>
      </div>

      <Field
        icon={<User size={18} />}
        label="Your Name"
        name="name"
        type="text"
        value={values.name}
        onChange={handleChange("name")}
        error={errors.name}
        autoComplete="name"
      />

      <Field
        icon={<Mail size={18} />}
        label="Email"
        name="email"
        type="email"
        value={values.email}
        onChange={handleChange("email")}
        error={errors.email}
        autoComplete="email"
      />

      <Field
        icon={<Phone size={18} />}
        label="Phone Number"
        name="phone"
        type="tel"
        value={values.phone}
        onChange={handleChange("phone")}
        error={errors.phone}
        autoComplete="tel"
      />

      <Field
        icon={<MapPin size={18} />}
        label="Your Preferred Location/Budget"
        name="location"
        type="text"
        value={values.location}
        onChange={handleChange("location")}
        error={errors.location}
        autoComplete="off"
      />

      {submitError && (
        <p className="flex items-center gap-2 font-sans text-sm text-red-600">
          <AlertCircle size={16} className="shrink-0" />
          {submitError}
        </p>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="mt-2 w-full rounded-full bg-gold px-6 py-3 font-sans text-sm font-semibold text-white transition-colors hover:bg-gold-dark disabled:cursor-not-allowed disabled:opacity-60"
      >
        {submitting ? "Sending..." : "Enquire Now"}
      </button>
    </form>
  );
}

type FieldProps = {
  icon: React.ReactNode;
  label: string;
  name: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  autoComplete?: string;
};

function Field({
  icon,
  label,
  name,
  type,
  value,
  onChange,
  error,
  autoComplete,
}: FieldProps) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-1.5 block font-sans text-xs font-semibold uppercase tracking-wide text-stone"
      >
        {label}
      </label>
      <div className="flex items-center gap-2 rounded-lg border border-stone/20 bg-cream/40 px-3 py-2.5 focus-within:border-gold">
        <span className="text-stone">{icon}</span>
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          autoComplete={autoComplete}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${name}-error` : undefined}
          className="w-full bg-transparent font-sans text-sm text-ink placeholder:text-stone/60 focus:outline-none"
        />
      </div>
      {error && (
        <p id={`${name}-error`} className="mt-1 font-sans text-xs text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}
