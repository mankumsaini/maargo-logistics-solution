const iconPaths = {
  dashboard: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/>',
  trucks: '<path d="M3 6h11v12H3zM14 10h4l3 3v5h-7M7 18.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3ZM18 18.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z"/>',
  drivers: '<circle cx="12" cy="8" r="4"/><path d="M5 21v-1a7 7 0 0 1 14 0v1M19 8a4 4 0 0 1 0 7M21 20v-1a6 6 0 0 0-3-5"/>',
  customers: '<path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M10 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM20 8v6M23 11h-6"/>',
  bookings: '<path d="M8 3h8l4 4v14H4V3h4ZM14 3v5h6M8 13h8M8 17h8"/>',
  trips: '<path d="M3 12h17M14 6l6 6-6 6M5 6v12"/>',
  shipments: '<path d="m12 3 9 5-9 5-9-5 9-5ZM3 8v9l9 5 9-5V8M12 13v9"/>',
  expenses: '<path d="M12 2v20M17 6H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>',
  maintenance: '<path d="M14.7 6.3a5 5 0 0 0-6.4 6.4L3 18l3 3 5.3-5.3a5 5 0 0 0 6.4-6.4L14 13l-3-3 3.7-3.7Z"/>',
  invoices: '<path d="M7 3h10v18l-5-3-5 3V3ZM9 8h6M9 12h6"/>',
  reports: '<path d="M4 19V5M4 19h17M8 16v-4M13 16V8M18 16V5"/>',
  documents: '<path d="M7 3h8l5 5v13H7V3ZM15 3v6h5M10 13h7M10 17h7M3 7v14"/>',
  users: '<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20v-1a6.5 6.5 0 0 1 13 0v1M17 5.5a3.5 3.5 0 0 1 0 6.8M18 14a5.5 5.5 0 0 1 3.5 5"/>',
  settings: '<path d="M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8ZM19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-1.7 2.9-.2-.1a1.7 1.7 0 0 0-1.8-.1 1.7 1.7 0 0 0-1 1.5v.2h-3.4v-.2a1.7 1.7 0 0 0-1-1.5 1.7 1.7 0 0 0-1.8.1l-.2.1L7 17l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.5-1H5.7v-3.4h.2a1.7 1.7 0 0 0 1.5-1 1.7 1.7 0 0 0-.3-1.9L7 7.6l1.7-2.9.2.1a1.7 1.7 0 0 0 1.8.1 1.7 1.7 0 0 0 1-1.5v-.2h3.4v.2a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.1l.2-.1 1.7 2.9-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.5 1h.2V14h-.2a1.7 1.7 0 0 0-1.5 1Z"/>',
  search: '<circle cx="10.5" cy="10.5" r="6.5"/><path d="m15.5 15.5 4 4"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  chart: '<path d="M3 3v18h18M8 15l4-4 4 3 5-7"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  close: '<path d="m18 6-12 12M6 6l12 12"/>',
  edit: '<path d="M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L8 18l-4 1 1-4Z"/>',
  trash: '<path d="M3 6h18M8 6V4h8v2m3 0-1 14H6L5 6m4 4v6m6-6v6"/>',
  filter: '<path d="M4 6h16M7 12h10m-7 6h4"/>',
  check: '<path d="m5 12 4 4L19 6"/>',
};

