export type Service = {
  slug: string
  title: string
  short: string
  description: string[]
  features?: string[]
}

export const SERVICES: Service[] = [
  {
    slug: 'hims-solutions',
    title: 'HIMS Solutions',
    short: 'Complete Hospital Management Systems to streamline operations and improve patient care.',
    description: [
      'Our HIMS platforms digitize and automate critical hospital workflows — from patient registration and appointments to electronic medical records, billing, pharmacy and lab integrations.',
      'We prioritize interoperability (HL7/FHIR), data security and regulatory compliance, enabling hospitals to operate more efficiently while delivering better patient outcomes.',
    ],
    features: [
      'Patient registration & OPD/IPD management',
      'EMR / clinical notes and prescriptions',
      'Billing, invoicing and insurance workflows',
      'Laboratory & radiology integrations',
      'Pharmacy, inventory and procurement',
    ],
  },
  {
    slug: 'school-erp',
    title: 'School ERP',
    short: 'Smart ERP for schools to manage academics, students, fees, and exams efficiently.',
    description: [
      'Our School ERP centralizes academic and administrative operations for educational institutions of any size.',
      'It provides tools for attendance, exams, grading, fee collection, parent/staff portals and reporting, all in a secure and easy-to-use platform.',
    ],
    features: [
      'Student information system & profiles',
      'Attendance & timetable management',
      'Exam scheduling, grading and reports',
      'Fee collection and receipts',
      'Parent portal and communication',
    ],
  },
  {
    slug: 'software-development',
    title: 'Software Development',
    short: 'Custom software, web & mobile apps built with modern technologies.',
    description: [
      'We deliver end-to-end software development — product strategy, design, engineering, testing and ongoing support.',
      'Our teams follow modern practices (Agile, CI/CD, automated testing) and focus on scalable, maintainable architectures for web and mobile products.',
    ],
    features: [
      'Custom web & mobile applications',
      'API & integrations (third-party / legacy systems)',
      'Cloud-native deployments and DevOps',
      'Automated testing and quality assurance',
    ],
  },
  {
    slug: 'cyber-security',
    title: 'Cyber Security',
    short: 'Protect your systems and data with our advanced security solutions.',
    description: [
      'Our security offerings cover assessments, continuous monitoring, threat detection and incident response to protect critical assets and data.',
      'We help organizations embed security into their processes and technology stacks to meet regulatory and operational requirements.',
    ],
    features: [
      'Vulnerability assessment & penetration testing',
      'Security architecture review',
      'Managed detection & response (MDR)',
      'Compliance & audit readiness',
    ],
  },
  {
    slug: 'abdm-connector-provider',
    title: 'ABDM Connector Provider',
    short: 'Implement secure and standards-compliant connectors to India’s ABDM health network.',
    description: [
      'We implement ABDM Connector Provider solutions that enable secure exchange of clinical and administrative data with India\'s national health infrastructure.',
      'Our work includes FHIR mapping, consent orchestration, patient identity linkage, audit logging, and secure data transfer to meet national regulations and interoperability requirements.',
    ],
    features: [
      'FHIR resource mapping & adapters',
      'Consent management & audit trails',
      'Identity resolution and linking',
      'Compliance to national standards & certifications',
    ],
  },
]

export function findService(slug: string) {
  return SERVICES.find((s) => s.slug === slug)
}
