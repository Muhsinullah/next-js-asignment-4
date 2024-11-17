import { NextPage } from 'next';
import Head from 'next/head';
const Home: NextPage = () => {
  return (
    <div className="bg-blue-900 text-white min-h-screen">
      <Head>
        <title>Whitespace - Get More Done</title>
        <meta name="description" content="Responsive website created using Next.js, TypeScript, and Tailwind CSS" />
      </Head>

      {/* Header Section */}
      <header className="p-4 md:p-6 lg:p-8 flex justify-between items-center">
        <h1 className="text-xl md:text-3xl lg:text-4xl font-bold">Whitespace</h1>
        <nav>
          <ul className="flex space-x-3 md:space-x-6 lg:space-x-8">
            <li><a href="#features" className="hover:underline">Features</a></li>
            <li><a href="#pricing" className="hover:underline">Pricing</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Main Banner Section */}
      <section className="p-4 md:p-6 lg:p-8 text-center">
        <h2 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4">Get More Done with Whitespace</h2>
        <p className="text-base md:text-lg lg:text-xl max-w-2xl mx-auto mb-6">
          Manage your projects efficiently with our comprehensive set of tools that adapt to your workflow.
        </p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 md:py-3 md:px-6 lg:py-4 lg:px-8 rounded transition">
          Try It Now
        </button>
      </section>

      {/* Features Section */}
      <section id="features" className="p-4 md:p-6 lg:p-8 grid gap-6 md:gap-8 lg:gap-10 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        <div className="bg-white text-blue-900 p-4 md:p-6 lg:p-8 rounded shadow-lg">
          <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-2">Project Management</h3>
          <p className="text-sm md:text-base">Easily manage your tasks and collaborate with your team for better efficiency.</p>
        </div>
        <div className="bg-white text-blue-900 p-4 md:p-6 lg:p-8 rounded shadow-lg">
          <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-2">Customization</h3>
          <p className="text-sm md:text-base">Tailor the platform to suit your specific needs and preferences.</p>
        </div>
        <div className="bg-white text-blue-900 p-4 md:p-6 lg:p-8 rounded shadow-lg">
          <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-2">Work Together</h3>
          <p className="text-sm md:text-base">Collaborate seamlessly and keep everyone on the same page.</p>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="p-4 md:p-6 lg:p-8 bg-blue-700 text-center">
        <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-4">Choose Your Plan</h2>
        <div className="grid gap-6 md:gap-8 lg:gap-10 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          <div className="bg-white text-blue-900 p-4 md:p-6 lg:p-8 rounded shadow-lg">
            <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-2">Free Plan</h3>
            <p className="text-sm md:text-base">Basic features for individuals starting out.</p>
            <p className="text-xl md:text-2xl lg:text-3xl font-bold">$0/month</p>
          </div>
          <div className="bg-white text-blue-900 p-4 md:p-6 lg:p-8 rounded shadow-lg">
            <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-2">Personal Plan</h3>
            <p className="text-sm md:text-base">More tools and access for personal projects.</p>
            <p className="text-xl md:text-2xl lg:text-3xl font-bold">$11.99/month</p>
          </div>
          <div className="bg-white text-blue-900 p-4 md:p-6 lg:p-8 rounded shadow-lg">
            <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-2">Organization Plan</h3>
            <p className="text-sm md:text-base">Full access for teams with advanced needs.</p>
            <p className="text-xl md:text-2xl lg:text-3xl font-bold">$49.99/month</p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="p-4 md:p-6 lg:p-8 bg-blue-800 text-center">
        <p className="text-xs md:text-sm lg:text-base">&copy; 2024 Whitespace. All Rights Reserved.</p>
        <div className="flex justify-center space-x-2 md:space-x-4 lg:space-x-6 mt-4">
          <a href="#" className="text-blue-300 hover:text-blue-100">Facebook</a>
          <a href="#" className="text-blue-300 hover:text-blue-100">Twitter</a>
          <a href="#" className="text-blue-300 hover:text-blue-100">LinkedIn</a>
        </div>
      </footer>
    </div>
  );
};

export default Home;
