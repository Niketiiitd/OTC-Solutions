import { Card, Image } from "@heroui/react";

// Team data array
const teamMembers = [
  {
    name: "CFA Gajanand Garg",
    image: "https://res.cloudinary.com/dzktnqqdx/image/upload/v1757259712/GNGARG_uknqod.jpg",
    title: "Founding Member & Managing Partner",
    about:
      "Gajanand Garg is founding member & Managing Partner at OTC with an experience of 18 years in managing Finance, compliance & taxation matters. He has visionary line of thinking aim to revolutionize the outsourced industry with his out of Box thinking and believe in knowledge sharing.",
    extra:
      "His experience with medium size business including startups & Big 4 Accounting Fims, he is understanding ground level risk and pain faced by millions of small businesses in starting and scaling their business. He has rich professional experience in Accounting, Compliance, Business Advisory services to large multinationals. He is a key figure in the Virtual CFO Advisory space. He leverages his vast knowledge in direct and indirect taxes in advising CFOs on strategic financial planning, optimizing tax positions, and enhancing overall financial health. He is an expert in dealing with tax authorities, regulatory bodies & financial institutions. He has advised on indirect taxation matters to leading multinational on service tax, VAT, Excise, Custom & GST.",
  },
  {
    name: "CA Aman Agrawal",
    image: "https://res.cloudinary.com/dzktnqqdx/image/upload/v1757259653/Aman_Singhal_vj0lrz.jpg",
    title: "Founding Member & Managing Partner",
    about:
      "Aman Agrawal is a Fellow Chartered Accountant, has over 10 years of specialized experience in audit and assurance. Renowned for his expertise in audit and assurance, he has worked with domestic & multinational companies across diverse sectors, including services, education, manufacturing, retail, IT/ITES, utilities, and non-profit organizations.",
    extra:
      "His comprehensive understanding of auditing standards makes him a valuable asset in complex environments. He is a recognized authority in both direct and indirect taxation. His vast expertise covers Goods & Services Tax (GST), excise, service tax, VAT-related matters, and corporate taxation, positioning him as a trusted advisor in the field. Aman’s extensive skill set encompasses a wide range of services, including detailed due diligence and robust litigation support. His advisory services are particularly noteworthy, as he provides strategic guidance to clients navigating complex areas such as FCRA Registration, Trade License registration and business support to MSME’s. His ability to navigate regulatory requirements and offer clear, actionable advice has made him a trusted advisor for many organizations seeking to ensure compliance and optimize their business operations.",
  },
  {
    name: "CA Ruchi Kapoor",
    image: "/assets/team/ruchi.jpg",
    title: "Chartered Accountant",
    about:
      "Ruchi Kapoor is a Chartered Accountant, has over 10 years of specialized experience in Taxation & Compliance.",
    extra:
      "She is a seasoned expert in Direct Taxation, Compliance, Litigation and Advisory matters. Her focus areas include international taxation, with experience in Transfer Pricing matters—covering TP audit defense, litigation and TP documentation. She actively represents clients before revenue authorities and providing litigation support at various levels, including the ITAT and High Court. Her diverse expertise and practical approach enable her to deliver tailored, strategic solutions aligned with clients' business objectives. Her ability to navigate regulatory requirements and offer clear, actionable advice has made her a trusted advisor for many organizations seeking to ensure compliance and optimize their business operations.",
  },
  {
    name: "CA Rachit Bansal",
    image: "https://res.cloudinary.com/dzktnqqdx/image/upload/v1757259718/Rachit_ostqst.jpg",
    title: "Advisor, Risk Advisory & International Business",
    about:
      "Rachit Bansal is an Advisor at OTC Financial Services, where he leads the Risk Advisory Services and International Business verticals.",
    extra:
      "With over 7 years of experience, he is recognized for delivering strategic and risk-aligned solutions to both Indian and international clients. Rachit brings diverse expertise in areas such as auditing, business advisory, bookkeeping, compliance, and international business structuring. He has worked with Big-4 audit firms, where he conducted audits for both listed and unlisted clients across multiple sectors, gaining deep insights into corporate governance and financial risk management. He is an Associate Member of the Institute of Chartered Accountants of India (ICAI) and a Commerce graduate. With a global outlook and a strong command of regulatory frameworks, Rachit is a trusted advisor to organizations aiming for sustainable and compliant growth.",
  },
  {
    name: "CA Jaiwish Rajpal",
    image: "https://res.cloudinary.com/dzktnqqdx/image/upload/v1757259707/Jaiwish_bdxgkn.jpg",
    title: "Chartered Accountant",
    about:
      "Jaiwish Rajpal is a Chartered Accountant with over 8 years of specialized experience in Taxation and Compliance.",
    extra:
      "He is an expert in Internal Audit, Forensic Audits and Fraud Investigations, Debt Syndication, and Tax Advisory. Jaiwish has extensive experience in conducting risk-based internal audits, enterprise risk management, risk assessments, insurance risk evaluations, diagnostic reviews, ICFR, SOX compliance, and developing policy and procedure manuals, including SOPs and DOA matrices. His expertise spans a variety of sectors, including sanitaryware, faucets, chemicals, oil & gas, hospitality, and more. Jaiwish is well-versed in multiple internal control frameworks such as the Global Internal Audit Standards (IPPF by The IIA), COSO’s Integrated Framework, and the ICAI’s Standards on Internal Audit (SIAs). His pragmatic and results-driven approach ensures clients achieve robust internal controls and strengthened risk management capabilities.",
  },
  {
    name: "CA Pradeep Singh",
    image: "https://res.cloudinary.com/dzktnqqdx/image/upload/v1757259718/Pradeep_xjzjtv.jpg",
    title: "Chartered Accountant",
    about:
      "CA Pradeep is a Chartered Accountant, has over 12 years of specialized experience in Audit, Assurance, Regulatory & Compliance.",
    extra:
      "He has had exposure in the field of Direct taxation, Indirect Taxation, Auditing, Trust Audit and handling various accounting support projects for variety of clients. His expertise is in setting up the finance functions of the company, monitoring of finance department remotely, advisory on various laws like GST, Income tax and Company law etc. He provides strategic guidance on financial reporting, compliance, and risk management, enabling companies to make informed decisions that align with their business objectives.",
  },
  {
    name: "Mayank Gupta (B. Com. L.L.B)",
    image: "https://res.cloudinary.com/dzktnqqdx/image/upload/v1757259708/Mayank_g8frgd.jpg",
    title: "Advocate & Taxation Consultant",
    about:
      "Mayank Gupta is a seasoned Advocate and Taxation Consultant with over 15 years of extensive experience in handling complex legal and compliance matters related to Goods and Services Tax (GST), Income Tax, and other financial regulations in India.",
    extra:
      "With a strong foundation in tax law and financial advisory, Mayank has successfully represented clients before various appellate authorities and tax tribunals. His practice spans across tax planning, litigation support, audits, compliance management, and strategic consulting for individuals, corporations, and SMEs. Known for his in-depth understanding of evolving tax laws and a client-centric approach, Mayank has built a reputation for delivering accurate, timely, and legally sound solutions that ensure compliance while optimizing tax positions.",
  },
];

export default function Team() {
  return (
    <div className="py-8 px-1">
      <h2 className="text-6xl mb-2 text-[oklch(0.623_0.214_259.815)] text-center mt-[5%]">
        Meet our leadership team
      </h2>
      <div className="flex flex-col gap-12 mt-12">
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
                  height={350}
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