const moduleConfig = {
  trucks: {
    label: "Fleet / Trucks", singular: "truck", description: "Manage fleet details, availability and vehicle documents.",
    icon: "trucks", columns: [["registration", "Registration"], ["makeModel", "Make & model"], ["type", "Truck type"], ["capacity", "Capacity"], ["status", "Status"]],
    fields: [
      ["registration", "Registration number", "text", true], ["makeModel", "Make & model", "text", true],
      ["type", "Truck type", "select", true, ["Light truck", "Medium truck", "Heavy truck", "Trailer", "Other"]],
      ["capacity", "Load capacity (kg)", "number"], ["year", "Manufacturing year", "number"],
      ["fuelType", "Fuel type", "select", false, ["Diesel", "Petrol", "CNG", "Electric", "Other"]],
      ["status", "Status", "select", true, ["Available", "Assigned", "On Trip", "Under Maintenance", "Inactive"]],
      ["notes", "Notes", "textarea"],
    ],
  },
  drivers: {
    label: "Drivers", singular: "driver", description: "Keep driver contact and licence details in one place.",
    icon: "drivers", columns: [["name", "Name"], ["phone", "Phone"], ["licence", "Licence number"], ["licenceExpiry", "Licence expiry"], ["status", "Status"]],
    fields: [["name", "Full name", "text", true], ["phone", "Phone number", "tel"], ["email", "Email", "email"], ["licence", "Driving licence number", "text", true], ["licenceExpiry", "Licence expiry", "date"], ["status", "Employment status", "select", true, ["Active", "On Leave", "Inactive"]], ["notes", "Notes", "textarea"]],
  },
  customers: {
    label: "Customers", singular: "customer", description: "Manage customer contacts and account information.",
    icon: "customers", columns: [["name", "Customer"], ["contact", "Contact person"], ["phone", "Phone"], ["email", "Email"], ["status", "Account status"]],
    fields: [["name", "Customer or company name", "text", true], ["contact", "Contact person", "text"], ["phone", "Phone number", "tel"], ["email", "Email", "email"], ["gstin", "GSTIN", "text"], ["terms", "Payment terms", "text"], ["status", "Account status", "select", true, ["Active", "Inactive"]], ["address", "Billing address", "textarea"]],
  },
  bookings: {
    label: "Bookings", singular: "booking", description: "Capture and track customer transportation requests.",
    icon: "bookings", columns: [["reference", "Reference"], ["customer", "Customer"], ["pickup", "Pickup"], ["delivery", "Delivery"], ["pickupDate", "Pickup date"], ["status", "Status"]],
    fields: [["reference", "Booking reference", "text", true], ["customer", "Customer", "text", true], ["pickup", "Pickup address", "text", true], ["delivery", "Delivery address", "text", true], ["pickupDate", "Pickup date", "date"], ["expectedDate", "Expected delivery", "date"], ["cargo", "Cargo description", "text"], ["weight", "Cargo weight (kg)", "number"], ["charge", "Freight charge (INR)", "number"], ["status", "Booking status", "select", true, ["Draft", "Confirmed", "Assigned", "In Transit", "Delivered", "Cancelled"]]],
  },
  trips: {
    label: "Trips", singular: "trip", description: "Plan journeys and track progress from dispatch to delivery.",
    icon: "trips", columns: [["reference", "Trip reference"], ["customer", "Customer"], ["origin", "Origin"], ["destination", "Destination"], ["departure", "Departure"], ["status", "Status"]],
    fields: [["reference", "Trip reference", "text", true], ["customer", "Customer", "text"], ["origin", "Starting location", "text", true], ["destination", "Destination", "text", true], ["truck", "Assigned truck", "text"], ["driver", "Assigned driver", "text"], ["departure", "Planned departure", "date"], ["arrival", "Expected arrival", "date"], ["status", "Trip status", "select", true, ["Planned", "Assigned", "Started", "In Transit", "Delayed", "Completed", "Cancelled"]], ["notes", "Notes", "textarea"]],
  },
  shipments: {
    label: "Shipments", singular: "shipment", description: "Monitor shipment dispatch and delivery progress.",
    icon: "shipments", columns: [["reference", "Shipment reference"], ["booking", "Booking"], ["description", "Cargo"], ["destination", "Destination"], ["status", "Status"]],
    fields: [["reference", "Shipment reference", "text", true], ["booking", "Booking reference", "text"], ["description", "Cargo description", "text", true], ["destination", "Destination", "text"], ["receiver", "Receiver name", "text"], ["deliveredAt", "Delivery date", "date"], ["status", "Shipment status", "select", true, ["Pending", "Dispatched", "In Transit", "Delayed", "Delivered"]], ["notes", "Delivery remarks", "textarea"]],
  },
  expenses: {
    label: "Fuel & expenses", singular: "expense", description: "Record operating expenses and fuel costs.",
    icon: "expenses", columns: [["date", "Date"], ["category", "Category"], ["truck", "Truck"], ["vendor", "Vendor"], ["amount", "Amount (INR)"]],
    fields: [["category", "Expense category", "select", true, ["Fuel", "Tolls", "Driver allowance", "Loading & unloading", "Repairs", "Tyres", "Parking", "Other"]], ["date", "Date", "date", true], ["amount", "Total amount (INR)", "number", true], ["truck", "Truck registration", "text"], ["trip", "Trip reference", "text"], ["quantity", "Fuel quantity (litres)", "number"], ["vendor", "Vendor or fuel station", "text"], ["notes", "Notes", "textarea"]],
  },
  maintenance: {
    label: "Maintenance", singular: "maintenance record", description: "Record service history and upcoming vehicle maintenance.",
    icon: "maintenance", columns: [["truck", "Truck"], ["service", "Service"], ["date", "Service date"], ["nextService", "Next service"], ["cost", "Cost (INR)"], ["status", "Status"]],
    fields: [["truck", "Truck registration", "text", true], ["service", "Service or repair", "text", true], ["date", "Service date", "date"], ["nextService", "Next service date", "date"], ["odometer", "Odometer (km)", "number"], ["cost", "Cost (INR)", "number"], ["status", "Status", "select", true, ["Scheduled", "In Progress", "Completed"]], ["notes", "Notes", "textarea"]],
  },
  invoices: {
    label: "Invoices & payments", singular: "invoice", description: "Track customer invoices and payments received.",
    icon: "invoices", columns: [["number", "Invoice number"], ["customer", "Customer"], ["date", "Invoice date"], ["dueDate", "Due date"], ["total", "Total (INR)"], ["status", "Payment status"]],
    fields: [["number", "Invoice number", "text", true], ["customer", "Customer", "text", true], ["date", "Invoice date", "date"], ["dueDate", "Due date", "date"], ["total", "Total amount (INR)", "number", true], ["paid", "Amount paid (INR)", "number"], ["status", "Payment status", "select", true, ["Draft", "Unpaid", "Partially Paid", "Paid", "Overdue"]]],
  },
  reports: {
    label: "Reports & analytics", singular: "report", description: "Create a record of a report you want to review later.",
    icon: "reports", columns: [["name", "Report"], ["type", "Report type"], ["period", "Period"], ["createdAt", "Created"]],
    fields: [["name", "Report name", "text", true], ["type", "Report type", "select", true, ["Fleet utilization", "Trips per truck", "Driver history", "Revenue", "Expenses", "Delivery performance", "Outstanding invoices"]], ["period", "Reporting period", "text"], ["notes", "Notes", "textarea"]],
  },
  documents: {
    label: "Documents", singular: "document", description: "Keep a list of operational documents and expiry dates.",
    icon: "documents", columns: [["name", "Document"], ["category", "Category"], ["relatedTo", "Related to"], ["expiry", "Expiry date"]],
    fields: [["name", "Document name", "text", true], ["category", "Document category", "select", true, ["Truck registration", "Insurance", "Permit", "Fitness certificate", "Pollution certificate", "Driver licence", "Delivery proof", "Receipt", "Other"]], ["relatedTo", "Related truck or driver", "text"], ["expiry", "Expiry date", "date"], ["notes", "Notes", "textarea"]],
  },
  users: {
    label: "User management", singular: "user", description: "Manage workspace access and team roles.",
    icon: "users", columns: [["name", "Name"], ["email", "Email"], ["role", "Role"], ["status", "Status"]],
    fields: [["name", "Full name", "text", true], ["email", "Email", "email", true], ["role", "Role", "select", true, ["Super Admin", "Transport Manager", "Accountant", "Dispatcher", "Driver"]], ["status", "Status", "select", true, ["Active", "Invited", "Inactive"]]],
  },
  settings: {
    label: "Settings", singular: "setting", description: "Keep workspace preferences together.",
    icon: "settings", columns: [["name", "Preference"], ["value", "Value"], ["updatedAt", "Last updated"]],
    fields: [["name", "Preference name", "text", true], ["value", "Value", "text", true], ["notes", "Notes", "textarea"]],
  },
};

const storeKey = "haulflow.records.v1";
const demoSeedKey = "haulflow.demo-seeded.v1";
const themeKey = "haulflow.theme.v1";
const themes = ["light", "gray", "dark"];
const state = { page: "dashboard", records: {}, query: "", filter: "all", pageNumber: 1, editingId: null };
const navSections = [
  { title: "Workspace", items: [["dashboard", "Overview"]] },
  { title: "Operations", items: [["trucks", "Fleet / Trucks"], ["drivers", "Drivers"], ["customers", "Customers"], ["bookings", "Bookings"], ["trips", "Trips"], ["shipments", "Shipments"]] },
  { title: "Finance", items: [["expenses", "Fuel & Expenses"], ["maintenance", "Maintenance"], ["invoices", "Invoices & Payments"], ["reports", "Reports & Analytics"]] },
  { title: "Manage", items: [["documents", "Documents"], ["users", "User Management"], ["settings", "Settings"]] },
];

function icon(name, className = "") {
  return `<svg class="${className}" viewBox="0 0 24 24" aria-hidden="true">${iconPaths[name] || iconPaths.documents}</svg>`;
}

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, character => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
  })[character]);
}

