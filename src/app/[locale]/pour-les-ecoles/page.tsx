'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/navigation';

export default function PourLesEcolesPage() {
  const t = useTranslations('schools');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

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

      {/* SECTION 1 — FINANCIAL MODEL */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">
            {t('financial_title')}
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            {/* Box 1 */}
            <div className="bg-primary text-white rounded-xl p-8 text-center">
              <h3 className="text-xl font-bold mb-4">
                {t('financial1_title')}
              </h3>
              <p className="text-2xl font-bold">
                {t('financial1_value')}
              </p>
            </div>

            {/* Arrow */}
            <div className="hidden lg:flex justify-center text-3xl text-primary">
              →
            </div>

            {/* Box 2 */}
            <div className="bg-primary text-white rounded-xl p-8 text-center">
              <h3 className="text-xl font-bold mb-4">
                {t('financial2_title')}
              </h3>
              <p className="text-2xl font-bold">
                {t('financial2_value')}
              </p>
            </div>

            {/* Arrow */}
            <div className="hidden lg:flex justify-center text-3xl text-primary">
              →
            </div>

            {/* Box 3 */}
            <div className="bg-primary text-white rounded-xl p-8 text-center">
              <h3 className="text-xl font-bold mb-4">
                {t('financial3_title')}
              </h3>
              <p className="text-2xl font-bold">
                {t('financial3_value')}
              </p>
            </div>
          </div>
          <p className="text-center text-sm text-gray-600 mt-8">
            {t('financial_note')}
          </p>
        </div>
      </section>

      {/* SECTION 2 — COMPARISON TABLE */}
      <section className="py-16 bg-accent/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">
            {t('comparison_title')}
          </h2>
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[600px]">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="px-4 py-3 text-left font-medium">
                      {t('comparison_header1')}
                    </th>
                    <th className="px-4 py-3 text-left font-medium">
                      {t('comparison_header2')}
                    </th>
                    <th className="px-4 py-3 text-left font-medium">
                      {t('comparison_header3')}
                    </th>
                    <th className="px-4 py-3 text-left font-medium">
                      {t('comparison_header4')}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="px-4 py-3 font-medium text-gray-900 bg-gray-50">
                      {t('comparison_row1_col1')}
                    </td>
                    <td className="px-4 py-3 text-green-600 font-medium">
                      ✅ {t('comparison_row1_col2')}
                    </td>
                    <td className="px-4 py-3 text-red-600">
                      ❌ {t('comparison_row1_col3')}
                    </td>
                    <td className="px-4 py-3 text-yellow-600">
                      ⚠️ {t('comparison_row1_col4')}
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="px-4 py-3 font-medium text-gray-900 bg-gray-50">
                      {t('comparison_row2_col1')}
                    </td>
                    <td className="px-4 py-3 text-green-600 font-medium">
                      ✅ {t('comparison_row2_col2')}
                    </td>
                    <td className="px-4 py-3 text-red-600">
                      ❌ {t('comparison_row2_col3')}
                    </td>
                    <td className="px-4 py-3 text-red-600">
                      ❌ {t('comparison_row2_col4')}
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="px-4 py-3 font-medium text-gray-900 bg-gray-50">
                      {t('comparison_row3_col1')}
                    </td>
                    <td className="px-4 py-3 text-green-600 font-medium">
                      ✅ {t('comparison_row3_col2')}
                    </td>
                    <td className="px-4 py-3 text-red-600">
                      ❌ {t('comparison_row3_col3')}
                    </td>
                    <td className="px-4 py-3 text-green-600 font-medium">
                      ✅ {t('comparison_row3_col4')}
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="px-4 py-3 font-medium text-gray-900 bg-gray-50">
                      {t('comparison_row4_col1')}
                    </td>
                    <td className="px-4 py-3 text-green-600 font-medium">
                      ✅ {t('comparison_row4_col2')}
                    </td>
                    <td className="px-4 py-3 text-red-600">
                      ❌ {t('comparison_row4_col3')}
                    </td>
                    <td className="px-4 py-3 text-yellow-600">
                      ⚠️ {t('comparison_row4_col4')}
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="px-4 py-3 font-medium text-gray-900 bg-gray-50">
                      {t('comparison_row5_col1')}
                    </td>
                    <td className="px-4 py-3 text-green-600 font-medium">
                      ✅ {t('comparison_row5_col2')}
                    </td>
                    <td className="px-4 py-3 text-yellow-600">
                      ⚠️ {t('comparison_row5_col3')}
                    </td>
                    <td className="px-4 py-3 text-yellow-600">
                      ⚠️ {t('comparison_row5_col4')}
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-gray-900 bg-gray-50">
                      {t('comparison_row6_col1')}
                    </td>
                    <td className="px-4 py-3 text-green-600 font-medium">
                      ✅ {t('comparison_row6_col2')}
                    </td>
                    <td className="px-4 py-3 text-yellow-600">
                      ⚠️ {t('comparison_row6_col3')}
                    </td>
                    <td className="px-4 py-3 text-red-600">
                      ❌ {t('comparison_row6_col4')}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">
            {t('faq_title')}
          </h2>
          <div className="space-y-4">
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex justify-between items-center"
                >
                  <span className="font-medium text-gray-900">
                    {t(`faq${index}_question`)}
                  </span>
                  <span className="text-primary text-xl">
                    {expandedFaq === index ? '−' : '+'}
                  </span>
                </button>
                {expandedFaq === index && (
                  <div className="px-6 py-4 bg-white">
                    <p className="text-gray-700">
                      {t(`faq${index}_answer`)}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link
            href="/contact"
            className="bg-accent text-primary font-bold px-8 py-3 rounded-lg hover:bg-accent/90 transition-colors inline-block"
          >
            {t('cta_btn')}
          </Link>
        </div>
      </section>
    </div>
  );
}
