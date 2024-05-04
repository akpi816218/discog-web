import { permanentRedirect } from 'next/navigation';

export default function StatusPageRedirectPage() {
	permanentRedirect('https://discog.openstatus.dev');
}
