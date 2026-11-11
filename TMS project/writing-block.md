# PROJECT: Truck Transportation Management System (TMS)

## 1. Your Role

Act as a senior full-stack software engineer, React architect, UI/UX designer, database engineer, and QA engineer. Build a complete, professional, production-oriented Truck Transportation Management System for a transport company.

Do not create only a static dashboard or UI prototype. Build a functional web application with a frontend, backend, database, validation, authentication, business logic, and documentation.

Explain your implementation decisions clearly and generate code that can run locally.

## 2. Project Objective

Develop a web-based application that allows a transport company to manage its entire truck fleet and transportation operations from one central platform.

The application should help administrators manage trucks, drivers, customers, bookings, shipments, trips, fuel expenses, maintenance, invoices, payments, and business reports.

The system should be scalable so that GPS tracking, notifications, customer portals, and other advanced features can be added later.

## 3. Technology Stack

Use the following technologies:

Frontend:
- React with Vite
- JavaScript with JSX
- Tailwind CSS
- React Router
- Axios for API requests
- Recharts for dashboard charts
- React Hook Form and Zod for form validation
- Lucide React for icons

Backend:
- Node.js
- Express.js
- REST API architecture
- JWT-based authentication using secure practices
- Role-based authorization
- Server-side validation and centralized error handling

Database:
- PostgreSQL
- Prisma ORM
- Database migrations and seed data

Additional integrations:
- Google Maps or Mapbox for maps and route visualization
- A configurable file-storage provider for documents
- An email service abstraction for future notifications
- Docker Compose for local development, if practical

Use compatible, stable package versions. Do not mix incompatible library versions or use deprecated APIs.

## 4. User Roles and Permissions

Implement role-based access control.

1. Super Admin:
   - Manage company settings and users.
   - Access all modules and reports.

2. Transport Manager:
   - Manage trucks, drivers, trips, shipments, and maintenance.
   - Assign trucks and drivers to trips.

3. Accountant:
   - Manage invoices, payments, expenses, and financial reports.
   - Cannot change system security settings.

4. Dispatcher:
   - Create trips, allocate available trucks, and update shipment progress.
   - Cannot access restricted financial or administration functions.

5. Driver:
   - View assigned trips.
   - Update trip progress and delivery status.
   - Upload delivery proof if enabled.

Enforce permissions on the backend, not only by hiding frontend buttons.

## 5. Main Application Layout

Create a modern, responsive administrative dashboard.

Desktop layout:
- Fixed or collapsible sidebar.
- Top navigation bar.
- Search functionality.
- Notifications area.
- User profile menu.
- Breadcrumb navigation.
- Main content area.
- Responsive tables, charts, forms, and modal dialogs.

Sidebar navigation:
1. Dashboard
2. Fleet / Trucks
3. Drivers
4. Customers
5. Bookings
6. Trips
7. Shipments
8. Fuel & Expenses
9. Maintenance
10. Invoices & Payments
11. Reports & Analytics
12. Documents
13. User Management
14. Settings

Design requirements:
- Professional logistics and enterprise software appearance.
- White or light-gray content area with a dark navy sidebar.
- Clear typography, consistent spacing, and restrained accent colors.
- KPI cards, useful charts, filterable tables, status badges, and empty states.
- Loading indicators, success messages, and meaningful error messages.
- Mobile, tablet, and desktop responsiveness.
- Accessible forms, keyboard navigation, and readable contrast.
- Avoid unnecessary animations and excessive gradients.
- Do not use placeholder buttons that do nothing.

## 6. Dashboard

Build a functional dashboard showing:

- Total trucks.
- Available trucks.
- Trucks currently on trips.
- Trucks under maintenance.
- Total active drivers.
- Active trips.
- Deliveries completed.
- Pending deliveries.
- Monthly revenue.
- Monthly operating expenses.
- Estimated profit.
- Outstanding customer payments.

Add charts for:
- Monthly revenue versus expenses.
- Trips by status.
- Truck utilization.
- Fuel expenses over time.
- Deliveries completed versus delayed.
- Profitability by trip.

Include date filters and relevant summary comparisons.

Calculate statistics from database records through backend APIs. Do not hardcode dashboard numbers.

## 7. Truck Management

Create complete CRUD functionality for trucks.

Truck fields:
- Internal truck ID.
- Registration number.
- Make and model.
- Manufacturing year.
- Truck type.
- Maximum load capacity in kilograms or tonnes.
- Current odometer reading.
- Fuel type.
- Insurance expiry date.
- Permit and fitness certificate expiry dates, where applicable.
- Pollution certificate expiry date, where applicable.
- Current status.
- Notes.

