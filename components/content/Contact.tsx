"use client";
import React, { useEffect, useState } from "react";
import AnimationContainer from "../utils/AnimationContainer";
import { siteConfig } from "@/config/contact";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { personalInfo } from "@/config/personal";
import { Mail, Phone, MapPin, Clock, Loader2 } from "lucide-react";
import ContactHeader from "../ui/ContactHeader";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { motion } from "framer-motion";

interface UserInfo {
  ip?: string;
  country?: string;
  city?: string;
  region?: string;
  timezone?: string;
  isp?: string;
  browser?: string;
  platform?: string;
  screenResolution?: string;
  os?: string;
  chromeVersion?: string;
  domain?: string;
}

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormValues = z.infer<typeof formSchema>;

const ContactMe = () => {
  const [isWaiting, setIsWaiting] = useState(false);
  const [waitTime, setWaitTime] = useState(0);
  const [userInfo, setUserInfo] = useState<UserInfo>({});
  const [currentTime, setCurrentTime] = useState<string>("");
  const [returnUrl, setReturnUrl] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  useEffect(() => {
    setReturnUrl(window.location.href);
  }, []);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const currentHours = now.getHours();
      const minutes = now.getMinutes().toString().padStart(2, "0");
      const ampm = currentHours >= 12 ? "PM" : "AM";
      const formattedHours = currentHours % 12 || 12;
      setCurrentTime(`${formattedHours}:${minutes} ${ampm}`);
    };

    updateTime(); // Initial update
    const timer = setInterval(updateTime, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (isWaiting && waitTime > 0) {
      const timer = setInterval(() => {
        setWaitTime((prev) => {
          if (prev <= 1) {
            setIsWaiting(false);
            clearInterval(timer);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [isWaiting, waitTime]);

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    // Check if user is trying to send an email before the ratelimit window is up
    const lastSubmittedTime = sessionStorage.getItem("lastSubmittedTime");
    const lastEmail = sessionStorage.getItem("lastEmail");
    const currentTime = Date.now();
    const RATE_LIMIT_MS = 30 * 1000; // 30 seconds

    if (lastSubmittedTime) {
      const timeSinceLastSubmission = currentTime - parseInt(lastSubmittedTime);
      if (timeSinceLastSubmission < RATE_LIMIT_MS) {
        setIsWaiting(true);
        setWaitTime(
          Math.ceil((RATE_LIMIT_MS - timeSinceLastSubmission) / 1000)
        );
        return;
      }
    }

    setIsSubmitting(true);
    try {
      const response = await fetch(
        "https://formsubmit.co/martinsifeanyi247@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            ...values,
            _subject: `New contact form submission from ${values.name}`,
            _template: "table",
            _captcha: "false",
          }),
        }
      );

      if (response.ok) {
        toast.success("Email successfully sent!", {
          description: `Thank you ${values.name}, your message has been sent to ${personalInfo.userName}`,
        });
        sessionStorage.setItem("lastSubmittedTime", currentTime.toString());
        sessionStorage.setItem("lastEmail", values.email);
        form.reset();
      } else {
        throw new Error("Failed to submit form");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Failed to submit form", {
        description: "Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimationContainer customClassName="w-full mb-5">
      <ContactHeader />

      <div className="w-full flex justify-between items-center flex-col mx-auto max-w-screen-xl">
        <div className="w-full rounded-lg border bg-card p-6 shadow-sm mb-10 space-y-4">
          <div className="flex items-center space-x-3">
            <Mail className="h-5 w-5 text-muted-foreground" />

            <p className="text-base text-muted-foreground">
              {personalInfo.socials.email}
            </p>
          </div>

          <div className="flex items-center space-x-3">
            <Phone className="h-5 w-5 text-muted-foreground" />

            <p className="text-base text-muted-foreground">
              {personalInfo.phone}
            </p>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <MapPin className="h-5 w-5 text-muted-foreground" />
              <div>
                <p className="text-base text-muted-foreground">
                  {personalInfo.location}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Clock className="h-5 w-5 text-muted-foreground" />

              <p className="text-base text-muted-foreground">{currentTime}</p>
            </div>
          </div>
        </div>

        <div className="w-full flex justify-center items-center flex-col">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-full space-y-4"
              action="https://formsubmit.co/martinsifeanyi247@gmail.com"
              method="POST"
            >
              <input
                type="hidden"
                name="_subject"
                value="New Contact Form Submission"
              />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value={returnUrl} />

              <FormField
                control={form.control}
                name="name"
                render={({ field }: { field: any }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-1 gap-4 lg:gap-8 sm:grid-cols-2">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }: { field: any }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="Enter your email"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }: { field: any }) => (
                    <FormItem>
                      <FormLabel>Phone</FormLabel>
                      <FormControl>
                        <Input
                          type="tel"
                          placeholder="Enter your phone number"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="message"
                render={({ field }: { field: any }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Enter your message"
                        {...field}
                        rows={4}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {siteConfig.contact.debug && (
                <Input
                  type="hidden"
                  name="userInfo"
                  value={JSON.stringify(userInfo)}
                />
              )}

              <motion.button
                type="submit"
                className="w-full rounded-md sm:w-auto bg-black text-white hover:bg-gray-900 dark:bg-white dark:text-black dark:hover:bg-gray-100 flex items-center justify-center px-4 py-2 font-medium"
                disabled={isSubmitting}
                whileHover={{ 
                  scale: 1.05,
                  rotate: [0, -2, 2, -1, 1, 0],
                  transition: { 
                    rotate: { 
                      duration: 0.5,
                      ease: "easeInOut"
                    }
                  }
                }}
                whileTap={{ scale: 0.95 }}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <span className="font-medium">Send</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="ml-3 h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </>
                )}
              </motion.button>
            </form>
          </Form>

          {isWaiting && (
            <div className="mt-4 text-destructive">
              <p>
                You need to wait {waitTime} second{waitTime !== 1 && "s"} before
                sending another message.
              </p>
            </div>
          )}
        </div>
      </div>
    </AnimationContainer>
  );
};

export default ContactMe;
