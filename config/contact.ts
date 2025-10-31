export interface ContactConfig {
  social: {
    email: string;
  };
  contact: {
    rateLimit: number; 
    debug: boolean;
  };
}

export const siteConfig: ContactConfig = {
  social: {
    email: "martinsifeanyi247@gmail.com",
  },
  contact: {
    rateLimit: 1, 
    debug: false, 
  },
};
