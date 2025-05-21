import { Card, Image } from "@heroui/react";

// Team data array
const teamMembers = [
  {
    name: "Jane Doe",
    image: "https://heroui.com/images/hero-card.jpeg",
    title: "CEO & Founder",
    about:
      "Jane Doe is the CEO and founder of OTC Solutions. With over 20 years of experience in the industry, she leads the team with a vision for innovation and excellence.",
    extra:
      "Her leadership ensures that the company delivers top-notch solutions and maintains a client-first approach in all projects.",
  },
  // Add more team members as needed
  // {
  //   name: "John Smith",
  //   image: "https://heroui.com/images/hero-card2.jpeg",
  //   title: "CTO",
  //   about: "...",
  //   extra: "...",
  // },
];

export default function Team() {
  return (
    <div className="py-8 px-1">
      <h2 className="text-3xl font-bold mb-2 text-[oklch(0.623_0.214_259.815)] text-center">
        Meet our leadership team
      </h2>
      <div className="flex flex-col gap-12 mt-8">
        {teamMembers.map((member, idx) => (
          <div
            key={idx}
            className="flex flex-col md:flex-row items-start gap-8"
          >
            {/* Left: Image Card */}
            <div className="flex-shrink-0 pl-2 md:pl-4">
              <Card isFooterBlurred className="border-none" radius="lg">
                <Image
                  alt={member.name}
                  className="object-cover"
                  height={200}
                  width={200}
                  src={member.image}
                />
              </Card>
            </div>
            {/* Right: Content */}
            <div className="flex-1 pt-4 md:pt-0">
              <h3 className="text-4xl font-semibold mb-1 text-[oklch(0.623_0.214_259.815)]">
                {member.name}
              </h3>
              <div className="text-2xl font-bold text-gray-600 mb-2">
                {member.title}
              </div>
              <p className="text-base text-gray-700 mb-2">{member.about}</p>
              <p className="text-base text-gray-700">{member.extra}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}