"use client";

import emailjs from "@emailjs/browser";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

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

const contactSchema = z.object({
  name: z.string().min(2, "Full name is required"),
  email: z.string().email("Enter a valid email address"),
  phone: z.string().min(7, "Enter a valid phone number"),
  service_type: z.string().min(1, "Please select a service"),
  property_address: z.string().min(5, "Address is required"),
  help_enquiry: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export const ContactForm: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service_type: "",
      property_address: "",
      help_enquiry: "",
    },
  });

  const onSubmit = async () => {
    if (!formRef.current) return;

    setLoading(true);

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID!,
        formRef.current,
        {
          publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
        },
      );

      console.log("Success");
      reset();
    } catch (error: any) {
      console.log("Failed", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit(onSubmit)}
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
              id="name"
              placeholder="John Doe"
              {...register("name")}
              name="name"
              className="h-12.5 px-4 pt-3.5 pb-3.75"
            />
            {errors.name && (
              <p className="text-sm text-red-500">{errors.name.message}</p>
            )}
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
              {...register("email")}
              name="email"
              className="h-12.5 px-4 pt-3.5 pb-3.75"
            />{" "}
            {errors.email && (
              <p className="text-sm text-red-500">{errors.email.message}</p>
            )}
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
              {...register("phone")}
              name="phone"
              className="h-12.5 px-4 pt-3.5 pb-3.75"
            />
            {errors.phone && (
              <p className="text-sm text-red-500">{errors.phone.message}</p>
            )}
          </div>
          <div className="space-y-2 md:w-[288.33px]">
            <Label
              className="text-[14px] font-bold text-[#44474E]"
              htmlFor="service_type"
            >
              SERVICE TYPE
            </Label>
            <Select
              onValueChange={(value) =>
                setValue("service_type", value, { shouldValidate: true })
              }
            >
              <SelectTrigger className="h-12.5! w-full px-4 pt-3.5 pb-3.75">
                <SelectValue placeholder="Residential Plumbing" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>SERVICE TYPE</SelectLabel>
                  <SelectItem value="Residential Plumbing">
                    Residential Plumbing
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <input
              type="hidden"
              {...register("service_type")}
              name="service_type"
            />

            {errors.service_type && (
              <p className="text-sm text-red-500">
                {errors.service_type.message}
              </p>
            )}
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
            {...register("property_address")}
            name="property_address"
            className="h-12.5 px-4 pt-3.5 pb-3.75"
          />
          {errors.property_address && (
            <p className="text-sm text-red-500">
              {errors.property_address.message}
            </p>
          )}
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
            {...register("help_enquiry")}
            name="help_enquiry"
            className="h-36.5 resize-none px-4 pt-3.5 pb-3.75"
          />
          {errors.help_enquiry && (
            <p className="text-sm text-red-500">
              {errors.help_enquiry.message}
            </p>
          )}
        </div>
      </div>
      {/* <div className="flex w-full items-center gap-3">
        <Input
          type="checkbox"
          className="h-5 w-5"
        />
        <p className="text-xs md:text-[16px]">
          I agree to the{" "}
          <span className="text-[#AF2B3E] underline">Terms of Service</span> and
          privacy policy.
        </p>
      </div> */}
      <Button
        type="submit"
        disabled={loading}
        className="h-16.5 cursor-pointer rounded-md bg-[#EF8300] py-4 font-semibold text-white md:w-[424.72px] md:text-[24px]"
      >
        {loading ? "Sending..." : "Send Secure Inquiry"}
      </Button>
    </form>
  );
};
