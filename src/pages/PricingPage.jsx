import React, { useState } from "react";
import Sidebar from "../components/Sidebar";

const PricingPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const plans = [
    {
      name: "Basic Pack",
      price: "৳200",
      description: "Perfect for getting started",
      features: [
        "10 hours of interview practice",
        "AI generated questions",
        "Basic AI feedback and scoring",
        "Voice + text hybrid mode",
        "Basic performance tracking",
        "Use anytime within 30 days",
        "Email support",
      ],
      featured: true,
    },
    {
      name: "Standard Pack",
      price: "৳400",
      description: "Ideal for serious candidates",
      features: [
        "20 hours of interview practice",
        "AI generated questions",
        "Advanced AI feedback with insights",
        "Voice + text hybrid mode",
        "Detailed performance analytics",
        "Progress tracking & recommendations",
        "Use anytime within 30 days",
        "Priority email support",
        "Offline simulation mode",
      ],
      popular: true,
    },
    {
      name: "Premium Pack",
      price: "৳600",
      description: "For comprehensive preparation",
      features: [
        "30 hours of interview practice",
        "AI generated questions",
        "Advanced AI with personalized learning",
        "Voice + text hybrid mode",
        "Comprehensive analytics dashboard",
        "Custom question creation",
        "Use anytime within 30 days",
        "Priority support + live chat",
        "Offline simulation mode",
        "Interview scheduling assistant",
        "Export performance reports",
      ],
    },
  ];

  return (
    <div className="flex min-h-screen bg-light-bg">
      <div className="flex-1 flex flex-col">
        <div className="bg-white/95 backdrop-blur-lg p-6 flex items-center gap-6 border-b border-gray-200">
          <button
            onClick={toggleSidebar}
            className="lg:hidden bg-none border-none text-text-gray"
          >
            <i className="fas fa-bars"></i>
          </button>
          <div className="flex-1 relative max-w-md">
            <i className="fas fa-search absolute left-3.5 top-1/2 -translate-y-1/2 text-text-gray"></i>
            <input
              placeholder="Search..."
              className="w-full py-3 pl-11 pr-4 bg-white/70 border border-gray-200 rounded-lg text-text-dark placeholder-text-gray"
            />
          </div>
        </div>

        <div className="flex-1 p-6 overflow-y-auto">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                Choose Your Plan
              </h1>
              <p className="text-text-gray">
                Select the plan that works best for your interview preparation
                needs
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`bg-white/90 p-8 rounded-2xl border border-gray-100 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl relative ${
                  plan.featured ? "border-2 border-primary scale-105" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-primary to-secondary text-white text-sm font-semibold py-2 px-6 rounded-bl-2xl rounded-tr-2xl">
                    Most Popular
                  </div>
                )}
                <div className="text-center mb-6 pb-6 border-b border-gray-200">
                  <h4 className="text-xl font-bold mb-3">{plan.name}</h4>
                  <div className="text-4xl font-bold text-primary">
                    {plan.price}{" "}
                    <span className="text-sm text-text-gray">/month</span>
                  </div>
                </div>
                <ul className="list-none mb-6">
                  {plan.features.map((feature) => (
                    <li key={feature} className="mb-3 flex items-center gap-3">
                      <i className="fas fa-check text-primary w-5"></i>{" "}
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full py-3 px-5 bg-gradient-to-r from-primary to-secondary border-none rounded-lg text-white font-semibold cursor-pointer inline-flex justify-center gap-2 items-center transition-all duration-300 relative overflow-hidden hover:-translate-y-0.5 hover:shadow-lg">
                  {plan.featured ? "Current Plan" : "Get Started"}
                </button>
              </div>
            ))}
          </div>

          <div className="bg-white/90 p-8 rounded-2xl border border-gray-100 shadow-lg">
            <h3 className="text-center text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-6">
              Package Comparison
            </h3>
            <table className="w-full my-10 bg-white shadow-lg rounded-2xl border-collapse">
              <thead>
                <tr>
                  <th className="border border-gray-200 p-4 text-center bg-light-bg text-black">
                    Feature
                  </th>
                  <th className="border border-gray-200 p-4 text-center bg-light-bg text-black">
                    Basic
                  </th>
                  <th className="border border-gray-200 p-4 text-center bg-light-bg text-black">
                    Standard
                  </th>
                  <th className="border border-gray-200 p-4 text-center bg-light-bg text-black">
                    Premium
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-gray-100">
                  <td className="border border-gray-200 p-4 text-center">
                    Practice Hours
                  </td>
                  <td className="border border-gray-200 p-4 text-center">
                    10 hours
                  </td>
                  <td className="border border-gray-200 p-4 text-center">
                    20 hours
                  </td>
                  <td className="border border-gray-200 p-4 text-center">
                    30 hours
                  </td>
                </tr>
                <tr className="hover:bg-gray-100">
                  <td className="border border-gray-200 p-4 text-center">
                    Cost per Hour
                  </td>
                  <td className="border border-gray-200 p-4 text-center">
                    ৳20
                  </td>
                  <td className="border border-gray-200 p-4 text-center">
                    ৳20
                  </td>
                  <td className="border border-gray-200 p-4 text-center">
                    ৳20
                  </td>
                </tr>
                <tr className="hover:bg-gray-100">
                  <td className="border border-gray-200 p-4 text-center">
                    AI Feedback Level
                  </td>
                  <td className="border border-gray-200 p-4 text-center">
                    Basic
                  </td>
                  <td className="border border-gray-200 p-4 text-center">
                    Advanced
                  </td>
                  <td className="border border-gray-200 p-4 text-center">
                    Personalized
                  </td>
                </tr>
                <tr className="hover:bg-gray-100">
                  <td className="border border-gray-200 p-4 text-center">
                    Analytics
                  </td>
                  <td className="border border-gray-200 p-4 text-center">
                    Basic
                  </td>
                  <td className="border border-gray-200 p-4 text-center">
                    Detailed
                  </td>
                  <td className="border border-gray-200 p-4 text-center">
                    Comprehensive
                  </td>
                </tr>
                <tr className="hover:bg-gray-100">
                  <td className="border border-gray-200 p-4 text-center">
                    Support
                  </td>
                  <td className="border border-gray-200 p-4 text-center">
                    Email
                  </td>
                  <td className="border border-gray-200 p-4 text-center">
                    Priority Email
                  </td>
                  <td className="border border-gray-200 p-4 text-center">
                    Priority + Live Chat
                  </td>
                </tr>
                <tr className="hover:bg-gray-100">
                  <td className="border border-gray-200 p-4 text-center">
                    Validity
                  </td>
                  <td className="border border-gray-200 p-4 text-center text-green-600">
                    30 days
                  </td>
                  <td className="border border-gray-200 p-4 text-center text-green-600">
                    30 days
                  </td>
                  <td className="border border-gray-200 p-4 text-center text-green-600">
                    30 days
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-white/90 p-8 rounded-2xl border border-gray-100 shadow-lg mt-10">
            <h3 className="text-center text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-6">
              How Hour-Based Packages Work
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="p-6 rounded-lg border border-gray-200">
                <h4 className="text-xl font-bold mb-3">
                  <i className="fas fa-1 text-primary text-3xl mb-2"></i>
                  <br />
                  Purchase Hours
                </h4>
                <p className="text-text-gray">
                  Buy the package that fits your practice needs.
                </p>
              </div>
              <div className="p-6 rounded-lg border border-gray-200">
                <h4 className="text-xl font-bold mb-3">
                  <i className="fas fa-2 text-primary text-3xl mb-2"></i>
                  <br />
                  Use Anytime
                </h4>
                <p className="text-text-gray">
                  Practice whenever you want within 30 days.
                </p>
              </div>
              <div className="p-6 rounded-lg border border-gray-200">
                <h4 className="text-xl font-bold mb-3">
                  <i className="fas fa-3 text-primary text-3xl mb-2"></i>
                  <br />
                  Track Progress
                </h4>
                <p className="text-text-gray">
                  Monitor your improvement with detailed analytics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
