'use client'
import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { toast } from 'react-toastify';
import api from '@/utils/api';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter();

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    // Si tu utilises Sanctum, décommente ceci :
    await api.get('/sanctum/csrf-cookie');

     await api.post('/api/login', {
      email,
      password,
    });

    toast.success('Connexion réussie ✅');

    // ⏳ pause 1 sec avant redirection
    setTimeout(() => {
      router.push('/metiers');
    }, 1000);

  } catch (error: any) {
    console.error('Erreur de connexion :', error.response?.data || error.message);

    toast.error(
      error.response?.data?.message || 'Email ou mot de passe incorrect ❌'
    );
  }
};

  return (
    <main className="min-h-screen  flex items-center justify-center px-4">
      <div className="w-full max-w-md  rounded-xl shadow-lg p-8 space-y-6">
        <h1 className="text-2xl font-bold text-center ">Connexion à votre compte</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Adresse Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="exemple@email.com"
            />
          </div>

          {/* Mot de passe */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Mot de passe</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                required
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="••••••••"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-2 flex items-center text-sm text-gray-500"
              >
                {showPassword ? 'Cacher' : 'Afficher'}
              </button>
            </div>
            <div className="text-right mt-1">
              <Link href="/forgot-password" className="text-sm text-blue-600 hover:underline">
                Mot de passe oublié ?
              </Link>
            </div>
          </div>

          {/* Bouton Connexion */}
          <Button
            type="submit"
            className="w-full  text-white font-semibold py-2 px-4 rounded-md hover:bg-violet-900 transition"
          >
            Se connecter
          </Button>
        </form>

        {/* Pas encore de compte */}
        <p className="text-center text-sm text-gray-600">
          Pas encore de compte ?{' '}
          <Link href="/compte" className="text-blue-600 hover:underline">
            Créer un compte
          </Link>
        </p>
      </div>
    </main>
  );
}
