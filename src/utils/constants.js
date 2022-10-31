export const sideBarLinks = [
  {
    title: "Main",
    children: [
      {
        title: "Overview",
        icon_src: "overview.svg",
      },
    ],
  },
  {
    title: "Payments",
    children: [
      {
        title: "All Payments",
        icon_src: "all-payment.svg",
      },
      {
        title: "Reconcilled Payments",
        icon_src: "reconcile-payment.svg",
      },
      {
        title: "Un - Reconcilled Payments",
        icon_src: "un-reconcile-payment.svg",
      },
      {
        title: "Manual Settlement",
        icon_src: "manual-settlement.svg",
      },
    ],
  },
  {
    title: "All Orders",
    children: [
      {
        title: "All Orders",
        icon_src: "order.svg",
      },
      {
        title: "Pending Orders",
        icon_src: "pending-order.svg",
      },
      {
        title: "Reconcilled Orders",
        icon_src: "reconciled-order.svg",
      },
    ],
  },
  {
    title: "Merchant Profile",
    icon_src: "single.svg",
  },
];

export const defaultPagination = {
  total: 0,
  page: 1,
  pageSize: 10,
};
