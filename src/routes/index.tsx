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
        href: "https://fonts.googleapis.com/css2?family=Special+Elite&family=Inter:wght@300;400;500;600;700&display=swap",
      },
    ],
  }),
  component: Index,
});

const FIGMA_LINK =
  "https://www.figma.com/proto/XWi2ISKGtdxeRDK4QS0DoT/Product-Designer---Portfolio?node-id=32-13&t=P6R4vazo0rPNO39P-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=32%3A13";

type Block =
  | { kind: "p"; text: string }
  | { kind: "q"; text: string }
  | { kind: "a"; text: string };

const essay = {
  title: "O design que acontece fora do Figma.",
  lead: "Fiquei pensando em como criar um portfólio que realmente fizesse sentido com a realidade do meu trabalho e que não precisasse parecer tão sério.",
  motto: "Design é arte de pensar.",
  blocks: [
    {
      kind: "p",
      text: "Ao longo das entrevistas que participei, uma pergunta sempre apareceu: “Qual é o seu processo de design?”",
    },
    {
      kind: "p",
      text: "Por muito tempo, tentei encontrar a melhor maneira de responder. Talvez esperassem ouvir sobre discovery, pesquisa, definição, ideação, prototipação, testes e delivery. Tudo organizado, com começo, meio e fim.",
    },
    {
      kind: "q",
      text: "Mas a verdade é que o processo de design raramente acontece dessa forma.",
    },
    {
      kind: "p",
      text: "Existem variáveis. Escopo, urgência, orçamento, maturidade do produto, prioridades de negócio, limitações técnicas e até a disponibilidade das pessoas envolvidas. Nem sempre temos tempo, recursos ou autonomia para executar tudo como aprendemos na teoria.",
    },
    { kind: "q", text: "E tudo bem. Isso também é fazer design." },
    {
      kind: "p",
      text: "Às vezes, a realidade é sequer conseguir conversar com o usuário final. Sim, isso provavelmente seria decepcionante para a Amanda de 2021, que estudava design centrado no usuário e imaginava um cenário em que todas as decisões começariam com uma pesquisa bem estruturada.",
    },
    { kind: "a", text: "Mas e quando isso não é possível?" },
    { kind: "a", text: "A gente encontra outros caminhos." },
    {
      kind: "p",
      text: "Busca dados existentes, conversa com quem conhece a operação, analisa comportamentos, identifica riscos, trabalha com hipóteses e reconhece aquilo que ainda não sabe.",
    },
    {
      kind: "p",
      text: "Porque trabalhar com design não é simplesmente seguir um processo. É entender qual processo faz sentido para o problema que precisamos resolver, com os recursos que temos disponíveis.",
    },
    {
      kind: "p",
      text: "Outra frase que ouvi algumas vezes foi: “Escolha um produto em que você atuou de ponta a ponta e apresente no seu portfólio.”",
    },
    {
      kind: "p",
      text: "Mas existe uma questão importante nessa história: os produtos que desenvolvemos dentro das empresas não são nossos. Muitas vezes, não podemos compartilhar telas, informações estratégicas, dados internos ou decisões confidenciais.",
    },
    { kind: "a", text: "Então, o que sobra?" },
    {
      kind: "p",
      text: "Para mim, sobra justamente o que há de mais valioso: o conhecimento construído ao longo do caminho.",
    },
    {
      kind: "p",
      text: "As perguntas que fizemos. Os problemas que identificamos. As decisões que precisamos defender. As hipóteses que não se confirmaram. Os caminhos que abandonamos. As negociações, os aprendizados e os resultados que conseguimos alcançar.",
    },
    {
      kind: "p",
      text: "E em uma era em que a inteligência artificial consegue gerar interfaces visualmente impressionantes em poucos segundos, tenho me perguntado cada vez mais: o que realmente diferencia o trabalho de um designer?",
    },
    {
      kind: "q",
      text: "Acredito que a resposta está menos na quantidade de telas que conseguimos produzir e mais na nossa capacidade de compreender problemas, conectar perspectivas e tomar decisões conscientes.",
    },
  ] as Block[],
};

function Essay() {
  return (
    <div>
      <h1 className="font-display text-2xl md:text-[34px] font-bold tracking-tight text-brand mb-6 leading-[1.15]">
        {essay.title}
      </h1>

      <p className="text-lg md:text-xl text-foreground/90 leading-relaxed mb-8 max-w-2xl">
        {essay.lead}
      </p>

      <p className="font-display text-xl md:text-2xl text-brand mb-12 tracking-tight">
        {essay.motto}
      </p>

      <div className="space-y-6 max-w-2xl">
        {essay.blocks.map((block, i) => {
          if (block.kind === "q") {
            return (
              <blockquote
                key={i}
                className="border-l-2 border-brand/60 pl-5 py-1 text-lg md:text-xl text-brand font-medium leading-relaxed"
              >
                {block.text}
              </blockquote>
            );
          }
          if (block.kind === "a") {
            return (
              <p key={i} className="text-base md:text-lg text-foreground font-medium leading-relaxed pt-2">
                {block.text}
              </p>
            );
          }
          return (
            <p key={i} className="text-[15px] md:text-base text-muted-foreground leading-relaxed">
              {block.text}
            </p>
          );
        })}
      </div>
    </div>
  );
}