function readRecords() {
  try {
    const stored = localStorage.getItem(storeKey);
    if (!stored) return Object.fromEntries(Object.keys(moduleConfig).map(key => [key, []]));
    const parsed = JSON.parse(stored);
    return Object.fromEntries(Object.keys(moduleConfig).map(key => [key, Array.isArray(parsed[key]) ? parsed[key] : []]));
  } catch (error) {
    console.error("Unable to load saved records.", error);
    showToast("Saved records could not be loaded.", true);
    return Object.fromEntries(Object.keys(moduleConfig).map(key => [key, []]));
  }
}

function persistRecords() {
  try {
    localStorage.setItem(storeKey, JSON.stringify(state.records));
    return true;
  } catch (error) {
    console.error("Unable to save records.", error);
    showToast("Could not save this record in browser storage.", true);
    return false;
  }
}

function dateOffset(daysAgo = 0) {
  const date = new Date();
  date.setDate(date.getDate() - daysAgo);
  return date.toISOString().slice(0, 10);
}

function timestampOffset(daysAgo = 0) {
  const date = new Date();
  date.setDate(date.getDate() - daysAgo);
  date.setHours(10, 0, 0, 0);
  return date.toISOString();
}

function demoRecord(id, fields, daysAgo = 0) {
  const timestamp = timestampOffset(daysAgo);
  return { id, ...fields, createdAt: timestamp, updatedAt: timestamp, isDemo: true };
}

