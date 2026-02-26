import { useTranslations } from 'next-intl';
import { Link } from '@/navigation';

export default function AProposPage() {
  const t = useTranslations('about');

  return (
    <div>
      {/* PAGE TITLE */}
      <div className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold">
            {t('title')}
          </h1>
        </div>
      </div>

      {/* SECTION 1 — MISSION */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-accent/30 border-l-4 border-primary rounded-lg p-8">
            <blockquote className="text-xl lg:text-2xl text-primary font-medium text-center">
              {t('mission')}
            </blockquote>
          </div>
        </div>
      </section>

      {/* SECTION 2 — FOUNDER STORY */}
      <section className="py-16 bg-accent/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: placeholder image */}
            <div className="flex justify-center">
              <div className="w-48 h-48 bg-gray-300 rounded-full flex items-center justify-center">
                <span className="text-gray-500 text-lg">Photo Founder</span>
              </div>
            </div>

            {/* Right: story */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-primary">
                {t('story_title')}
              </h2>
              <div className="bg-white rounded-xl p-8 shadow-sm">
                <p className="text-gray-700 leading-relaxed">
                  {/* TODO: Replace with real founder story */}
                  {t('story_content')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — VALUES */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="text-4xl mb-4">🏗️</div>
              <h3 className="text-xl font-bold mb-3 text-primary">
                {t('value1_title')}
              </h3>
              <p className="text-gray-600">
                {t('value1_desc')}
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="text-xl font-bold mb-3 text-primary">
                {t('value2_title')}
              </h3>
              <p className="text-gray-600">
                {t('value2_desc')}
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-xl font-bold mb-3 text-primary">
                {t('value3_title')}
              </h3>
              <p className="text-gray-600">
                {t('value3_desc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — LEGAL NOTE */}
      <section className="py-16 bg-accent/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-100 rounded-lg p-6">
            <p className="text-gray-700 text-sm leading-relaxed">
              {t('legal_note')}
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 5 — CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link
            href="/comment-ca-marche"
            className="bg-accent text-primary font-bold px-8 py-3 rounded-lg hover:bg-accent/90 transition-colors inline-block"
          >
            {t('cta_btn')}
          </Link>
        </div>
      </section>
    </div>
  );
}
