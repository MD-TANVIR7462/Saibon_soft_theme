import {
  Code2,
  Server,
  Palette,
  Database,
  Cloud,
  Lock,
  Cpu,
  Globe,
} from 'lucide-react';
import { Technology } from '../types/TechnologyDashboard';


export const initialTechnologies: Technology[] = [
  {
    id: '1',
    icon: Code2,
    name: "Frontend Development",
    tech: ["React", "Next.js", "Vue", "Angular"],
    gradient: "from-blue-500 to-cyan-500",
    status: 'active'
  },
  {
    id: '2',
    icon: Server,
    name: "Backend Development",
    tech: ["Node.js", "Python", "Java", "Go"],
    gradient: "from-green-500 to-emerald-500",
    status: 'active'
  },
  {
    id: '3',
    icon: Palette,
    name: "Mobile Development",
    tech: ["React Native", "Flutter", "iOS", "Android"],
    gradient: "from-blue-500 to-sky-500",
    status: 'active'
  },
  {
    id: '4',
    icon: Database,
    name: "Databases",
    tech: ["PostgreSQL", "MongoDB", "Redis", "MySQL"],
    gradient: "from-orange-500 to-red-500",
    status: 'active'
  },
  {
    id: '5',
    icon: Cloud,
    name: "Cloud Services",
    tech: ["AWS", "Azure", "GCP", "Digital Ocean"],
    gradient: "from-cyan-500 to-blue-500",
    status: 'active'
  },
  {
    id: '6',
    icon: Lock,
    name: "Security",
    tech: ["OAuth", "JWT", "SSL", "Encryption"],
    gradient: "from-red-500 to-sky-500",
    status: 'active'
  },
  {
    id: '7',
    icon: Cpu,
    name: "AI & ML",
    tech: ["TensorFlow", "PyTorch", "OpenAI", "Scikit-learn"],
    gradient: "from-violet-500 to-blue-500",
    status: 'active'
  },
  {
    id: '8',
    icon: Globe,
    name: "DevOps",
    tech: ["Docker", "Kubernetes", "CI/CD", "Jenkins"],
    gradient: "from-indigo-500 to-blue-500",
    status: 'active'
  },
];