export type Project = {
  _id?: string;
  title: string;
  description: string;
  images: string[];
  tech: string[];
  liveUrl: string;
  repoUrl: string;
  category: string;
  featured: boolean;
  publishedAt: Date;
};

export type Client = {
  _id?: string;
  name: string;
  logoUrl: string;
  websiteUrl: string;
  description?: string;
};

export type Testimonial = {
  _id?: string;
  authorName: string;
  role?: string;
  text: string;
  clientUrl?: string;
};

export type User = {
  _id?: string;
  email: string;
  firebaseUid: string;
  role: "admin";
  name?: string;
};

export type Message = {
  _id?: string;
  name: string;
  email: string;
  message: string;
};