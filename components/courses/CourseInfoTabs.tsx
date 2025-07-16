"use client";

import { useState } from "react";

interface CourseTabsProps {
  outcomes?: string[];
  highlights?: string[];
  resources?: string[];
}

export default function CourseInfoTabs({
  outcomes = ["Améliorer vos compétences", "Maitriser les bases", "Appliquer concrètement"],
  highlights = ["Intervenants experts", "Certification offerte", "Supports téléchargeables"],
  resources = ["PDF de cours", "Exercices pratiques", "Accès vidéo illimité"],
}: CourseTabsProps) {
  const [activeTab, setActiveTab] = useState<"outcomes" | "highlights" | "resources">("outcomes");

  return (
    <div className="max-w-4xl mx-auto px-6 pb-20">
      <div className="flex justify-center gap-6 border-b border-gray-200 mb-6">
        {["outcomes", "highlights", "resources"].map((tab) => (
          <button
            key={tab}
            className={`py-2 px-4 font-medium capitalize ${
              activeTab === tab
                ? "text-violet-700 border-b-2 border-violet-700"
                : "text-gray-500 hover:text-violet-600"
            }`}
            onClick={() => setActiveTab(tab as any)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="bg-white p-6 rounded-lg shadow border">
        {activeTab === "outcomes" && (
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            {outcomes.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}

        {activeTab === "highlights" && (
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            {highlights.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}

        {activeTab === "resources" && (
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            {resources.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
