import { redirect } from '@/navigation';
export default function NotFound() {
  redirect({ href: '/fr', locale: 'fr' });
}