function makeDemoData() {
  return {
    trucks: [
      demoRecord("demo-truck-1", { registration: "MH 12 HX 8041", makeModel: "Tata Signa 3523.T", type: "Heavy truck", capacity: "25000", year: "2023", fuelType: "Diesel", status: "On Trip", notes: "Fictional demonstration vehicle." }, 1),
      demoRecord("demo-truck-2", { registration: "GJ 01 KT 2764", makeModel: "Ashok Leyland 1920", type: "Medium truck", capacity: "12000", year: "2022", fuelType: "Diesel", status: "Available", notes: "Fictional demonstration vehicle." }, 3),
      demoRecord("demo-truck-3", { registration: "KA 03 MN 5918", makeModel: "BharatBenz 1617R", type: "Medium truck", capacity: "10000", year: "2021", fuelType: "Diesel", status: "Under Maintenance", notes: "Fictional demonstration vehicle." }, 6),
      demoRecord("demo-truck-4", { registration: "RJ 14 GP 4382", makeModel: "Eicher Pro 3015", type: "Heavy truck", capacity: "16000", year: "2024", fuelType: "CNG", status: "Assigned", notes: "Fictional demonstration vehicle." }, 9),
    ],
    drivers: [
      demoRecord("demo-driver-1", { name: "Aarav Mehta", licence: "DL-DEMO-2048-001", licenceExpiry: dateOffset(-420), status: "Active", notes: "Fictional demo profile; no real contact details." }, 2),
      demoRecord("demo-driver-2", { name: "Nisha Kulkarni", licence: "DL-DEMO-2048-002", licenceExpiry: dateOffset(150), status: "Active", notes: "Fictional demo profile; no real contact details." }, 5),
      demoRecord("demo-driver-3", { name: "Kabir Shah", licence: "DL-DEMO-2048-003", licenceExpiry: dateOffset(280), status: "On Leave", notes: "Fictional demo profile; no real contact details." }, 8),
    ],
    customers: [
      demoRecord("demo-customer-1", { name: "Blue Banyan Foods (Demo)", contact: "Demo contact", terms: "30 days", status: "Active", address: "Pune, Maharashtra (fictional demo address)" }, 3),
      demoRecord("demo-customer-2", { name: "Copper Kite Components (Demo)", contact: "Demo contact", terms: "45 days", status: "Active", address: "Ahmedabad, Gujarat (fictional demo address)" }, 7),
      demoRecord("demo-customer-3", { name: "Northstar Home Goods (Demo)", contact: "Demo contact", terms: "30 days", status: "Active", address: "Bengaluru, Karnataka (fictional demo address)" }, 12),
    ],
    bookings: [
      demoRecord("demo-booking-1", { reference: "BK-DEMO-2401", customer: "Blue Banyan Foods (Demo)", pickup: "Pune, Maharashtra", delivery: "Indore, Madhya Pradesh", pickupDate: dateOffset(0), expectedDate: dateOffset(-2), cargo: "Packaged food products", weight: "8200", charge: "68500", status: "In Transit" }, 1),
      demoRecord("demo-booking-2", { reference: "BK-DEMO-2402", customer: "Copper Kite Components (Demo)", pickup: "Ahmedabad, Gujarat", delivery: "Jaipur, Rajasthan", pickupDate: dateOffset(1), expectedDate: dateOffset(-2), cargo: "Industrial components", weight: "6400", charge: "74200", status: "Confirmed" }, 2),
      demoRecord("demo-booking-3", { reference: "BK-DEMO-2403", customer: "Northstar Home Goods (Demo)", pickup: "Bengaluru, Karnataka", delivery: "Hyderabad, Telangana", pickupDate: dateOffset(-5), expectedDate: dateOffset(-3), cargo: "Household goods", weight: "5200", charge: "49600", status: "Delivered" }, 6),
      demoRecord("demo-booking-4", { reference: "BK-DEMO-2404", customer: "Blue Banyan Foods (Demo)", pickup: "Nashik, Maharashtra", delivery: "Surat, Gujarat", pickupDate: dateOffset(3), expectedDate: dateOffset(0), cargo: "Packaged dry goods", weight: "4800", charge: "38700", status: "Draft" }, 10),
    ],
    trips: [
      demoRecord("demo-trip-1", { reference: "TR-DEMO-701", customer: "Blue Banyan Foods (Demo)", origin: "Pune, Maharashtra", destination: "Indore, Madhya Pradesh", truck: "MH 12 HX 8041", driver: "Aarav Mehta", departure: dateOffset(0), arrival: dateOffset(-2), status: "In Transit", notes: "Fictional demonstration trip." }, 1),
      demoRecord("demo-trip-2", { reference: "TR-DEMO-702", customer: "Copper Kite Components (Demo)", origin: "Ahmedabad, Gujarat", destination: "Jaipur, Rajasthan", truck: "RJ 14 GP 4382", driver: "Nisha Kulkarni", departure: dateOffset(1), arrival: dateOffset(-1), status: "Assigned", notes: "Fictional demonstration trip." }, 2),
      demoRecord("demo-trip-3", { reference: "TR-DEMO-703", customer: "Northstar Home Goods (Demo)", origin: "Bengaluru, Karnataka", destination: "Hyderabad, Telangana", truck: "GJ 01 KT 2764", driver: "Kabir Shah", departure: dateOffset(-5), arrival: dateOffset(-3), status: "Completed", notes: "Fictional demonstration trip." }, 6),
      demoRecord("demo-trip-4", { reference: "TR-DEMO-704", customer: "Blue Banyan Foods (Demo)", origin: "Nashik, Maharashtra", destination: "Surat, Gujarat", truck: "GJ 01 KT 2764", driver: "Aarav Mehta", departure: dateOffset(4), arrival: dateOffset(2), status: "Planned", notes: "Fictional demonstration trip." }, 11),
    ],
    shipments: [
      demoRecord("demo-shipment-1", { reference: "SH-DEMO-901", booking: "BK-DEMO-2401", description: "Packaged food products", destination: "Indore, Madhya Pradesh", status: "In Transit", notes: "Fictional demo shipment." }, 1),
      demoRecord("demo-shipment-2", { reference: "SH-DEMO-902", booking: "BK-DEMO-2402", description: "Industrial components", destination: "Jaipur, Rajasthan", status: "Pending", notes: "Fictional demo shipment." }, 2),
      demoRecord("demo-shipment-3", { reference: "SH-DEMO-903", booking: "BK-DEMO-2403", description: "Household goods", destination: "Hyderabad, Telangana", receiver: "Demo receiving desk", deliveredAt: dateOffset(-3), status: "Delivered", notes: "Fictional demo shipment." }, 6),
    ],
    expenses: [
      demoRecord("demo-expense-1", { category: "Fuel", date: dateOffset(2), amount: "18400", truck: "MH 12 HX 8041", trip: "TR-DEMO-701", quantity: "210", vendor: "Demo Fuel Stop", notes: "Fictional sample expense." }, 2),
      demoRecord("demo-expense-2", { category: "Tolls", date: dateOffset(4), amount: "3250", truck: "MH 12 HX 8041", trip: "TR-DEMO-701", vendor: "Demo Toll Services", notes: "Fictional sample expense." }, 4),
      demoRecord("demo-expense-3", { category: "Repairs", date: dateOffset(8), amount: "12750", truck: "KA 03 MN 5918", vendor: "Demo Fleet Workshop", notes: "Fictional sample expense." }, 8),
      demoRecord("demo-expense-4", { category: "Fuel", date: dateOffset(15), amount: "15200", truck: "GJ 01 KT 2764", trip: "TR-DEMO-703", quantity: "175", vendor: "Demo Fuel Stop", notes: "Fictional sample expense." }, 15),
      demoRecord("demo-expense-5", { category: "Driver allowance", date: dateOffset(33), amount: "4200", truck: "GJ 01 KT 2764", trip: "TR-DEMO-703", vendor: "Demo Operations", notes: "Fictional sample expense." }, 33),
      demoRecord("demo-expense-6", { category: "Fuel", date: dateOffset(62), amount: "16800", truck: "RJ 14 GP 4382", trip: "TR-DEMO-702", quantity: "190", vendor: "Demo Fuel Stop", notes: "Fictional sample expense." }, 62),
    ],
    maintenance: [
      demoRecord("demo-maintenance-1", { truck: "KA 03 MN 5918", service: "Scheduled engine service", date: dateOffset(-1), nextService: dateOffset(-91), odometer: "84600", cost: "12750", status: "In Progress", notes: "Fictional demonstration service." }, 1),
      demoRecord("demo-maintenance-2", { truck: "MH 12 HX 8041", service: "Preventive inspection", date: dateOffset(14), nextService: dateOffset(-166), odometer: "62300", cost: "6800", status: "Scheduled", notes: "Fictional demonstration service." }, 4),
      demoRecord("demo-maintenance-3", { truck: "GJ 01 KT 2764", service: "Brake and tyre inspection", date: dateOffset(35), nextService: dateOffset(-145), odometer: "112400", cost: "9200", status: "Scheduled", notes: "Fictional demonstration service." }, 9),
    ],
    invoices: [
      demoRecord("demo-invoice-1", { number: "INV-DEMO-1101", customer: "Blue Banyan Foods (Demo)", date: dateOffset(1), dueDate: dateOffset(-29), total: "68500", paid: "40000", status: "Partially Paid" }, 1),
      demoRecord("demo-invoice-2", { number: "INV-DEMO-1102", customer: "Copper Kite Components (Demo)", date: dateOffset(38), dueDate: dateOffset(8), total: "74200", paid: "0", status: "Overdue" }, 38),
      demoRecord("demo-invoice-3", { number: "INV-DEMO-1103", customer: "Northstar Home Goods (Demo)", date: dateOffset(16), dueDate: dateOffset(-14), total: "49600", paid: "49600", status: "Paid" }, 16),
      demoRecord("demo-invoice-4", { number: "INV-DEMO-1104", customer: "Blue Banyan Foods (Demo)", date: dateOffset(34), dueDate: dateOffset(4), total: "38700", paid: "0", status: "Unpaid" }, 34),
      demoRecord("demo-invoice-5", { number: "INV-DEMO-1105", customer: "Copper Kite Components (Demo)", date: dateOffset(63), dueDate: dateOffset(33), total: "58200", paid: "20000", status: "Partially Paid" }, 63),
      demoRecord("demo-invoice-6", { number: "INV-DEMO-1106", customer: "Northstar Home Goods (Demo)", date: dateOffset(95), dueDate: dateOffset(65), total: "42100", paid: "42100", status: "Paid" }, 95),
    ],
    reports: [
      demoRecord("demo-report-1", { name: "Monthly fleet overview (Demo)", type: "Fleet utilization", period: "Current month", notes: "Example report entry only; not a generated analytics export." }, 3),
      demoRecord("demo-report-2", { name: "Quarterly expense review (Demo)", type: "Expenses", period: "Previous quarter", notes: "Example report entry only; not a generated analytics export." }, 12),
    ],
    documents: [
      demoRecord("demo-document-1", { name: "Vehicle insurance — MH 12 HX 8041 (Demo)", category: "Insurance", relatedTo: "MH 12 HX 8041", expiry: dateOffset(-40), notes: "Fictional document register entry; no file is attached." }, 4),
      demoRecord("demo-document-2", { name: "Fitness certificate — KA 03 MN 5918 (Demo)", category: "Fitness certificate", relatedTo: "KA 03 MN 5918", expiry: dateOffset(75), notes: "Fictional document register entry; no file is attached." }, 7),
      demoRecord("demo-document-3", { name: "Driver licence — Aarav Mehta (Demo)", category: "Driver licence", relatedTo: "Aarav Mehta", expiry: dateOffset(-420), notes: "Fictional document register entry; no file is attached." }, 10),
    ],
    users: [
      demoRecord("demo-user-1", { name: "Demo Workspace Admin", email: "admin@example.invalid", role: "Super Admin", status: "Active" }, 2),
      demoRecord("demo-user-2", { name: "Demo Dispatcher", email: "dispatch@example.invalid", role: "Dispatcher", status: "Active" }, 6),
      demoRecord("demo-user-3", { name: "Demo Accountant", email: "accounts@example.invalid", role: "Accountant", status: "Invited" }, 10),
    ],
    settings: [
      demoRecord("demo-setting-1", { name: "Workspace name", value: "Haulflow Demo", notes: "Fictional sample setting." }, 1),
      demoRecord("demo-setting-2", { name: "Display currency", value: "INR (₹)", notes: "Fictional sample setting." }, 1),
    ],
  };
}

