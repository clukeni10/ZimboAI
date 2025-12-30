import type {  ReactNode } from "react";
import type { IconType } from "react-icons";

export type ProfileSectionProps = {
        title: string;
        description: string;
        icon: IconType;
        children: ReactNode;
}