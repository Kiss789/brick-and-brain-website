import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  const t = useTranslations('home');

  return (
    <div>
      {/* SECTION 1 — HERO */}
      <section className="bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                {t('hero_title')}
              </h1>
              <p className="text-xl text-accent">
                {t('hero_sub')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="bg-accent text-primary font-bold px-8 py-3 rounded-lg hover:bg-accent/90 transition-colors text-center"
                >
                  {t('cta_primary')}
                </Link>
                <Link
                  href="/comment-ca-marche"
                  className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white/10 transition-colors text-center"
                >
                  {t('cta_secondary')}
                </Link>
              </div>
            </div>
            <div className="lg:order-last">
              <Image
                src="/images/workshop-children.jpg"
                alt="Atelier Brick & Brain avec des enfants"
                width={600}
                height={400}
                className="rounded-xl shadow-lg w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — 3 BENEFIT CARDS */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">
            {t('benefits_title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">🎒</div>
              <h3 className="text-xl font-bold mb-3 text-primary">
                {t('benefit1_title')}
              </h3>
              <p className="text-gray-600">
                {t('benefit1_desc')}
              </p>
            </div>
            <div className="border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">👩‍🏫</div>
              <h3 className="text-xl font-bold mb-3 text-primary">
                {t('benefit2_title')}
              </h3>
              <p className="text-gray-600">
                {t('benefit2_desc')}
              </p>
            </div>
            <div className="border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">💶</div>
              <h3 className="text-xl font-bold mb-3 text-primary">
                {t('benefit3_title')}
              </h3>
              <p className="text-gray-600">
                {t('benefit3_desc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — ROI TEASER */}
      <section className="py-16 bg-accent/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8 text-primary">
            {t('roi_title')}
          </h2>
          <div className="bg-white rounded-xl p-8 shadow-lg max-w-4xl mx-auto">
            <div className="flex flex-wrap justify-center items-center gap-4 text-2xl lg:text-3xl">
              <span className="font-bold text-primary">20 élèves</span>
              <span>×</span>
              <span className="font-bold text-primary">15€/mois</span>
              <span>×</span>
              <span className="font-bold text-primary">9 mois</span>
              <span>=</span>
              <span className="font-bold text-primary">2 700€/an</span>
            </div>
            <p className="mt-6 text-lg text-gray-600">
              {t('roi_note')}
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 4 — WHY BRICK & BRAIN */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">
            {t('why_title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl mb-4">✅</div>
              <h3 className="text-lg font-bold mb-2 text-primary">
                {t('why1_title')}
              </h3>
              <p className="text-gray-600 text-sm">
                {t('why1_desc')}
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-4">✅</div>
              <h3 className="text-lg font-bold mb-2 text-primary">
                {t('why2_title')}
              </h3>
              <p className="text-gray-600 text-sm">
                {t('why2_desc')}
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-4">✅</div>
              <h3 className="text-lg font-bold mb-2 text-primary">
                {t('why3_title')}
              </h3>
              <p className="text-gray-600 text-sm">
                {t('why3_desc')}
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-4">✅</div>
              <h3 className="text-lg font-bold mb-2 text-primary">
                {t('why4_title')}
              </h3>
              <p className="text-gray-600 text-sm">
                {t('why4_desc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — FINAL CTA BANNER */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            {t('cta_banner_title')}
          </h2>
          <p className="text-xl mb-8 text-accent">
            {t('cta_banner_sub')}
          </p>
          <Link
            href="/contact"
            className="bg-white text-primary font-bold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors inline-block"
          >
            {t('cta_banner_btn')}
          </Link>
        </div>
      </section>
    </div>
  );
}
