"use client";
import Image from 'next/image';
import ScreenResponsive from "@/app/components/icons/ScreenResponsive";
import AccessibleIcon from "@/app/components/icons/AccessibleIcon";
import SpeedGuage from "@/app/components/icons/SpeedGuage";

export default function BrandsSlider() {
  return (
    <section className="container mx-auto mb-24">
      <h2 className="text-3xl lg:text-6xl text-center mb-20">All of my work is...</h2>
      <div className="flex align-center justify-evenly">
        <div className="">
          <ScreenResponsive
            iconHeight={200}
            iconWidth={196}
            color="white"
          />
          <h4>Fully mobile responsive</h4>
        </div>
        <div className="">
          <AccessibleIcon
            iconHeight={180}
            iconWidth={196}
            color="white"
          />
          <h4>Accessible to all users</h4>
        </div>
        <div className="">
          <SpeedGuage
            iconHeight={200}
            iconWidth={196}
            color="white"
          />
          <h4>Optimized to be lightning fast</h4>
        </div>
      </div>
    </section>
  )
}