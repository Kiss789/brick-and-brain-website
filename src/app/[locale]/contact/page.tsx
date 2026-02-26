'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

export default function ContactPage() {
  const t = useTranslations('contact');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    schoolName: '',
    role: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // TODO: Replace YOURFORMID with real Formspree endpoint
    const formUrl = 'https://formspree.io/f/YOURFORMID';
    
    try {
      const response = await fetch(formUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setIsSubmitted(true);
      } else {
        console.error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid = formData.firstName && formData.lastName && formData.schoolName && formData.role && formData.email;

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

      {/* MAIN CONTENT */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            
            {/* SECTION 1 — CONTACT FORM (left, 60%) */}
            <div className="lg:col-span-3">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* First Name & Last Name */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                        {t('first_name')} *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                        {t('last_name')} *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                  </div>

                  {/* School Name */}
                  <div>
                    <label htmlFor="schoolName" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('school_name')} *
                    </label>
                    <input
                      type="text"
                      id="schoolName"
                      name="schoolName"
                      value={formData.schoolName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>

                  {/* Role */}
                  <div>
                    <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('role')} *
                    </label>
                    <select
                      id="role"
                      name="role"
                      value={formData.role}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="">{t('select_role')}</option>
                      <option value="directeur">{t('role_director')}</option>
                      <option value="directeur_adjoint">{t('role_deputy_director')}</option>
                      <option value="coordinateur">{t('role_coordinator')}</option>
                      <option value="autre">{t('role_other')}</option>
                    </select>
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('email')} *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('phone')} ({t('optional')})
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('message')} ({t('optional')})
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      placeholder={t('message_placeholder')}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={!isFormValid || isSubmitting}
                    className="w-full bg-primary text-white font-bold py-3 rounded-lg hover:bg-secondary transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? t('submitting') : t('submit')}
                  </button>
                </form>
              ) : (
                <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
                  <div className="text-4xl mb-4">✅</div>
                  <h3 className="text-xl font-bold text-green-800 mb-2">
                    {t('success_title')}
                  </h3>
                  <p className="text-green-700">
                    {t('success_message')}
                  </p>
                </div>
              )}
            </div>

            {/* SECTION 2 — CONTACT INFO SIDEBAR (right, 40%) */}
            <div className="lg:col-span-2">
              <div className="bg-primary text-white rounded-xl p-6 sticky top-6">
                <h3 className="text-xl font-bold mb-6">
                  {t('contact_info_title')}
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center mb-2">
                      <span className="text-2xl mr-3">📧</span>
                      <span className="font-semibold">{t('email_label')}</span>
                    </div>
                    <p className="ml-11 text-gray-200">
                      contact@brickandbrain.fr
                      {/* TODO: Replace with real email */}
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center mb-2">
                      <span className="text-2xl mr-3">🌐</span>
                      <span className="font-semibold">{t('website_label')}</span>
                    </div>
                    <p className="ml-11 text-gray-200">
                      brickandbrain.vercel.app
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center mb-2">
                      <span className="text-2xl mr-3">⏱️</span>
                      <span className="font-semibold">{t('response_time_label')}</span>
                    </div>
                    <p className="ml-11 text-gray-200">
                      {t('response_time')}
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center mb-2">
                      <span className="text-2xl mr-3">📍</span>
                      <span className="font-semibold">{t('service_area_label')}</span>
                    </div>
                    <p className="ml-11 text-gray-200">
                      {t('service_area')}
                    </p>
                  </div>
                </div>

                <div className="border-t border-white/20 mt-6 pt-6">
                  <div className="flex items-center mb-3">
                    <span className="text-2xl mr-3">💬</span>
                    <span className="font-semibold">{t('call_preference_title')}</span>
                  </div>
                  <p className="ml-11 text-gray-200 text-sm">
                    {t('call_preference_text')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
