export interface Doctor {
  id: string;
  name: string;
  qualification: string;
  experience: string;
  photo: string;
  specialty: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  fullDescription: string;
  process: string[];
  benefits: string[];
  isVideoAvailable?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  story: string;
  image: string;
  rating: number;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface ClinicLocation {
  id: string;
  city: string;
  address: string;
  phone: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}
