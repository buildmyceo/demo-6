import { Doctor, Service, Testimonial, FAQ, ClinicLocation, ProcessStep } from './types';

export const SERVICES: Service[] = [
  {
    id: 'ivf',
    title: 'IVF Treatment',
    description: 'Advanced In-Vitro Fertilization for complex fertility challenges.',
    icon: 'Baby',
    fullDescription: 'In Vitro Fertilization (IVF) is a process where an egg is combined with sperm outside the body, in vitro. The process involves monitoring and stimulating a woman\'s ovulatory process, removing an ovum or ova from her ovaries and letting sperm fertilize them in a liquid in a laboratory.',
    process: [
      'Ovarian Stimulation',
      'Egg Retrieval',
      'Sperm Collection',
      'Fertilization',
      'Embryo Culture',
      'Embryo Transfer'
    ],
    benefits: [
      'Highest success rates',
      'Genetic screening options',
      'Overcomes tubal blockages',
      'Effective for male infertility'
    ]
  },
  {
    id: 'iui',
    title: 'IUI Treatment',
    description: 'Intrauterine Insemination, a less invasive fertility treatment.',
    icon: 'HeartPulse',
    fullDescription: 'Intrauterine insemination (IUI) is a fertility treatment that involves placing sperm inside a woman\'s uterus to facilitate fertilization. The goal of IUI is to increase the number of sperm that reach the fallopian tubes and subsequently increase the chance of fertilization.',
    process: [
      'Ovulation Monitoring',
      'Sperm Preparation',
      'Insemination Procedure',
      'Follow-up'
    ],
    benefits: [
      'Less invasive than IVF',
      'Lower cost',
      'Natural-like process',
      'Minimal medication'
    ]
  },
  {
    id: 'testing',
    title: 'Fertility Testing',
    description: 'Comprehensive diagnostic tests for both partners.',
    icon: 'ClipboardCheck',
    fullDescription: 'We offer a full suite of diagnostic tests to identify the root cause of fertility issues. This includes hormonal profiles, ultrasound scans, and semen analysis.',
    process: [
      'Initial Consultation',
      'Hormonal Blood Tests',
      'Ultrasound Imaging',
      'Semen Analysis'
    ],
    benefits: [
      'Accurate diagnosis',
      'Personalized treatment plan',
      'Early detection of issues',
      'Peace of mind'
    ]
  },
  {
    id: 'egg-freezing',
    title: 'Egg Freezing',
    description: 'Preserve your fertility for the future.',
    icon: 'Snowflake',
    fullDescription: 'Egg freezing, or mature oocyte cryopreservation, is a method used to save women\'s ability to get pregnant in the future. Eggs harvested from your ovaries are frozen unfertilized and stored for later use.',
    process: [
      'Ovarian Stimulation',
      'Egg Retrieval',
      'Vitrification (Freezing)',
      'Storage'
    ],
    benefits: [
      'Career flexibility',
      'Preserve younger eggs',
      'Medical necessity (e.g., before chemo)',
      'Reduced biological clock pressure'
    ]
  },
  {
    id: 'video-consultation',
    title: 'Video Consultation',
    description: 'Connect with our experts from the comfort of your home.',
    icon: 'Video',
    fullDescription: 'Our secure video consultation platform allows you to discuss your fertility concerns, review test results, and plan your treatment journey without traveling to a clinic.',
    process: [
      'Book your slot online',
      'Receive a secure link via email',
      'Join the virtual room at the scheduled time',
      'Consult with your specialist'
    ],
    benefits: [
      'Convenient and safe',
      'Saves travel time',
      'Secure and private',
      'Ideal for initial assessments'
    ],
    isVideoAvailable: true
  }
];

export const DOCTORS: Doctor[] = [
  {
    id: '1',
    name: 'Dr. Sarah Bloom',
    qualification: 'MD, FRCOG (London)',
    experience: '15+ Years',
    photo: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=400',
    specialty: 'Senior Fertility Specialist'
  },
  {
    id: '2',
    name: 'Dr. Michael Chen',
    qualification: 'MD, PhD in Reproductive Medicine',
    experience: '12+ Years',
    photo: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=400',
    specialty: 'Senior Embryologist'
  },
  {
    id: '3',
    name: 'Dr. Elena Rodriguez',
    qualification: 'MS (OBG), Fellowship in Infertility',
    experience: '10+ Years',
    photo: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=400',
    specialty: 'Gynecologist & IVF Expert'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'The Sharma Family',
    story: 'After 5 years of trying, Bloom IVF made our dream come true. The care and compassion we received were unmatched.',
    image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&q=80&w=400',
    rating: 5
  },
  {
    id: '2',
    name: 'Priya & Rahul',
    story: 'The doctors explained every step clearly. We felt safe and supported throughout our IUI journey.',
    image: 'https://images.unsplash.com/photo-1516589174184-c685266e430c?auto=format&fit=crop&q=80&w=400',
    rating: 5
  }
];

export const FAQS: FAQ[] = [
  {
    question: 'What is the success rate of IVF at Bloom?',
    answer: 'Our success rate for patients under 35 is approximately 78%, which is well above the national average. However, success rates vary based on individual health factors.'
  },
  {
    question: 'How long does one IVF cycle take?',
    answer: 'A typical IVF cycle takes about 4 to 6 weeks. This includes stimulation, egg retrieval, and embryo transfer.'
  },
  {
    question: 'Is fertility treatment painful?',
    answer: 'Most procedures involve minimal discomfort. Egg retrieval is performed under light sedation, so you won\'t feel any pain during the process.'
  }
];

export const LOCATIONS: ClinicLocation[] = [
  { id: '1', city: 'New York', address: '123 Fertility Way, NY 10001', phone: '+1 (555) 123-4567' },
  { id: '2', city: 'Chicago', address: '456 Hope St, IL 60601', phone: '+1 (555) 234-5678' },
  { id: '3', city: 'Los Angeles', address: '789 Life Blvd, CA 90001', phone: '+1 (555) 345-6789' }
];

export const PROCESS_STEPS: ProcessStep[] = [
  { number: '01', title: 'Consultation', description: 'Meet our specialists for a detailed fertility assessment and personalized plan.' },
  { number: '02', title: 'Stimulation', description: 'Gentle hormonal stimulation to encourage healthy egg production.' },
  { number: '03', title: 'Retrieval', description: 'A quick, painless procedure to retrieve mature eggs for fertilization.' },
  { number: '04', title: 'Fertilization', description: 'Advanced lab techniques to fertilize eggs with the highest quality sperm.' },
  { number: '05', title: 'Transfer', description: 'Careful placement of the healthiest embryo into the uterus.' },
  { number: '06', title: 'Success', description: 'Pregnancy test and ongoing support throughout your early pregnancy.' }
];
