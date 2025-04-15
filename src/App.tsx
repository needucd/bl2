
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
import './App.css';

// Thyroid test subpages
import ThyroidProfileTest from './pages/thyroid/ThyroidProfileTest';
import ThyroidFunctionTest from './pages/thyroid/ThyroidFunctionTest';
import ThyroidBloodTest from './pages/thyroid/ThyroidBloodTest';
import ThyroidTestNearMe from './pages/thyroid/ThyroidTestNearMe';
import ThyroidTestHomeCollection from './pages/thyroid/ThyroidTestHomeCollection';
import ThyroidTestHomeService from './pages/thyroid/ThyroidTestHomeService';
import BestThyroidTestCenter from './pages/thyroid/BestThyroidTestCenter';

// Package pages
import DiabetesScreening from './pages/packages/DiabetesScreening';
import HeartHealthPackage from './pages/packages/HeartHealthPackage';
import KidneyFunctionTest from './pages/packages/KidneyFunctionTest';
import LiverFunctionTest from './pages/packages/LiverFunctionTest';
import CancerScreening from './pages/packages/CancerScreening';
import ArthritisBoneHealth from './pages/packages/ArthritisBoneHealth';
import VitaminDeficiencyPanel from './pages/packages/VitaminDeficiencyPanel';
import ObesityMetabolismTest from './pages/packages/ObesityMetabolismTest';
import AllergyTestPanel from './pages/packages/AllergyTestPanel';
import StressHormonePanel from './pages/packages/StressHormonePanel';
import SportsFitnessHealthCheck from './pages/packages/SportsFitnessHealthCheck';
import PostCovidHealthCheck from './pages/packages/PostCovidHealthCheck';
import GutHealthDigestivePanel from './pages/packages/GutHealthDigestivePanel';

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
          
          {/* Package pages */}
          <Route path="/package/diabetes-screening" element={<DiabetesScreening />} />
          <Route path="/package/heart-health-package" element={<HeartHealthPackage />} />
          <Route path="/package/kidney-function-test" element={<KidneyFunctionTest />} />
          <Route path="/package/liver-function-test" element={<LiverFunctionTest />} />
          <Route path="/package/cancer-screening" element={<CancerScreening />} />
          <Route path="/package/arthritis-bone-health" element={<ArthritisBoneHealth />} />
          <Route path="/package/vitamin-deficiency-panel" element={<VitaminDeficiencyPanel />} />
          <Route path="/package/obesity-metabolism-test" element={<ObesityMetabolismTest />} />
          <Route path="/package/allergy-test-panel" element={<AllergyTestPanel />} />
          <Route path="/package/stress-hormone-panel" element={<StressHormonePanel />} />
          <Route path="/package/sports-fitness-health-check" element={<SportsFitnessHealthCheck />} />
          <Route path="/package/post-covid-health-check" element={<PostCovidHealthCheck />} />
          <Route path="/package/gut-health-digestive-panel" element={<GutHealthDigestivePanel />} />
          
          {/* Using ThyroidTestTrivandrum as a fallback for other thyroid routes until they are created */}
          <Route path="/thyroid/*" element={<ThyroidTestTrivandrum />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;
