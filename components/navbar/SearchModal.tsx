'use client';

import { useEffect, useState } from 'react';
import { Search } from 'lucide-react'; // Utilise Lucide icons (dispo par défaut dans ShadCN / Tailwind projects)

type Course = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
};

type Props = {
  courses: Course[];
};

const SearchCourseModal: React.FC<Props> = ({ courses }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <>
      {/* Search Icon Trigger */}
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 px-4 py-2  border rounded-full shadow hover:shadow-md transition"
      >
        <Search className="w-5 h-5" />
        {/* <span className="text-sm text-gray-700 hidden sm:inline">Rechercher</span> */}
      </button>

      {/* Modal Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white w-full max-w-2xl rounded-xl shadow-lg overflow-hidden animate-fadeIn">
            {/* Modal Header */}
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-lg font-semibold text-purple-950">Recherche de formation</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-black text-2xl font-bold leading-none"
              >
                &times;
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-4">
              <input
                type="text"
                className="w-full p-3 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Tapez un mot clé..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />

              <div className="max-h-96 overflow-y-auto space-y-3">
                {filteredCourses.length > 0 ? (
                  filteredCourses.map((course) => (
                    <div
                      key={course.id}
                      className="flex gap-4 items-start p-3 rounded-lg hover:bg-gray-100 cursor-pointer transition"
                    >
                      <img
                        src={course.imageUrl}
                        alt={course.title}
                        className="w-16 h-16 object-cover rounded-md"
                      />
                      <div>
                        <h3 className="text-md font-bold text-purple-950">{course.title}</h3>
                        <p className="text-sm text-gray-600 line-clamp-2">{course.description}</p>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-500 text-sm">Aucune formation trouvée.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SearchCourseModal;
