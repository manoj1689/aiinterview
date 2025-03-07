export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white text-center py-20">
        <h1 className="text-4xl font-bold">AI-Powered Interview Preparation</h1>
        <p className="mt-4 text-lg">Practice and improve your skills with real-time AI feedback.</p>
        <button className="mt-6 px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:bg-gray-200">
          Get Started
        </button>
      </section>
      
      {/* Features */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl font-semibold">Why Choose Us?</h2>
        <div className="grid md:grid-cols-3 gap-8 mt-8">
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="text-xl font-bold">Real-time AI Feedback</h3>
            <p className="mt-2">Get instant analysis of your responses to improve your answers.</p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="text-xl font-bold">Mock Interviews</h3>
            <p className="mt-2">Simulate real interviews with AI-generated questions.</p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="text-xl font-bold">Comprehensive Reports</h3>
            <p className="mt-2">Get detailed insights and improvement tips after every session.</p>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="bg-gray-200 py-20 px-6 text-center">
        <h2 className="text-3xl font-semibold">What Users Say</h2>
        <div className="mt-8 flex flex-col md:flex-row gap-8 justify-center">
          <div className="p-6 bg-white shadow-md rounded-lg max-w-sm">
            <p>"This AI interview tool helped me ace my job interview!"</p>
            <span className="block mt-4 font-bold">- Alex</span>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg max-w-sm">
            <p>"I love the instant feedback feature. It made me more confident."</p>
            <span className="block mt-4 font-bold">- Maria</span>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="text-center py-20">
        <h2 className="text-3xl font-bold">Start Your AI Interview Prep Today!</h2>
        <button className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700">
          Get Started
        </button>
      </section>
    </div>
  );
}