function seedDemoDataIfNeeded() {
  try {
    if (localStorage.getItem(demoSeedKey)) return;
    const hasExistingRecords = Object.values(state.records).some(records => records.length > 0);
    if (!hasExistingRecords) {
      state.records = makeDemoData();
      if (!persistRecords()) return;
      showToast("Fictional sample records have been added.");
    }
    localStorage.setItem(demoSeedKey, "1");
  } catch (error) {
    console.error("Unable to initialize demo records.", error);
    showToast("Demo records could not be initialized.", true);
  }
}

function renderNav() {
  const nav = document.getElementById("sidebar-nav");
  nav.innerHTML = navSections.map(section => `
    <div class="nav-section-label">${escapeHtml(section.title)}</div>
    ${section.items.map(([key, label]) => `
      <button type="button" class="nav-item ${state.page === key ? "active" : ""}" data-page="${key}" ${state.page === key ? 'aria-current="page"' : ""}>
        ${icon(key)}<span>${escapeHtml(label)}</span>
      </button>`).join("")}
  `).join("");
  nav.querySelectorAll("[data-page]").forEach(button => button.addEventListener("click", () => navigate(button.dataset.page)));
}

function heading(eyebrow, title, description, actions = "") {
  return `<div class="page-heading">
    <div><p class="eyebrow">${escapeHtml(eyebrow)}</p><h1 class="page-title">${escapeHtml(title)}</h1><p class="page-description">${escapeHtml(description)}</p></div>
    ${actions ? `<div class="heading-actions">${actions}</div>` : ""}
  </div>`;
}

function button(label, action, options = {}) {
  const kind = options.primary ? "button button-primary" : "button";
  const symbol = options.icon ? icon(options.icon) : "";
  return `<button type="button" class="${kind}" data-action="${escapeHtml(action)}">${symbol}${escapeHtml(label)}</button>`;
}

function getCount(module, predicate = () => true) {
  return (state.records[module] || []).filter(predicate).length;
}

function dashboard() {
  const today = new Intl.DateTimeFormat("en", { weekday: "long", month: "long", day: "numeric" }).format(new Date());
  const trucks = state.records.trucks || [];
  const allRecords = Object.entries(state.records).flatMap(([module, records]) =>
    records.map(record => ({ module, record })),
  );
  const demoCount = allRecords.filter(({ record }) => record.isDemo).length;
  const customCount = allRecords.length - demoCount;
  const activeTrips = getCount("trips", record => !["Completed", "Cancelled"].includes(record.status));
  const outstanding = (state.records.invoices || []).reduce((total, invoice) => {
    const invoiceTotal = Number(invoice.total) || 0;
    const paid = Number(invoice.paid) || 0;
    return total + Math.max(0, invoiceTotal - paid);
  }, 0);
  const kpis = [
    ["Fleet size", trucks.length, "Vehicles in your fleet", "trucks", "orange"],
    ["Available trucks", trucks.filter(truck => truck.status === "Available").length, "Ready to be assigned", "trucks", "blue"],
    ["Active trips", activeTrips, "Trips not yet completed", "trips", "green"],
    ["Outstanding", formatCurrency(outstanding), "Unpaid invoice balance", "invoices", "purple"],
  ];
  return `${heading(today, "Good to see you", "Here’s an overview of your transport operations.", button("Add a truck", "add-record", { primary: true, icon: "plus" }))}
    <section class="dashboard-welcome">
      <div class="welcome-copy"><span class="welcome-icon">${icon("trucks")}</span><div><h2>${demoCount ? "Demo workspace · fictional sample data" : "Your workspace is ready"}</h2><p>${demoCount ? `${demoCount} fictional sample records${customCount ? ` and ${customCount} of your own` : ""}. Edit or remove them as you explore.` : "Add a record to start building a live view of your operations."}</p></div></div>
      <button class="welcome-link" type="button" data-page="trucks">Explore your fleet ${icon("arrow")}</button>
    </section>
    <section class="kpi-grid" aria-label="Workspace summary">${kpis.map(([label, value, caption, glyph, color]) => `
      <article class="kpi-card"><div class="kpi-top"><span class="kpi-label">${label}</span><span class="kpi-icon ${color}">${icon(glyph)}</span></div><div class="kpi-value">${value}</div><div class="kpi-caption">${caption}</div></article>`).join("")}
    </section>
    <section class="dashboard-grid">
      <article class="panel"><div class="panel-header"><div><h2 class="panel-title">Invoices &amp; expenses</h2><p class="panel-subtitle">Monthly invoice totals and operating costs</p></div><div class="chart-legend"><span class="legend-key"><i class="legend-dot"></i>Invoiced</span><span class="legend-key"><i class="legend-dot blue"></i>Expenses</span></div></div>
        <div class="panel-body">${renderFinancialChart()}</div></article>
      <article class="panel"><div class="panel-header"><div><h2 class="panel-title">Recent activity</h2><p class="panel-subtitle">Latest changes across your workspace</p></div></div>
        <div class="panel-body">${renderRecentActivity(allRecords)}</div></article>
    </section>
    <section class="bottom-grid" aria-label="Quick actions">
      ${quickLink("trucks", "Add a truck", "Register a vehicle")}
      ${quickLink("customers", "Add a customer", "Create a customer profile")}
      ${quickLink("bookings", "Create a booking", "Record a transport request")}
    </section>`;
}

