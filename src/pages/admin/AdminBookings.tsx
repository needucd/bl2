import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Calendar, Check, Eye, FileText, Package, Search, XCircle } from 'lucide-react';
import AdminLayout from '@/components/admin/AdminLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const bookingsData = [
  {
    id: 'BK001',
    testName: 'Thyroid Profile Test',
    userName: 'Rahul Kumar',
    userEmail: 'rahul@example.com',
    userPhone: '+91 76543 21098',
    bookingDate: '2023-08-25',
    bookingTime: '09:00 AM',
    status: 'confirmed',
    price: 1299,
    paymentStatus: 'paid',
  },
  {
    id: 'BK002',
    testName: 'Heart Health Package',
    userName: 'Priya Singh',
    userEmail: 'priya@example.com',
    userPhone: '+91 87654 32109',
    bookingDate: '2023-08-26',
    bookingTime: '10:30 AM',
    status: 'confirmed',
    price: 2499,
    paymentStatus: 'paid',
  },
  {
    id: 'BK003',
    testName: 'Diabetes Screening',
    userName: 'John Doe',
    userEmail: 'john@example.com',
    userPhone: '+91 98765 43210',
    bookingDate: '2023-08-28',
    bookingTime: '08:00 AM',
    status: 'pending',
    price: 1899,
    paymentStatus: 'pending',
  },
  {
    id: 'BK004',
    testName: 'Liver Function Test',
    userName: 'Arun Menon',
    userEmail: 'arun@example.com',
    userPhone: '+91 54321 09876',
    bookingDate: '2023-08-30',
    bookingTime: '11:00 AM',
    status: 'pending',
    price: 1599,
    paymentStatus: 'pending',
  },
  {
    id: 'BK005',
    testName: 'Complete Blood Count',
    userName: 'Lakshmi Nair',
    userEmail: 'lakshmi@example.com',
    userPhone: '+91 43210 98765',
    bookingDate: '2023-08-22',
    bookingTime: '09:30 AM',
    status: 'completed',
    price: 899,
    paymentStatus: 'paid',
  },
  {
    id: 'BK006',
    testName: 'Vitamin D Test',
    userName: 'Sanjay Patel',
    userEmail: 'sanjay@example.com',
    userPhone: '+91 21098 76543',
    bookingDate: '2023-08-20',
    bookingTime: '08:30 AM',
    status: 'completed',
    price: 1199,
    paymentStatus: 'paid',
  },
  {
    id: 'BK007',
    testName: 'Kidney Function Test',
    userName: 'Anjali Sharma',
    userEmail: 'anjali@example.com',
    userPhone: '+91 65432 10987',
    bookingDate: '2023-08-18',
    bookingTime: '10:00 AM',
    status: 'cancelled',
    price: 1499,
    paymentStatus: 'refunded',
  },
];