Truck statuses:
- Available.
- Assigned.
- On Trip.
- Under Maintenance.
- Inactive.

Features:
- Add, edit, view, and deactivate trucks.
- Search by registration number.
- Filter by status, truck type, and capacity.
- Sort and paginate records.
- Display truck trip history.
- Display document expiry alerts.
- Prevent invalid or duplicate registration numbers.
- Prevent assigning a truck that is unavailable or under maintenance.
- Track odometer readings consistently.

## 8. Driver Management

Driver fields:
- Driver ID.
- Full name.
- Phone number.
- Email.
- Address.
- Driving licence number.
- Licence category.
- Licence expiry date.
- Joining date.
- Emergency contact.
- Employment status.
- Assigned truck, when applicable.

Features:
- CRUD operations.
- Search and filtering.
- Licence expiry alerts.
- Trip history and driver performance.
- Driver availability checks.
- Prevent conflicting assignments when a driver is already assigned to an overlapping trip.

Protect sensitive personal information and restrict access according to user roles.

## 9. Customer Management

Create a customer management module.

Fields:
- Customer ID.
- Customer or company name.
- Contact person.
- Phone number.
- Email.
- Billing address.
- GSTIN, when applicable.
- Customer type.
- Payment terms.
- Account status.

Features:
- Add, edit, view, and deactivate customers.
- View booking and shipment history.
- View invoices and outstanding balances.
- Search, filter, and paginate customer records.

## 10. Booking Management

Create a booking system for transportation requests.

Booking fields:
- Booking reference number.
- Customer.
- Pickup address.
- Delivery address.
- Pickup date.
- Expected delivery date.
- Cargo description.
- Cargo weight.
- Cargo type.
- Special handling requirements.
- Agreed freight charge.
- Booking status.
- Additional notes.

Booking statuses:
- Draft.
- Confirmed.
- Assigned.
- In Transit.
- Delivered.
- Cancelled.

Features:
- Create and manage bookings.
- Validate cargo weight against truck capacity during assignment.
- Convert a confirmed booking into a trip.
- Generate unique booking references.
- Track booking status history.
- Prevent duplicate trip creation from the same booking unless explicitly allowed.

## 11. Trip Management

This is one of the most important modules.

Trip fields:
- Trip ID and reference number.
- Booking and customer.
- Assigned truck.
- Assigned driver.
- Starting location.
- Destination.
- Intermediate stops, when required.
- Planned departure time.
- Actual departure time.
- Expected arrival time.
- Actual arrival time.
- Starting odometer.
- Ending odometer.
- Cargo weight.
- Freight revenue.
- Trip status.
- Notes.

Trip statuses:
- Planned.
- Assigned.
- Started.
- In Transit.
- Delayed.
- Completed.
- Cancelled.

Features:
- Create trips and assign available trucks and drivers.
- Display trip details and status history.
- Update trip progress.
- Record departure and arrival times.
- Calculate distance from odometer readings.
- Track trip-specific expenses.
- Prevent overlapping truck and driver assignments.
- Release resources after completion or cancellation according to business rules.
- Display trip history for each truck and driver.

Use database transactions for critical assignment and status operations.

## 12. Shipment and Delivery Management

Features:
- Link shipments to bookings and trips.
- Store cargo and package details.
- Track shipment status.
- Record dispatch and delivery timestamps.
- Capture receiver name and delivery remarks.
- Support proof-of-delivery document uploads.
- Track delayed shipments.
- Generate a delivery summary.

Allow only authorized users to mark deliveries as completed.

## 13. Fuel and Expense Management

Create a complete expense tracking module.

Expense categories:
- Diesel or other fuel.
- Tolls.
- Driver allowances.
- Loading and unloading.
- Repairs.
- Tyres.
- Parking.
- Other operating expenses.

Expense fields:
- Expense ID.
- Truck.
- Trip, if applicable.
- Expense category.
- Date.
- Quantity of fuel, if applicable.
- Price per litre, if applicable.
- Total amount.
- Odometer reading.
- Vendor or fuel station.
- Receipt attachment.
- Notes.

Features:
- Add, edit, and view expenses.
- Filter by date, truck, trip, and category.
- Calculate total expenses by truck and trip.
- Calculate fuel efficiency when valid distance and fuel-consumption data are available.
- Display monthly expense reports.
- Validate amounts and quantities.
- Prevent unauthorized changes to financial records.

Use Indian Rupees (INR) as the default currency.

## 14. Maintenance Management

Features:
- Schedule preventive maintenance.
- Record service history.
- Track repairs and replacement parts.
- Record maintenance costs.
- Store service dates and odometer readings.
- Set next service date or kilometre threshold.
- Display upcoming and overdue maintenance.
- Mark trucks unavailable while maintenance restrictions apply.
- Restore truck availability after authorized completion.

