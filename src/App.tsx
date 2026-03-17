import { useEffect, type CSSProperties, type FormEvent } from 'react'
import geesHero from './assets/gees-hero.webp'
import geesLogo from './assets/gees-logo.png'
import geesLogoWhite from './assets/gees-logo-white.png'
import heroArtwork from './assets/hero.png'
import './App.css'

const whatsappNumber = '5585984415490'
const clientAreaLink = 'https://gees.com.br/clientes/'
const instagramLink = 'https://www.instagram.com/gees_healthtech/'
const linkedinLink = 'https://www.linkedin.com/company/gees-healthtech/'
const youtubeLink = 'https://www.youtube.com/watch?v=mDQJsJ83v7I'
const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
  'Olá, quero mais informações sobre a GEES.',
)}`

const heroPills = [
  'ERP para saúde',
  'Financeiro assistido',
  'Contabilidade especializada',
  'Consultoria estratégica',
]

const heroHighlights = [
  {
    title: 'Clínicas, consultórios e day hospital',
    text: 'Fluxo pensado para a rotina real do setor de saúde e seus diferentes níveis de complexidade.',
  },
  {
    title: 'Software + serviços no mesmo ecossistema',
    text: 'Tecnologia, backoffice e gestão trabalhando em conjunto, sem operação fragmentada.',
  },
  {
    title: 'Mais clareza para decidir',
    text: 'Indicadores e relatórios para sair do improviso e conduzir a clínica com mais previsibilidade.',
  },
]

const proofItems = [
  {
    title: 'Atendimento',
    text: 'Agenda, jornada do paciente e operação clínica conectadas em um mesmo fluxo.',
  },
  {
    title: 'Financeiro',
    text: 'Rotinas de caixa, repasse e convênios com mais previsibilidade para a gestão.',
  },
  {
    title: 'Contábil',
    text: 'Relatórios e obrigações alinhados à realidade de clínicas e consultórios.',
  },
  {
    title: 'Consultoria',
    text: 'Diagnóstico, processo e acompanhamento para crescer com método.',
  },
]

const audienceProfiles = [
  {
    label: 'Consultórios',
    title: 'Comece com mais controle desde a primeira agenda',
    text: 'Evite o acúmulo de planilhas, retrabalho e rotinas soltas antes que isso vire gargalo.',
    points: [
      'Agenda e jornada do paciente organizadas',
      'Cobrança e rotina financeira menos manuais',
      'Base pronta para crescer com consistência',
    ],
  },
  {
    label: 'Clínicas em expansão',
    title: 'Padronize a operação antes que a complexidade tome conta',
    text: 'Conecte recepção, equipe clínica, faturamento e backoffice em uma estrutura única.',
    points: [
      'Processos mais previsíveis',
      'Menos ruído entre setores',
      'Gestão com menos retrabalho e mais ritmo',
    ],
  },
  {
    label: 'Day hospital',
    title: 'Ganhe coordenação entre atendimento, financeiro e gestão',
    text: 'Estruture uma operação com mais visibilidade, suporte especializado e acompanhamento contínuo.',
    points: [
      'Fluxos multi-equipe mais claros',
      'Indicadores gerenciais para acompanhar resultado',
      'Suporte consultivo para sustentar escala',
    ],
  },
]

const challengeAreas = [
  {
    value: '78%',
    title: 'Processos sem padrão',
    text: 'Sem rotina clara, a clínica fica refém de improviso, retrabalho e sobrecarga nas equipes.',
    response: [
      'Fluxos centralizados no ERP',
      'Menos atrito entre recepção, equipe clínica e financeiro',
    ],
  },
  {
    value: '63%',
    title: 'Baixa automação',
    text: 'Quando o sistema não sustenta a operação, tarefas manuais ocupam o tempo que deveria ir para o crescimento.',
    response: [
      'Operação mais digital e menos fragmentada',
      'Execução apoiada por tecnologia e rotina assistida',
    ],
  },
  {
    value: '74%',
    title: 'Gestão sem indicadores',
    text: 'A falta de leitura gerencial reduz a qualidade da decisão e atrasa movimentos estratégicos.',
    response: [
      'Relatórios pensados para gestão',
      'Mais visibilidade para agir antes do problema escalar',
    ],
  },
]

const operationModules = [
  {
    icon: 'patient-journey',
    title: 'Jornada do Paciente',
    text: 'Atendimento mais fluido para reduzir ruído entre recepção, equipe clínica e acompanhamento.',
  },
  {
    icon: 'telemedicine',
    title: 'Portal de Telemedicina',
    text: 'Leve a operação além da clínica física com um fluxo preparado para consultas remotas.',
  },
  {
    icon: 'billing',
    title: 'Faturamento de Convênios',
    text: 'Controle operacional e previsibilidade de repasse dentro do mesmo ecossistema.',
  },
  {
    icon: 'insights',
    title: 'Indicadores e Relatórios',
    text: 'Transforme rotina dispersa em leitura gerencial para agir com mais rapidez.',
  },
]

const solutions = [
  {
    tag: 'ERP',
    title: 'Sistema de Gestão para Clínicas',
    text: 'Assuma o controle da sua clínica com um ERP desenhado para o setor de saúde.',
    href: 'https://gees.com.br/software/',
    points: ['Operação centralizada', 'Fluxo pensado para saúde'],
  },
  {
    tag: 'CNT',
    title: 'Contabilidade para o Setor de Saúde',
    text: 'Combine a tecnologia do software GEES com serviços contábeis alinhados às necessidades da área.',
    href: 'https://gees.com.br/contabilidade/',
    points: ['Visão financeira mais clara', 'Backoffice menos fragmentado'],
  },
  {
    tag: 'BPO',
    title: 'Serviço de Back Office Financeiro',
    text: 'Delegue a execução operacional para profissionais preparados para rodar sua rotina com consistência.',
    href: 'https://gees.com.br/outsourcing',
    points: ['Rotina financeira assistida', 'Mais foco no crescimento'],
  },
  {
    tag: 'EXP',
    title: 'Consultoria em Estratégias e Processos',
    text: 'Eleve o padrão da clínica com apoio especializado para transformar operação em resultado.',
    href: 'https://gees.com.br/consultoria',
    points: ['Diagnóstico gerencial', 'Ajuste fino da operação'],
  },
]

const workflowSteps = [
  {
    step: '01',
    title: 'Leitura da operação',
    text: 'Entendemos os gargalos que travam atendimento, financeiro e gestão antes de desenhar a solução.',
  },
  {
    step: '02',
    title: 'Montagem do ecossistema',
    text: 'Combinamos software, serviços e apoio consultivo de acordo com o momento da sua clínica.',
  },
  {
    step: '03',
    title: 'Implantação acompanhada',
    text: 'A adoção acontece com método para reduzir atrito na rotina e acelerar ganho de consistência.',
  },
  {
    step: '04',
    title: 'Crescimento com indicador',
    text: 'A gestão passa a acompanhar resultado, ritmo operacional e próximos movimentos com mais clareza.',
  },
]

const faqs = [
  {
    question: 'A GEES é só um software?',
    answer:
      'Não. A proposta reúne sistema de gestão, contabilidade, back office financeiro e consultoria especializada.',
  },
  {
    question: 'Que parte da operação pode ser integrada?',
    answer:
      'Atendimento, jornada do paciente, portal de telemedicina, faturamento de convênios e leitura gerencial entram no mesmo raciocínio.',
  },
  {
    question: 'Para quem essa solução faz mais sentido?',
    answer:
      'Clínicas, consultórios e day hospital que precisam ganhar eficiência operacional e visão de resultado.',
  },
  {
    question: 'Como falo com o comercial?',
    answer:
      'Você pode chamar no WhatsApp comercial, ligar para o número principal ou enviar e-mail para contato@gees.com.br.',
  },
]

function App() {
  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>('[data-reveal]'),
    )

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      elements.forEach((element) => element.classList.add('in-view'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return
          }

          entry.target.classList.add('in-view')
          observer.unobserve(entry.target)
        })
      },
      {
        threshold: 0.14,
        rootMargin: '0px 0px -8% 0px',
      },
    )

    elements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [])

  const handleLeadSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const name = String(formData.get('name') ?? '').trim()
    const company = String(formData.get('company') ?? '').trim()
    const role = String(formData.get('role') ?? '').trim()
    const challenge = String(formData.get('challenge') ?? '').trim()

    const message = [
      'Olá, quero agendar uma demonstração da GEES.',
      name && `Nome: ${name}`,
      company && `Clínica/Empresa: ${company}`,
      role && `Função: ${role}`,
      challenge && `Desafio principal: ${challenge}`,
    ]
      .filter(Boolean)
      .join('\n')

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      '_blank',
      'noopener,noreferrer',
    )

    event.currentTarget.reset()
  }

  const getRevealStyle = (index: number) =>
    ({ ['--reveal-delay' as string]: `${index * 90}ms` }) as CSSProperties

  const renderOperationIcon = (icon: string) => {
    switch (icon) {
      case 'patient-journey':
        return (
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 3.1a4.05 4.05 0 1 1-4.05 4.05A4.05 4.05 0 0 1 12 3.1Zm0 10.45c3.73 0 6.95 1.8 6.95 4.28V20H5.05v-2.17c0-2.48 3.22-4.28 6.95-4.28Zm6.55-1.2h2.15a.6.6 0 0 1 .43 1.03l-1.73 1.78.6 2.28a.6.6 0 0 1-.88.67L17 16.82l-2.12 1.29a.6.6 0 0 1-.88-.67l.6-2.28-1.73-1.78a.6.6 0 0 1 .43-1.03h2.15l.95-2.22a.6.6 0 0 1 1.1 0Z" />
          </svg>
        )
      case 'telemedicine':
        return (
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M5 4.5h14A2.5 2.5 0 0 1 21.5 7v8A2.5 2.5 0 0 1 19 17.5H5A2.5 2.5 0 0 1 2.5 15V7A2.5 2.5 0 0 1 5 4.5Zm7.8 4.1a.9.9 0 0 0-1.2-.14l-3.05 2.18a.92.92 0 0 0 0 1.5l3.05 2.18a.9.9 0 0 0 1.42-.73V9.3a.9.9 0 0 0-.2-.7Zm3.45 9.35.92 1.55H6.83l.92-1.55Z" />
          </svg>
        )
      case 'billing':
        return (
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M7 3.5h10A2.5 2.5 0 0 1 19.5 6v12A2.5 2.5 0 0 1 17 20.5H7A2.5 2.5 0 0 1 4.5 18V6A2.5 2.5 0 0 1 7 3.5Zm2.25 4.15a.75.75 0 0 0 0 1.5h5.5a.75.75 0 0 0 0-1.5Zm0 3.65a.75.75 0 0 0 0 1.5h5.5a.75.75 0 0 0 0-1.5Zm0 3.65a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5Zm-4.15-1.3a2.9 2.9 0 1 1 0 5.8 2.9 2.9 0 0 1 0-5.8Zm0 1.25a.45.45 0 0 0-.45.45v1.45c0 .25.2.45.45.45h.95a.45.45 0 0 0 0-.9h-.5v-1a.45.45 0 0 0-.45-.45Z" />
          </svg>
        )
      case 'insights':
        return (
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M5.5 4A1.5 1.5 0 0 0 4 5.5v13A1.5 1.5 0 0 0 5.5 20h13a1.5 1.5 0 0 0 1.5-1.5v-13A1.5 1.5 0 0 0 18.5 4Zm.4 12.7a.8.8 0 0 1 0-1.13l3.15-3.15a.8.8 0 0 1 1.13 0l1.47 1.47 3.25-4.03a.8.8 0 1 1 1.24 1.01l-3.8 4.72a.8.8 0 0 1-1.18.07l-1.64-1.64-2.58 2.58a.8.8 0 0 1-1.13 0Z" />
          </svg>
        )
      default:
        return null
    }
  }

  return (
    <div className="page-shell">
      <header className="topbar-shell">
        <div className="container">
          <div className="topbar">
            <a className="brand" href="#inicio" aria-label="GEES Healthtech">
              <img src={geesLogo} alt="GEES Healthtech" />
            </a>

            <nav className="topnav" aria-label="Seções principais">
              <a href="#operacao">Operação</a>
              <a href="#solucoes">Soluções</a>
              <a href="#implantacao">Implantação</a>
              <a href="#contato">Contato</a>
            </nav>

            <div className="topbar-actions">
              <a
                className="button button-secondary button-compact"
                href={clientAreaLink}
                target="_blank"
                rel="noreferrer"
              >
                Sou cliente
              </a>
              <a
                className="button button-primary button-compact"
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
              >
                Agendar demo
              </a>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="hero-stage" id="inicio">
          <div className="container">
            <section className="hero-layout">
              <div className="hero-copy" data-reveal style={getRevealStyle(1)}>
                <span className="section-kicker section-kicker-light">
                  Ecossistema de gestão para saúde
                </span>

                <div className="hero-pills">
                  {heroPills.map((pill) => (
                    <span className="hero-pill" key={pill}>
                      {pill}
                    </span>
                  ))}
                </div>

                <h1>Você cuida do atendimento. A GEES organiza o resto.</h1>
                <p className="hero-text">
                  Agenda, jornada do paciente, financeiro, contabilidade e
                  consultoria no mesmo ecossistema para clínicas, consultórios e
                  day hospital.
                </p>

                <div className="hero-actions">
                  <a
                    className="button button-primary"
                    href={whatsappLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Falar com especialista
                  </a>
                  <a className="button button-ghost-light" href="#solucoes">
                    Ver soluções
                  </a>
                </div>

                <div className="hero-highlights">
                  {heroHighlights.map((item, index) => (
                    <article
                      className="hero-highlight"
                      key={item.title}
                      data-reveal
                      style={getRevealStyle(index + 2)}
                    >
                      <strong>{item.title}</strong>
                      <p>{item.text}</p>
                    </article>
                  ))}
                </div>
              </div>

              <div className="hero-visual" data-reveal style={getRevealStyle(2)}>
                <div className="preview-shell">
                  <article className="preview-card">
                    <div className="preview-head">
                      <div>
                        <span>Visão integrada da operação</span>
                        <strong>Do atendimento ao backoffice no mesmo fluxo</strong>
                      </div>
                    </div>

                    <div className="preview-main">
                      <img
                        src={geesHero}
                        alt="Painel da GEES integrado à rotina de atendimento"
                      />
                    </div>

                    <div className="preview-footer">
                      {proofItems.slice(0, 3).map((item) => (
                        <span className="preview-chip" key={item.title}>
                          {item.title}
                        </span>
                      ))}
                    </div>
                  </article>

                  <article
                    className="floating-note floating-note-top"
                    data-reveal
                    style={getRevealStyle(3)}
                  >
                    <span>{challengeAreas[0]?.value}</span>
                    <strong>{challengeAreas[0]?.title}</strong>
                  </article>

                  <article
                    className="floating-note floating-note-bottom"
                    data-reveal
                    style={getRevealStyle(4)}
                  >
                    <span>{challengeAreas[1]?.value}</span>
                    <strong>{challengeAreas[1]?.title}</strong>
                  </article>

                  <article
                    className="preview-stack"
                    data-reveal
                    style={getRevealStyle(5)}
                  >
                    <img src={heroArtwork} alt="" aria-hidden="true" />
                    <div>
                      <strong>Software + serviços</strong>
                      <span>
                        Estrutura feita para apoiar crescimento com método, e não só
                        colocar mais uma ferramenta na rotina.
                      </span>
                    </div>
                  </article>
                </div>
              </div>
            </section>
          </div>
        </section>

        <section className="proof-strip">
          <div className="container">
            <div className="proof-board" data-reveal>
              <div className="proof-copy" data-reveal>
                <span className="section-kicker">Ecossistema GEES</span>
                <h2>Tudo o que a clínica precisa para operar com mais previsibilidade</h2>
                <p>
                  A GEES conecta tecnologia, rotina financeira, contabilidade e
                  consultoria para reduzir a sensação de operação quebrada em várias
                  frentes.
                </p>
              </div>

              <div className="proof-grid">
                {proofItems.map((item, index) => (
                  <article
                    className="proof-item"
                    key={item.title}
                    data-reveal
                    style={getRevealStyle(index)}
                  >
                    <strong>{item.title}</strong>
                    <p>{item.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="operacao">
          <div className="container">
            <div className="section-header section-header-centered" data-reveal>
              <span className="section-kicker">Para cada fase da operação</span>
              <h2>A GEES acompanha sua clínica do começo à escala</h2>
              <p>
                A composição da solução muda conforme o estágio da operação, mas a
                lógica é a mesma: menos improviso, mais integração e gestão com rumo.
              </p>
            </div>

            <div className="audience-grid">
              {audienceProfiles.map((item, index) => (
                <article
                  className="audience-card"
                  key={item.title}
                  data-reveal
                  style={getRevealStyle(index)}
                >
                  <span className="card-tag">{item.label}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <ul className="feature-list" aria-label={`Destaques para ${item.label}`}>
                    {item.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-soft" id="desafios">
          <div className="container">
            <div className="section-header" data-reveal>
              <div>
                <span className="section-kicker">Cenário comum no mercado</span>
                <h2>Os gargalos que mais travam crescimento e resultado</h2>
              </div>
              <p>
                Esses três pontos resumem boa parte do que impede uma operação de
                saúde de ganhar ritmo, previsibilidade e poder de decisão.
              </p>
            </div>

            <div className="challenge-grid">
              {challengeAreas.map((item, index) => (
                <article
                  className="challenge-card"
                  key={item.title}
                  data-reveal
                  style={getRevealStyle(index)}
                >
                  <span className="challenge-value">{item.value}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>

                  <div className="challenge-response">
                    <span>Como a GEES atua</span>
                    <ul className="feature-list" aria-label={`Como a GEES atua em ${item.title}`}>
                      {item.response.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section ecosystem-shell">
          <div className="container">
            <div className="ecosystem-panel">
              <div className="ecosystem-copy" data-reveal>
                <span className="section-kicker section-kicker-light">
                  Operação conectada
                </span>
                <h2>
                  Do agendamento ao relatório gerencial, cada frente conversa entre si
                </h2>
                <p>
                  O ganho não está só no software. Está na forma como tecnologia,
                  execução financeira, contabilidade e gestão passam a rodar na mesma
                  direção.
                </p>

                <div className="ecosystem-tags">
                  {heroPills.map((pill) => (
                    <span className="ecosystem-tag" key={pill}>
                      {pill}
                    </span>
                  ))}
                </div>

                <a
                  className="button button-light"
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  Quero ver isso funcionando
                </a>
              </div>

              <div className="module-grid">
                {operationModules.map((item, index) => (
                  <article
                    className="module-card"
                    key={item.title}
                    data-reveal
                    style={getRevealStyle(index)}
                  >
                    <span className="module-icon" aria-hidden="true">
                      {renderOperationIcon(item.icon)}
                    </span>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="solucoes">
          <div className="container">
            <div className="section-header" data-reveal>
              <div>
                <span className="section-kicker">Portfólio GEES</span>
                <h2>Monte a combinação ideal para o momento da sua clínica</h2>
              </div>
              <p>
                A landing agora organiza as ofertas como um ecossistema de produto e
                serviço, em vez de longos blocos com leitura de artigo.
              </p>
            </div>

            <div className="solutions-grid">
              {solutions.map((item, index) => (
                <article
                  className="solution-card"
                  key={item.title}
                  data-reveal
                  style={getRevealStyle(index)}
                >
                  <span className="card-tag card-tag-accent">{item.tag}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <ul className="feature-list" aria-label={`Destaques de ${item.title}`}>
                    {item.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                  <a href={item.href} target="_blank" rel="noreferrer">
                    Conhecer solução
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-soft" id="implantacao">
          <div className="container">
            <div className="section-header section-header-centered" data-reveal>
              <span className="section-kicker">Como a jornada acontece</span>
              <h2>Uma implantação pensada para destravar, organizar e sustentar o crescimento</h2>
              <p>
                A página passa a mostrar um caminho mais claro para conversão: entender
                o cenário, encaixar a solução certa e acompanhar o resultado.
              </p>
            </div>

            <div className="process-grid">
              {workflowSteps.map((item, index) => (
                <article
                  className="process-card"
                  key={item.step}
                  data-reveal
                  style={getRevealStyle(index)}
                >
                  <span className="process-step">{item.step}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section contact-section" id="contato">
          <div className="container contact-layout">
            <div className="contact-copy" data-reveal>
              <span className="section-kicker">Fale com a GEES</span>
              <h2>Quer montar uma operação mais organizada e menos improvisada?</h2>
              <p>
                Chame no WhatsApp ou envie os dados ao lado para abrir uma conversa
                pronta com o comercial.
              </p>

              <div className="contact-cards">
                <article className="contact-card" data-reveal style={getRevealStyle(0)}>
                  <span className="contact-label">Comercial</span>
                  <a href="tel:+5585984415490">(85) 98441-5490</a>
                </article>
                <article className="contact-card" data-reveal style={getRevealStyle(1)}>
                  <span className="contact-label">Suporte</span>
                  <a href="tel:+5585981015490">(85) 98101-5490</a>
                </article>
                <article className="contact-card" data-reveal style={getRevealStyle(2)}>
                  <span className="contact-label">E-mail</span>
                  <a href="mailto:contato@gees.com.br">contato@gees.com.br</a>
                </article>
              </div>

              <div className="faq-panel" data-reveal style={getRevealStyle(3)}>
                <div className="faq-panel-header">
                  <h3>Dúvidas frequentes</h3>
                  <p>Respostas curtas para apoiar a decisão sem transformar a seção em texto corrido.</p>
                </div>

                <div className="faq-list">
                  {faqs.map((item) => (
                    <details className="faq-item" key={item.question}>
                      <summary>{item.question}</summary>
                      <p>{item.answer}</p>
                    </details>
                  ))}
                </div>
              </div>
            </div>

            <form
              className="lead-form"
              onSubmit={handleLeadSubmit}
              data-reveal
              style={getRevealStyle(1)}
            >
              <span className="form-eyebrow">Receba uma proposta inicial</span>
              <h3>Conte onde a operação trava hoje</h3>
              <p className="form-intro">
                Ao enviar, uma mensagem com os seus dados abre direto no WhatsApp do comercial.
              </p>

              <label>
                <span>Nome</span>
                <input name="name" type="text" placeholder="Seu nome" required />
              </label>

              <label>
                <span>Clínica ou empresa</span>
                <input name="company" type="text" placeholder="Nome da operação" required />
              </label>

              <label>
                <span>Função</span>
                <input name="role" type="text" placeholder="Ex.: Diretor, gestor, médico" />
              </label>

              <label>
                <span>Desafio principal</span>
                <textarea
                  name="challenge"
                  rows={4}
                  placeholder="Conte em uma frase o que hoje mais trava sua operação"
                />
              </label>

              <button className="button button-primary" type="submit">
                Enviar via WhatsApp
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <img src={geesLogoWhite} alt="GEES Healthtech" />
            <p>Razão Social - Gees Health Tech Soluções em Gestão Ltda</p>
            <p>53.050.460/0001-90</p>
            <p>
              Endereço: Rua Ary Barroso, 70, Sala 1104 - ITC Central Park - Papicu -
              Fortaleza - CE
            </p>
          </div>

          <div className="footer-column">
            <span className="footer-title">Navegação</span>
            <div className="footer-links">
              <a href="#inicio">Início</a>
              <a href="#operacao">Operação</a>
              <a href="#solucoes">Soluções</a>
              <a href="#contato">Contato</a>
            </div>
          </div>

          <div className="footer-column">
            <span className="footer-title">Fale conosco</span>
            <div className="footer-links">
              <a href="tel:+5585984415490">(85) 98441-5490 - Comercial</a>
              <a href="tel:+5585981015490">(85) 98101-5490 - Suporte</a>
              <a href="mailto:contato@gees.com.br">contato@gees.com.br</a>
              <a href={clientAreaLink} target="_blank" rel="noreferrer">
                Área do cliente
              </a>
            </div>

            <div className="footer-socials" aria-label="Redes sociais da GEES">
              <a href={instagramLink} target="_blank" rel="noreferrer" aria-label="Instagram">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 1.8A3.7 3.7 0 0 0 3.8 7.5v9a3.7 3.7 0 0 0 3.7 3.7h9a3.7 3.7 0 0 0 3.7-3.7v-9a3.7 3.7 0 0 0-3.7-3.7h-9Zm9.75 1.35a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2ZM12 6.8A5.2 5.2 0 1 1 6.8 12 5.2 5.2 0 0 1 12 6.8Zm0 1.8A3.4 3.4 0 1 0 15.4 12 3.4 3.4 0 0 0 12 8.6Z" />
                </svg>
              </a>
              <a href={linkedinLink} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M4.98 3.5A1.48 1.48 0 1 1 3.5 4.98 1.48 1.48 0 0 1 4.98 3.5ZM3.75 8.25h2.46V20.5H3.75Zm4.52 0h2.36v1.67h.03a2.59 2.59 0 0 1 2.34-1.28c2.5 0 2.96 1.64 2.96 3.78v8.08h-2.46v-7.16c0-1.71-.03-3.9-2.38-3.9-2.39 0-2.76 1.86-2.76 3.78v7.28H8.27Z" />
                </svg>
              </a>
              <a href={youtubeLink} target="_blank" rel="noreferrer" aria-label="YouTube">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M21.6 7.2a2.94 2.94 0 0 0-2.07-2.08C17.7 4.6 12 4.6 12 4.6s-5.7 0-7.53.52A2.94 2.94 0 0 0 2.4 7.2 30.7 30.7 0 0 0 2 12a30.7 30.7 0 0 0 .4 4.8 2.94 2.94 0 0 0 2.07 2.08C6.3 19.4 12 19.4 12 19.4s5.7 0 7.53-.52a2.94 2.94 0 0 0 2.07-2.08A30.7 30.7 0 0 0 22 12a30.7 30.7 0 0 0-.4-4.8ZM10.2 15.15V8.85L15.65 12Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="container footer-base">
          <p>© GEES Health Tech Soluções em Gestão Ltda</p>
          <a href="#inicio">Voltar ao topo</a>
        </div>
      </footer>
    </div>
  )
}

export default App
