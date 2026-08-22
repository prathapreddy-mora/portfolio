import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { blogs } from "@/data/content";

export function Blog() {
  return (
    <section id="blog" className="mx-auto max-w-6xl px-6 py-28">
      <SectionHeading eyebrow="Journal" title="Blog" description="Short notes from building, learning, and competing." />
      <div className="grid gap-5 md:grid-cols-2">
        {blogs.map((post) => (
          <motion.article
            key={post.title}
            whileHover={{ y: -6 }}
            className="glass overflow-hidden rounded-3xl"
            data-cursor="hover"
          >
            <img src={post.image} alt="" loading="lazy" className="h-44 w-full object-cover transition duration-500 hover:scale-105" />
            <div className="p-6">
              <p className="text-[11px] tracking-[0.2em] text-sky-600 uppercase">{post.date}</p>
              <h3 className="font-display mt-3 text-2xl">{post.title}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-500">{post.excerpt}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
