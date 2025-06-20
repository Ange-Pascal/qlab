'use client'
import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import api from '@/utils/api';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

export default function RegisterPage() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [photo, setPhoto] = useState<File | null>(null);
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); 

  const router = useRouter();

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  const formData = new FormData();
  formData.append('name', fullName);
  formData.append('email', email);
  formData.append('phone_number', phone);
  formData.append('password', password);
  if (photo) {
    formData.append('photo_url', photo);
  }

  try {
    // 1. D'abord on récupère le cookie CSRF (nécessaire pour Sanctum)
    await api.get('/sanctum/csrf-cookie', {
      withCredentials: true,
    });

    // 2. On envoie la requête d’inscription
    await api.post('/api/comptes', formData, {
      withCredentials: true,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    // 3. Ensuite, on appelle l’API de login
    await api.post(
      'api/login',
      {
        email,
        password,
      },
      {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    toast.success('Inscription et connexion réussies ✅');

    // Rediriger vers la page souhaitée
    setTimeout(() => {
      router.push('/metiers');
    }, 1000);
  } catch (error: any) {
    console.error('Erreur :', error.response?.data || error.message);
    alert('Erreur lors de l’inscription ou la connexion');
  }
};

  return (
    <main className="min-h-screen  flex items-center justify-center px-4">
      <div className="w-full max-w-md  rounded-xl shadow-lg p-8 space-y-6">
        <h1 className="text-2xl font-bold text-center ">Créer un compte</h1>

        <form onSubmit={handleSubmit} className="space-y-4" encType="multipart/form-data">
          {/* Nom complet */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Nom complet</label>
            <input
              type="text"
              required
              value={fullName}
              onChange={e => setFullName(e.target.value)}
              className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Jean Dupont"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="exemple@email.com"
            />
          </div>

          {/* Photo */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Photo de profil</label>
            <input
              type="file"
              accept="image/*"
              onChange={e => setPhoto(e.target.files?.[0] || null)}
              className="mt-1 w-full text-sm text-gray-700"
            />
          </div>

          {/* Téléphone */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Numéro de téléphone</label>
            <input
              type="tel"
              required
              value={phone}
              onChange={e => setPhone(e.target.value)}
              className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="+225 07 58 59 01 08"
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
          </div>

          {/* Bouton */}
          <Button
            type="submit"
            className="w-full  text-white font-semibold py-2 px-4 rounded-md hover:bg-violet-900 transition"
          >
            S'inscrire
          </Button>
        </form>

        {/* Lien vers login */}
        <p className="text-center text-sm text-gray-600">
          Vous avez déjà un compte ?{' '}
          <Link href="/connexion" className="text-blue-600 hover:underline">
            Connectez-vous
          </Link>
        </p>
      </div>
    </main>
  );
}
