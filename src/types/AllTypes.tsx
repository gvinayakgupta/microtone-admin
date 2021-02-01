

// Type to accept prop called data
export interface JSXData<T> extends JSX.IntrinsicAttributes {
  data: T;
}

// Request body for dashboard
export type ReqBody = {
  username: string,
  division: number
}

// Shop detailes for Division 1 
export type ShopDetails = {
  categories: string;
  deals_price: number;
  flash_deals_price: number;
  id: string;
  qr: string;
  revenue: number;
  shop_address: string;
  shop_cin: string;
  shop_lat: number;
  shop_lon: number;
  shop_name: string;
  is_self: boolean;
};

// Division 1 response
export type Div1Response = {
  notification: boolean;
  profilepic: string;
  shopdetails: Array<ShopDetails>;
  wallet: number;
};

// Deal brief info
type DealBriefInfo = {
  [clicks: string]: number,
  impressions: number,
  rating: number,
  revenue: number,
  scans: number
}

// Fdeal Category
type FdealCategory = {
  category_name: string,
  id: string,
  image: string,
  is_active: boolean,
  selected_image: string,
}

// Deal type for division 2
type DealDiv2 = {
  approval: boolean,
  briefInfo: DealBriefInfo,
  category: FdealCategory,
  created: string,
  discount: string,
  id: string,
  is_active: boolean,
  is_dis: boolean,
  mrp: number,
  offer_description: string
  offer_title: string,
  tags: string,
  validity: string
}

// Flash deal for Div 2 
type FdealDiv2 = {
  briefInfo: DealBriefInfo,
  cat_name: string,
  category: FdealCategory,
  created: string,
  customers: number,
  discount: string,
  id: string,
  is_active: boolean,
  is_dis: boolean,
  mrp: number,
  offer_description: string
  offer_title: string,
  tags: string,
  validity: string
}

// Division 2 response
export type Div2Response = {
  deals: Array<DealDiv2>,
  flash_deals: Array<FdealDiv2>
}

// Div 3 transcations type
type TransactionsDiv3 = {
  Order: string,
  amount: number,
  currency: string,
  email: string,
  error_description: string,
  id: number,
  order_id: string,
  payment_mode: string,
  phone: string,
  razorpay_id: string,
  status: number,
  transaction_date: string,
  transaction_details: {
    emi: boolean,
    entity: string,
    id: string,
    international: boolean,
    issuer: string | null,
    last4: string,
    method: string,
    name: string,
    network: string,
    sub_type: string,
    type: string
  }
}

type DealCateg = {
  category_name: string,
  id: string,
  image: string,
  is_active: boolean
}

export type DealData = {
  approval: boolean
  briefInfo: Object
  category: DealCateg
  created: string
  discount: string
  id: string
  is_active: boolean
  is_dis: boolean
  is_flatrate: boolean
  max_cashback: number
  min_cashback: number
  min_cashback_percent: number
  mrp: number
  offer_description: string
  offer_title: string
  tags: string
  validity: string
  detail: string
  images: Array<image>
}

type image = {
  id: string
  image: string
}

// Division 3 reponse
export type Div3Response = {
  deals_claimed: number,
  referrals: number,
  transactions: Array<TransactionsDiv3>
}

export type WalletReqBody = {
  username: string,
  message: string,
  amount: number
}

// Support types 

export type SupportResponse = {
  Count: number,
  Items: Array<SupportItem>,
  ResponseMetadata: any,
  ScannedCount: number
}

export type SupportItem = {
  description: string,
  email: string,
  messages: Array<SupportMessage>,
  name: string,
  status: boolean,
  ticket_id: string,
  title: string,
  user_type: number
}

export type SupportMessage = {
  message: string,
  time: string,
  user: string
}

// User DashBoard

type UserDetails = {
  username: string,
  full_name: string,
  user_type: number
}

export type SavedDeal = {
  id: string,
  deal: DealData,
  date: string,
  is_fav: boolean
}

export type SavedFDeal = {
  id: string,
  deal: DealData,
  date: string,
  is_fav: boolean
}

export type ClaimedDeal = {
  id: string,
  offer_title: string,
  claimed_date: string,
  coupon_amount: number,
  revenue_amount: number,
  amount_paid: number,
  is_scratched: boolean,
  rating: number,
  review: string,
  deal: string
}

export type ClaimedFDeal = {
  id: string,
  offer_title: string,
  claimed_date: string,
  coupon_amount: number,
  revenue_amount: number,
  amount_paid: number,
  is_scratched: boolean,
  rating: number,
  review: string,
  deal: string
}

export type UserTransfer = {
  id: string,
  requested_amount: number,
  requested_date: string,
  updated_date: string,
  is_paid: boolean,
  notes: string,
  is_rejected: boolean,
  wallet: number
}

type Wallet = {
  cash_left: number,
  upi: string
}

export type UserDash = {
  user_data: Array<UserDetails>,
  wallet: Wallet,
  saved_deals: Array<SavedDeal>,
  saved_fdeals: Array<SavedFDeal>,
  claimed_deals: Array<ClaimedDeal>,
  claimed_fdeals: Array<ClaimedFDeal>,
  transfers: Array<UserTransfer>
}

type chartData = {
  x: Array<string>,
  y: Array<number>
}

type scanChart = {
  date: Array<string>,
  impressions: Array<number>,
  scans: Array<number>,
  clicks: Array<number>,
}

export type AdminDash = {
  deals: chartData,
  fdeals: chartData,
  users: chartData,
  claimed_deals: chartData,
  claimed_fdeals: chartData,
  retailers: chartData,
  imp_scans_clicks: scanChart
}