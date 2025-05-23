'use client';

import {
  Loader2,
  LucideProps,
  Moon,
  SunMedium,
  type Icon as LucideIcon,
} from "lucide-react";

export type Icon = LucideIcon;

export const Icons = {
  sun: SunMedium,
  moon: Moon,
  spinner: Loader2,
} as const;

export type IconKeys = keyof typeof Icons; 