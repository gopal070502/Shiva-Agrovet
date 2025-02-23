import React from 'react';
import { Shield, Users, TrendingUp } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About Shiva Agrovet
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Leading the way in modern poultry solutions with innovation and excellence
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Journey
              </h2>
              <p className="text-gray-600 mb-4">
                Since our establishment, Shiva Agrovet has been at the forefront of
                revolutionizing the poultry industry. We've built strong partnerships
                with leading feed companies and developed comprehensive solutions for
                poultry farmers.
              </p>
              <p className="text-gray-600">
                Our commitment to quality and innovation has made us a trusted name
                in the industry, serving hundreds of satisfied customers across
                Vijayawada and surrounding regions.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <StatCard number="10+" text="Years Experience" />
              <StatCard number="150+" text="Happy Farmers" />
              <StatCard number="3" text="Premium Feed Brands" />
              <StatCard number="24/7" text="Support" />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              What drives us to deliver excellence every day
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ValueCard
              icon={<Shield className="w-12 h-12" />}
              title="Quality Assurance"
              description="We partner with only the best feed manufacturers to ensure top quality products"
            />
            <ValueCard
              icon={<Users className="w-12 h-12" />}
              title="Customer Focus"
              description="Our farmers' success is our success. We provide comprehensive support"
            />
            <ValueCard
              icon={<TrendingUp className="w-12 h-12" />}
              title="Innovation"
              description="Constantly evolving with modern solutions and technology"
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard
              text="Shiva Agrovet has been instrumental in improving our farm's productivity. Their feeds and support are exceptional."
              author="Rajesh Kumar"
              role="Poultry Farmer, Vijayawada"
            />
            <TestimonialCard
              text="The transportation services are reliable and efficient. They understand the importance of timely delivery."
              author="Suresh Reddy"
              role="Farm Owner, Nuzvid"
            />
            <TestimonialCard
              text="Their technical support and guidance have helped us modernize our operations significantly."
              author="Venkat Rao"
              role="Poultry Farm Manager"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

const StatCard = ({ number, text }: { number: string; text: string }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg text-center">
      <div className="text-3xl font-bold text-orange-600 mb-2">{number}</div>
      <div className="text-gray-600">{text}</div>
    </div>
  );
};

const ValueCard = ({ icon, title, description }: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => {
  return (
    <div className="text-center p-6">
      <div className="text-orange-600 mb-4 flex justify-center">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const TestimonialCard = ({ text, author, role }: {
  text: string;
  author: string;
  role: string;
}) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <p className="text-gray-600 mb-4 italic">"{text}"</p>
      <div className="font-semibold text-gray-900">{author}</div>
      <div className="text-sm text-gray-500">{role}</div>
    </div>
  );
};

export default About;