export const fetchCardData = jest.fn().mockResolvedValue({
  totalPaidInvoices: '$2,000.00',
  totalPendingInvoices: '$500.00',
  numberOfInvoices: 10,
  numberOfCustomers: 5,
})