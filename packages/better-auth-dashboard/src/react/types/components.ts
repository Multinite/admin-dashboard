import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import type { forwardRef } from "react";

type ShadCNComponent<T1, T2> = ReturnType<typeof forwardRef<T1, T2>>;

type SidebarProvider = ShadCNComponent<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    defaultOpen?: boolean;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
  }
>;

type Sidebar = ShadCNComponent<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    side?: "left" | "right";
    variant?: "sidebar" | "floating" | "inset";
    collapsible?: "offcanvas" | "icon" | "none";
  }
>;

type SidebarContent = ShadCNComponent<
  HTMLDivElement,
  React.ComponentProps<"div">
>;

type SidebarGroup = ShadCNComponent<
  HTMLDivElement,
  React.ComponentProps<"div">
>;

type SidebarGroupLabel = ShadCNComponent<
  HTMLDivElement,
  React.ComponentProps<"div"> & { asChild?: boolean }
>;

type SidebarGroupContent = ShadCNComponent<
  HTMLDivElement,
  React.ComponentProps<"div">
>;

type SidebarMenu = ShadCNComponent<
  HTMLUListElement,
  React.ComponentProps<"ul">
>;
type SidebarMenuItem = ShadCNComponent<
  HTMLLIElement,
  React.ComponentProps<"li">
>;

type SidebarMenuButton = ShadCNComponent<
  HTMLButtonElement,
  React.ComponentProps<"button"> & {
    asChild?: boolean;
    isActive?: boolean;
    tooltip?: string | React.ComponentProps<TooltipContent>;
  }
>;

type TooltipContent = ShadCNComponent<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>;

export type RequiredComponents = {
  SidebarProvider: SidebarProvider;
  Sidebar: Sidebar;
  SidebarContent: SidebarContent;
  SidebarGroup: SidebarGroup;
  SidebarGroupLabel: SidebarGroupLabel;
  SidebarGroupContent: SidebarGroupContent;
  SidebarMenu: SidebarMenu;
  SidebarMenuItem: SidebarMenuItem;
  SidebarMenuButton: SidebarMenuButton;
};
