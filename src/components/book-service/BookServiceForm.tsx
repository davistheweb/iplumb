"use client";
import emailjs from "@emailjs/browser";
import { zodResolver } from "@hookform/resolvers/zod";
import { CalendarDays, LockKeyhole, MapPin, Phone, User } from "lucide-react";
import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { IoLogoWhatsapp } from "react-icons/io";
import { z } from "zod";

import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  phone: z.string().min(7, "Phone is required"),
  service_type: z.string().min(1, "Select a service"),
  service_location: z.string().min(5, "Location is required"),
  preferred_date: z.string().min(1, "Select a date"),
});

type FormValues = z.infer<typeof schema>;
export const BookServiceForm: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      phone: "",
      service_type: "",
      service_location: "",
      preferred_date: "",
    },
  });

  const onSubmit = async () => {
    if (!formRef.current) return;

    setLoading(true);

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAILJS_BOOK_TEMPLATE_ID as string,
        formRef.current,
        {
          publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string,
        },
      );

      console.log("Booking sent");
      reset();
    } catch (err: any) {
      console.log("Error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit(onSubmit)}
      className="w-full space-y-4 rounded-lg px-6 py-12 shadow-2xl lg:h-171.5 lg:w-150 lg:px-12"
    >
      <div className="space-y-2">
        <h4 className="text-[#EF8300]">QUICK SCHEDULING</h4>
        <h5 className="font-manrope text-[#002046]">
          Book Your Professional Service
        </h5>
        <p className="text-[#44474E]">
          Complete the form below and our team will confirm your appointment
          within 60 minutes.
        </p>
      </div>
      <div className="space-y-2">
        <div className="flex w-full flex-col justify-between gap-2 md:flex-row md:gap-0">
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
                {...register("name")}
                name="name"
                className="h-12.5 pt-3.5 pr-4 pb-3.75 pl-10"
              />
              {errors.name && (
                <p className="text-sm text-red-500">{errors.name.message}</p>
              )}
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
                {...register("phone")}
                name="phone"
                id="phone"
                className="h-12.5 pt-3.5 pr-4 pb-3.75 pl-10"
              />{" "}
              {errors.phone && (
                <p className="text-sm text-red-500">{errors.phone.message}</p>
              )}
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
          <Select
            onValueChange={(value) =>
              setValue("service_type", value, { shouldValidate: true })
            }
          >
            <SelectTrigger className="h-12.5! w-full px-4 pt-3.5 pb-3.75">
              <SelectValue placeholder="Residential Plumbing" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Residential Plumbing">
                Residential Plumbing
              </SelectItem>
              <SelectItem value="Commercial Plumbing">
                Commercial Plumbing
              </SelectItem>
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
                {...register("service_location")}
                name="service_location"
                className="h-12.5 pt-3.5 pr-4 pb-3.75 pl-10"
              />
              {errors.service_location && (
                <p className="text-sm text-red-500">
                  {errors.service_location.message}
                </p>
              )}
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
                {...register("preferred_date")}
                name="preferred_date"
                className="h-12.5 pt-3.5 pr-4 pb-3.75 pl-10"
              />
              {errors.preferred_date && (
                <p className="text-sm text-red-500">
                  {errors.preferred_date.message}
                </p>
              )}
            </div>
          </div>
          <input
            type="hidden"
            name="time"
            value={new Date().toLocaleString()}
          />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center space-y-2">
        <Button
          type="submit"
          disabled={loading}
          className="w-full cursor-pointer rounded-xl bg-[#EF8300] py-8 text-[18px] font-bold text-white lg:w-125.5"
        >
          {loading ? "Scheduling..." : "Schedule Service"}
        </Button>
        <a
          target="_blank"
          href="https://wa.me/+2348170740048"
          className="flex w-full items-center justify-center gap-4 rounded-xl bg-[#EF8300] px-4 py-4 text-center text-[18px] font-bold text-white lg:w-125.5"
        >
          Chat On WhatsApp
          <IoLogoWhatsapp
            size={20}
            color="green"
          />
        </a>
        <p className="flex items-center gap-1 text-center text-xs text-[#44474E]">
          <LockKeyhole size={12} />
          Your information is encrypted and secure.
        </p>
      </div>
    </form>
  );
};
