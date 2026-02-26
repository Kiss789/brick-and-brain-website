import { useTranslations } from 'next-intl';
import { Link } from '@/navigation';
import Image from 'next/image';

export default function HomePage() {
  const t = useTranslations('home');

  return (
    <main>
      {/* HERO */}
      <section className="bg-primary text-white py-20 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row 
                        items-center gap-10">
          <div className="flex-1">
            <h1 className="text-4xl font-bold mb-4">
              {t('hero_title')}
            </h1>
            <p className="text-xl text-white/90 mb-8">
              {t('hero_sub')}
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link href="/contact"
                className="bg-accent text-primary font-bold 
                           px-6 py-3 rounded-lg">
                {t('cta_primary')}
              </Link>
              <Link href="/comment-ca-marche"
                className="border border-white text-white 
                           px-6 py-3 rounded-lg">
                {t('cta_secondary')}
              </Link>
            </div>
          </div>
          <div className="flex-1">
            <Image
              src="/images/workshop-children.svg"
              alt="Brick & Brain workshop"
              width={600}
              height={400}
              className="rounded-xl shadow-lg w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 
                        md:grid-cols-3 gap-8">
          {[
            { icon: '🎒', title: t('benefit1_title'), 
              desc: t('benefit1_desc') },
            { icon: '👩‍🏫', title: t('benefit2_title'), 
              desc: t('benefit2_desc') },
            { icon: '💶', title: t('benefit3_title'), 
              desc: t('benefit3_desc') },
          ].map((b, i) => (
            <div key={i} className="border rounded-xl p-6 shadow-sm">
              <div className="text-4xl mb-4">{b.icon}</div>
              <h3 className="font-bold text-xl text-primary mb-2">
                {b.title}
              </h3>
              <p className="text-gray-600">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ROI */}
      <section className="py-16 px-6 bg-accent/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-primary mb-6">
            {t('roi_title')}
          </h2>
          <p className="text-3xl font-bold text-primary mb-4">
            {t('roi_formula')}
          </p>
          <p className="text-gray-600">{t('roi_note')}</p>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-primary 
                         text-center mb-10">
            {t('why_title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { icon: '✅', title: t('why1_title'), 
                desc: t('why1_desc') },
              { icon: '✅', title: t('why2_title'), 
                desc: t('why2_desc') },
              { icon: '✅', title: t('why3_title'), 
                desc: t('why3_desc') },
              { icon: '✅', title: t('why4_title'), 
                desc: t('why4_desc') },
            ].map((w, i) => (
              <div key={i} className="text-center p-4">
                <div className="text-3xl mb-2">{w.icon}</div>
                <h3 className="font-bold text-primary mb-1">
                  {w.title}
                </h3>
                <p className="text-gray-600 text-sm">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-16 px-6 bg-primary text-white 
                          text-center">
        <h2 className="text-3xl font-bold mb-4">
          {t('cta_banner_title')}
        </h2>
        <p className="text-accent mb-8">{t('cta_banner_sub')}</p>
        <Link href="/contact"
          className="bg-white text-primary font-bold 
                     px-8 py-3 rounded-lg">
          {t('cta_banner_btn')}
        </Link>
      </section>
    </main>
  );
}