function renderFinancialChart() {
  const now = new Date();
  const months = Array.from({ length: 6 }, (_, index) => {
    const date = new Date(now.getFullYear(), now.getMonth() - 5 + index, 1);
    return {
      year: date.getFullYear(),
      month: date.getMonth(),
      label: new Intl.DateTimeFormat("en", { month: "short" }).format(date),
      invoiced: 0,
      expenses: 0,
    };
  });
  const addToMonth = (collection, dateField, amountField, totalField) => {
    collection.forEach(record => {
      if (!record[dateField]) return;
      const date = new Date(`${record[dateField]}T00:00:00`);
      const bucket = months.find(item => item.year === date.getFullYear() && item.month === date.getMonth());
      if (bucket) bucket[totalField] += Number(record[amountField]) || 0;
    });
  };
  addToMonth(state.records.invoices || [], "date", "total", "invoiced");
  addToMonth(state.records.expenses || [], "date", "amount", "expenses");
  const maximum = Math.max(...months.flatMap(month => [month.invoiced, month.expenses]));
  if (!maximum) return `<div class="chart-empty">${icon("chart")}<strong>No financial activity yet</strong><span>Add invoices and expenses to see your monthly totals here.</span></div>`;
  return `<div class="financial-chart" role="img" aria-label="Monthly invoice totals and expenses for the past six months">
    <div class="chart-y-labels"><span>${formatCompactCurrency(maximum)}</span><span>${formatCompactCurrency(maximum / 2)}</span><span>₹0</span></div>
    <div class="chart-bars">${months.map(month => {
      const invoiceHeight = month.invoiced ? Math.max(3, Math.round(month.invoiced / maximum * 112)) : 0;
      const expenseHeight = month.expenses ? Math.max(3, Math.round(month.expenses / maximum * 112)) : 0;
      return `<div class="chart-month"><div class="chart-columns">
        <span class="chart-bar invoiced" title="Invoiced ${escapeHtml(formatCurrency(month.invoiced))}" style="height:${invoiceHeight}px"></span>
        <span class="chart-bar expenses" title="Expenses ${escapeHtml(formatCurrency(month.expenses))}" style="height:${expenseHeight}px"></span>
      </div><span class="chart-month-label">${escapeHtml(month.label)}</span></div>`;
    }).join("")}</div>
  </div>`;
}

function formatCompactCurrency(amount) {
  return new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", notation: "compact", maximumFractionDigits: 0 }).format(amount);
}

function renderRecentActivity(allRecords) {
  const latest = allRecords
    .filter(({ record }) => record.createdAt)
    .sort((a, b) => new Date(b.record.createdAt) - new Date(a.record.createdAt))
    .slice(0, 4);
  if (!latest.length) return `<div class="activity-empty">${icon("clock")}<strong>It’s quiet for now</strong><span>Your recent activity will show up here.</span></div>`;
  return `<div class="activity-list">${latest.map(({ module, record }) => {
    const config = moduleConfig[module];
    const label = recordName(record, config);
    return `<button class="activity-item" type="button" data-page="${escapeHtml(module)}">
      <span class="activity-icon">${icon(config.icon)}</span>
      <span class="activity-copy"><strong>${escapeHtml(label)}</strong><small>${escapeHtml(config.singular)} · ${formatRelativeDate(record.createdAt)}</small></span>
      ${icon("arrow", "activity-arrow")}
    </button>`;
  }).join("")}</div>`;
}

function formatRelativeDate(timestamp) {
  const days = Math.floor((Date.now() - new Date(timestamp).getTime()) / 86400000);
  if (days <= 0) return "Today";
  if (days === 1) return "Yesterday";
  return `${days} days ago`;
}

function quickLink(page, title, description) {
  return `<button type="button" class="quick-link" data-page="${page}"><span class="quick-icon">${icon(page)}</span><span class="quick-copy"><strong>${title}</strong><small>${description}</small></span>${icon("arrow", "quick-arrow")}</button>`;
}

function formatCurrency(amount) {
  return new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(amount);
}

function formatDate(value) {
  if (!value) return "—";
  const date = new Date(`${value}T00:00:00`);
  if (Number.isNaN(date.getTime())) return value;
  return new Intl.DateTimeFormat("en-IN", { day: "2-digit", month: "short", year: "numeric" }).format(date);
}

function recordName(record, config) {
  const preferred = ["registration", "name", "reference", "number", "service"];
  const key = preferred.find(candidate => record[candidate]);
  return key ? record[key] : (record[config.fields[0][0]] || "Untitled");
}

function cellValue(key, record) {
  const value = record[key];
  if (value === undefined || value === null || value === "") return "—";
  if (key.toLowerCase().includes("date") || ["departure", "arrival", "expiry", "nextService", "dueDate", "deliveredAt"].includes(key)) return formatDate(value);
  if (["amount", "cost", "total", "paid", "charge"].includes(key)) return formatCurrency(Number(value) || 0);
  return value;
}

