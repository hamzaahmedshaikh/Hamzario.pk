"use client";

import useSWR from "swr";
import { Client } from "../../packages/types";
const fetcher = (url: string) => fetch(url).then(r => r.json());

export default function ClientsSection() {
  const { data: clients, error } = useSWR<Client[]>("/api/v1/clients", fetcher);

  if (error) return <div>Error loading clients</div>;
  if (!clients) return <div>Loading...</div>;

  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold mb-6 text-pink">Clients</h2>
      <div className="flex flex-wrap gap-6 justify-center">
        {clients.map(client => (
          <a
            key={client._id}
            href={client.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group px-4 py-4 border rounded-lg shadow-sm bg-white hover:bg-yellow-100 transition-colors duration-200"
            aria-label={`Visit ${client.name}`}
          >
            <img
              src={client.logoUrl}
              alt={`${client.name} logo`}
              className="w-24 h-24 object-contain filter grayscale contrast-125 mb-2 mx-auto"
              style={{ filter: "grayscale(100%) contrast(120%)" }}
            />
            <span className="block text-sm text-gray-700 font-medium text-center">{client.name}</span>
            <span
              className="sr-only"
              aria-label={`External link to ${client.name}`}>↗</span>
          </a>
        ))}
      </div>
    </section>
  );
}