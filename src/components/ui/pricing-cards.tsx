import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "MVP Standard Plan",
    description: "Perfect for validating your idea quickly",
    price: "$1,999",
    period: "/project",
    features: [
      "Core features only",
      "Basic UI/UX design",
      "2 Weeks development",
      "Basic testing",
      "Deployment support",
      "1 month of support",
    ],
    popular: false,
  },
  {
    name: "MVP Growth Retainer Plan",
    description: "Ideal for growing businesses",
    price: "$2,999",
    period: "/project",
    features: [
      "All MVP features",
      "Advanced UI/UX design",
      "Continuous development",
      "Comprehensive testing",
      "Performance optimization",
      "3 months of support",
      "Analytics integration",
      "Basic SEO setup",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    description: "For large-scale applications",
    price: "$9,999",
    period: "/project",
    features: [
      "All Standard features",
      "Premium UI/UX design",
      "2 months development",
      "Enterprise-grade security",
      "Advanced analytics",
      "6 months of support",
      "Full SEO optimization",
      "Custom integrations",
      "Scalability features",
    ],
    popular: false,
  },
];

export function PricingCards() {
  return (
    // <div className="w-full min-h-screen flex items-center justify-center bg-black py-16 px-2">
    <div className="flex items-center justify-center py-20 md:py-32 relative bg-gradient-to-bl from-[#111827] via-[#000000] to-[#000000]">

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
        {plans.map((plan, idx) => (
          <Card
            key={plan.name}
            className={`relative flex flex-col justify-between bg-[#111112] border border-neutral-800 text-white shadow-xl rounded-2xl ${plan.popular ? "scale-105 z-10 border-blue-500" : ""}`}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="bg-blue-600 text-white text-xs font-semibold px-4 py-1 rounded-full shadow-lg">Most popular</span>
              </div>
            )}
            <CardHeader className="pb-2 pt-8 flex flex-col items-center">
              <CardTitle className="text-2xl text-white text-center">{plan.name}</CardTitle>
              <CardDescription className="text-neutral-400 text-center mt-2">{plan.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center">
              <div className="flex items-end gap-1 mt-4 mb-6">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-lg text-neutral-400">{plan.period}</span>
              </div>
              <ul className="w-full flex flex-col gap-3 mt-2 mb-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-base text-neutral-200">
                    <Check className="text-blue-500 w-5 h-5 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="flex justify-center pb-8 pt-2">
              <Button className="w-full bg-gradient-to-r from-neutral-900 to-neutral-800 border border-neutral-700 hover:from-blue-700 hover:to-blue-500 text-white shadow-lg rounded-xl py-6 text-lg font-semibold transition-all duration-200">
                Book a Call
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
} 