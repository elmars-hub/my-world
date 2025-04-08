export interface ContactConfig {
  social: {
    email: string;
  };
  contact: {
    rateLimit: number; // in minutes
    debug: boolean;
  };
}

export const siteConfig: ContactConfig = {
  social: {
    email: "your.email@example.com", // Replace with your email
  },
  contact: {
    rateLimit: 10, // 10 minutes between submissions
    debug: false, // Set to true to enable debug features
  },
};
