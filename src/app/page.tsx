import { redirect } from '@/navigation';
export default function RootPage() {
  redirect({ href: '/fr', locale: 'fr' });
}
