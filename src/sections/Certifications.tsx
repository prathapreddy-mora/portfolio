import { Award } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { certifications } from "@/data/content";

export function Certifications() {
  return (
    <section id="certifications" className="mx-auto max-w-6xl px-6 py-28">
      <SectionHeading eyebrow="Proof of work" title="Certificates" />
      <div className="grid gap-4 md:grid-cols-3">
        {certifications.map((item) => (
          <article key={item.title} className="glass rounded-3xl p-6" data-cursor="hover">
            <div className="grid h-11 w-11 place-items-center rounded-2xl bg-sky-500/10 text-sky-600">
              <Award className="h-5 w-5" />
            </div>
            <h3 className="mt-5 font-semibold">{item.title}</h3>
            <p className="mt-1 text-sm text-slate-500">{item.issuer}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
