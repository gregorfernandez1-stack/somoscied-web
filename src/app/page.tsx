import Image from "next/image";

const soluciones = [
  {
    nombre: "SIGADOM",
    categoria: "Gestión académica integral",
    descripcion:
      "Centraliza la asistencia, las calificaciones, los boletines, los instrumentos de evaluación y otros procesos académicos del centro educativo.",
    imagen: "/logo-sigadom.png",
    enlace: "https://sigadom.com",
    etiqueta: "Gestión académica",
  },
  {
    nombre: "LectuPlay",
    categoria: "Lectura y escritura gamificada",
    descripcion:
      "Fortalece la comprensión lectora y la producción escrita mediante experiencias dinámicas, puntos, insignias, rachas y seguimiento del progreso.",
    imagen: "/logo-lectuplay.png",
    enlace: "https://lectuplay.com",
    etiqueta: "Aprendizaje",
  },
  {
    nombre: "TuPlanEFI",
    categoria: "Planificación para Educación Física",
    descripcion:
      "Facilita la creación de planificaciones, situaciones de aprendizaje, actividades e instrumentos de evaluación para docentes de Educación Física.",
    imagen: "/logo-tuplanefi.png",
    enlace: "https://tuplanefi.com",
    etiqueta: "Planificación docente",
  },
];

