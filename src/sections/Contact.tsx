import { useState } from "react";
import { useForm } from "react-hook-form";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { profile } from "@/data/content";
import { sendContactEmail, type ContactPayload } from "@/utils/email";

export function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactPayload>();
  const [status, setStatus] = useState<string>("");

  const onSubmit = async (values: ContactPayload) => {
    try {
      await sendContactEmail(values);
      setStatus("Message sent. Thank you — I will reply soon.");
      reset();
    } catch (error) {
      const message = error instanceof Error ? error.message : "Unable to send right now.";
      setStatus(message);
    }
  };

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-28">
      <SectionHeading eyebrow="Let's talk" title="Contact" />
      <div className="grid gap-10 md:grid-cols-[0.85fr_1.15fr]">
        <div className="grid gap-3">
          <ContactCard icon={Mail} label="Email" value={profile.email} href={`mailto:${profile.email}`} />
          <ContactCard icon={Phone} label="Phone" value={profile.phone} href={profile.phoneHref} />
          <ContactCard icon={Github} label="GitHub" value="prathapreddy-mora" href={profile.github} />
          <ContactCard icon={Linkedin} label="LinkedIn" value="Prathap Reddy Mora" href={profile.linkedin} />
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="glass rounded-3xl p-6">
          <label className="mb-4 block text-sm font-medium">
            Name
            <input
              className="mt-2 w-full rounded-2xl border border-white/40 bg-white/50 px-4 py-3 outline-none dark:bg-white/5"
              {...register("name", { required: "Please enter your name" })}
            />
            {errors.name ? <p className="mt-1 text-xs text-red-500">{errors.name.message}</p> : null}
          </label>
          <label className="mb-4 block text-sm font-medium">
            Email
            <input
              type="email"
              className="mt-2 w-full rounded-2xl border border-white/40 bg-white/50 px-4 py-3 outline-none dark:bg-white/5"
              {...register("email", { required: "Please enter your email" })}
            />
            {errors.email ? <p className="mt-1 text-xs text-red-500">{errors.email.message}</p> : null}
          </label>
          <label className="mb-5 block text-sm font-medium">
            Message
            <textarea
              rows={5}
              className="mt-2 w-full rounded-2xl border border-white/40 bg-white/50 px-4 py-3 outline-none dark:bg-white/5"
              {...register("message", { required: "Please enter a message" })}
            />
            {errors.message ? <p className="mt-1 text-xs text-red-500">{errors.message.message}</p> : null}
          </label>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-full bg-sky-600 py-3 text-sm font-semibold text-white disabled:opacity-60"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
          {status ? <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{status}</p> : null}
        </form>
      </div>
    </section>
  );
}

function ContactCard({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof Mail;
  label: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <div className="glass flex items-center gap-3 rounded-2xl p-4">
      <Icon className="h-5 w-5 text-sky-600" />
      <div>
        <p className="text-xs uppercase tracking-wider text-slate-500">{label}</p>
        <p className="text-sm font-semibold">{value}</p>
      </div>
    </div>
  );
  if (!href) return inner;
  return (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
      {inner}
    </a>
  );
}
