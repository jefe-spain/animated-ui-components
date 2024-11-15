"use client";

import PageHeader from "@/components/page-header";
import { useState } from "react";

export default function Components() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Select a component");

  const options = [
    "Accordion",
    "Button",
    "Card",
    "Dropdown",
    "Modal",
  ];

  return (
    <>
      <section>
        <div className="pt-32 pb-12 md:pt-44 md:pb-20 max-w-3xl mx-auto">
          <div className="p">
            <PageHeader title="Components">
              <p>A collection of components built with Rive and React.</p>
            </PageHeader>

            <div className="w-full px-6 flex justify-center relative">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-48 h-8 text-xs bg-white rounded-xl text-gray-800 cursor-pointer flex items-center justify-center gap-2"
              >
                {selected}
                <svg
                  className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isOpen && (
                <div className="absolute mt-2 w-48 bg-white rounded-xl shadow-lg py-2 z-10">
                  {options.map((option) => (
                    <div
                      key={option}
                      className="px-4 py-2 text-xs hover:bg-gray-100 cursor-pointer"
                      onClick={() => {
                        setSelected(option);
                        setIsOpen(false);
                      }}
                    >
                      {option}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
