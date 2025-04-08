"use client";
import React, { useEffect, useState } from "react";
import AnimationContainer from "../utils/AnimationContainer";
import { siteConfig } from "@/config/contact";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { personalInfo } from "@/config/personal";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import ContactHeader from "../ui/ContactHeader";

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

const ContactMe = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [isWaiting, setIsWaiting] = useState(false);
  const [waitTime, setWaitTime] = useState(0);
  const [userInfo, setUserInfo] = useState<UserInfo>({});
  const [currentTime, setCurrentTime] = useState<string>("");

  useEffect(() => {
    if (siteConfig.contact.debug) {
      const fetchUserInfo = async () => {
        try {
          const res = await fetch("https://ipapi.co/json/");
          const data = await res.json();
          const browserInfo: UserInfo = {
            ip: data.ip,
            country: data.country_name,
            city: data.city,
            region: data.region,
            timezone: data.timezone,
            isp: data.org,
            browser: navigator.userAgent,
            platform: navigator.platform,
            screenResolution: `${window.screen.width}x${window.screen.height}`,
            os: navigator.platform,
            chromeVersion: navigator.userAgent.match(
              /Chrom(e|ium)\/([0-9]+)\./
            )?.[2],
            domain: window.location.href,
          };
          setUserInfo(browserInfo);
        } catch (error) {
          console.error("Error fetching user info:", error);
        }
      };

      fetchUserInfo();
    }
  }, []);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const currentHours = now.getHours();
      const minutes = now.getMinutes().toString().padStart(2, '0');
      const ampm = currentHours >= 12 ? 'PM' : 'AM';
      const formattedHours = currentHours % 12 || 12; // Convert to 12-hour format
      setCurrentTime(`${formattedHours}:${minutes} ${ampm}`);
    };

    updateTime(); // Initial update
    const timer = setInterval(updateTime, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Check if user is trying to send an email before the ratelimit window is up
    const lastSubmittedTime = sessionStorage.getItem("lastSubmittedTime");
    const lastEmail = sessionStorage.getItem("lastEmail");
    const currentTime = Date.now();
    const rateLimit = siteConfig.contact.rateLimit;
    const RATE_LIMIT_MS = rateLimit * 60 * 1000;

    if (
      lastSubmittedTime &&
      currentTime - parseInt(lastSubmittedTime) < RATE_LIMIT_MS
    ) {
      setIsWaiting(true);
      setWaitTime(
        Math.ceil(
          (RATE_LIMIT_MS - (currentTime - parseInt(lastSubmittedTime))) / 1000
        )
      );
      return;
    }

    if (lastEmail && lastEmail !== email) {
      setIsWaiting(true);
      setWaitTime(Math.ceil(RATE_LIMIT_MS / 1000));
      return;
    }

    // Simulate form submission and success
    setTimeout(() => {
      setIsSubmitted(true);
      sessionStorage.setItem("lastSubmittedTime", currentTime.toString());
      sessionStorage.setItem("lastEmail", email);

      // Reset form
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
    }, 500);
  };

  return (
    <AnimationContainer customClassName="w-full">
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

              <p className="text-base text-muted-foreground">
                {currentTime}
              </p>
            </div>
          </div>
        </div>

        <div className="w-full flex justify-center items-center flex-col">
          <form
            onSubmit={handleSubmit}
            className="w-full space-y-4"
            method="POST"
            encType="multipart/form-data"
          >
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">
                Name
              </label>
              <Input
                id="name"
                placeholder="Enter your name"
                value={name}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setName(e.target.value)
                }
                required
              />
            </div>

            <div className="grid grid-cols-1 gap-4 lg:gap-8 sm:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setEmail(e.target.value)
                  }
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium">
                  Phone
                </label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  value={phone}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setPhone(e.target.value)
                  }
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>
              <Textarea
                id="message"
                placeholder="Enter your message"
                value={message}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                  setMessage(e.target.value)
                }
                rows={4}
                required
              />
            </div>

            {siteConfig.contact.debug && (
              <div>
                <Input
                  type="hidden"
                  name="userInfo"
                  value={JSON.stringify(userInfo)}
                  required
                />
              </div>
            )}

            <Button
              type="submit"
              className="w-full rounded-md sm:w-auto bg-black text-white hover:bg-gray-900 dark:bg-white dark:text-black dark:hover:bg-gray-100"
            >
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
            </Button>
          </form>

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

      {isSubmitted && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-card rounded-lg p-6 shadow-lg max-w-sm w-full mx-4">
            <h3 className="text-lg font-semibold mb-2">
              Thank you, {name}! <span>🎉</span>
            </h3>
            <p className="text-base text-muted-foreground mb-4">
              Your message has been sent to {personalInfo.socials.email}{" "}
              successfully.
            </p>
            <Button
              onClick={() => setIsSubmitted(false)}
              className="bg-white text-black hover:bg-gray-100 dark:bg-black dark:text-white dark:hover:bg-gray-900"
            >
              Close
            </Button>
          </div>
        </div>
      )}
    </AnimationContainer>
  );
};

export default ContactMe;
