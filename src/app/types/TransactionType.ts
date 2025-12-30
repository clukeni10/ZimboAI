type TransactionType = "income" | "expense";
import type { IconType } from "react-icons";

export type Transaction= {
      id: string;
        description: string;
        category: string;
        date: string;
        amount: number;
        type: TransactionType;
        status: "pago" | "pendente" | "recebido";
        icon: IconType;
}