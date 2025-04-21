import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Index from './pages/Index';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import NotFound from './pages/NotFound';
import PackageDetail from './pages/PackageDetail';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import PattomArea from './pages/PattomArea';
import HomeBloodCollection from './pages/HomeBloodCollection';
import BloodTestAtHome from './pages/BloodTestAtHome';
import DoorstepBloodCollection from './pages/DoorstepBloodCollection';
import HomeSampleCollection from './pages/HomeSampleCollection';
import BloodTestHomeService from './pages/BloodTestHomeService';
import DiagnosticTests from './pages/DiagnosticTests';
import HealthCheckup from './pages/HealthCheckup';
import BloodSampleCollection from './pages/BloodSampleCollection';
import BestHomeBloodTest from './pages/BestHomeBloodTest';
import AffordableBloodTest from './pages/AffordableBloodTest';
import ThyroidTestTrivandrum from './pages/ThyroidTestTrivandrum';
import ComprehensiveDiagnosticTests from './pages/ComprehensiveDiagnosticTests';
import Login from './pages/Login';
import './App.css';

// Thyroid test subpages
import ThyroidProfileTest from './pages/thyroid/ThyroidProfileTest';
import ThyroidFunctionTest from './pages/thyroid/ThyroidFunctionTest';
import ThyroidBloodTest from './pages/thyroid/ThyroidBloodTest';
import ThyroidTestNearMe from './pages/thyroid/ThyroidTestNearMe';
import ThyroidTestHomeCollection from './pages/thyroid/ThyroidTestHomeCollection';
import ThyroidTestHomeService from './pages/thyroid/ThyroidTestHomeService';
import BestThyroidTestCenter from './pages/thyroid/BestThyroidTestCenter';

// New user dashboard pages
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import MyBookings from './pages/MyBookings';

// Admin pages
import AdminUsers from './pages/admin/AdminUsers';
import AdminBookings from './pages/admin/AdminBookings';
import AdminBlog from './pages/admin/AdminBlog';
import AdminPages from './pages/admin/AdminPages';
import AdminThyroidTests from './pages/admin/AdminThyroidTests';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/package/:packageId" element={<PackageDetail />} />
          <Route path="/dashboard" element={<Dashboard />} />

          {/* Admin routes */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/users" element={<AdminUsers />} />
          <Route path="/admin/bookings" element={<AdminBookings />} />
          <Route path="/admin/blog" element={<AdminBlog />} />
          <Route path="/admin/pages" element={<AdminPages />} />
          <Route path="/admin/thyroid-tests" element={<AdminThyroidTests />} />

          {/* User dashboard routes */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/my-bookings" element={<MyBookings />} />

          {/* Service pages */}
          <Route path="/pattom-area" element={<PattomArea />} />
          <Route path="/home-blood-collection-trivandrum" element={<HomeBloodCollection />} />
          <Route path="/blood-test-at-home-trivandrum" element={<BloodTestAtHome />} />
          <Route path="/doorstep-blood-collection-kerala" element={<DoorstepBloodCollection />} />
          <Route path="/home-sample-collection-trivandrum" element={<HomeSampleCollection />} />
          <Route path="/blood-test-home-service-kerala" element={<BloodTestHomeService />} />
          <Route path="/diagnostic-tests-at-home-trivandrum" element={<DiagnosticTests />} />
          <Route path="/health-checkup-at-home-kerala" element={<HealthCheckup />} />
          <Route path="/blood-sample-collection-near-me" element={<BloodSampleCollection />} />
          <Route path="/best-home-blood-test-trivandrum" element={<BestHomeBloodTest />} />
          <Route path="/affordable-blood-test-home-service" element={<AffordableBloodTest />} />
          <Route path="/thyroid-test-trivandrum" element={<ThyroidTestTrivandrum />} />
          <Route path="/comprehensive-diagnostic-tests-at-home-in-trivandrum" element={<ComprehensiveDiagnosticTests />} />

          {/* Thyroid test subpages */}
          <Route path="/thyroid/thyroid-profile-test" element={<ThyroidProfileTest />} />
          <Route path="/thyroid/thyroid-function-test" element={<ThyroidFunctionTest />} />
          <Route path="/thyroid/thyroid-blood-test" element={<ThyroidBloodTest />} />
          <Route path="/thyroid/thyroid-test-near-me-trivandrum" element={<ThyroidTestNearMe />} />
          <Route path="/thyroid/thyroid-test-home-collection-trivandrum" element={<ThyroidTestHomeCollection />} />
          <Route path="/thyroid/thyroid-test-home-service-kerala" element={<ThyroidTestHomeService />} />
          <Route path="/thyroid/best-thyroid-test-center-trivandrum" element={<BestThyroidTestCenter />} />

          {/* Fallback for undefined routes */}
          <Route path="/thyroid/*" element={<ThyroidTestTrivandrum />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
          
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;