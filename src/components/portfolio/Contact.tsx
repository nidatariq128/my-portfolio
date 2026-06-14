import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { SectionTitle } from "./About";
import { supabase } from "@/integrations/supabase/client";
import emailjs from "@emailjs/browser";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      subject: String(data.get("subject") ?? "").trim(),
      message: String(data.get("message") ?? "").trim(),
    };

    if (!payload.name || !payload.email || !payload.subject || !payload.message) {
      setStatus("error");
      setErrorMsg("Please fill in all fields.");
      return;
    }
    if (payload.message.length > 2000) {
      setStatus("error");
      setErrorMsg("Message is too long (max 2000 characters).");
      return;
    }

    try {
      // Save to Supabase
      const { error } = await supabase.from("contact_submissions").insert(payload);
      if (error) {
        console.error("Supabase error:", error);
        setStatus("error");
        setErrorMsg("Could not save to database. Please try the email link instead.");
        return;
      }

      // Send email via EmailJS
      console.log("Sending email with:", {
        serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
        templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      });

      const emailResult = await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      console.log("Email sent successfully:", emailResult);

      setStatus("sent");
      form.reset();
      setTimeout(() => setStatus("idle"), 4000);
    } catch (error: any) {
      console.error("Full error:", error);
      console.error("Error text:", error?.text);
      console.error("Error status:", error?.status);
      setStatus("error");
      setErrorMsg("Could not send email. Please try the email link instead.");
    }
  }

  return (
    <section id="contact" className="relative mx-auto max-w-7xl px-6 py-32">
      <SectionTitle eyebrow="05 — Contact" title="Let's build something brilliant" />

      <div className="mt-14 grid grid-cols-1 gap-4 lg:grid-cols-5">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-2 space-y-4"
        >
          <div className="bento-card glass-lime">
            <h3 className="font-display text-2xl font-bold">Get in touch</h3>
            <p className="mt-2 text-sm text-muted-foreground">Open to freelance, full-time and collaboration opportunities.</p>
          </div>
          {[
            { Icon: Mail, label: "Email", value: "nidatariq6nov@gmail.com", href: "mailto:nidatariq6nov@gmail.com" },
            { Icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/nidatariq0", href: "https://www.linkedin.com/in/nidatariq0" },
            { Icon: Github, label: "GitHub", value: "github.com/nidatariq128", href: "https://github.com/nidatariq128" },
            { Icon: MapPin, label: "Location", value: "Karachi, Pakistan" },
          ].map(({ Icon, label, value, href }) => (
            <a key={label} href={href ?? "#"} target={href?.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="bento-card flex items-center gap-4 hover:border-lime/40 transition-colors">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-lime/15 text-lime"><Icon className="h-5 w-5" /></span>
              <div className="min-w-0">
                <div className="text-xs uppercase tracking-widest text-muted-foreground">{label}</div>
                <div className="truncate font-medium">{value}</div>
              </div>
            </a>
          ))}
          <div className="flex gap-3">
            <a href="https://github.com/nidatariq128" target="_blank" rel="noreferrer" className="grid h-12 flex-1 place-items-center rounded-2xl glass text-muted-foreground hover:text-lime hover:border-lime/40 transition-colors">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://www.linkedin.com/in/nidatariq0" target="_blank" rel="noreferrer" className="grid h-12 flex-1 place-items-center rounded-2xl glass text-muted-foreground hover:text-lime hover:border-lime/40 transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          onSubmit={handleSubmit}
          className="bento-card lg:col-span-3 space-y-4"
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Field label="Full Name" name="name" placeholder="Jane Doe" />
            <Field label="Email" name="email" type="email" placeholder="you@email.com" />
          </div>
          <Field label="Subject" name="subject" placeholder="Project inquiry" />
          <div>
            <label className="text-xs uppercase tracking-widest text-muted-foreground">Message</label>
            <textarea required name="message" rows={5} maxLength={2000} placeholder="Tell me about your project..." className="mt-2 w-full resize-none rounded-2xl border border-white/8 bg-white/[0.02] px-4 py-3 text-sm outline-none transition-all focus:border-lime/50 focus:bg-lime/[0.03]" />
          </div>
          {status === "error" && (
            <p className="text-sm text-destructive">{errorMsg}</p>
          )}
          <button
            type="submit"
            disabled={status === "sending"}
            className="group inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-lime px-6 py-4 font-semibold text-black transition-all hover:scale-[1.01] hover:shadow-[0_0_40px_rgba(251,146,60,0.5)] disabled:opacity-60"
          >
            {status === "sending" && "Sending..."}
            {status === "sent" && "Message sent ✓"}
            {(status === "idle" || status === "error") && (
              <>Send Message <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" /></>
            )}
          </button>
          <p className="text-center text-xs text-muted-foreground">
            Your message is saved securely and Nida will reply to your email.
          </p>
        </motion.form>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", placeholder }: { label: string; name: string; type?: string; placeholder?: string }) {
  return (
    <div>
      <label className="text-xs uppercase tracking-widest text-muted-foreground">{label}</label>
      <input
        required
        type={type}
        name={name}
        placeholder={placeholder}
        className="mt-2 w-full rounded-2xl border border-white/8 bg-white/[0.02] px-4 py-3 text-sm outline-none transition-all focus:border-lime/50 focus:bg-lime/[0.03]"
      />
    </div>
  );
}
