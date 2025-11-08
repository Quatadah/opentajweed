import React from "react"
import {
  HugeiconsIcon,
  type HugeiconsIconProps,
  type IconSvgElement,
} from "@hugeicons/react"
import {
  Menu02Icon,
  BookOpen02Icon,
  Settings02Icon,
  CancelCircleIcon,
  RefreshIcon as HugeRefreshIcon,
  LockIcon as HugeLockIcon,
  ArrowLeft02Icon,
  Share03Icon,
  Search01Icon,
  Sun02Icon,
  MoonIcon as HugeMoonIcon,
  ComputerIcon,
  LanguageSkillIcon as HugeLanguageSkillIcon,
  SparklesIcon as HugeSparklesIcon,
  ArrowRight02Icon,
} from "@hugeicons/core-free-icons"
import { cn } from "@/lib/utils"

type IconProps = Omit<HugeiconsIconProps, "icon">

const createIcon = (icon: IconSvgElement, defaults: Partial<IconProps> = {}) => {
  const Component = React.forwardRef<SVGSVGElement, IconProps>(
    ({ className, size, strokeWidth, ...props }, ref) => {
      return (
        <HugeiconsIcon
          ref={ref}
          icon={icon}
          className={cn("h-7 w-7 text-current", className)}
          size={size ?? defaults.size ?? 28}
          strokeWidth={strokeWidth ?? defaults.strokeWidth ?? 1.65}
          {...props}
        />
      )
    }
  )

  Component.displayName = "HugeIcon"
  return Component
}

export const MenuIcon = createIcon(Menu02Icon, { size: 30 })
export const BookOpenIcon = createIcon(BookOpen02Icon, { size: 34 })
export const SettingsIcon = createIcon(Settings02Icon)
export const CloseIcon = createIcon(CancelCircleIcon)
export const RefreshIcon = createIcon(HugeRefreshIcon)
export const LockIcon = createIcon(HugeLockIcon)
export const ArrowLeftIcon = createIcon(ArrowLeft02Icon)
export const ShareIcon = createIcon(Share03Icon)
export const SearchIcon = createIcon(Search01Icon)
export const SunIcon = createIcon(Sun02Icon)
export const MoonIcon = createIcon(HugeMoonIcon)
export const ComputerDesktopIcon = createIcon(ComputerIcon)
export const LanguagesIcon = createIcon(HugeLanguageSkillIcon)
export const SparklesIcon = createIcon(HugeSparklesIcon, { size: 24 })
export const ArrowRightIcon = createIcon(ArrowRight02Icon)