const AdminBookings = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('all');
  const [bookings, setBookings] = useState(bookingsData);
  const [bookingDetails, setBookingDetails] = useState(null);
  const [showBookingDetails, setShowBookingDetails] = useState(false);
  
  const formatDate = (dateString) => {
    const options = { year: "numeric" as const, month: "long" as const, day: "numeric" as const };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };
  
  const getStatusBadgeClass = (status) => {
    switch (status) {
      case 'confirmed':
        return 'bg-blue-100 text-blue-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };
  
  const getPaymentStatusBadgeClass = (status) => {
    switch (status) {
      case 'paid':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'refunded':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };
  
  useEffect(() => {
    let filtered = [...bookingsData];
    
    if (activeTab !== 'all') {
      filtered = filtered.filter(booking => booking.status === activeTab);
    }
    
    if (searchQuery.trim() !== '') {
      filtered = filtered.filter(booking => 
        booking.testName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        booking.userName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        booking.id.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    setBookings(filtered);
  }, [searchQuery, activeTab]);
  
  const handleViewBooking = (booking) => {
    setBookingDetails(booking);
    setShowBookingDetails(true);
  };
  
  return (
    <>
      <Helmet>
        <title>Bookings Management | BloodLyf Admin</title>
        <meta name="description" content="Manage bookings in the BloodLyf Admin Dashboard" />
      </Helmet>
      
      <AdminLayout>
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-2xl font-semibold text-gray-800">Bookings Management</h1>
              <p className="text-gray-600">Manage test bookings and their status</p>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                <Input
                  type="search"
                  placeholder="Search bookings by ID, test name, or patient name..."
                  className="pl-9"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              <div className="flex gap-2">
                <select className="rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background">
                  <option value="all">All Time</option>
                  <option value="today">Today</option>
                  <option value="thisWeek">This Week</option>
                  <option value="thisMonth">This Month</option>
                </select>
                
                <Button variant="outline">
                  Filter
                </Button>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <Tabs defaultValue="all" onValueChange={setActiveTab} className="w-full">
              <div className="px-4 pt-4">
                <TabsList className="grid w-full md:w-auto md:inline-grid grid-cols-4 md:grid-cols-5">
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="pending">Pending</TabsTrigger>
                  <TabsTrigger value="confirmed">Confirmed</TabsTrigger>
                  <TabsTrigger value="completed">Completed</TabsTrigger>
                  <TabsTrigger value="cancelled" className="hidden md:block">Cancelled</TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="all" className="m-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Booking ID</TableHead>
                      <TableHead>Test</TableHead>
                      <TableHead className="hidden md:table-cell">Patient</TableHead>
                      <TableHead className="hidden md:table-cell">Date & Time</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="hidden md:table-cell">Payment</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {bookings.map((booking) => (
                      <TableRow key={booking.id}>
                        <TableCell className="font-medium">{booking.id}</TableCell>
                        <TableCell>{booking.testName}</TableCell>
                        <TableCell className="hidden md:table-cell">{booking.userName}</TableCell>
                        <TableCell className="hidden md:table-cell">
                          {formatDate(booking.bookingDate)}, {booking.bookingTime}
                        </TableCell>
                        <TableCell>
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            getStatusBadgeClass(booking.status)
                          }`}>
                            {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                          </span>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            getPaymentStatusBadgeClass(booking.paymentStatus)
                          }`}>
                            {booking.paymentStatus.charAt(0).toUpperCase() + booking.paymentStatus.slice(1)}
                          </span>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            onClick={() => handleViewBooking(booking)}
                          >
                            <Eye className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
                
                {bookings.length === 0 && (
                  <div className="text-center py-8">
                    <Calendar className="h-12 w-12 mx-auto text-gray-400 mb-3" />
                    <h3 className="text-lg font-medium text-gray-900">No bookings found</h3>
                    <p className="text-gray-500 mt-1">Try adjusting your search or filter to find what you're looking for.</p>
                  </div>
                )}
              </TabsContent>
              
              <TabsContent value="pending" className="m-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Booking ID</TableHead>
                      <TableHead>Test</TableHead>
                      <TableHead className="hidden md:table-cell">Patient</TableHead>
                      <TableHead className="hidden md:table-cell">Date & Time</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="hidden md:table-cell">Payment</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {bookings.map((booking) => (
                      <TableRow key={booking.id}>
                        <TableCell className="font-medium">{booking.id}</TableCell>
                        <TableCell>{booking.testName}</TableCell>
                        <TableCell className="hidden md:table-cell">{booking.userName}</TableCell>
                        <TableCell className="hidden md:table-cell">
                          {formatDate(booking.bookingDate)}, {booking.bookingTime}
                        </TableCell>
                        <TableCell>
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            getStatusBadgeClass(booking.status)
                          }`}>
                            {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                          </span>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            getPaymentStatusBadgeClass(booking.paymentStatus)
                          }`}>
                            {booking.paymentStatus.charAt(0).toUpperCase() + booking.paymentStatus.slice(1)}
                          </span>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            onClick={() => handleViewBooking(booking)}
                          >
                            <Eye className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TabsContent>
              
              <TabsContent value="confirmed" className="m-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Booking ID</TableHead>
                      <TableHead>Test</TableHead>
                      <TableHead className="hidden md:table-cell">Patient</TableHead>
                      <TableHead className="hidden md:table-cell">Date & Time</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="hidden md:table-cell">Payment</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {bookings.map((booking) => (
                      <TableRow key={booking.id}>
                        <TableCell className="font-medium">{booking.id}</TableCell>
                        <TableCell>{booking.testName}</TableCell>
                        <TableCell className="hidden md:table-cell">{booking.userName}</TableCell>
                        <TableCell className="hidden md:table-cell">
                          {formatDate(booking.bookingDate)}, {booking.bookingTime}
                        </TableCell>
                        <TableCell>
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            getStatusBadgeClass(booking.status)
                          }`}>
                            {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                          </span>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            getPaymentStatusBadgeClass(booking.paymentStatus)
                          }`}>
                            {booking.paymentStatus.charAt(0).toUpperCase() + booking.paymentStatus.slice(1)}
                          </span>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            onClick={() => handleViewBooking(booking)}
                          >
                            <Eye className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TabsContent>
              
              <TabsContent value="completed" className="m-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Booking ID</TableHead>
                      <TableHead>Test</TableHead>
                      <TableHead className="hidden md:table-cell">Patient</TableHead>
                      <TableHead className="hidden md:table-cell">Date & Time</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="hidden md:table-cell">Payment</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {bookings.map((booking) => (
                      <TableRow key={booking.id}>
                        <TableCell className="font-medium">{booking.id}</TableCell>
                        <TableCell>{booking.testName}</TableCell>
                        <TableCell className="hidden md:table-cell">{booking.userName}</TableCell>
                        <TableCell className="hidden md:table-cell">
                          {formatDate(booking.bookingDate)}, {booking.bookingTime}
                        </TableCell>
                        <TableCell>
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            getStatusBadgeClass(booking.status)
                          }`}>
                            {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                          </span>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            getPaymentStatusBadgeClass(booking.paymentStatus)
                          }`}>
                            {booking.paymentStatus.charAt(0).toUpperCase() + booking.paymentStatus.slice(1)}
                          </span>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            onClick={() => handleViewBooking(booking)}
                          >
                            <Eye className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TabsContent>
              
              <TabsContent value="cancelled" className="m-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Booking ID</TableHead>
                      <TableHead>Test</TableHead>
                      <TableHead className="hidden md:table-cell">Patient</TableHead>
                      <TableHead className="hidden md:table-cell">Date & Time</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="hidden md:table-cell">Payment</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {bookings.map((booking) => (
                      <TableRow key={booking.id}>
                        <TableCell className="font-medium">{booking.id}</TableCell>
                        <TableCell>{booking.testName}</TableCell>
                        <TableCell className="hidden md:table-cell">{booking.userName}</TableCell>
                        <TableCell className="hidden md:table-cell">
                          {formatDate(booking.bookingDate)}, {booking.bookingTime}
                        </TableCell>
                        <TableCell>
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            getStatusBadgeClass(booking.status)
                          }`}>
                            {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                          </span>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            getPaymentStatusBadgeClass(booking.paymentStatus)
                          }`}>
                            {booking.paymentStatus.charAt(0).toUpperCase() + booking.paymentStatus.slice(1)}
                          </span>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            onClick={() => handleViewBooking(booking)}
                          >
                            <Eye className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TabsContent>
            </Tabs>
          </div>
          
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-500">
              Showing <span className="font-medium">1</span> to <span className="font-medium">{bookings.length}</span> of{" "}
              <span className="font-medium">{bookingsData.filter(b => activeTab === 'all' || b.status === activeTab).length}</span> bookings
            </p>
            
            <div className="flex gap-1">
              <Button variant="outline" size="sm" disabled>
                Previous
              </Button>
              <Button variant="outline" size="sm">
                Next
              </Button>
            </div>
          </div>
        </div>
      </AdminLayout>
      
      <Dialog open={showBookingDetails} onOpenChange={setShowBookingDetails}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>Booking Details</DialogTitle>
            <DialogDescription>
              View detailed information about this booking.
            </DialogDescription>
          </DialogHeader>
          
          {bookingDetails && (
            <div className="space-y-6 py-2">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">Booking ID</p>
                  <p className="font-medium">{bookingDetails.id}</p>
                </div>
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                  getStatusBadgeClass(bookingDetails.status)
                }`}>
                  {bookingDetails.status.charAt(0).toUpperCase() + bookingDetails.status.slice(1)}
                </span>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                  <Package className="h-5 w-5 text-[#321fdb]" />
                </div>
                <div>
                  <h3 className="font-medium text-lg">{bookingDetails.testName}</h3>
                  <p className="text-gray-500 text-sm">₹{bookingDetails.price}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100">
                <div>
                  <p className="text-sm font-medium text-gray-500">Patient Name</p>
                  <p>{bookingDetails.userName}</p>
                </div>
                
                <div>
                  <p className="text-sm font-medium text-gray-500">Contact</p>
                  <p>{bookingDetails.userPhone}</p>
                </div>
                
                <div>
                  <p className="text-sm font-medium text-gray-500">Email</p>
                  <p>{bookingDetails.userEmail}</p>
                </div>
                
                <div>
                  <p className="text-sm font-medium text-gray-500">Payment Status</p>
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    getPaymentStatusBadgeClass(bookingDetails.paymentStatus)
                  }`}>
                    {bookingDetails.paymentStatus.charAt(0).toUpperCase() + bookingDetails.paymentStatus.slice(1)}
                  </span>
                </div>
                
                <div className="col-span-2">
                  <p className="text-sm font-medium text-gray-500">Appointment</p>
                  <p className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2 text-gray-500" />
                    {formatDate(bookingDetails.bookingDate)} at {bookingDetails.bookingTime}
                  </p>
                </div>
              </div>
              
              <div className="pt-4 border-t border-gray-100">
                <p className="text-sm font-medium text-gray-500 mb-2">Actions</p>
                <div className="flex flex-wrap gap-2">
                  {bookingDetails.status === 'pending' && (
                    <>
                      <Button className="bg-[#321fdb] hover:bg-[#2a17bd]">
                        <Check className="h-4 w-4 mr-2" />
                        Confirm Booking
                      </Button>
                      <Button variant="destructive">
                        <XCircle className="h-4 w-4 mr-2" />
                        Cancel Booking
                      </Button>
                    </>
                  )}
                  
                  {bookingDetails.status === 'confirmed' && (
                    <Button className="bg-green-600 hover:bg-green-700">
                      <Check className="h-4 w-4 mr-2" />
                      Mark as Completed
                    </Button>
                  )}
                  
                  {bookingDetails.status === 'completed' && (
                    <Button variant="outline">
                      <FileText className="h-4 w-4 mr-2" />
                      View Report
                    </Button>
                  )}
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AdminBookings;
