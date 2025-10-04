
"use client";
import { useState } from "react";
import Image from "next/image";
import { pricingPlans } from "../constants";
import { check } from "../assets";
import Button from "./Button";

const PricingList = () => {
  const [isYearly, setIsYearly] = useState(false);
  const plans = isYearly ? pricingPlans.yearly : pricingPlans.monthly;

  return (
    <div>
      {/* Toggle Switch */}
      <div className="flex justify-center items-center gap-4 mb-10">
        <span className={`text-sm ${!isYearly ? "text-white" : "text-n-4"}`}>Monthly</span>
        <button
          onClick={() => setIsYearly(!isYearly)}
          className={`w-14 h-7 bg-n-7 rounded-full p-1 transition-colors duration-300 relative`}
        >
          <div
            className={`h-5 w-5 rounded-full bg-white transition-transform duration-300 ${
              isYearly ? "translate-x-7" : "translate-x-0"
            }`}
          />
        </button>
        <span className={`text-sm ${isYearly ? "text-white" : "text-n-4"}`}>Yearly <span className="text-green-400 text-xs ml-1">(Save 13%)</span></span>
      </div>

      {/* Plan Cards */}
      <div className="grid grid-cols-1  sm:grid-cols-2 xl:grid-cols-3 gap-6">
        {plans.map((item) => (
          <div
            key={item.id}
            className={`relative w-full h-full px-6 py-10 bg-n-8 border rounded-[2rem] transition-all duration-300 hover:scale-[1.01] hover:shadow-xl ${
              item.popular ? "border-color-1" : "border-n-6"
            }`}
          >
            {item.popular && (
              <div className="absolute top-4 right-4 bg-color-1 text-n-8 text-xs font-bold px-3 py-1 rounded-full uppercase">
                Most Popular
              </div>
            )}

            <h4 className="h4 mb-3 text-white">{item.title}</h4>
            <p className="body-2 text-n-3 mb-6">{item.description}</p>

            <div className="flex items-end mb-6 h-[5rem]">
              {item.price ? (
                <>
                  <span className="h3 mr-1">$</span>
                  <span className="text-[3rem] leading-none font-bold">{item.price}</span>
                  <span className="body-3 ml-1">{item.frequency}</span>
                </>
              ) : (
                <span className="text-xl font-semibold">Custom</span>
              )}
            </div>

            <Button
              className="w-full mb-6"
              href={item.price ? "/pricing" : "mailto:contact@usedash.ai"}
              
            >
              {item.cta}
            </Button>

            <ul>
              {item.features.map((feature, index) => (
                <li key={index} className="flex items-start py-4 border-t border-n-6">
                  <Image src={check} width={24} height={24} alt="Check" />
                  <p className="body-2 ml-4">{feature}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingList;
