import {
  InvoiceIcon,
  OrderIcon,
  ShipmentIcon,
  UserIcon,
  LogoutIcon,
} from "@/public/assets";
import Nigeria_Flag from "@/public/assets/images/nigeria.png";
import US_Flag from "@/public/assets/images/us-flag.png";

// Currency types
export const currencyType = [
  {
    id: 1,
    title: "NGN",
    image: Nigeria_Flag,
  },
  {
    id: 2,
    title: "USD",
    image: US_Flag,
  },
];

// Print options
export const printOptions = [
  {
    id: 1,
    title: "Print statement",
  },
  {
    id: 2,
    title: "Download",
  },
];

// Filter options
export const filterOptions = [
  {
    id: 1,
    title: "All",
  },
  {
    id: 2,
    title: "Received",
  },
  {
    id: 3,
    title: "Sent",
  },
];

// Card data
export const cardData = [
  {
    id: 1,
    title: "Your balance",
    total: "₦4,350.20",
    acctNumber: "0912873465",
    bank: "Sudo Bank",
  },
  {
    id: 2,
    title: "Active orders",
    total: "7",
    amount: "₦ 0.00",
    status: "overdue",
  },
  {
    id: 3,
    title: "Active loans",
    total: "10",
    amount: "2",
    status: "pending payment",
  },
  {
    id: 4,
    title: "Unpaid invoices",
    total: "2",
    amount: "₦ 720,000.00",
    status: "overdue",
  },
];

// Recent transactions
export const RECENT_TRANSACTION = [
  {
    id: 1,
    createdAt: "Today",
    name: "To Emina Odette",
    time: "7:18 AM",
    status: "Pending",
    amount: "- ₦ 10,000.00",
    balance: "₦ 4,350,000.20",
  },
  {
    id: 2,
    createdAt: "Yesterday",
    name: "To Archibald Holdings",
    time: "7:18 AM",
    status: "Completed",
    amount: "- ₦ 65,000.00",
    balance: "₦ 4,350,000.20",
  },
  {
    id: 3,
    createdAt: "Fri 19 Jul",
    name: "To Bass Industries",
    time: "7:18 AM",
    status: "Failed",
    amount: "- ₦ 10,000.00",
    balance: "₦ 4,415,000.20",
  },
  {
    id: 4,
    createdAt: "Today",
    name: "From S&B Incorporated",
    time: "7:18 AM",
    status: "Pending",
    amount: "+ ₦ 190,000.00",
    balance: "₦ 4,350,000.20",
  },
  {
    id: 5,
    createdAt: "Today",
    name: "To Humphrey & Co.",
    time: "7:18 AM",
    status: "Completed",
    amount: "- ₦ 30,000.00",
    balance: "₦ 4,225,000.20",
  },
];

// Pending transactions
export const PENDING_TRANSACTION = [
  {
    id: 1,
    createdAt: "Today",
    title: "You’ve received an offer of ₦ 3,000,000",
    description: "Invoice Factoring",
    attached: "Moetown Purchase Order",
    action: "Review offer",
  },
  {
    id: 2,
    createdAt: "Yesterday",
    title: "You’ve received a quote of ₦ 1,000,000",
    description: "Velcro Packaging",
    attached: "Bass Industries",
    action: "Review quote",
  },
  {
    id: 3,
    createdAt: "Fri 19 Jul",
    title: "Your shipment TPO-14 is pending confirmation",
    description: "Trucking",
    attached: "Tradevu Commerce",
    action: "Review shipment",
  },
  {
    id: 4,
    createdAt: "Today",
    title: "Your repayment of ₦ 280,000 is due",
    description: "Working Capital",
    attached: "Maersk Haulage",
    action: "Make payment",
  },
];

// Create new options
export const CREATE_NEW = [
  {
    id: 1,
    title: "New invoice",
    icon: InvoiceIcon,
  },
  {
    id: 2,
    title: "New order",
    icon: OrderIcon,
  },
  {
    id: 3,
    title: "New shipment",
    icon: ShipmentIcon,
  },
];

// Define types for navigation links, notifications, and user accounts
interface NavLink {
  id: number;
  title: string;
  pathName: string;
}

interface Notification {
  id: number;
  text: string;
  isActive: boolean;
  createdAt: string;
}

interface AccountSwitchOption {
  id: number;
  title: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

interface UserAccount {
  id: number;
  name: string;
  isActive: boolean;
}

// Navigation links data
export const NAV_LINK: NavLink[] = [
  { id: 1, title: "Dashboard", pathName: "/dashboard" },
  { id: 2, title: "Pay", pathName: "/pay" },
  { id: 3, title: "Finance", pathName: "/finance" },
  { id: 4, title: "Flex", pathName: "/flex" },
];

// Notifications data
export const NOTIFICATIONS: Notification[] = [
  {
    id: 1,
    text: "S&B Inc. signed the lender’s agreement",
    isActive: true,
    createdAt: "Just now",
  },
  {
    id: 2,
    text: "Humphrey & Co. confirmed your purchase order #21",
    isActive: true,
    createdAt: "04:27 pm",
  },
  {
    id: 3,
    text: "You received $20 from Bass Industries",
    isActive: false,
    createdAt: "Yesterday",
  },
  {
    id: 4,
    text: "Archibald Holdings completed payment for Invoice #46",
    isActive: false,
    createdAt: "09/02/2024",
  },
];

// Account switch options data
export const SWITCH_ACCT: AccountSwitchOption[] = [
  { id: 1, title: "Manage account", icon: UserIcon },
  { id: 2, title: "Logout", icon: LogoutIcon },
];

// User accounts data
export const USERS_ACCTS: UserAccount[] = [
  { id: 1, name: "Vance Refrigeration", isActive: true },
  { id: 2, name: "Dunder Mifflin Co.", isActive: false },
  { id: 3, name: "The Michael Scott...", isActive: false },
];
