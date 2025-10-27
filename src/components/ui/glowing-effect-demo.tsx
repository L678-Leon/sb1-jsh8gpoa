"use client";

import { Wrench, Clock, Settings, Users, Award } from "lucide-react";
import { GlowingEffect } from "./glowing-effect";
import { cn } from "../../lib/utils";

export function GlowingEffectDemo() {
  return (
    <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
      <GridItem
        icon={<Wrench className="h-5 w-5" />}
        title="Professional Installation"
        description="Expert installation and configuration services for all weighing solutions with certified technicians."
      />
      <GridItem
        icon={<Clock className="h-5 w-5" />}
        title="24/7 Technical Support"
        description="Round-the-clock technical support and maintenance services across East Africa with emergency response teams."
      />
      <GridItem
        icon={<Settings className="h-5 w-5" />}
        title="Comprehensive Maintenance"
        description="Preventive maintenance programs, regular calibration services, and performance optimization for optimal equipment performance."
      />
      <GridItem
        icon={<Users className="h-5 w-5" />}
        title="Professional Training"
        description="Operator training programs, maintenance staff certification, and custom training modules for your team."
      />
      <GridItem
        icon={<Award className="h-5 w-5" />}
        title="Custom Solutions"
        description="Tailored weighing solutions designed to meet specific business requirements with scalable implementations."
      />
    </ul>
  );
}

interface GridItemProps {
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

const GridItem = ({ icon, title, description }: GridItemProps) => {
  return (
    <li className="min-h-[16rem] list-none w-full">
      <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-gray-200 p-2 md:rounded-[1.5rem] md:p-3">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          borderWidth={3}
        />
        <div className="relative flex h-full min-h-[14rem] flex-col gap-4 overflow-hidden rounded-xl border-[0.75px] bg-white p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="w-fit rounded-lg border-[0.75px] border-gray-200 bg-red-50 p-3 flex-shrink-0">
            <div className="text-red-600">
              {icon}
            </div>
          </div>
          <div className="space-y-3 flex-grow">
            <h3 className="text-lg leading-tight font-bold font-serif tracking-[-0.02em] md:text-xl text-black">
              {title}
            </h3>
            <p className="font-sans text-sm leading-relaxed md:text-base text-gray-600">
              {description}
            </p>
          </div>
        </div>
      </div>
    </li>
  );
};