const beneficios = [
  {
    numero: "01",
    titulo: "Innovación educativa",
    descripcion:
      "Desarrollamos soluciones que responden a los retos reales de docentes, estudiantes y centros educativos.",
  },
  {
    numero: "02",
    titulo: "Tecnología funcional",
    descripcion:
      "Creamos herramientas intuitivas, accesibles y orientadas a simplificar los procesos educativos.",
  },
  {
    numero: "03",
    titulo: "Ecosistema integrado",
    descripcion:
      "Reunimos distintas soluciones educativas bajo una misma visión de transformación digital.",
  },
  {
    numero: "04",
    titulo: "Acompañamiento",
    descripcion:
      "Promovemos una implementación cercana, organizada y enfocada en las necesidades de cada institución.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-slate-950">
      {/* Navegación */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#061b3a]/80 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
          <a
            href="#inicio"
            className="flex items-center gap-3"
            aria-label="Ir al inicio de CIED"
          >
            <Image
              src="/logo-cied.png"
              alt="CIED - Centro de Innovación Educativa"
              width={170}
              height={58}
              priority
              className="h-12 w-auto rounded-md bg-white object-contain px-2 py-1"
            />
          </a>

          <nav
            aria-label="Navegación principal"
            className="hidden items-center gap-8 text-sm font-medium text-white/85 lg:flex"
          >
            <a className="nav-link" href="#inicio">
              Inicio
            </a>
            <a className="nav-link" href="#nosotros">
              Nosotros
            </a>
            <a className="nav-link" href="#soluciones">
              Soluciones
            </a>
            <a className="nav-link" href="#video">
              Video
            </a>
            <a className="nav-link" href="#contacto">
              Contacto
            </a>
          </nav>

          <a
            href="#soluciones"
            className="rounded-full bg-[#20b8aa] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[#20b8aa]/20 transition hover:-translate-y-0.5 hover:bg-[#189f94]"
          >
            Explorar soluciones
          </a>
        </div>
      </header>

      {/* Hero */}
      <section
  id="inicio"
  className="relative flex min-h-[85vh] items-center overflow-hidden bg-[#061b3a]"
>
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        >
          <source src="/video-cied.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,17,42,0.96)_0%,rgba(3,24,55,0.82)_43%,rgba(3,25,58,0.38)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_28%,rgba(32,184,170,0.18),transparent_35%)]" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-12 pt-28 sm:px-8 lg:px-10">
          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white/85 backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-[#20b8aa]" />
              Ecosistema de innovación educativa
            </span>

            <h1 className="mt-8 max-w-4xl text-5xl font-bold leading-[1.05] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
              Tecnología que impulsa una nueva forma de{" "}
              <span className="text-[#41d0c3]">educar.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/75 sm:text-xl">
              En CIED desarrollamos soluciones digitales que fortalecen la
              gestión académica, potencian el aprendizaje y facilitan la labor
              docente.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#soluciones"
                className="inline-flex items-center justify-center rounded-full bg-[#20b8aa] px-7 py-4 font-semibold text-white shadow-xl shadow-[#20b8aa]/20 transition hover:-translate-y-1 hover:bg-[#189f94]"
              >
                Conocer el ecosistema
                <span className="ml-2" aria-hidden="true">
                  →
                </span>
              </a>

              <a
                href="#video"
                className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 px-7 py-4 font-semibold text-white backdrop-blur-md transition hover:border-white/50 hover:bg-white/15"
              >
                <span className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#082554]">
                  ▶
                </span>
                Ver video institucional
              </a>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs uppercase tracking-[0.24em] text-white/45 lg:flex">
            Descubre más
            <span className="h-10 w-px bg-gradient-to-b from-white/50 to-transparent" />
          </div>
        </div>
      </section>

      {/* Presentación */}
      <section id="nosotros" className="section-space bg-white">
        <div className="page-container grid items-center gap-16 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <span className="section-label">Quiénes somos</span>

            <h2 className="section-title mt-5">
              Innovación educativa con propósito.
            </h2>
          </div>

          <div>
            <p className="text-xl leading-9 text-slate-600">
              CIED, Centro de Innovación Educativa, es una organización dedicada
              al desarrollo de herramientas tecnológicas que contribuyen a la
              transformación de los procesos educativos.
            </p>

            <p className="mt-6 text-lg leading-8 text-slate-500">
              Nuestro ecosistema reúne soluciones diseñadas para la gestión
              académica, el fortalecimiento de la lectura y la escritura, y la
              planificación docente. Cada producto responde a necesidades
              concretas del sector educativo.
            </p>

            <div className="mt-10 grid gap-5 sm:grid-cols-3">
              <div className="stat-card">
                <strong>3</strong>
                <span>Soluciones digitales</span>
              </div>

              <div className="stat-card">
                <strong>1</strong>
                <span>Ecosistema educativo</span>
              </div>

              <div className="stat-card">
                <strong>∞</strong>
                <span>Posibilidades de innovación</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ecosistema */}
      <section id="soluciones" className="section-space bg-[#f4f8fb]">
        <div className="page-container">
          <div className="mx-auto max-w-3xl text-center">
            <span className="section-label">Ecosistema CIED</span>

            <h2 className="section-title mt-5">
              Tres soluciones. Una misma visión.
            </h2>

            <p className="section-description mx-auto mt-6">
              Conoce las plataformas que integran nuestro ecosistema y selecciona
              la solución que mejor responde a tus necesidades.
            </p>
          </div>

          <div className="relative mt-20">
            <div className="ecosystem-line hidden lg:block" />

            <div className="grid gap-8 lg:grid-cols-3">
              {soluciones.map((solucion, index) => (
                <article
                  key={solucion.nombre}
                  className="solution-card group"
                >
                  <div className="absolute right-6 top-6 text-sm font-semibold text-slate-300">
                    0{index + 1}
                  </div>

                  <span className="inline-flex rounded-full bg-[#e9f9f7] px-3 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-[#168d83]">
                    {solucion.etiqueta}
                  </span>

                  <div className="mt-8 flex h-24 items-center">
                    <Image
                      src={solucion.imagen}
                      alt={`Logo de ${solucion.nombre}`}
                      width={230}
                      height={90}
                      className="max-h-20 w-auto max-w-[220px] object-contain object-left"
                    />
                  </div>

                  <h3 className="mt-7 text-2xl font-bold tracking-tight text-[#082554]">
                    {solucion.categoria}
                  </h3>

                  <p className="mt-4 min-h-28 leading-7 text-slate-600">
                    {solucion.descripcion}
                  </p>

                  <a
                    href={solucion.enlace}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-9 inline-flex items-center font-semibold text-[#087c95] transition group-hover:text-[#20a89c]"
                  >
                    Visitar {solucion.nombre}
                    <span
                      className="ml-2 transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    >
                      →
                    </span>
                  </a>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="section-space bg-[#071d3d] text-white">
        <div className="page-container">
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="lg:sticky lg:top-32 lg:self-start">
              <span className="section-label section-label-light">
                Nuestra propuesta
              </span>

              <h2 className="mt-5 text-4xl font-bold leading-tight tracking-[-0.035em] sm:text-5xl">
                Tecnología pensada desde la realidad educativa.
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-white/65">
                No desarrollamos herramientas aisladas. Creamos soluciones que
                acompañan procesos, conectan personas y favorecen una educación
                más organizada, dinámica e innovadora.
              </p>
            </div>

            <div className="divide-y divide-white/10 border-y border-white/10">
              {beneficios.map((beneficio) => (
                <article
                  key={beneficio.numero}
                  className="group grid gap-5 py-9 sm:grid-cols-[80px_1fr]"
                >
                  <span className="text-sm font-semibold text-[#41d0c3]">
                    {beneficio.numero}
                  </span>

                  <div>
                    <h3 className="text-2xl font-semibold transition group-hover:text-[#41d0c3]">
                      {beneficio.titulo}
                    </h3>

                    <p className="mt-3 max-w-2xl leading-7 text-white/60">
                      {beneficio.descripcion}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Video institucional */}
      <section id="video" className="section-space bg-white">
        <div className="page-container">
          <div className="grid items-end gap-10 lg:grid-cols-2">
            <div>
              <span className="section-label">Nuestra visión</span>

              <h2 className="section-title mt-5">
                El futuro de la educación comienza hoy.
              </h2>
            </div>

            <p className="section-description lg:justify-self-end">
              Conoce la visión que inspira el nacimiento de CIED y nuestro
              compromiso con la transformación educativa.
            </p>
          </div>

          <div className="video-frame mt-14">
            <video
              className="aspect-video h-auto w-full object-cover"
              controls
              preload="metadata"
              playsInline
            >
              <source src="/video-cied.mp4" type="video/mp4" />
              Tu navegador no puede reproducir este video.
            </video>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 pb-24 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[linear-gradient(135deg,#082554_0%,#0b376c_55%,#0d827f_130%)] px-6 py-16 text-center text-white shadow-2xl shadow-slate-900/15 sm:px-12 lg:py-20">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#55d8cd]">
            Conecta con CIED
          </span>

          <h2 className="mx-auto mt-5 max-w-4xl text-4xl font-bold tracking-[-0.04em] sm:text-5xl lg:text-6xl">
            Descubre la solución que puede transformar tu experiencia educativa.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/70">
            Explora nuestras plataformas o comunícate con nosotros para conocer
            más sobre el ecosistema CIED.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="#soluciones"
              className="rounded-full bg-[#20b8aa] px-7 py-4 font-semibold text-white transition hover:-translate-y-1 hover:bg-[#189f94]"
            >
              Explorar plataformas
            </a>

            <a
              href="#contacto"
              className="rounded-full border border-white/25 bg-white/10 px-7 py-4 font-semibold text-white backdrop-blur-md transition hover:bg-white/15"
            >
              Contactar con CIED
            </a>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="section-space bg-[#f4f8fb]">
        <div className="page-container grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <span className="section-label">Contacto</span>

            <h2 className="section-title mt-5">
              Hablemos de innovación educativa.
            </h2>

            <p className="section-description mt-6">
              Escríbenos para recibir información sobre CIED y las soluciones que
              forman parte de nuestro ecosistema.
            </p>

           <div className="mt-10 space-y-5 text-slate-600">

  <a
    href="https://wa.me/18096596701"
    target="_blank"
    rel="noopener noreferrer"
    className="contact-item"
  >
    <span className="contact-icon">💬</span>

    <span>
      <small>WhatsApp</small>
      +1 (809) 659-6701
    </span>
  </a>

  <a
    href="mailto:contacto@somoscied.com"
    className="contact-item"
  >
    <span className="contact-icon">✉️</span>

    <span>
      <small>Correo electrónico</small>
      contacto@somoscied.com
    </span>
  </a>

  <a
    href="https://www.instagram.com/somoscied"
    target="_blank"
    rel="noopener noreferrer"
    className="contact-item"
  >
    <span className="contact-icon">📸</span>

    <span>
      <small>Instagram</small>
      @somoscied
    </span>
  </a>

  <a
    href="https://www.facebook.com/share/1D1yUSDNL1/"
    target="_blank"
    rel="noopener noreferrer"
    className="contact-item"
  >
    <span className="contact-icon">📘</span>

    <span>
      <small>Facebook</small>
      Centro de Innovación Educativa - CIED
    </span>
  </a>

  <a
    href="https://youtube.com/@somoscied?si=AP7eJcuBKya1bHG5"
    target="_blank"
    rel="noopener noreferrer"
    className="contact-item"
  >
    <span className="contact-icon">▶️</span>

    <span>
      <small>YouTube</small>
      @somoscied
    </span>
  </a>

  <a
    href="https://www.tiktok.com/@somoscied3?_r=1&_t=ZS-97v9toaZCVt"
    target="_blank"
    rel="noopener noreferrer"
    className="contact-item"
  >
    <span className="contact-icon">🎵</span>

    <span>
      <small>TikTok</small>
      @somoscied3
    </span>
  </a>

  <a
    href="https://somoscied.com"
    target="_blank"
    rel="noopener noreferrer"
    className="contact-item"
  >
    <span className="contact-icon">🌐</span>

    <span>
      <small>Sitio web</small>
      somoscied.com
    </span>
  </a>

</div>
          </div>

          <form
            action="mailto:contacto@somoscied.com"
            method="post"
            encType="text/plain"
            className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-900/5 sm:p-9"
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <label className="form-field">
                <span>Nombre</span>
                <input type="text" name="nombre" placeholder="Tu nombre" required />
              </label>

              <label className="form-field">
                <span>Correo</span>
                <input
                  type="email"
                  name="correo"
                  placeholder="correo@ejemplo.com"
                  required
                />
              </label>
            </div>

            <label className="form-field mt-6">
              <span>Centro educativo o institución</span>
              <input
                type="text"
                name="institucion"
                placeholder="Nombre de la institución"
              />
            </label>

            <label className="form-field mt-6">
              <span>¿En cuál solución tienes interés?</span>
              <select name="solucion" defaultValue="">
                <option value="" disabled>
                  Selecciona una opción
                </option>
                <option value="SIGADOM">SIGADOM</option>
                <option value="LectuPlay">LectuPlay</option>
                <option value="TuPlanEFI">TuPlanEFI</option>
                <option value="CIED">Información general sobre CIED</option>
              </select>
            </label>

            <label className="form-field mt-6">
              <span>Mensaje</span>
              <textarea
                name="mensaje"
                rows={5}
                placeholder="Cuéntanos cómo podemos ayudarte"
                required
              />
            </label>

            <button
              type="submit"
              className="mt-7 w-full rounded-full bg-[#082554] px-6 py-4 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#0b376c]"
            >
              Enviar mensaje
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#05152f] text-white">
        <div className="page-container py-14">
          <div className="grid gap-12 border-b border-white/10 pb-12 md:grid-cols-2 lg:grid-cols-4">
            <div className="lg:col-span-2">
              <Image
                src="/logo-cied.png"
                alt="CIED"
                width={190}
                height={70}
                className="h-16 w-auto rounded-lg bg-white px-3 py-2 object-contain"
              />

              <p className="mt-6 max-w-md leading-7 text-white/55">
                Transformando la educación mediante tecnología, innovación y
                soluciones digitales.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">Navegación</h3>
              <div className="mt-5 flex flex-col gap-3 text-sm text-white/55">
                <a href="#nosotros">Nosotros</a>
                <a href="#soluciones">Soluciones</a>
                <a href="#video">Video institucional</a>
                <a href="#contacto">Contacto</a>
              </div>
            </div>

            <div>
              <h3 className="font-semibold">Soluciones</h3>
              <div className="mt-5 flex flex-col gap-3 text-sm text-white/55">
                <a href="https://sigadom.com">SIGADOM</a>
                <a href="https://lectuplay.com">LectuPlay</a>
                <a href="https://tuplanefi.com">TuPlanEFI</a>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 pt-8 text-sm text-white/40 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} CIED. Todos los derechos reservados.
            </p>

            <p>Centro de Innovación Educativa</p>
          </div>
        </div>
      </footer>
    </main>
  );
}