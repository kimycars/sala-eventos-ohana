import type { Metadata } from "next";
import Link from "next/link";
import { brand } from "@/site";

export const metadata: Metadata = {
  title: "Política de privacidad | Sala de Eventos Ohana",
  description:
    "Política de privacidad de Sala de Eventos Ohana (Humanes de Madrid).",
  robots: { index: false, follow: false },
};

export default function PrivacidadPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 md:py-24">
      <Link
        href="/"
        className="text-sm font-semibold text-accent underline-offset-4 hover:underline"
      >
        ← Volver al inicio
      </Link>
      <h1 className="font-display mt-6 text-4xl leading-tight sm:text-5xl">
        Política de privacidad
      </h1>
      <p className="mt-3 text-sm text-ink-soft dark:text-frost/60">
        Última actualización: {new Date().getFullYear()}
      </p>

      <div className="mt-10 space-y-8 text-[15px] leading-relaxed text-ink-soft dark:text-frost/75">
        <section>
          <h2 className="font-display text-2xl text-ink dark:text-frost">
            1. Responsable del tratamiento
          </h2>
          <p className="mt-3">
            {brand.name}, con domicilio en {brand.address}, {brand.city}. Puedes
            contactar con nosotros por teléfono en el {brand.phone}.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl text-ink dark:text-frost">
            2. Datos que tratamos
          </h2>
          <p className="mt-3">
            A través del formulario de contacto de este sitio web recogemos los
            datos que nos facilitas voluntariamente: nombre, teléfono, email,
            tipo de evento, fecha aproximada, número de asistentes y mensaje.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl text-ink dark:text-frost">
            3. Finalidad y legitimación
          </h2>
          <p className="mt-3">
            Tratamos tus datos con la única finalidad de atender tu solicitud de
            información y gestionar tu consulta sobre disponibilidad. La base
            legal es tu consentimiento expreso, que prestas al enviar el
            formulario, y el interés legítimo en responder a tu consulta.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl text-ink dark:text-frost">
            4. Conservación
          </h2>
          <p className="mt-3">
            Conservaremos tus datos únicamente durante el tiempo necesario para
            atender tu solicitud y, en su caso, durante los plazos legales
            aplicables.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl text-ink dark:text-frost">
            5. Comunicación de datos
          </h2>
          <p className="mt-3">
            No compartimos tus datos con terceros salvo obligación legal.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl text-ink dark:text-frost">
            6. Tus derechos
          </h2>
          <p className="mt-3">
            Puedes ejercer en cualquier momento tus derechos de acceso,
            rectificación, supresión, oposición, limitación del tratamiento y
            portabilidad, así como retirar tu consentimiento, contactando con
            nosotros por teléfono. También tienes derecho a presentar una
            reclamación ante la Agencia Española de Protección de Datos.
          </p>
        </section>
      </div>
    </main>
  );
}