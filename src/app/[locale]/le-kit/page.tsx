import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

export default function LeKitPage() {
  const t = useTranslations('kit');

  return (
    <div>
      {/* PAGE TITLE */}
      <div className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            {t('title')}
          </h1>
          <p className="text-xl text-accent max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </div>
      </div>

      {/* SECTION 1 — HERO IMAGE + BADGE */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <Image
              src="/images/kit-overview.jpg"
              alt="Le Kit Brick & Brain complet"
              width={1200}
              height={600}
              className="w-full object-cover rounded-xl shadow-lg"
            />
            <div className="absolute bottom-6 right-6 bg-primary text-white px-4 py-2 rounded-lg shadow-lg">
              <span className="text-lg font-medium">🏫 {t('ownership_badge')}</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — KIT CONTENTS */}
      <section className="py-16 bg-accent/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">
            {t('contents_title')}
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left column — Building elements */}
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="text-xl font-bold mb-6 text-primary">
                {t('building_title')}
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✅</span>
                  <span className="text-gray-700">{t('building1')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✅</span>
                  <span className="text-gray-700">{t('building2')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✅</span>
                  <span className="text-gray-700">{t('building3')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✅</span>
                  <span className="text-gray-700">{t('building4')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✅</span>
                  <span className="text-gray-700">{t('building5')}</span>
                </li>
              </ul>
            </div>

            {/* Right column — Mechanical & powered */}
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="text-xl font-bold mb-6 text-primary">
                {t('mechanical_title')}
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✅</span>
                  <span className="text-gray-700">{t('mechanical1')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✅</span>
                  <span className="text-gray-700">{t('mechanical2')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✅</span>
                  <span className="text-gray-700">{t('mechanical3')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✅</span>
                  <span className="text-gray-700">{t('mechanical4')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✅</span>
                  <span className="text-gray-700">{t('mechanical5')}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — KEY SPECS TABLE */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">
            {t('specs_title')}
          </h2>
          <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-sm overflow-hidden">
            <table className="w-full">
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="px-6 py-4 font-medium text-gray-900 bg-gray-50">
                    {t('spec1_label')}
                  </td>
                  <td className="px-6 py-4 text-gray-700">
                    {t('spec1_value')}
                  </td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="px-6 py-4 font-medium text-gray-900 bg-gray-50">
                    {t('spec2_label')}
                  </td>
                  <td className="px-6 py-4 text-gray-700">
                    {t('spec2_value')}
                  </td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="px-6 py-4 font-medium text-gray-900 bg-gray-50">
                    {t('spec3_label')}
                  </td>
                  <td className="px-6 py-4 text-gray-700">
                    {t('spec3_value')}
                  </td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="px-6 py-4 font-medium text-gray-900 bg-gray-50">
                    {t('spec4_label')}
                  </td>
                  <td className="px-6 py-4 text-gray-700">
                    {t('spec4_value')}
                  </td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="px-6 py-4 font-medium text-gray-900 bg-gray-50">
                    {t('spec5_label')}
                  </td>
                  <td className="px-6 py-4 text-gray-700">
                    {t('spec5_value')}
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-gray-900 bg-gray-50">
                    {t('spec6_label')}
                  </td>
                  <td className="px-6 py-4 text-gray-700">
                    {t('spec6_value')}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SECTION 4 — CURRICULUM PREVIEW */}
      <section className="py-16 bg-accent/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">
            {t('projects_title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-md transition-shadow">
              <div className="text-3xl mb-3">🚗</div>
              <h3 className="text-lg font-bold mb-2 text-primary">
                {t('project1_title')}
              </h3>
              <p className="text-gray-600 text-sm">
                {t('project1_desc')}
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-md transition-shadow">
              <div className="text-3xl mb-3">⚙️</div>
              <h3 className="text-lg font-bold mb-2 text-primary">
                {t('project2_title')}
              </h3>
              <p className="text-gray-600 text-sm">
                {t('project2_desc')}
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-md transition-shadow">
              <div className="text-3xl mb-3">🌉</div>
              <h3 className="text-lg font-bold mb-2 text-primary">
                {t('project3_title')}
              </h3>
              <p className="text-gray-600 text-sm">
                {t('project3_desc')}
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-md transition-shadow">
              <div className="text-3xl mb-3">🏗️</div>
              <h3 className="text-lg font-bold mb-2 text-primary">
                {t('project4_title')}
              </h3>
              <p className="text-gray-600 text-sm">
                {t('project4_desc')}
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-md transition-shadow">
              <div className="text-3xl mb-3">🐈</div>
              <h3 className="text-lg font-bold mb-2 text-primary">
                {t('project5_title')}
              </h3>
              <p className="text-gray-600 text-sm">
                {t('project5_desc')}
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-md transition-shadow">
              <div className="text-3xl mb-3">🔄</div>
              <h3 className="text-lg font-bold mb-2 text-primary">
                {t('project6_title')}
              </h3>
              <p className="text-gray-600 text-sm">
                {t('project6_desc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/comment-ca-marche"
              className="bg-accent text-primary font-bold px-8 py-3 rounded-lg hover:bg-accent/90 transition-colors text-center"
            >
              {t('cta_primary')}
            </Link>
            <Link
              href="/contact"
              className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white/10 transition-colors text-center"
            >
              {t('cta_secondary')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
