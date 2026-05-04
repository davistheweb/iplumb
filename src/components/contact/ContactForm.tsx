"use client";
import React from "react";
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
import { Textarea } from "../ui/textarea";

export const ContactForm: React.FC = () => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      className="w-full space-y-8 rounded-lg px-5 pt-9.75 pb-14 shadow-2xl md:px-10 lg:h-[783.59px] lg:w-[682.67px]"
    >
      <h1 className="font-manrope text-xl font-bold text-[#002046] md:text-[32px]">
        Quick Inquiry
      </h1>
      <div className="flex flex-col gap-5">
        <div className="flex w-full flex-col justify-between gap-4 md:flex-row md:gap-0">
          <div className="w-full space-y-2 md:w-[288.33px]">
            <Label
              className="text-[14px] font-bold text-[#44474E]"
              htmlFor="name"
            >
              FULL NAME
            </Label>
            <Input
              placeholder="John Doe"
              id="name"
              className="h-12.5 px-4 pt-3.5 pb-3.75"
            />
          </div>
          <div className="space-y-2 md:w-[288.33px]">
            <Label
              className="text-[14px] font-bold text-[#44474E]"
              htmlFor="email"
            >
              EMAIL ADDRESS
            </Label>
            <Input
              placeholder="john@example.com"
              id="email"
              className="h-12.5 px-4 pt-3.5 pb-3.75"
            />
          </div>
        </div>
        <div className="flex flex-col justify-between gap-4 md:flex-row md:gap-0">
          <div className="space-y-2 md:w-[288.33px]">
            <Label
              className="text-[14px] font-bold text-[#44474E]"
              htmlFor="phone"
            >
              PHONE NUMBER
            </Label>
            <Input
              placeholder="+1 (555) 000-0000"
              id="phone"
              className="h-12.5 px-4 pt-3.5 pb-3.75"
            />
          </div>
          <div className="space-y-2 md:w-[288.33px]">
            <Label
              className="text-[14px] font-bold text-[#44474E]"
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
        </div>
        <div className="w-full space-y-2">
          <Label
            className="text-[14px] font-bold text-[#44474E]"
            htmlFor="property_address"
          >
            PROPERTY ADDRESS (OPTIONAL)
          </Label>
          <Input
            placeholder="Street, City, State, ZIP"
            id="property_address"
            className="h-12.5 px-4 pt-3.5 pb-3.75"
          />
        </div>
        <div className="w-full space-y-2">
          <Label
            className="text-[14px] font-bold text-[#44474E]"
            htmlFor="help_enquiry"
          >
            HOW CAN WE HELP?
          </Label>
          <Textarea
            placeholder="Briefly describe your requirements..."
            id="help_enquiry"
            className="h-36.5 resize-none px-4 pt-3.5 pb-3.75"
          />
        </div>
      </div>
      <div className="flex w-full items-center gap-3">
        <Input
          type="checkbox"
          className="h-5 w-5"
        />
        <p className="text-xs md:text-[16px]">
          I agree to the{" "}
          <span className="text-[#AF2B3E] underline">Terms of Service</span> and
          privacy policy.
        </p>
      </div>
      <Button className="h-16.5 cursor-pointer rounded-md bg-[#EF8300] py-4 font-semibold text-white md:w-[424.72px] md:text-[24px]">
        Send Secure Inquiry
      </Button>
    </form>
  );
};
