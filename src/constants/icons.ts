import {
  Shield,
  Lock,
  DoorOpen,
  UserCheck,
  Sparkles,
  Wrench,
  Building,
  Monitor,
  Phone,
  Mail,
  MapPin,
  Clock,
  Award,
  Users,
  Computer,
  Briefcase,
} from 'lucide-react';

export const SERVICE_ICONS: Record<
  string,
  React.ComponentType<{ className?: string }>
> = {
  shield: Shield,
  lock: Lock,
  'door-open': DoorOpen,
  'user-check': UserCheck,
  sparkles: Sparkles,
  wrench: Wrench,
  building: Building,
  monitor: Monitor,
  briefcase: Briefcase,
};

export const FEATURE_ICONS: Record<
  string,
  React.ComponentType<{ className?: string }>
> = {
  shield: Shield,
  users: Users,
  award: Award,
  'map-pin': MapPin,
  phone: Phone,
  mail: Mail,
  clock: Clock,
  computer: Computer,
};
