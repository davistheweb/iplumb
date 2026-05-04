"use client";

import { CalendarDays, LockKeyhole, MapPin, Phone, User } from "lucide-react";
import { IoLogoWhatsapp } from "react-icons/io";

import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

export const BookServiceForm: React.FC = () => {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="w-full space-y-8 rounded-lg px-6 py-12 shadow-2xl lg:h-171.5 lg:w-150 lg:px-12"
    >
      <div className="space-y-4">
        <h4 className="text-[#EF8300]">QUICK SCHEDULING</h4>
        <h5 className="font-manrope text-[#002046]">
          Book Your Professional Service
        </h5>
        <p className="text-[#44474E]">
          Complete the form below and our team will confirm your appointment
          within 60 minutes.
        </p>
      </div>
      <div className="space-y-5">
        <div className="flex w-full flex-col justify-between gap-4 md:flex-row md:gap-0">
          <div className="w-full space-y-2 md:w-59.75">
            <Label
              className="text-[14px] text-[#002046]"
              htmlFor="name"
            >
              Full Name
            </Label>
            <div className="relative">
              <User
                className="absolute top-4 left-3 h-4 w-4"
                color="#74777F"
              />
              <Input
                placeholder="John Doe"
                id="name"
                className="h-12.5 pt-3.5 pr-4 pb-3.75 pl-10"
              />
            </div>
          </div>
          <div className="w-full space-y-2 md:w-59.75">
            <Label
              className="text-[14px] text-[#002046]"
              htmlFor="phone"
            >
              Phone Number
            </Label>
            <div className="relative">
              <Phone
                className="absolute top-4 left-3 h-4 w-4"
                color="#74777F"
              />
              <Input
                placeholder="(555) 000-0000"
                id="phone"
                className="h-12.5 pt-3.5 pr-4 pb-3.75 pl-10"
              />
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <Label
            className="text-[14px] text-[#002046]"
            htmlFor="service_type"
          >
            SERVICE TYPE
          </Label>
          <Select>
            <SelectTrigger className="h-12.5! w-full px-4 pt-3.5 pb-3.75">
              <SelectValue placeholder="Residential Plumbing" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>SERVICE TYPE</SelectLabel>
                <SelectItem value="residential_plumbing">
                  Residential Plumbing
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="flex w-full flex-col justify-between gap-4 md:flex-row md:gap-0">
          <div className="w-full space-y-2 md:w-59.75">
            <Label
              className="text-[14px] text-[#002046]"
              htmlFor="service_location"
            >
              Service Location
            </Label>
            <div className="relative">
              <MapPin
                className="absolute top-4 left-3 h-4 w-4"
                color="#74777F"
              />
              <Input
                placeholder="Street Address, City"
                id="service_location"
                className="h-12.5 pt-3.5 pr-4 pb-3.75 pl-10"
              />
            </div>
          </div>
          <div className="w-full space-y-2 md:w-59.75">
            <Label
              className="text-[14px] text-[#002046]"
              htmlFor="preferred_date"
            >
              Preferred Date
            </Label>
            <div className="relative">
              <CalendarDays
                className="absolute top-4 left-3 h-4 w-4"
                color="#74777F"
              />
              <Input
                type="date"
                id="preferred_date"
                className="h-12.5 pt-3.5 pr-4 pb-3.75 pl-10"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center space-y-4">
        <Button className="h-15 w-full cursor-pointer rounded-xl bg-[#EF8300] py-4 text-[18px] font-bold text-white lg:w-125.5">
          Schedule Service
        </Button>
        <a
          href="https://wa.me/+2348170740048"
          className="h-15 w-full cursor-pointer flex items-center gap-4 justify-center rounded-xl bg-[#EF8300] py-4 text-center text-[18px] font-bold text-white lg:w-125.5"
        >
          Chat On WhatsApp
          <span>
            <IoLogoWhatsapp size={20} color="green" />
          </span>
        </a>
        <p className="flex items-center gap-1 text-center text-xs text-[#44474E]">
          <LockKeyhole size={12} />
          Your information is encrypted and secure.
        </p>
      </div>
    </form>
  );
};
