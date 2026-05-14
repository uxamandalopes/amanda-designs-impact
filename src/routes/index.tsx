import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import portfolioCover from "@/assets/portfolio-cover.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Amanda Lopes — Product Designer Sênior" },
      {
        name: "description",
        content:
          "Product Designer Sênior com 4+ anos transformando problemas complexos em produtos digitais estratégicos. Discovery, IA aplicada e design baseado em dados.",
      },
      { property: "og:title", content: "Amanda Lopes — Product Designer Sênior" },
      {
        property: "og:description",
        content:
          "Portfólio de Amanda Lopes: estratégia, IA aplicada e produtos digitais B2B/B2C end-to-end.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap",
      },
    ],
  }),
  component: Index,
});

const approach = [
  "Discovery orientado a impacto",
  "Design baseado em dados",
  "Mediação entre negócio e tecnologia",
  "Priorização estratégica",
  "Facilitação de workshops",
  "Construção colaborativa",
  "UX Research quali/quanti",
  "Escalabilidade e consistência",
  "Handoff estruturado",
  "Visão sistêmica",
  "IA aplicada a produtos digitais",
];

function Index() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-background text-foreground font-sans antialiased overflow-x-hidden">
      {/* Ambient background */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-40 -right-40 w-[640px] h-[640px] rounded-full bg-brand/15 blur-[140px]" />
        <div className="absolute top-[40%] -left-40 w-[520px] h-[520px] rounded-full bg-brand/[0.07] blur-[140px]" />
        <div className="absolute bottom-[-10%] right-[10%] w-[480px] h-[480px] rounded-full bg-[#B152E0]/[0.06] blur-[140px]" />
      </div>

      {/* Floating pill header */}
      <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
        <nav
          className={`flex items-center gap-1 px-1.5 py-1.5 backdrop-blur-xl border rounded-full transition-all duration-500 ${
            scrolled
              ? "bg-white/[0.06] border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.25)]"
              : "bg-card/70 border-white/[0.08] shadow-[0_12px_40px_rgba(0,0,0,0.45)]"
          }`}
        >
          <a
            href="#sobre"
            className="text-[13px] font-medium px-5 py-2 rounded-full text-foreground/80 hover:text-foreground hover:bg-white/5 transition-colors"
          >
            Sobre mim
          </a>
          <a
            href="#cases"
            className="text-[13px] font-medium px-5 py-2 rounded-full text-foreground/80 hover:text-foreground hover:bg-white/5 transition-colors"
          >
            Cases
          </a>
          <a
            href="#contato"
            className="text-[13px] font-medium px-5 py-2 rounded-full text-foreground/80 hover:text-foreground hover:bg-white/5 transition-colors"
          >
            Contato
          </a>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto px-6 pt-40 pb-24">
        {/* Sobre Mim */}
        <section id="sobre" className="mb-40 scroll-mt-28">
          <div className="inline-flex items-center gap-2 mb-8 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-sm">
            <span className="size-1.5 rounded-full bg-brand shadow-[0_0_10px_var(--brand)] animate-pulse" />
            <span className="text-[11px] uppercase tracking-[0.18em] text-foreground/70 font-medium">
              Disponível para novos desafios
            </span>
          </div>

          <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight mb-14 max-w-4xl leading-[1.04] text-balance">
            Transformando problemas complexos em produtos digitais{" "}
            <span className="relative text-brand">
              estratégicos
              <span className="absolute inset-x-0 -bottom-1 h-3 bg-brand/25 blur-xl" />
            </span>
            .
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-7 space-y-6">
              <p className="text-lg md:text-xl text-foreground/75 leading-relaxed">
                Sou <span className="text-foreground font-medium">Amanda</span>, Product
                Designer Sênior com 4+ anos de experiência no desenvolvimento de produtos
                digitais B2B e B2C, conectando estratégia de negócio, tecnologia e
                experiência do usuário para construir soluções com impacto real.
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Atuo em contextos complexos e orientados a dados, conduzindo iniciativas
                end-to-end, da descoberta à entrega, com forte colaboração entre áreas,
                mediação de stakeholders e foco em escalabilidade, eficiência operacional e
                evolução contínua dos produtos. Meu background técnico fortalece minhas
                trocas com engenharia e contribui para entregas mais alinhadas, estruturadas
                e viáveis.
              </p>
            </div>

            <div className="md:col-span-5 group relative">
              <div className="absolute -inset-px rounded-3xl bg-gradient-to-b from-brand/30 via-brand/5 to-transparent opacity-60 blur-md transition duration-700 group-hover:opacity-100" />
              <div className="relative bg-white/[0.025] backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)]">
                <h2 className="font-display text-sm font-semibold mb-7 text-brand uppercase tracking-[0.16em] flex items-center gap-3">
                  <span className="size-1.5 rounded-full bg-brand shadow-[0_0_10px_var(--brand)]" />
                  Minha abordagem de produto
                </h2>
                <ul className="space-y-3.5">
                  {approach.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-sm text-foreground/85 hover:text-foreground transition-colors"
                    >
                      <span className="size-1.5 rounded-full bg-brand shadow-[0_0_8px_var(--brand)] shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Cases */}
        <section id="cases" className="mb-40 scroll-mt-28">
          <div className="flex items-end gap-6 mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-brand">
              Cases &amp; Experiência
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-white/15 to-transparent mb-3" />
            <span className="hidden md:block text-[10px] uppercase tracking-[0.24em] text-muted-foreground/70 mb-3 font-mono">
              Selected Works
            </span>
          </div>

          <div className="max-w-3xl space-y-5 text-muted-foreground leading-relaxed mb-16">
            <p>
              Tenho experiência em produtos digitais voltados à eficiência operacional,
              automação e soluções com Inteligência Artificial, atuando de ponta a ponta em
              contextos complexos e de alta ambiguidade. Ao longo da minha trajetória, fiz
              a ponte entre negócio, produto e engenharia para transformar problemas
              complexos em soluções escaláveis, viáveis tecnicamente e centradas no
              usuário.
            </p>
            <p>
              Atuei em projetos como o{" "}
              <strong className="text-foreground font-medium">IA Ajuda</strong> e{" "}
              <strong className="text-foreground font-medium">IA GOV</strong>, focados em
              otimizar acesso à informação e reduzir esforço operacional através de IA,
              participando desde discovery e definição de requisitos até fluxos e
              experiência do produto.
            </p>
            <p>
              Também liderei a construção de uma{" "}
              <strong className="text-foreground font-medium">
                ferramenta de análise de avarias para a Porsche
              </strong>
              , onde usuários enviavam fotos de danos em veículos de corrida e a IA
              auxiliava na identificação de peças comprometidas e serviços necessários para
              reparo.
            </p>
            <p>
              Além disso, trabalhei na evolução de um{" "}
              <strong className="text-foreground font-medium">
                sistema de precificação em ambiente corporativo complexo
              </strong>
              , mediando áreas técnicas e de negócio, estruturando requisitos e priorizando
              soluções com foco em impacto, escalabilidade e usabilidade.
            </p>
          </div>

          <a
            href="https://www.figma.com/proto/XWi2ISKGtdxeRDK4QS0DoT/Product-Designer---Portfolio?node-id=32-13&t=P6R4vazo0rPNO39P-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=32%3A13"
            target="_blank"
            rel="noreferrer"
            className="group block relative"
          >
            <div className="absolute -inset-px rounded-[28px] bg-gradient-to-b from-brand/30 via-brand/10 to-transparent opacity-50 blur-md transition duration-700 group-hover:opacity-100" />
            <div className="relative overflow-hidden rounded-[28px] bg-white/[0.025] backdrop-blur-xl border border-white/10 transition-all duration-500 group-hover:border-brand/40">
              <div className="w-full aspect-[21/9] overflow-hidden">
                <img
                  src={portfolioCover}
                  alt="Capa do portfólio de cases de Amanda Lopes"
                  className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-8 flex items-center justify-between gap-6">
                <div>
                  <h3 className="text-xl md:text-2xl font-display font-semibold mb-2 tracking-tight">
                    Acesse meu portfólio completo
                  </h3>
                  <p className="text-muted-foreground text-sm md:text-base">
                    Confira o detalhamento dos processos, decisões e resultados dos
                    projetos.
                  </p>
                </div>
                <div className="size-12 shrink-0 rounded-full border border-white/15 flex items-center justify-center transition-all duration-300 group-hover:bg-brand group-hover:border-brand group-hover:text-brand-foreground group-hover:shadow-[0_0_24px_var(--brand)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                  <span className="text-lg">→</span>
                </div>
              </div>
            </div>
          </a>
        </section>

        {/* Contato */}
        <section id="contato" className="scroll-mt-28">
          <div className="relative rounded-[36px] border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent backdrop-blur-xl px-6 py-20 overflow-hidden">
            <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[520px] h-[260px] rounded-full bg-brand/15 blur-[120px]" />
            <div className="relative text-center mb-12">
              <h2 className="font-display text-4xl md:text-6xl font-bold mb-4 tracking-tight text-brand">
                Vamos conversar?
              </h2>
              <p className="text-muted-foreground font-medium tracking-[0.18em] uppercase text-xs">
                Aberta a novos desafios
              </p>
            </div>

            <div className="relative flex flex-wrap justify-center gap-3">
              <a
                href="https://www.linkedin.com/in/amandacristinalopes/"
                target="_blank"
                rel="noreferrer"
                className="px-7 py-4 bg-white/[0.04] border border-white/10 rounded-full text-sm font-semibold tracking-tight hover:bg-brand/10 hover:border-brand/40 transition-all hover:-translate-y-0.5"
              >
                LinkedIn
              </a>
              <a
                href="mailto:ux.amandalopes@gmail.com"
                className="px-7 py-4 bg-white/[0.04] border border-white/10 rounded-full text-sm font-semibold tracking-tight hover:bg-brand/10 hover:border-brand/40 transition-all hover:-translate-y-0.5"
              >
                ux.amandalopes@gmail.com
              </a>
              <a
                href="https://drive.google.com/file/d/1sqVri8qCDTvYG8VbZt5Ev6Z9VQUKrC_Y/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="px-7 py-4 bg-brand text-brand-foreground rounded-full text-sm font-bold tracking-tight hover:shadow-[0_0_28px_var(--brand)] transition-all hover:-translate-y-0.5"
              >
                Currículo PDF
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 text-center text-muted-foreground/60 text-xs">
        © 2026 Amanda Lopes — Product Designer Sênior
      </footer>
    </div>
  );
}