function Index() {
  return (
    <div className="relative min-h-screen bg-background text-foreground font-sans antialiased overflow-x-clip">
      {/* Ambient background */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-40 -right-40 w-[640px] h-[640px] rounded-full bg-brand/15 blur-[140px]" />
        <div className="absolute top-[40%] -left-40 w-[520px] h-[520px] rounded-full bg-brand/[0.07] blur-[140px]" />
        <div className="absolute bottom-[-10%] right-[10%] w-[480px] h-[480px] rounded-full bg-[#B152E0]/[0.06] blur-[140px]" />
      </div>

      <main className="max-w-6xl mx-auto px-6 pt-24 pb-24">
        {/* Sobre Mim — texto à esquerda, portfólio à direita */}
        <section id="sobre" className="mb-40 scroll-mt-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Esquerda — texto introdutório */}
            <div className="lg:col-span-7">
              <Essay />
            </div>

            {/* Direita — acesso ao portfólio com thumbnail */}
            <div className="lg:col-span-5">
              <div className="lg:sticky lg:top-32">
                <a
                  href={FIGMA_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="group relative block -rotate-[1.6deg] transition-transform duration-500 ease-out hover:rotate-0"
                >
                  {/* pilha de cards atrás */}
                  <div className="pointer-events-none absolute -bottom-2 left-4 right-[-10px] h-full rounded-[22px] border border-white/[0.06] bg-white/[0.02]" />
                  <div className="pointer-events-none absolute -bottom-1 left-2 right-[-5px] h-full rounded-[22px] border border-white/[0.08] bg-white/[0.03]" />

                  {/* glow */}
                  <div className="pointer-events-none absolute -inset-4 rounded-[30px] bg-gradient-to-b from-brand/25 via-brand/5 to-transparent opacity-50 blur-2xl transition duration-700 group-hover:opacity-100" />

                  <div className="relative overflow-hidden rounded-[22px] border border-white/10 bg-[#0b1116] shadow-[0_36px_90px_-40px_rgba(0,0,0,0.95)] transition-colors duration-500 group-hover:border-brand/40">
                    {/* barra da janela */}
                    <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.03] px-4 py-3">
                      <span className="size-2 rounded-full bg-brand/80" />
                      <span className="size-2 rounded-full bg-white/20" />
                      <span className="size-2 rounded-full bg-white/20" />
                      <span className="ml-2 flex-1 truncate rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                        figma.com · portfolio
                      </span>
                    </div>

                    {/* thumbnail */}
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={portfolioCover}
                        alt="Capa do portfólio de cases de Amanda Lopes"
                        className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.07]"
                        loading="lazy"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-75 transition-opacity duration-500 group-hover:opacity-90" />

                      {/* CTA que surge no hover */}
                      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                        <span className="flex translate-y-4 items-center gap-2 rounded-full bg-brand px-5 py-3 text-[13px] font-bold tracking-tight text-brand-foreground opacity-0 shadow-[0_0_34px_var(--brand)] transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                          Abrir portfólio
                          <span aria-hidden>→</span>
                        </span>
                      </div>

                      {/* brilho que atravessa */}
                      <div className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/[0.14] to-transparent opacity-0 transition-all duration-[900ms] ease-out group-hover:translate-x-[360%] group-hover:opacity-100" />
                    </div>

                    {/* rodapé do card */}
                    <div className="flex items-center justify-between gap-4 border-t border-white/10 bg-white/[0.02] px-5 py-4">
                      <div>
                        <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-brand">
                          Portfólio
                        </p>
                        <p className="mt-1 font-sans text-[15px] font-semibold tracking-tight">
                          Acesse meu portfólio completo
                        </p>
                      </div>
                      <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-white/15 text-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:border-brand group-hover:bg-brand group-hover:text-brand-foreground group-hover:shadow-[0_0_24px_var(--brand)]">
                        →
                      </span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contato */}
        <section id="contato" className="scroll-mt-28">
          <div className="relative rounded-[26px] border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent backdrop-blur-xl px-6 py-10 overflow-hidden">
            <div className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 w-[380px] h-[180px] rounded-full bg-brand/12 blur-[110px]" />
            <div className="relative text-center mb-8">
              <h2 className="font-display text-2xl md:text-[28px] font-bold mb-2 tracking-tight text-brand">
                Vamos conversar?
              </h2>
              <p className="text-muted-foreground font-medium tracking-[0.18em] uppercase text-[10px]">
                Aberta a novos desafios
              </p>
            </div>

            <div className="relative flex flex-wrap justify-center gap-2.5">
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
                href="https://drive.google.com/file/d/1S_6FPUhZs5zQvaIX3Xt8nJTU4RM-1Q9T/view?usp=sharing"
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
