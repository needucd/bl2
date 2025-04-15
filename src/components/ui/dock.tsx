
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const dockVariants = cva(
  "flex items-center w-full justify-center bottom-8 fixed left-1/2 -translate-x-1/2 z-50",
  {
    variants: {
      variant: {
        default: "px-12 py-2 rounded-full bg-black/70 backdrop-blur-md border border-white/10",
        outline: "p-1.5 rounded-full border border-black/5 bg-white/80 backdrop-blur",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

interface DockProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof dockVariants> {}

function Dock({ className, variant, ...props }: DockProps) {
  return (
    <div className={cn(dockVariants({ variant }), className)} {...props} />
  )
}

const dockItemVariants = cva(
  "flex items-center justify-center transition-all cursor-pointer",
  {
    variants: {
      variant: {
        default:
          "text-white mx-3 p-2 rounded-full hover:bg-white/20 hover:scale-[1.15] active:scale-105",
        outline:
          "bg-white mx-1 p-2 rounded-full shadow-sm hover:scale-[1.15] hover:bg-white active:scale-105",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

interface DockItemProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof dockItemVariants> {}

function DockItem({ className, variant, ...props }: DockItemProps) {
  return (
    <div className={cn(dockItemVariants({ variant }), className)} {...props} />
  )
}

export { Dock, DockItem }
