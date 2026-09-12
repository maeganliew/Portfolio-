import Image from "next/image";
import Link from "next/link";

interface ExperienceCard {
  id: number;
  title: string;
  description: string;
  icon: string;
}

const experienceCards: ExperienceCard[] = [
  {
    id: 3,
    title: "Tencent — Software Engineer",
    description:
      "Contributing to Java/Spring backend infrastructure for Tencent’s cross-border payment network. Currently refactoring a payment workflow endpoint while learning how global payment systems handle bank integrations, foreign exchange processing, reliability and maintainable service design.",
    icon: "/cards/4card.jpeg",
  },
  {
    id: 4,
    title: "Keystone Investors — Software Engineer",
    description:
      "Built a production Python/Django position-reconciliation system that automated daily processing across more than 10 prime brokers, reducing a two-to-three-hour manual workflow to approximately four minutes. Also designed reusable broker-integration components and optimized Databricks analytics notebooks using PySpark and Pandas.",
    icon: "/cards/3card.jpeg",
  },
  {
    id: 1,
    title: "SAP Asia — Full Stack Developer",
    description:
      "Worked on enterprise backend services for Document AI, building Java-based APIs, improving test coverage, and stabilizing CI pipelines. Focused on scalable backend logic and production reliability in an Agile scrum team.",
    icon: "/cards/card1.png",
  },
  {
    id: 2,
    title: "MYC — Software Engineer",
    description:
      "Developed interactive AR experiences for brand campaigns. Collaborated closely with designers and engineers to deliver engaging digital products that increased user interaction across multiple launches.",
    icon: "/cards/card2.png",
  },
];

export default function Experience(): React.JSX.Element {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-12 text-center">
          Internship Experience
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experienceCards.map((card) => (
            <div
              key={card.id}
              className="bg-linear-to-r from-slate-950 via-purple-950 to-slate-950  backdrop-blur-sm rounded-xl p-6 border-t-3 border-purple-700 hover:shadow-2xl hover:shadow-purple-900 flex items-center gap-4"
            >
              <div className="mb-4 ">
                <Image
                  src={card.icon}
                  alt={card.title}
                  width={160}
                  height={160}
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {card.title}
                </h3>
                <p className="text-white/70 text-sm mb-4 whitespace-pre-line">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