function statusClass(status) {
  return String(status || "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function modulePage(key) {
  const config = moduleConfig[key];
  const records = state.records[key] || [];
  const normalizedQuery = state.query.trim().toLowerCase();
  let visible = records.filter(record => {
    const matchesQuery = !normalizedQuery || Object.values(record).some(value => String(value).toLowerCase().includes(normalizedQuery));
    const matchesStatus = state.filter === "all" || String(record.status || "").toLowerCase() === state.filter.toLowerCase();
    return matchesQuery && matchesStatus;
  });
  visible.sort((a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0));
  const pageSize = 10;
  const totalPages = Math.max(1, Math.ceil(visible.length / pageSize));
  state.pageNumber = Math.min(state.pageNumber, totalPages);
  const pageRecords = visible.slice((state.pageNumber - 1) * pageSize, state.pageNumber * pageSize);
  const action = button(`Add ${config.singular}`, "add-record", { primary: true, icon: "plus" });
  const hasStatus = config.fields.some(field => field[0] === "status");
  const statusOptions = hasStatus ? config.fields.find(field => field[0] === "status")[4] : [];
  const content = records.length ? `
    <div class="table-wrap"><table class="data-table"><thead><tr>${config.columns.map(([, label]) => `<th>${escapeHtml(label)}</th>`).join("")}<th><span class="visually-hidden">Actions</span></th></tr></thead>
    <tbody>${pageRecords.length ? pageRecords.map(record => `<tr data-record="${escapeHtml(record.id)}">
      ${config.columns.map(([field]) => `<td class="${["name", "registration", "reference", "number"].includes(field) ? "table-primary" : ""}">${field === "status" && record[field] ? `<span class="status-pill ${statusClass(record[field])}">${escapeHtml(record[field])}</span>` : escapeHtml(cellValue(field, record))}</td>`).join("")}
      <td><div class="row-actions"><button type="button" class="row-action" data-edit="${escapeHtml(record.id)}" aria-label="Edit ${escapeHtml(recordName(record, config))}">${icon("edit")}</button><button type="button" class="row-action" data-delete="${escapeHtml(record.id)}" aria-label="Delete ${escapeHtml(recordName(record, config))}">${icon("trash")}</button></div></td>
    </tr>`).join("") : `<tr><td class="table-empty" colspan="${config.columns.length + 1}">${emptyState(key, true)}</td></tr>`}</tbody></table></div>
    <div class="table-footer"><span>Showing ${visible.length ? (state.pageNumber - 1) * pageSize + 1 : 0}–${Math.min(state.pageNumber * pageSize, visible.length)} of ${visible.length} ${escapeHtml(config.label.toLowerCase())}</span><div><button type="button" data-pager="-1" ${state.pageNumber <= 1 ? "disabled" : ""}>Previous</button> <button type="button" data-pager="1" ${state.pageNumber >= totalPages ? "disabled" : ""}>Next</button></div></div>`
    : emptyState(key, false);
  return `${heading("Workspace", config.label, config.description, action)}
    <section class="panel">
      <div class="toolbar"><div class="toolbar-left"><label class="table-search">${icon("search")}<input id="module-search" type="search" value="${escapeHtml(state.query)}" placeholder="Search ${escapeHtml(config.label.toLowerCase())}..." aria-label="Search ${escapeHtml(config.label.toLowerCase())}"></label>
      ${hasStatus ? `<label class="visually-hidden" for="status-filter">Filter by status</label><select class="filter-select" id="status-filter"><option value="all">All statuses</option>${statusOptions.map(option => `<option ${state.filter === option ? "selected" : ""}>${escapeHtml(option)}</option>`).join("")}</select>` : ""}</div>
      <div class="toolbar-right"><span class="nav-count">${records.length} ${records.length === 1 ? "record" : "records"}</span></div></div>
      ${content}
    </section>
    <p class="module-note"><strong>Private to this browser.</strong> Records you create are stored locally on this device. This frontend does not connect to a server or share data with other users.</p>`;
}

function emptyState(key, filtered) {
  const config = moduleConfig[key];
  return `<div class="empty-state"><span class="empty-illustration">${icon(config.icon)}</span><h3>${filtered ? "No matching records" : `No ${config.label.toLowerCase()} yet`}</h3><p>${filtered ? "Try a different search or filter." : `Add your first ${config.singular} to start keeping track of it here.`}</p>${filtered ? "" : button(`Add ${config.singular}`, "add-record", { primary: true, icon: "plus" })}</div>`;
}

function render() {
  renderNav();
  const content = document.getElementById("page-content");
  content.innerHTML = state.page === "dashboard" ? dashboard() : modulePage(state.page);
  const currentLabel = state.page === "dashboard" ? "Overview" : moduleConfig[state.page].label;
  document.getElementById("breadcrumbs").innerHTML = `<span>Workspace</span>${icon("arrow")}<span class="breadcrumb-current">${escapeHtml(currentLabel)}</span>`;
  content.querySelectorAll("[data-action='add-record']").forEach(element => element.addEventListener("click", openRecordForm));
  content.querySelectorAll("[data-page]").forEach(element => element.addEventListener("click", () => navigate(element.dataset.page)));
  content.querySelectorAll("[data-edit]").forEach(element => element.addEventListener("click", () => openRecordForm(element.dataset.edit)));
  content.querySelectorAll("[data-delete]").forEach(element => element.addEventListener("click", () => deleteRecord(element.dataset.delete)));
  content.querySelectorAll("[data-pager]").forEach(element => element.addEventListener("click", () => {
    state.pageNumber += Number(element.dataset.pager);
    render();
  }));
  const search = content.querySelector("#module-search");
  if (search) search.addEventListener("input", event => {
    state.query = event.target.value;
    state.pageNumber = 1;
    const position = event.target.selectionStart;
    render();
    const nextSearch = document.getElementById("module-search");
    nextSearch.focus();
    nextSearch.setSelectionRange(position, position);
  });
  const filter = content.querySelector("#status-filter");
  if (filter) filter.addEventListener("change", event => {
    state.filter = event.target.value;
    state.pageNumber = 1;
    render();
  });
}

function navigate(page) {
  if (page !== "dashboard" && !moduleConfig[page]) return;
  state.page = page;
  state.query = "";
  state.filter = "all";
  state.pageNumber = 1;
  closeMobileNav();
  render();
  document.getElementById("page-content").focus({ preventScroll: true });
}

function openRecordForm(eventOrId) {
  const id = typeof eventOrId === "string" ? eventOrId : null;
  const config = moduleConfig[state.page];
  if (!config) {
    navigate("trucks");
    openRecordForm();
    return;
  }
  state.editingId = id;
  const record = id ? state.records[state.page].find(item => item.id === id) : {};
  const fields = config.fields.map(([key, label, type, required, options]) => {
    const value = record?.[key] || "";
    const requiredMark = required ? ' <span aria-hidden="true">*</span>' : "";
    let input;
    if (type === "select") {
      input = `<select id="field-${key}" name="${key}" ${required ? "required" : ""}><option value="">Select ${escapeHtml(label.toLowerCase())}</option>${options.map(option => `<option value="${escapeHtml(option)}" ${value === option ? "selected" : ""}>${escapeHtml(option)}</option>`).join("")}</select>`;
    } else if (type === "textarea") {
      input = `<textarea id="field-${key}" name="${key}" placeholder="Add details">${escapeHtml(value)}</textarea>`;
    } else {
      input = `<input id="field-${key}" name="${key}" type="${type}" value="${escapeHtml(value)}" ${required ? "required" : ""} ${type === "number" ? 'min="0" step="any"' : ""} placeholder="${type === "date" ? "" : `Enter ${escapeHtml(label.toLowerCase())}`}">`;
    }
    return `<div class="form-field ${type === "textarea" ? "full" : ""}"><label for="field-${key}">${escapeHtml(label)}${requiredMark}</label>${input}</div>`;
  }).join("");
  document.getElementById("modal-root").innerHTML = `
    <div class="modal-backdrop" data-dismiss-modal>
      <section class="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
        <header class="modal-header"><div><h2 id="modal-title">${id ? "Edit" : "Add"} ${escapeHtml(config.singular)}</h2><p>Changes are saved only in this browser.</p></div><button type="button" class="modal-close" data-close-modal aria-label="Close">${icon("close")}</button></header>
        <form class="modal-form" id="record-form"><div class="form-grid">${fields}</div>
          <footer class="modal-footer"><button class="button" type="button" data-close-modal>Cancel</button><button class="button button-primary" type="submit">${id ? "Save changes" : `Create ${escapeHtml(config.singular)}`}</button></footer>
        </form>
      </section>
    </div>`;
  const root = document.getElementById("modal-root");
  root.querySelectorAll("[data-close-modal]").forEach(button => button.addEventListener("click", closeModal));
  root.querySelector("[data-dismiss-modal]").addEventListener("click", event => {
    if (event.target === event.currentTarget) closeModal();
  });
  root.querySelector("#record-form").addEventListener("submit", saveRecord);
  const firstInput = root.querySelector("input,select,textarea");
  if (firstInput) firstInput.focus();
  document.addEventListener("keydown", handleModalKeydown, { once: false });
}

function handleModalKeydown(event) {
  if (event.key === "Escape" && document.querySelector(".modal-backdrop")) closeModal();
}

function closeModal() {
  document.getElementById("modal-root").innerHTML = "";
  document.removeEventListener("keydown", handleModalKeydown);
}

function saveRecord(event) {
  event.preventDefault();
  const config = moduleConfig[state.page];
  const formData = new FormData(event.currentTarget);
  const values = Object.fromEntries(formData.entries());
  const existing = state.editingId ? state.records[state.page].find(item => item.id === state.editingId) : null;
  const record = {
    ...existing,
    ...values,
    id: existing?.id || (crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random().toString(36).slice(2)}`),
    createdAt: existing?.createdAt || new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  const requiredFields = config.fields.filter(field => field[3]).map(field => field[0]);
  for (const field of requiredFields) {
    if (!String(values[field] || "").trim()) {
      document.getElementById(`field-${field}`).focus();
      showToast("Please complete all required fields.", true);
      return;
    }
  }
  const records = state.records[state.page];
  const duplicateField = state.page === "trucks" ? "registration" : null;
  if (duplicateField && records.some(item => item[duplicateField]?.toLowerCase() === record[duplicateField].toLowerCase() && item.id !== record.id)) {
    document.getElementById(`field-${duplicateField}`).focus();
    showToast("A truck with this registration already exists.", true);
    return;
  }
  const index = records.findIndex(item => item.id === record.id);
  if (index >= 0) records[index] = record;
  else records.unshift(record);
  if (!persistRecords()) return;
  closeModal();
  render();
  showToast(`${config.singular[0].toUpperCase()}${config.singular.slice(1)} ${existing ? "updated" : "added"}.`);
}

function deleteRecord(id) {
  const config = moduleConfig[state.page];
  const record = state.records[state.page].find(item => item.id === id);
  if (!record) return;
  if (!window.confirm(`Delete "${recordName(record, config)}"? This only removes it from this browser.`)) return;
  state.records[state.page] = state.records[state.page].filter(item => item.id !== id);
  if (!persistRecords()) return;
  render();
  showToast(`${config.singular[0].toUpperCase()}${config.singular.slice(1)} deleted.`);
}

function showToast(message, isError = false) {
  const region = document.getElementById("toast-region");
  if (!region) return;
  const toast = document.createElement("div");
  toast.className = "toast";
  if (isError) {
    toast.style.color = "#ad4d4d";
    toast.style.borderColor = "#f0d7d7";
  }
  toast.innerHTML = `${icon(isError ? "close" : "check")}${escapeHtml(message)}`;
  region.append(toast);
  window.setTimeout(() => toast.remove(), 3500);
}

function closeMobileNav() {
  document.getElementById("sidebar").classList.remove("open");
  document.getElementById("mobile-scrim").classList.remove("visible");
}

function applyTheme(theme, persist = true) {
  if (!themes.includes(theme)) return;
  document.documentElement.dataset.theme = theme;
  const button = document.getElementById("theme-toggle");
  if (button) {
    const label = theme[0].toUpperCase() + theme.slice(1);
    button.setAttribute("aria-label", `Appearance: ${label}`);
  }
  document.querySelectorAll("[data-theme-option]").forEach(option => {
    const selected = option.dataset.themeOption === theme;
    option.setAttribute("aria-checked", String(selected));
  });
  if (!persist) return;
  try {
    localStorage.setItem(themeKey, theme);
  } catch (error) {
    console.error("Unable to save appearance preference.", error);
    showToast("Appearance changed, but the preference could not be saved.", true);
  }
}

function setThemeMenuOpen(open) {
  const toggle = document.getElementById("theme-toggle");
  const menu = document.getElementById("theme-menu");
  if (!toggle || !menu) return;
  menu.hidden = !open;
  toggle.setAttribute("aria-expanded", String(open));
}

function runGlobalSearch(value) {
  const query = value.trim().toLowerCase();
  if (!query) return;
  const match = Object.entries(state.records).find(([, records]) =>
    records.some(record => Object.values(record).some(item => String(item).toLowerCase().includes(query))),
  );
  if (!match) {
    showToast("No matching records found.", true);
    return;
  }
  navigate(match[0]);
  state.query = value;
  render();
  const input = document.getElementById("module-search");
  if (input) input.focus();
}

function init() {
  state.records = readRecords();
  seedDemoDataIfNeeded();
  let savedTheme = document.documentElement.dataset.theme || "light";
  try {
    savedTheme = localStorage.getItem(themeKey) || savedTheme;
  } catch (error) {
    console.error("Unable to load appearance preference.", error);
    showToast("Saved appearance preference could not be loaded.", true);
  }
  applyTheme(savedTheme, false);
  render();
  document.getElementById("theme-toggle").addEventListener("click", () => {
    const opening = document.getElementById("theme-menu").hidden;
    setThemeMenuOpen(opening);
    if (opening) document.querySelector("[data-theme-option]").focus();
  });
  const themeOptions = [...document.querySelectorAll("[data-theme-option]")];
  themeOptions.forEach(option => {
    option.addEventListener("click", () => {
      applyTheme(option.dataset.themeOption);
      setThemeMenuOpen(false);
      document.getElementById("theme-toggle").focus();
    });
  });
  document.getElementById("theme-menu").addEventListener("keydown", event => {
    if (event.key === "Escape") {
      event.preventDefault();
      setThemeMenuOpen(false);
      document.getElementById("theme-toggle").focus();
      return;
    }
    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      const current = themeOptions.indexOf(document.activeElement);
      const direction = event.key === "ArrowDown" ? 1 : -1;
      const next = (current + direction + themeOptions.length) % themeOptions.length;
      themeOptions[next].focus();
    }
  });
  document.addEventListener("click", event => {
    if (!event.target.closest(".theme-picker")) setThemeMenuOpen(false);
  });
  document.addEventListener("keydown", event => {
    if (event.key === "Escape" && !document.getElementById("theme-menu").hidden) {
      setThemeMenuOpen(false);
      document.getElementById("theme-toggle").focus();
    }
  });
  document.getElementById("mobile-menu-button").addEventListener("click", () => {
    document.getElementById("sidebar").classList.add("open");
    document.getElementById("mobile-scrim").classList.add("visible");
  });
  document.getElementById("mobile-scrim").addEventListener("click", closeMobileNav);
  document.getElementById("global-search").addEventListener("keydown", event => {
    if (event.key === "Enter") runGlobalSearch(event.target.value);
  });
  document.addEventListener("keydown", event => {
    if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
      event.preventDefault();
      document.getElementById("global-search").focus();
    }
  });
  document.getElementById("notifications-button").addEventListener("click", () => showToast("You’re all caught up."));
  document.getElementById("help-button").addEventListener("click", () => showToast("Help & support will be available when a service is connected."));
  document.getElementById("account-menu").addEventListener("click", () => showToast("This frontend preview has no signed-in account."));
  document.getElementById("profile-button").addEventListener("click", () => showToast("This frontend preview has no signed-in account."));
}

init();
