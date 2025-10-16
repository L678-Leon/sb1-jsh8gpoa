import React from 'react';
import { History, Target, Eye, Heart, Users, Award, Handshake, Phone } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-serif font-bold mb-6">About Scales & Software (K) Ltd</h1>
          <p className="text-xl font-light max-w-3xl mx-auto leading-relaxed">
            East Africa's most trusted partner in precision weighing solutions since 2005
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Our Story */}
        <section className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="flex items-center mb-6">
                <div className="bg-red-600 p-3 rounded-full mr-4">
                  <History className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-4xl font-serif font-bold text-red-600">Our Story</h2>
              </div>
              <div className="prose prose-lg text-gray-700 leading-relaxed">
                <p className="mb-6">
                  Established in 2005, Scales & Software (K) Ltd began as a vision to revolutionize 
                  weighing technology across East Africa. What started as a small enterprise has grown 
                  into the region's most trusted partner in precision weighing solutions.
                </p>
                <p className="mb-6">
                  Over nearly two decades, we have built lasting relationships with businesses across 
                  multiple industries, from dairy cooperatives in rural Kenya to major industrial 
                  operations spanning Uganda, Rwanda, and beyond.
                </p>
                <p>
                  Our journey is marked by continuous innovation, unwavering commitment to quality, 
                  and a deep understanding of our clients' unique challenges in the East African market.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <img
                src="/images/group 1.jpg"
                alt="Our company heritage"
                className="w-full h-96 object-cover rounded-lg shadow-xl border-4 border-gray-100"
              />
            </div>
          </div>
        </section>

        {/* Expertise */}
        <section className="mb-20 bg-white rounded-xl shadow-lg p-12">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-red-600 p-3 rounded-full mr-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-4xl font-serif font-bold text-black">Our Expertise</h2>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-red-50 rounded-lg">
              <h3 className="text-xl font-serif font-semibold text-black mb-4">Technical Excellence</h3>
              <p className="text-gray-600 leading-relaxed">
                Nearly two decades of experience in precision weighing technology, 
                from installation to maintenance across all industrial sectors.
              </p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-serif font-semibold text-black mb-4">Regional Leadership</h3>
              <p className="text-gray-600 leading-relaxed">
                Comprehensive coverage across East Africa with local expertise 
                and understanding of regional business requirements.
              </p>
            </div>
            <div className="text-center p-6 bg-red-50 rounded-lg">
              <h3 className="text-xl font-serif font-semibold text-black mb-4">Industry Specialization</h3>
              <p className="text-gray-600 leading-relaxed">
                Deep knowledge across dairy, tea, mining, milling, and industrial 
                sectors with tailored solutions for each industry.
              </p>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="mb-20">
          <div className="bg-gradient-to-r from-red-600 to-black text-white rounded-xl p-12">
            <div className="text-center">
              <div className="flex items-center justify-center mb-6">
                <Target className="h-12 w-12 text-red-200 mr-4" />
                <h2 className="text-4xl font-serif font-bold">Our Mission</h2>
              </div>
              <p className="text-xl font-light leading-relaxed max-w-4xl mx-auto">
                To deliver innovative, reliable weighing solutions that enhance business efficiency 
                and profitability for our clients across East Africa, while maintaining the highest 
                standards of precision, service excellence, and technological advancement.
              </p>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-red-600 p-3 rounded-full mr-4">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-4xl font-serif font-bold text-black">Core Values</h2>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Precision & Accuracy", desc: "Unwavering commitment to measurement excellence" },
              { title: "Customer Excellence", desc: "Exceeding expectations in every interaction" },
              { title: "Innovation & Quality", desc: "Continuous advancement in weighing technology" },
              { title: "Integrity & Trust", desc: "Building lasting relationships through honesty" },
              { title: "Continuous Improvement", desc: "Always striving for better solutions" },
              { title: "Regional Expertise", desc: "Deep understanding of East African markets" }
            ].map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md border-l-4 border-red-600">
                <h3 className="text-xl font-serif font-semibold text-black mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Vision */}
        <section className="mb-20">
          <div className="bg-black text-white rounded-xl p-12">
            <div className="text-center">
              <div className="flex items-center justify-center mb-6">
                <Eye className="h-12 w-12 text-red-400 mr-4" />
                <h2 className="text-4xl font-serif font-bold">Our Vision</h2>
              </div>
              <p className="text-xl font-light leading-relaxed max-w-4xl mx-auto">
                To be East Africa's leading weighing solutions provider, recognized for excellence, 
                innovation, and exceptional customer service, while contributing to the economic 
                growth and industrial development of the region.
              </p>
            </div>
          </div>
        </section>

        {/* Clients */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-red-600 p-3 rounded-full mr-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-4xl font-serif font-bold text-black">Our Clients</h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trusted by leading companies across multiple industries in East Africa
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-8">
              {/* Dairy Sector */}
              <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-red-600">
                <h3 className="text-2xl font-serif font-bold text-red-700 mb-6">1. Dairy Sector</h3>
                <div className="grid grid-cols-2 gap-3 text-sm text-gray-700">
                  {[
                    "NEW KCC", "BROOKSIDE DAIRY LIMITED", "GITHUNGURI DAIRY", "MUKURWENI DAIRY", "SUPERIOR DAIRY",
                    "KINANGOP DAIRY", "KIRAITA DAIRY", "MEVED DAIRY", "PALMHOUSE HOUSE",
                    "ASPENDOS DAIRY", "UPLANDS DAIRY", "DEMKA DAIRY", "COUNTRYSIDE DAIRY", "KIRIMA DAIRY"
                  ].map((client, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-red-600 rounded-full flex-shrink-0"></div>
                      <span className="font-medium">{client}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mining Sector */}
              <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-red-600">
                <h3 className="text-2xl font-serif font-bold text-red-600 mb-6">3. Mining Sector</h3>
                <div className="grid grid-cols-1 gap-3 text-sm text-gray-700">
                  {[
                    "SIDAI CONCRETE", "RHOMBUS CONCRETE", "BEEMONEY CONCRETE",
                    "GOLDSTONE CONCRETE", "SAVANNAH", "ASSOCIATED BATTERY MFRS", "SIRIKWA QUARRY"
                  ].map((client, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-red-600 rounded-full flex-shrink-0"></div>
                      <span className="font-medium">{client}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Food & Processing */}
              <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-red-600">
                <h3 className="text-2xl font-serif font-bold text-red-700 mb-6">5. Food & Processing</h3>
                <div className="grid grid-cols-1 gap-3 text-sm text-gray-700">
                  {[
                    "FEAST FOODS", "KENYA MEAT COMMISSION", "KAREN ROSES",
                    "KATHY FRESH", "BUNGOMA COUNTY", "ENNSVALLEY", "FARMERS CHOICE"
                  ].map((client, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-red-600 rounded-full flex-shrink-0"></div>
                      <span className="font-medium">{client}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Commercial/Private Weighbridge */}
              <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-red-600">
                <h3 className="text-2xl font-serif font-bold text-red-600 mb-6">7. Commercial/Private Weighbridge</h3>
                <div className="grid grid-cols-1 gap-3 text-sm text-gray-700">
                  {[
                    "NAKURU WEIGHBRIDGE", "ELDORET WEIGHBRIDGE", "PCEA WEIGHBRIDGE",
                    "NAROK WEIGHBRIDGE", "LAIKIPIA COUNTY GOVERNMENT", "KAPENGURIA WEIGHBRIDGE",
                    "KITALE WEIGHBRIDGE", "ELFAM WEIGHBRIDGE"
                  ].map((client, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-red-600 rounded-full flex-shrink-0"></div>
                      <span className="font-medium">{client}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              {/* Tea Sector */}
              <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-red-600">
                <h3 className="text-2xl font-serif font-bold text-red-700 mb-6">2. Tea Sector (Private & KTDA)</h3>
                           
                <div className="grid grid-cols-1 gap-3 text-sm text-gray-700">
                  {[
                   "ALL KTDA FACTORIES", "ALL NYAYO TEA ZONE FACTORIES", "DL KOISAGAT TEA FACTORY", "ELGON TEA-KAPSABET",
                    "ELGON TEA-KITALE", "KAPCHEBET TEA FACTORY", "KAISUGU TEA FACTORY",
                    "TACHASIS TEA FACTORY", "SOT TEA FACTORY", "KIPTAGICH TEA FACTORY",
                    "TET TEA FACTORY", "KISYET TEA FACTORY", "TAIWET TEA FACTORY",
                    "MBOGO VALLEY TEA FACTORY", "KURESOI TEA FACTORY", "SIOMO TEA FACTORY",
                    "CHEBANGO TEA FACTORY", "CHEMUSIAN TEA FACTORY", "GREENFEILDS TEA FACTORY",
                    "SANGALO TEA FACTORY", "KIPSIGIS TEA FACTORY", "CHEPKUMIA TEA FACTORY",
                    "BURETI TEA FACTORY"
                  ].map((client, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-red-600 rounded-full flex-shrink-0"></div>
                      <span className="font-medium">{client}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Milling Sector */}
              <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-red-600">
                <h3 className="text-2xl font-serif font-bold text-red-700 mb-6">4. Milling Sector</h3>
                <div className="grid grid-cols-1 gap-3 text-sm text-gray-700">
                  {[
                    "NATIONAL CEREALS BOARD", "UNGA LTD", "BUFFALO MILLERS", "TUNGA FEEDS LTD KAMPALA",
                    "AGROWAYS JINJA-UGANDA", "AGROWAYS NAMULESA-UGANDA", "AGROWAYS MBARARA-UGANDA",
                    "KOMOOL FARM", "LALELA FARM", "GICHEHA FARM", "KENCHIC",
                    "TUSUSWO WEIGHBRIDGE", "BAKHRESA-RWANDA"
                  ].map((client, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-red-600 rounded-full flex-shrink-0"></div>
                      <span className="font-medium">{client}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Oil Sector */}
              <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-red-600">
                <h3 className="text-2xl font-serif font-bold text-red-600 mb-6">6. Oil Sector</h3>
                <div className="grid grid-cols-1 gap-3 text-sm text-gray-700">
                  {[
                    "TOTAL OIL", "NATIONAL OIL", "RUBIS KENYA",
                    "OLA ENERGY", "GULF ENERGY", "GALANA OIL"
                  ].map((client, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-red-600 rounded-full flex-shrink-0"></div>
                      <span className="font-medium">{client}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sugar Sector */}
              <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-red-600">
                <h3 className="text-2xl font-serif font-bold text-red-600 mb-6">8. Sugar Sector</h3>
                <div className="grid grid-cols-1 gap-3 text-sm text-gray-700">
                  {[
                    "WEST VALLEY SUGAR FACTORY", "KIPSITET CANE COLLECTION CENTRE", "CHEMASE CANE COLLECTION CENTRE", "TRANSMARA SUGAR FACTORY ",
                    "SONGHOR CANE COLLECTION CENTRE", "KIMWANI CANE COLLECTION CENTRE", "KIBOS SUGAR FACTORY", "SOIT SUGAR FACTORY"
                  ].map((client, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-red-600 rounded-full flex-shrink-0"></div>
                      <span className="font-medium">{client}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Partners */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-red-600 p-3 rounded-full mr-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-4xl font-serif font-bold text-black">Our Partners</h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Strategic partnerships that enable us to deliver comprehensive solutions across East Africa
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center justify-center">
              <img
                src="/images/Screenshot_16-10-2025_15525_.jpeg"
                alt="Our Partners"
                className="max-w-90 w-90 h-auto object-contain rounded-lg"
              />
            </div>
          </div>
        </section>

        {/* Promise to You */}
        <section className="mb-20">
          <div className="bg-gradient-to-r from-red-600 to-black rounded-xl p-12 text-white">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <Handshake className="h-10 w-10 text-red-200 mr-4" />
                  <h2 className="text-4xl font-serif font-bold">Our Promise to You</h2>
                </div>
                <p className="text-lg font-light leading-relaxed mb-8">
                  We are committed to delivering exceptional value through our comprehensive services. 
                  Our promise is built on five core pillars that drive everything we do.
                </p>
                <div className="space-y-4">
                  {[
                    "Efficiency in every solution we deliver",
                    "Freedom to Choose the best options for your needs",
                    "Improved Profits through optimized operations",
                    "Timely Deliveries that meet your schedules",
                    "Effective Customer Care that exceeds expectations"
                  ].map((promise, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="w-3 h-3 bg-red-200 rounded-full flex-shrink-0"></div>
                      <span className="text-lg font-medium">{promise}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <img
                  src="public/images/group 2.jpg"
                  alt="Our service commitment"
                  className="w-full h-80 object-cover rounded-lg shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl">
                  <div className="flex items-center space-x-4">
                    <div className="bg-red-600 p-3 rounded-full">
                      <Award className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-black">24/7 Support</div>
                      <div className="text-sm text-gray-600">Always Available</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Us */}
        <section className="mb-20 bg-white rounded-xl shadow-lg">
          <div className="p-12">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-6">
                <div className="bg-red-600 p-3 rounded-full mr-4">
                  <Phone className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-4xl font-serif font-bold text-black">Contact Us</h2>
              </div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Ready to discuss your weighing solution needs? Get in touch with our expert team
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Contact Numbers Column */}
              <div className="bg-red-50 p-8 rounded-lg">
                <h3 className="text-2xl font-serif font-semibold text-black mb-6 text-center">Phone Numbers</h3>
                <div className="space-y-4 text-center">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <Phone className="h-6 w-6 text-red-600 mx-auto mb-2" />
                    <p className="text-xl font-bold text-black">+254-722-303505</p>
                    <p className="text-sm text-gray-600">Primary Line</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <Phone className="h-6 w-6 text-red-600 mx-auto mb-2" />
                    <p className="text-xl font-bold text-black">+254-738-829064</p>
                    <p className="text-sm text-gray-600">Secondary Line</p>
                  </div>
                </div>
              </div>

              {/* Email and Location Column */}
              <div className="space-y-6">
                {/* Email Section */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-serif font-semibold text-black mb-4 text-center">Email Addresses</h3>
                  <div className="space-y-3">
                    <div className="bg-white p-3 rounded-lg text-center">
                      <p className="font-medium text-black">info@scale-software.co.ke</p>
                      <p className="text-xs text-gray-600">General Information</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg text-center">
                      <p className="font-medium text-black">sales@scale-software.co.ke</p>
                      <p className="text-xs text-gray-600">Sales Inquiries</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg text-center">
                      <p className="font-medium text-black">sales1@scale-software.co.ke</p>
                      <p className="text-xs text-gray-600">Additional Sales</p>
                    </div>
                  </div>
                </div>

                {/* Location Section */}
                <div className="bg-red-50 p-6 rounded-lg">
                  <h3 className="text-xl font-serif font-semibold text-black mb-4 text-center">Visit Us</h3>
                  <div className="bg-white p-4 rounded-lg text-center">
                    <div className="bg-red-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <p className="text-gray-600">The Filing Room (ground Floor),</p>
                    <p className="text-gray-600">Near Panari Hotel, Mombasa Rd.</p>
                    <p className="text-gray-600">Nairobi, Kenya</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;