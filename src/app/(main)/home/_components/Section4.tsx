'use client'
import React, { useState } from 'react'
import { BadgeCheck, Zap, Clock, Users, Globe, Video } from 'lucide-react'

const Section4 = () => {
  const [annualBilling, setAnnualBilling] = useState(true)

  const plans = [
    {
      name: "Starter",
      price: {
        monthly: "29",
        annual: "25"
      },
      description: "Perfect for casual learners",
      features: [
        "Basic course access",
        "3 live classes/week",
        "Daily exercises",
        "Email support",
        "1 free assessment"
      ],
      popular: false,
      color: "bg-indigo-100 dark:bg-indigo-900/20"
    },
    {
      name: "Pro",
      price: {
        monthly: "79",
        annual: "69"
      },
      description: "Most popular choice",
      features: [
        "Full course access",
        "Unlimited live classes",
        "Priority support",
        "Group workshops",
        "Weekly assessments",
        "Certificate included"
      ],
      popular: true,
      color: "bg-purple-100 dark:bg-purple-900/20"
    },
    {
      name: "Premium",
      price: {
        monthly: "149",
        annual: "129"
      },
      description: "For serious learners",
      features: [
        "All Pro features",
        "1:1 tutoring (2x/week)",
        "Career coaching",
        "Custom learning plan",
        "24/7 support",
        "Premium certificate"
      ],
      popular: false,
      color: "bg-rose-100 dark:bg-rose-900/20"
    }
  ]

  return (
    <section className="relative py-20 bg-gray-50 dark:bg-gray-900 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-100 dark:bg-purple-900/10 rounded-full mix-blend-multiply filter blur-3xl opacity-30" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-100 dark:bg-indigo-900/10 rounded-full mix-blend-multiply filter blur-3xl opacity-30" />
      </div>

      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Flexible Learning Plans
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg mb-8">
            Choose the perfect plan for your English learning journey
          </p>
          
          {/* Billing toggle */}
          <div className="inline-flex items-center gap-4 bg-white dark:bg-gray-800 p-2 rounded-full mb-12">
            <button
              onClick={() => setAnnualBilling(false)}
              className={`px-6 py-3 rounded-full ${
                !annualBilling 
                  ? 'bg-indigo-600 text-white' 
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnualBilling(true)}
              className={`px-6 py-3 rounded-full ${
                annualBilling 
                  ? 'bg-indigo-600 text-white' 
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              Annual (2 months free)
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative group p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 ${
                plan.popular 
                  ? 'border-2 border-indigo-500 dark:border-indigo-400 bg-white dark:bg-gray-800' 
                  : 'border border-gray-100 dark:border-gray-700 bg-white/50 dark:bg-gray-800/50'
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute top-4 right-4 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 px-4 py-1 rounded-full text-sm">
                  Most Popular
                </div>
              )}

              <div className={`mb-6 p-4 rounded-2xl ${plan.color}`}>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {plan.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mt-2">
                  {plan.description}
                </p>
              </div>

              <div className="mb-8">
                <div className="flex items-end justify-center gap-2">
                  <span className="text-5xl font-bold text-gray-900 dark:text-white">
                    ${annualBilling ? plan.price.annual : plan.price.monthly}
                  </span>
                  <span className="text-gray-600 dark:text-gray-400 mb-1">
                    /{annualBilling ? 'year' : 'month'}
                  </span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li 
                    key={featureIndex}
                    className="flex items-center gap-3 text-gray-600 dark:text-gray-300"
                  >
                    <BadgeCheck className="w-5 h-5 text-indigo-600 dark:text-indigo-400 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-4 rounded-xl font-semibold transition-colors ${
                  plan.popular
                    ? 'bg-indigo-600 hover:bg-indigo-700 text-white'
                    : 'bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-white'
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>

        {/* Enterprise CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
            <Globe className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
            <div className="text-left">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Need enterprise solutions?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Custom plans for schools and companies
              </p>
            </div>
            <button className="ml-4 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Section4