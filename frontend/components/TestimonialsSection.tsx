"use client";
import useSWR from "swr";
import { Testimonial } from "../../packages/types";
const fetcher = (url: string) => fetch(url).then(r => r.json());

export default function TestimonialsSection() {
  const { data: testimonials, error } = useSWR<Testimonial[]>("/api/v1/testimonials", fetcher);

  if (error) return <div>Error loading testimonials</div>;
  if (!testimonials) return <div>Loading...</div>;

  return (
    <section className="py-12 bg-white">
      <h2 className="text-3xl font-bold mb-6 text-pink">Testimonials</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map(t => (
          <div key={t._id} className="border rounded-lg p-6 bg-gray-50 shadow-sm">
            <p className="mb-4 text-gray-700 italic">&quot;{t.text}&quot;</p>
            <div className="flex justify-between items-center">
              <div>
                <span className="font-semibold text-gray-900">{t.authorName}</span>
                {t.role &&
                  <span className="ml-2 text-sm text-gray-500">{t.role}</span>
                }
              </div>
              {t.clientUrl &&
                <a
                  href={t.clientUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink text-xs ml-2 inline-flex items-center"
                  aria-label="View client website"
                >
                  Website&nbsp;<span aria-hidden="true">↗</span>
                </a>
              }
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}