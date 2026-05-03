import React from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

export const ContactForm: React.FC = () => {
  return (
    <form className="h-[783.59px] space-y-8 rounded-lg px-10 pt-9.75 pb-14 shadow-2xl lg:w-[682.67px]">
      <h1 className="font-manrope text-[32px] font-bold text-[#002046]">
        Quick Inquiry
      </h1>
      <div className="flex flex-col gap-5">
        <div className="flex justify-between">
          <div className="w-[288.33px] space-y-2">
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
          <div className="w-[288.33px] space-y-2">
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
        <div className="flex justify-between">
          <div className="w-[288.33px] space-y-2">
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
          <div className="w-[288.33px] space-y-2">
            <Label
              className="text-[14px] font-bold text-[#44474E]"
              htmlFor="service_type"
            >
              SERVICE TYPE
            </Label>
            <Input
              placeholder="Residential Plumbing"
              id="service_type"
              className="h-12.5 px-4 pt-3.5 pb-3.75"
            />
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
      <div className="flex w-full gap-3">
        <Input
          type="checkbox"
          className="h-5 w-5"
        />
        I agree to the
        <span className="text-[#AF2B3E] underline">Terms of Service</span>
        and privacy policy.
      </div>
      <Button className="h-16.5 w-[350.72px] cursor-pointer rounded-md bg-[#EF8300] py-4 text-white md:w-[424.72px]">
        Send Secure Inquiry
      </Button>
    </form>
  );
};
