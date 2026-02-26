import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Link } from '@/navigation';

export default function CommentCaMarchePage() {
  const t = useTranslations('how');

  return (
    <div>
      {/* PAGE TITLE */}
      <div className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            {t('title')}
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </div>
      </div>

      {/* SECTION 1 — 3-STEP VISUAL FLOW */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-4">
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6">
                1
              </div>
              <div className="text-4xl mb-4">📦</div>
              <h3 className="text-xl font-bold mb-3 text-primary">
                {t('step1_title')}
              </h3>
              <p className="text-gray-600">
                {t('step1_desc')}
              </p>
            </div>

            {/* Arrow for desktop */}
            <div className="hidden lg:flex items-center justify-center text-3xl text-primary">
              →
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6">
                2
              </div>
              <div className="text-4xl mb-4">👩‍🏫</div>
              <h3 className="text-xl font-bold mb-3 text-primary">
                {t('step2_title')}
              </h3>
              <p className="text-gray-600">
                {t('step2_desc')}
              </p>
            </div>

            {/* Arrow for desktop */}
            <div className="hidden lg:flex items-center justify-center text-3xl text-primary">
              →
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6">
                3
              </div>
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold mb-3 text-primary">
                {t('step3_title')}
              </h3>
              <p className="text-gray-600">
                {t('step3_desc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — WHAT HAPPENS DURING TRAINING */}
      <section className="py-16 bg-accent/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">
            {t('training_title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-3xl mb-3">🔧</div>
              <h3 className="text-lg font-bold mb-2 text-primary">
                {t('training1_title')}
              </h3>
              <p className="text-gray-600 text-sm">
                {t('training1_desc')}
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-3xl mb-3">🏗️</div>
              <h3 className="text-lg font-bold mb-2 text-primary">
                {t('training2_title')}
              </h3>
              <p className="text-gray-600 text-sm">
                {t('training2_desc')}
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-3xl mb-3">👥</div>
              <h3 className="text-lg font-bold mb-2 text-primary">
                {t('training3_title')}
              </h3>
              <p className="text-gray-600 text-sm">
                {t('training3_desc')}
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-3xl mb-3">📋</div>
              <h3 className="text-lg font-bold mb-2 text-primary">
                {t('training4_title')}
              </h3>
              <p className="text-gray-600 text-sm">
                {t('training4_desc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — PHOTO */}
      <section className="py-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <Image
              src="/images/training-session.svg"
              alt="Session de formation en école — l'enseignant apprend à animer chaque projet"
              width={1200}
              height={600}
              className="w-full object-cover rounded-xl shadow-lg"
            />
            <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 max-w-2xl mx-auto -mt-8 relative z-10 text-center">
              <p className="text-gray-700 font-medium">
                {t('photo_caption')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            {t('cta_title')}
          </h2>
          <p className="text-xl mb-8 text-accent">
            {t('cta_sub')}
          </p>
          <Link
            href="/contact"
            className="bg-white text-primary font-bold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors inline-block"
          >
            {t('cta_btn')}
          </Link>
        </div>
      </section>
    </div>
  );
}
