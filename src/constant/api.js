


export default  {
  filePreview: process.env.VUE_APP_PREVIEW,

  userBalance: '/p/pay/user/balance',
  payValid: '/p/pay/pwd/valid',


  // userInfo: '/u/uc/api/user/getInfoByToken',
  userInfo: '/u/uc/api/user/getUserInfo',
  authedInfo: '/u/uc/api/user/getUserAuthInfo',
  // 结算单
  carrierInfo: '/u/uc/api/user/pageCarrierInfo',
  partInfo: '/u/uc/api/user/pagePartUser',
  contactInfo: '/h/au/helper/contact/page',
  contactSave: '/h/au/helper/contact/saveBatch',
  orderPay: '/sca/au/sc/trade/pay/order',
  orderPayOffline: '/sca/au/sc/order/unlinePay',
  orderPayBatch: '/h/au/helper/tradeBatch/pay/order',

  orderDetail: '/sca/au/sc/order/detail',
  orderSave: '/sca/au/sc/order/save',
  orderEdit: '/sca/au/sc/order/update',

  import: '/h/au/helper/orderImport/upload',
  importSubmit: '/h/au/helper/import/order',
  rateList: '/sca/au/sc/invoiceConfig/getConfig',
  orderList: '/sca/au/sc/order/page',
  orderExport: '/h/au/helper/export/order',
  orderNeedPay: '/sca/au/sc/order/pagePayFreight',

  orderBatch: '/h/au/helper/batchTask/page',

  orderBatchDetail: '/h/au/helper/batchTask/detailNoData',
  batchDetailPay: '/h/au/helper/batchTask/detailPay',
  orderBatchDel: '/h/au/helper/batchTask/delOrder',


  mailAddressList: '/sca/au/sc/mail/listMailAddress',
  mailDel: '/sca/au/sc/mail/delMailAddress',
  mailAddressSave: '/sca/au/sc/mail/saveMailAddress',
  mailAddressEdit: '/sca/au/sc/mail/updateMailAddress',
  mailRequestList: '/sca/au/sc/mail/page',

  // 导入
  orderImport: '/h/au/helper/import/orderUpload',
  orderArchive: '/sca/au/sc/order/archive',
  orderUnArchive: '/sca/au/sc/order/recover',
  orderAbolish: '/sca/au/sc/order/cancel',
  orderDel: '/sca/au/sc/order/del',
  orderRecover: '/sca/au/sc/order/recover',

  // 发票
  myBillList: '/sca/au/sc/invoice/pageInvoice',
  billOrderList: '/sca/au/sc/invoice/listOrder',
  billRequest: '/sca/au/sc/invoice/invoiceReversal',
  billRequestCancel: '/sca/au/sc/invoice/invoiceReversalBack',
  billInvalid: '/sca/au/sc/invoice/invoiceCancel',
  billInvalidCancel: '/sca/au/sc/invoice/invoiceCancelBack',
  billFill: '/sca/au/sc/invoice/modifyInvoice',

  billMailPay: '/h/au/helper/tradeBatch/pay/invoiceMail',
  billPay: '/sca/au/sc/trade/pay/invoice',
  billBatchPay: '/h/au/helper/tradeBatch/pay/invoice',


  pageApplyInvoice: '/sca/au/sc/invoice/pageApplyInvoice',
  sumApplyInvoice: '/sca/au/sc/invoice/sumApplyInvoice',
  applyInvoice: '/sca/au/sc/invoice/applyInvoice',
  applyInvoiceAffirm: '/sca/au/sc/invoice/applyInvoiceAffirm',
  listApplyInvoiceOrderId: '/sca/au/sc/invoice/listApplyInvoiceOrderId',
  listOrder: '/sca/au/sc/invoice/listOrder',
  invoiceDetail: '/sca/au/sc/invoice/invoiceDetail',
  pageInvoiceApply: '/sca/au/sc/invoice/pageInvoiceApply',
  cancelInvoiceApply: '/sca/au/sc/invoice/cancelInvoiceApply',
  invoiceCancel: '/sca/au/sc/invoice/invoiceCancel',
  invoiceCancelDetail: '/sca/au/sc/invoice/invoiceCancelDetail',
  invoiceCancelAudit: '/sca/au/sc/invoice/invoiceCancelAudit',
  invoiceCancelBack: '/sca/au/sc/invoice/invoiceCancelBack',
  invoiceReversal: '/sca/au/sc/invoice/invoiceReversal',
  invoiceReversalBack: '/sca/au/sc/invoice/invoiceReversalBack',
  invoiceReversalSellerAudit: '/sca/au/sc/invoice/invoiceReversalSellerAudit',
  invoiceReversalBuyyerAudit: '/sca/au/sc/invoice/invoiceReversalBuyyerAudit',
  mailInvoiceList: '/sca/au/sc/invoice/mailInvoiceList',

  mailSave: '/sca/au/sc/mail/save',
  mailApplydelete: '/sca/au/sc/mail/delete',

}
