import RequestQuoteForm from "@/components/forms/RequestQuoteForm";
import ServiceCards from "@/components/services/ServiceCards";

export default function EntryStrategiesForeignCompanies() {
  return (
    <div className="w-full">
      {/* Banner Image */}
      <div className="w-full h-64 md:h-80 lg:h-96 overflow-hidden relative">
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1500&q=80"
          alt="Entry Strategies for Foreign Companies in India Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white text-center drop-shadow-lg">
            Entry Strategies for Foreign Companies in India
          </h1>
        </div>
      </div>
      {/* Heading */}
      <div className="w-full max-w-7xl mx-auto px-2 md:px-6 pt-10 flex">
        <h1 className="w-full text-4xl md:text-6xl font-extrabold mb-8 text-center text-[oklch(0.623_0.214_259.815)]">
          Entry Strategies for Foreign Companies in India
        </h1>
      </div>
      {/* Content and Form Side by Side */}
      <div className="w-full max-w-7xl mx-auto px-2 md:px-6 pb-10 flex flex-col lg:flex-row gap-12">
        <div className="flex-1 flex flex-col">
          <div className="space-y-6 text-lg text-gray-800 w-full">
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-2">1. Non-Corporate Presence (Liaison / Branch / Project Office)</h2>
              <ul className="list-disc pl-6 mb-2">
                <li>
                  <b>Liaison Office (Representative Office):</b> Acts as a communication channel between foreign parent company and Indian stakeholders. Cannot undertake commercial activity (only market research, networking, brand promotion). Requires RBI approval.
                </li>
                <li>
                  <b>Branch Office:</b> Can undertake export/import of goods, professional services, R&D, and consultancy. Cannot engage in retail trading or manufacturing (except in SEZs). Needs RBI approval.
                </li>
                <li>
                  <b>Project Office:</b> Temporary setup to execute a specific project in India (construction, turnkey projects, etc.). RBI approval required (sometimes automatic route).
                </li>
              </ul>
            </section>
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-2">2. Incorporated Entities</h2>
              <ul className="list-disc pl-6 mb-2">
                <li>
                  <b>Wholly Owned Subsidiary (WOS):</b> 100% equity owned by the foreign parent (subject to FDI policy). Can carry out permitted business activities freely. Most flexible and widely used option.
                </li>
                <li>
                  <b>Joint Venture (JV) with Indian Partner:</b> Partnership with an Indian entity. Useful when local market knowledge, distribution networks, or licenses are needed. Can be structured as equity participation in an Indian company.
                </li>
                <li>
                  <b>Limited Liability Partnership (LLP):</b> Allowed under FDI in sectors where 100% FDI is permitted under automatic route. Provides flexibility with fewer compliance requirements than a company.
                </li>
              </ul>
            </section>
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-2">3. Contractual / Non-Equity Modes</h2>
              <ul className="list-disc pl-6 mb-2">
                <li>
                  <b>Franchising:</b> Common in retail, food & beverage, education, and services. Brand control is retained, while Indian franchisee handles operations.
                </li>
                <li>
                  <b>Licensing:</b> IP, technology, or product license granted to Indian partner. Generates royalty or licensing income for the foreign company.
                </li>
                <li>
                  <b>Distribution / Agency Agreements:</b> Appoint an Indian distributor or sales agent. Low investment, but lower control.
                </li>
                <li>
                  <b>Technical Collaboration / Technology Transfer:</b> Technology know-how transferred to Indian entity in exchange for royalties/fees. Popular in manufacturing sectors.
                </li>
              </ul>
            </section>
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-2">4. Foreign Direct Investment (FDI) Routes</h2>
              <ul className="list-disc pl-6 mb-2">
                <li>
                  <b>Automatic Route:</b> No prior approval required; only post-facto filing with RBI.
                </li>
                <li>
                  <b>Government Route:</b> Prior approval required for sensitive sectors (defense, telecom, media, etc.).
                </li>
              </ul>
            </section>
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-2">Key Considerations</h2>
              <ul className="list-disc pl-6 mb-2">
                <li>Regulatory approvals: RBI, DPIIT, MCA, SEBI, etc.</li>
                <li>Sectoral caps & restrictions: Some industries have caps on foreign ownership (e.g., insurance, defense).</li>
                <li>Taxation: Corporate tax rate, GST, transfer pricing, profit repatriation.</li>
                <li>Ease of exit: Consider repatriation of capital, liquidation process.</li>
                <li>Local partner fit (if JV/Franchise): Due diligence is critical.</li>
              </ul>
            </section>
            <section>
              <h2 className="text-xl font-semibold mb-2">Recommendation</h2>
              <ul className="list-disc pl-6">
                <li>If the aim is market testing → Liaison Office or Branch Office.</li>
                <li>If the aim is full control and long-term presence → Wholly Owned Subsidiary.</li>
                <li>If the aim is shared risk and local expertise → Joint Venture or Franchise model.</li>
              </ul>
            </section>
            {/* Entry Strategies Comparison Table */}
            <div className="overflow-x-auto mt-10">
              <table className="min-w-full border border-gray-300 text-sm md:text-base bg-white rounded-lg">
                <thead className="bg-[oklch(0.623_0.214_259.815)] text-white">
                  <tr>
                    <th className="px-2 py-2 border">Mode</th>
                    <th className="px-2 py-2 border">Ownership</th>
                    <th className="px-2 py-2 border">Activities</th>
                    <th className="px-2 py-2 border">Approvals</th>
                    <th className="px-2 py-2 border">Advantages</th>
                    <th className="px-2 py-2 border">Disadvantages</th>
                    <th className="px-2 py-2 border">Taxation</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-2 py-2 border">Liaison Office</td>
                    <td className="px-2 py-2 border">0%</td>
                    <td className="px-2 py-2 border">Promotion, research</td>
                    <td className="px-2 py-2 border">RBI</td>
                    <td className="px-2 py-2 border">Low cost; easy entry</td>
                    <td className="px-2 py-2 border">No income allowed</td>
                    <td className="px-2 py-2 border">No tax</td>
                  </tr>
                  <tr>
                    <td className="px-2 py-2 border">Branch Office</td>
                    <td className="px-2 py-2 border">100%</td>
                    <td className="px-2 py-2 border">Export, services</td>
                    <td className="px-2 py-2 border">RBI</td>
                    <td className="px-2 py-2 border">Revenue allowed</td>
                    <td className="px-2 py-2 border">Restricted sectors</td>
                    <td className="px-2 py-2 border">40% + surcharge</td>
                  </tr>
                  <tr>
                    <td className="px-2 py-2 border">Project Office</td>
                    <td className="px-2 py-2 border">100%</td>
                    <td className="px-2 py-2 border">Project execution</td>
                    <td className="px-2 py-2 border">RBI/Auto</td>
                    <td className="px-2 py-2 border">Good short-term</td>
                    <td className="px-2 py-2 border">Not long-term</td>
                    <td className="px-2 py-2 border">40% + surcharge</td>
                  </tr>
                  <tr>
                    <td className="px-2 py-2 border">WOS</td>
                    <td className="px-2 py-2 border">100%</td>
                    <td className="px-2 py-2 border">All FDI permitted</td>
                    <td className="px-2 py-2 border">FDI + MCA</td>
                    <td className="px-2 py-2 border">Full control</td>
                    <td className="px-2 py-2 border">High compliance</td>
                    <td className="px-2 py-2 border">22% domestic</td>
                  </tr>
                  <tr>
                    <td className="px-2 py-2 border">JV</td>
                    <td className="px-2 py-2 border">Shared</td>
                    <td className="px-2 py-2 border">Depends on sector</td>
                    <td className="px-2 py-2 border">FDI + MCA</td>
                    <td className="px-2 py-2 border">Local expertise</td>
                    <td className="px-2 py-2 border">Partner conflict</td>
                    <td className="px-2 py-2 border">22% domestic</td>
                  </tr>
                  <tr>
                    <td className="px-2 py-2 border">LLP</td>
                    <td className="px-2 py-2 border">100%</td>
                    <td className="px-2 py-2 border">Services, mfg.</td>
                    <td className="px-2 py-2 border">FDI + Reg.</td>
                    <td className="px-2 py-2 border">Flexible, simple</td>
                    <td className="px-2 py-2 border">Not all sectors</td>
                    <td className="px-2 py-2 border">30% + surcharge</td>
                  </tr>
                  <tr>
                    <td className="px-2 py-2 border">Franchising</td>
                    <td className="px-2 py-2 border">None</td>
                    <td className="px-2 py-2 border">Brand licensing</td>
                    <td className="px-2 py-2 border">No RBI</td>
                    <td className="px-2 py-2 border">Fast expansion</td>
                    <td className="px-2 py-2 border">Partner dependence</td>
                    <td className="px-2 py-2 border">10% WHT</td>
                  </tr>
                  <tr>
                    <td className="px-2 py-2 border">Licensing</td>
                    <td className="px-2 py-2 border">None</td>
                    <td className="px-2 py-2 border">IP/Tech transfer</td>
                    <td className="px-2 py-2 border">Sensitive only</td>
                    <td className="px-2 py-2 border">Royalty income</td>
                    <td className="px-2 py-2 border">Limited control</td>
                    <td className="px-2 py-2 border">10% WHT</td>
                  </tr>
                  <tr>
                    <td className="px-2 py-2 border">Distribution</td>
                    <td className="px-2 py-2 border">None</td>
                    <td className="px-2 py-2 border">Goods/services</td>
                    <td className="px-2 py-2 border">Contract</td>
                    <td className="px-2 py-2 border">Low cost</td>
                    <td className="px-2 py-2 border">Low control</td>
                    <td className="px-2 py-2 border">WHT on commission</td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* End Table */}
          </div>
        </div>
        <div className="flex-1 flex items-start">
          <div className="w-full max-w-md mx-auto lg:mx-0">
            <RequestQuoteForm />
          </div>
        </div>
      </div>
      {/* Explore Other Services Section */}
      <div className="w-full max-w-7xl mx-auto px-2 md:px-6 pb-10">
        <h2 className="mt-[10%] text-5xl mb-8 text-center text-[oklch(0.623_0.214_259.815)]">
          Explore Other Services
        </h2>
        <ServiceCards />
      </div>
    </div>
  );
}
