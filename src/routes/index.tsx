import { createFileRoute } from "@tanstack/react-router";
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
        href: "https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap",
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
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      {/* Floating pill header */}
      <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
        <nav className="flex items-center gap-2 px-2 py-2 bg-card/80 backdrop-blur-md border border-border rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
          <a
            href="#sobre"
            className="text-sm font-medium px-4 py-1.5 rounded-full hover:bg-secondary transition-colors"
          >
            Sobre mim
          </a>
          <a
            href="#cases"
            className="text-sm font-medium px-4 py-1.5 rounded-full hover:bg-secondary transition-colors"
          >
            Cases
          </a>
          <a
            href="#contato"
            className="text-sm font-medium px-4 py-1.5 rounded-full hover:bg-secondary transition-colors"
          >
            Contato
          </a>
        </nav>
      </header>

      <main className="max-w-5xl mx-auto px-6 pt-32 pb-24">
        {/* Sobre Mim */}
        <section id="sobre" className="mb-32 scroll-mt-28">
          <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight mb-12 max-w-4xl leading-[1.05] text-balance">
            Transformando problemas complexos em produtos digitais{" "}
            <span className="text-brand">estratégicos</span>.
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-7 space-y-6">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Sou Amanda, Product Designer Sênior com 4+ anos de experiência no
                desenvolvimento de produtos digitais B2B e B2C, conectando estratégia de
                negócio, tecnologia e experiência do usuário para construir soluções com
                impacto real.
              </p>
              <p className="text-base md:text-lg text-muted-foreground/80 leading-relaxed">
                Atuo em contextos complexos e orientados a dados, conduzindo iniciativas
                end-to-end, da descoberta à entrega, com forte colaboração entre áreas,
                mediação de stakeholders e foco em escalabilidade, eficiência operacional e
                evolução contínua dos produtos. Meu background técnico fortalece minhas
                trocas com engenharia e contribui para entregas mais alinhadas, estruturadas
                e viáveis.
              </p>
            </div>

            <div className="md:col-span-5 bg-card border border-border rounded-3xl p-8">
              <h2 className="font-display text-xl font-semibold mb-6">
                Minha abordagem de produto
              </h2>
              <ul className="space-y-3.5">
                {approach.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-sm text-foreground/85"
                  >
                    <span className="size-1.5 rounded-full bg-brand shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Cases */}
        <section id="cases" className="mb-32 scroll-mt-28">
          <div className="border-t border-border pt-12 mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-8">
              Cases & Experiência
            </h2>
            <div className="max-w-3xl space-y-5 text-muted-foreground leading-relaxed">
              <p>
                Tenho experiência em produtos digitais voltados à eficiência operacional,
                automação e soluções com Inteligência Artificial, atuando de ponta a ponta
                em contextos complexos e de alta ambiguidade. Ao longo da minha trajetória,
                fiz a ponte entre negócio, produto e engenharia para transformar problemas
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
                auxiliava na identificação de peças comprometidas e serviços necessários
                para reparo.
              </p>
              <p>
                Além disso, trabalhei na evolução de um{" "}
                <strong className="text-foreground font-medium">
                  sistema de precificação em ambiente corporativo complexo
                </strong>
                , mediando áreas técnicas e de negócio, estruturando requisitos e
                priorizando soluções com foco em impacto, escalabilidade e usabilidade.
              </p>
            </div>
          </div>

          <a
            href="https://www.linkedin.com/in/amandacristinalopes/"
            target="_blank"
            rel="noreferrer"
            className="group block relative"
          >
            <div className="relative overflow-hidden rounded-3xl bg-card border border-border transition-all duration-500 hover:border-brand/50">
              <div className="w-full aspect-[21/9] overflow-hidden">
                <img
                  src={portfolioCover}
                  alt="Capa do portfólio de cases de Amanda Lopes"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-8 flex items-center justify-between gap-6">
                <div>
                  <h3 className="text-xl md:text-2xl font-display font-semibold mb-2">
                    Acesse meu portfólio completo
                  </h3>
                  <p className="text-muted-foreground text-sm md:text-base">
                    Confira o detalhamento dos processos, decisões e resultados dos
                    projetos.
                  </p>
                </div>
                <div className="size-12 shrink-0 rounded-full border border-border flex items-center justify-center group-hover:bg-brand group-hover:border-brand group-hover:text-brand-foreground transition-all">
                  <span className="text-xl">→</span>
                </div>
              </div>
            </div>
          </a>
        </section>

        {/* Contato */}
        <section id="contato" className="border-t border-border pt-24 scroll-mt-28">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 tracking-tight">
              Vamos conversar?
            </h2>
            <p className="text-brand font-medium tracking-wide uppercase text-sm">
              Aberta a novos desafios
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://www.linkedin.com/in/amandacristinalopes/"
              target="_blank"
              rel="noreferrer"
              className="px-7 py-4 bg-card border border-border rounded-2xl text-sm font-semibold tracking-tight hover:bg-brand/10 hover:border-brand/30 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="mailto:ux.amandalopes@gmail.com"
              className="px-7 py-4 bg-card border border-border rounded-2xl text-sm font-semibold tracking-tight hover:bg-brand/10 hover:border-brand/30 transition-colors"
            >
              ux.amandalopes@gmail.com
            </a>
            <a
              href="https://drive.google.com/file/d/1sqVri8qCDTvYG8VbZt5Ev6Z9VQUKrC_Y/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="px-7 py-4 bg-foreground text-background rounded-2xl text-sm font-bold tracking-tight hover:bg-brand hover:text-brand-foreground transition-colors"
            >
              Currículo PDF
            </a>
          </div>
        </section>
      </main>

      <footer className="py-12 text-center text-muted-foreground/60 text-xs border-t border-border/50">
        © 2026 Amanda Lopes — Product Designer Sênior
      </footer>
    </div>
  );
}