Prevent dispatching a truck that is currently unavailable for maintenance.

## 15. Invoices and Payments

Create a financial module for customer billing.

Invoice fields:
- Invoice number.
- Customer.
- Related booking or trip.
- Invoice date.
- Due date.
- Freight charge.
- Additional charges.
- Applicable taxes.
- Total invoice amount.
- Amount paid.
- Outstanding balance.
- Payment status.

Features:
- Generate invoices from completed or otherwise authorized trips.
- Support partial payments.
- Record payment date, amount, payment method, and reference.
- Display outstanding and overdue invoices.
- Calculate revenue and receivables.
- Generate printable invoices and PDF downloads.
- Use a configurable Indian GST/tax calculation system with appropriate validation.

Do not treat an unpaid invoice as received cash. Clearly distinguish invoiced revenue, payments received, outstanding receivables, and expenses.

## 16. Reports and Analytics

Create report pages with date filters.

Reports:
- Fleet utilization.
- Trips per truck.
- Driver trip history.
- Revenue by month.
- Operating expenses by month.
- Profit by trip.
- Fuel consumption.
- Maintenance costs.
- Customer booking history.
- Delivery performance.
- Outstanding invoices.
- Upcoming document expiries.

Allow CSV exports and printable reports. Add PDF exports where practical.

Financial reports must clearly define their calculations and avoid double-counting revenue or expenses.

## 17. Documents and Alerts

Store and track documents such as:
- Truck registration documents.
- Insurance policies.
- Permits and fitness certificates.
- Pollution certificates.
- Driver licences.
- Delivery receipts.
- Expense receipts.

Features:
- Upload, list, preview, and download authorized documents.
- Validate file type and file size.
- Store files securely outside public static directories.
- Use protected downloads or signed URLs.
- Display document expiry alerts.
- Provide an alert center for overdue maintenance, expiring documents, delayed trips, and unpaid invoices.

Do not store sensitive uploaded files as unrestricted public URLs.

## 18. GPS Tracking and Maps

Prepare the application for future GPS integration.

For the initial implementation:
- Display pickup and delivery locations on a map.
- Show planned routes when the map provider supports routing.
- Store optional latitude and longitude for locations.
- Support manually updated trip positions if required.

For live tracking:
- Define a GPS provider integration interface.
- Design a secure backend endpoint for location updates.
- Store location timestamps and associate positions with trucks.
- Display the most recent valid truck location.
- Include stale-location indicators.
- Protect GPS endpoints with authentication and authorization.

Do not fabricate live truck locations. Clearly distinguish simulated demonstration data from actual GPS telemetry. Never claim live tracking works without a connected location source.

## 19. Authentication and Security

Implement:
- Login and logout.
- Secure password hashing.
- Role-based authorization.
- Protected frontend routes.
- Backend permission middleware.
- Secure token or session handling.
- Input validation and sanitization.
- Rate limiting on sensitive endpoints.
- CORS configuration.
- Secure HTTP headers.
- Parameterized database access through the ORM.
- Safe file-upload validation.
- Centralized error handling.
- Audit logs for important operations.

Prefer secure, HttpOnly cookie-based authentication when appropriate, with CSRF protection and suitable cookie settings. Do not store authentication secrets in localStorage.

Never expose passwords, JWT signing secrets, database credentials, or private API keys in the frontend.

Provide an environment variable example file containing placeholders only.

## 20. Database Design

Create a normalized relational schema with suitable foreign keys, unique constraints, indexes, and timestamps.

Include tables or equivalent models for:
- Users.
- Roles and permissions, if modeled separately.
- Trucks.
- Drivers.
- Customers.
- Bookings.
- Trips.
- Shipments.
- Trip stops.
- Expenses.
- Maintenance records.
- Invoices.
- Payments.
- Documents.
- Notifications.
- Status history.
- Audit logs.
- Truck location history, when tracking is enabled.

Use proper decimal or integer representations for money and quantities; avoid floating-point arithmetic for financial calculations.

Use UTC timestamps in storage where appropriate and display dates in the configured local timezone.

Define relationship rules and prevent accidental deletion of historical financial and operational records.

Provide Prisma schema, migrations, and seed scripts.

## 21. REST API Design

Create organized API routes, for example:

Authentication:
- POST /api/auth/login
- POST /api/auth/logout
- GET /api/auth/me

Dashboard:
- GET /api/dashboard/summary
- GET /api/dashboard/analytics

Trucks:
- GET /api/trucks
- POST /api/trucks
- GET /api/trucks/:id
- PATCH /api/trucks/:id
- DELETE /api/trucks/:id

