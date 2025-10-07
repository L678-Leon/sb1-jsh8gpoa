"use client";

import { Wrench, Clock, Settings, Users, Award } from "lucide-react";
import { GlowingEffect } from "./glowing-effect";
import { cn } from "../../lib/utils";

export function GlowingEffectDemo() {
  return (
    <ul className="grid grid-cols-1 grid-rows-none gap-6 md:grid-cols-12 md:grid-rows-3 lg:gap-6 xl:max-h-[36rem] xl:grid-rows-2">
      <GridItem
        area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
        icon={<Wrench className="h-5 w-5" />}
        title="Professional Installation"
        description="Expert installation and configuration services for all weighing solutions with certified technicians."
      />
      <GridItem
        area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
        icon={<Clock className="h-5 w-5" />}
        title="24/7 Technical Support"
        description="Round-the-clock technical support and maintenance services across East Africa with emergency response teams."
      />
      <GridItem
        area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
        icon={<Settings className="h-5 w-5" />}
        title="Comprehensive Maintenance"
        description="Preventive maintenance programs, regular calibration services, and performance optimization for optimal equipment performance."
      />
      <GridItem
        area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
        icon={<Users className="h-5 w-5" />}
        title="Professional Training"
        description="Operator training programs, maintenance staff certification, and custom training modules for your team."
      />
      <GridItem
        area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
        icon={<Award className="h-5 w-5" />}
        title="Custom Solutions"
        description="Tailored weighing solutions designed to meet specific business requirements with scalable implementations."
      />
    </ul>
  );
}

interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

const GridItem = ({ area, icon, title, description }: GridItemProps) => {
  return (
    <li className={cn("min-h-[14rem] list-none", area)}>
      <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-gray-200 p-2 md:rounded-[1.5rem] md:p-3">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          borderWidth={3}
        />
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-[0.75px] bg-white p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 md:p-6">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border-[0.75px] border-gray-200 bg-red-50 p-3">
              <div className="text-red-600">
                {icon}
              </div>
            </div>
            <div className="space-y-3">
              <h3 className="pt-0.5 text-lg leading-[1.375rem] font-bold font-serif tracking-[-0.02em] md:text-xl md:leading-[1.5rem] text-balance text-black">
                {title}
              </h3>
              <p className="font-sans text-sm leading-[1.125rem] md:text-base md:leading-[1.375rem] text-gray-600">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};