// config/demo.config.ts

export interface FormField {
  name: string;
  label: string;
  type: 'text' | 'email' | 'tel' | 'number' | 'textarea';
  placeholder: string;
  required: boolean;
  entryId: string; // Google Form entry ID
}

export interface ProductDemoConfig {
  id: string;
  name: string;
  title: string;
  subtitle: string;
  description: string;
  fields: FormField[];
  googleFormUrl: string;
}

export const DEMO_PRODUCTS: Record<string, ProductDemoConfig> = {
  'omni-vision': {
    id: 'omni-vision',
    name: 'OMNI VISION',
    title: 'Book a Demo - OMNI VISION',
    subtitle: 'Transform your infrastructure monitoring with AI',
    description: 'Infrastructure and crowd monitoring is fragmented and reactive. OMNI VISION helps operators detect anomalies, congestion, and safety risks early using AI-powered video analytics.',
    googleFormUrl: 'YOUR_GOOGLE_FORM_URL_FOR_OMNI_VISION',
    fields: [
      {
        name: 'name',
        label: 'Full Name',
        type: 'text',
        placeholder: 'Enter your full name',
        required: true,
        entryId: 'entry.YOUR_ENTRY_ID',
      },
      {
        name: 'phone',
        label: 'Phone Number',
        type: 'tel',
        placeholder: '+1 (555) 000-0000',
        required: true,
        entryId: 'entry.YOUR_ENTRY_ID',
      },
      {
        name: 'email',
        label: 'Email Address',
        type: 'email',
        placeholder: 'your.email@example.com',
        required: true,
        entryId: 'entry.YOUR_ENTRY_ID',
      },
      {
        name: 'place',
        label: 'Location/Place',
        type: 'text',
        placeholder: 'City, Country',
        required: true,
        entryId: 'entry.YOUR_ENTRY_ID',
      },
      {
        name: 'message',
        label: 'Message',
        type: 'textarea',
        placeholder: 'Tell us about your requirements...',
        required: false,
        entryId: 'entry.YOUR_ENTRY_ID',
      },
    ],
  },
  'ai-question-generator': {
    id: 'ai-question-generator',
    name: 'AI Question Generation',
    title: 'Book a Demo - AI Question Generation',
    subtitle: 'Scale your assessment creation with AI',
    description: 'Institutions struggle to generate high-quality, diverse questions at scale. Our AI Question Generation engine turns source material into assessments tailored by difficulty and topic.',
    googleFormUrl: 'YOUR_GOOGLE_FORM_URL_FOR_AI_QUESTION',
    fields: [
      {
        name: 'name',
        label: 'Full Name',
        type: 'text',
        placeholder: 'Enter your full name',
        required: true,
        entryId: 'entry.YOUR_ENTRY_ID',
      },
      {
        name: 'organizationName',
        label: 'Organization Name',
        type: 'text',
        placeholder: 'Your institution/organization',
        required: true,
        entryId: 'entry.YOUR_ENTRY_ID',
      },
      {
        name: 'testsPerYear',
        label: 'Expected Tests Per Year',
        type: 'number',
        placeholder: 'e.g., 50',
        required: true,
        entryId: 'entry.YOUR_ENTRY_ID',
      },
      {
        name: 'place',
        label: 'Location/Place',
        type: 'text',
        placeholder: 'City, Country',
        required: true,
        entryId: 'entry.YOUR_ENTRY_ID',
      },
      {
        name: 'phone',
        label: 'Phone Number',
        type: 'tel',
        placeholder: '+1 (555) 000-0000',
        required: true,
        entryId: 'entry.YOUR_ENTRY_ID',
      },
      {
        name: 'email',
        label: 'Email Address',
        type: 'email',
        placeholder: 'your.email@example.com',
        required: true,
        entryId: 'entry.YOUR_ENTRY_ID',
      },
    ],
  },
};

export const getDemoProductConfig = (productId: string): ProductDemoConfig | null => {
  return DEMO_PRODUCTS[productId] || null;
};

export const getAllDemoProductIds = (): string[] => {
  return Object.keys(DEMO_PRODUCTS);
};