Drivers:
- GET /api/drivers
- POST /api/drivers
- GET /api/drivers/:id
- PATCH /api/drivers/:id

Customers:
- GET /api/customers
- POST /api/customers
- PATCH /api/customers/:id

Bookings:
- GET /api/bookings
- POST /api/bookings
- PATCH /api/bookings/:id

Trips:
- GET /api/trips
- POST /api/trips
- GET /api/trips/:id
- PATCH /api/trips/:id
- POST /api/trips/:id/assign
- POST /api/trips/:id/start
- POST /api/trips/:id/complete

Expenses, maintenance, invoices, payments, documents, and reports should have corresponding routes.

Use consistent response formats, appropriate HTTP status codes, pagination, filtering, sorting, and validation errors. Treat the routes above as a starting point and implement any additional endpoints required by the frontend.

## 22. Frontend Architecture

Organize the project into maintainable folders.

Example frontend structure:

src/
  app/
    App.jsx
    router.jsx
  components/
    layout/
    common/
    forms/
    tables/
    charts/
  features/
    dashboard/
    trucks/
    drivers/
    customers/
    bookings/
    trips/
    shipments/
    expenses/
    maintenance/
    invoices/
    reports/
    documents/
    users/
  hooks/
  services/
    api.js
  utils/
  constants/
  styles/
  main.jsx

Example backend structure:

server/
  src/
    config/
    middleware/
    modules/
      auth/
      dashboard/
      trucks/
      drivers/
      customers/
      bookings/
      trips/
      shipments/
      expenses/
      maintenance/
      invoices/
      payments/
      documents/
      reports/
    utils/
    app.js
    server.js
  prisma/
    schema.prisma
    migrations/
    seed.js
  tests/

You may adjust this architecture if there is a clear technical reason, but maintain separation between UI, API clients, business logic, and persistence.

## 23. UI and UX Requirements

Each module must include:
- List page.
- Search and filter controls.
- Create and edit forms.
- Details view.
- Validation messages.
- Loading, error, and empty states.
- Confirmation dialogs for destructive operations.
- Pagination for large datasets.
- Clear status indicators.
- Responsive behavior.

Use reusable components for tables, buttons, form fields, dialogs, cards, and page layouts.

Use realistic Indian truck registration examples and sample logistics data without including real people's personal information.

## 24. Testing Requirements

Write automated tests for important workflows.

Frontend:
- Component and form validation tests.
- Route protection tests.
- Main user workflow tests.

Backend:
- API tests.
- Authorization tests.
- Validation tests.
- Trip assignment conflict tests.
- Capacity validation tests.
- Invoice and payment calculation tests.
- Expense and profitability calculation tests.

End-to-end:
1. Log in as an authorized user.
2. Create a truck and driver.
3. Create a customer and booking.
4. Assign a truck and driver.
5. Start and complete a trip.
6. Add trip expenses.
7. Generate an invoice.
8. Record a payment.
9. Verify dashboard and report calculations.

## 25. Deliverables

Provide:
1. Complete source code.
2. Project directory structure.
3. package.json files and dependencies.
4. Frontend and backend implementation.
5. Prisma schema and database migrations.
6. Seed script with demo records.
7. .env.example.
8. API documentation.
9. README with installation and execution instructions.
10. Test suite.
11. Docker Compose configuration if practical.
12. A list of implemented features and known limitations.

## 26. Implementation Rules

- First present the architecture, database relationships, folder structure, and implementation plan.
- Then implement the application in logical phases.
- Generate actual source files, not only code snippets or pseudocode.
- Do not replace the requested implementation with a generic tutorial.
- Do not leave core buttons, forms, or navigation nonfunctional.
- Do not hardcode business data into the production dashboard.
- Do not claim that integrations work until they have been configured and tested.
- Use environment variables for secrets and external service configuration.
- Ensure frontend API calls match actual backend endpoints.
- Include proper error handling and loading states.
- Keep the code modular and maintainable.
- When a feature is too large for one response, divide it into phases and clearly identify completed and remaining files.
- Never silently omit required functionality.
- Run available tests and builds, fix errors, and report what has actually been verified.
- If you have filesystem and terminal access, create the project files directly in the workspace.
- If you lack file-generation or terminal access, provide complete files with exact paths and instructions.

## 27. Start Here

Begin by:
1. Presenting the proposed architecture.
2. Listing the main database entities and their relationships.
3. Showing the complete directory structure.
4. Creating a phased implementation checklist.
5. Implementing Phase 1, including the working React dashboard, application layout, routing, reusable components, and sample data.
6. Continuing through the remaining phases without losing track of previous implementation decisions.

The final result should be a coherent, runnable Truck Transportation Management System, not a collection of disconnected demo screens.