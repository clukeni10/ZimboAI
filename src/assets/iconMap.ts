import { LucideCircleQuestionMark } from "lucide-react";
import { LuArrowLeftRight, LuLayoutDashboard, LuLogOut, LuSettings, LuUser, LuWallet, LuFile } from "react-icons/lu";

export const IconMap = {
      dashboard: LuLayoutDashboard,
      user: LuUser,
      config: LuSettings,
      exit: LuLogOut,
      transaction: LuArrowLeftRight ,
      budget: LuWallet,
      question: LucideCircleQuestionMark,
      file: LuFile
}

export type IconMap = typeof IconMap