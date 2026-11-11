# Haulflow TMS frontend

A responsive, frontend-only transport management workspace built with HTML, Tailwind CSS, and vanilla JavaScript. A small Node.js server serves the static files.

## Run locally

Install Node.js, then from this folder run:

```bash
npm start
```

Open [http://127.0.0.1:3000](http://127.0.0.1:3000). Set `PORT` to use a different port.

## Scope

On first launch, an empty browser workspace is populated with fictional demonstration records for the fleet, drivers, customers, bookings, trips, shipments, expenses, maintenance, invoices, reports, documents, users, and settings. The records use fictional people, companies, contact details, and document entries; there are no attached files or live operational data. Dashboard counts, monthly invoice/expense bars, and recent activity are calculated from the records in the workspace.

Create, edit, search, filter, and delete records across the available modules. Records are saved in this browser's local storage; they are not sent to a backend or shared with other users. Existing records are not replaced with demo content. Clearing browser storage removes your records and allows the first-launch demo to load again.

Use the appearance button in the top bar to switch between light, gray, and dark themes. The selected theme is saved in this browser.

Tailwind CSS and web fonts are loaded from their public CDNs. An internet connection is needed for those assets. This preview does not include authentication, an API, a database, live tracking, or secure document uploads.
