import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Eye, Pencil, Search, Trash, User, UserPlus } from 'lucide-react';
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

const usersData = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    phone: '+91 98765 43210',
    registeredDate: '2023-07-15',
    status: 'active',
    bookingsCount: 5,
  },
  {
    id: '2',
    name: 'Priya Singh',
    email: 'priya@example.com',
    phone: '+91 87654 32109',
    registeredDate: '2023-08-02',
    status: 'active',
    bookingsCount: 3,
  },
  {
    id: '3',
    name: 'Rahul Kumar',
    email: 'rahul@example.com',
    phone: '+91 76543 21098',
    registeredDate: '2023-08-10',
    status: 'active',
    bookingsCount: 2,
  },
  {
    id: '4',
    name: 'Anjali Sharma',
    email: 'anjali@example.com',
    phone: '+91 65432 10987',
    registeredDate: '2023-06-20',
    status: 'inactive',
    bookingsCount: 1,
  },
  {
    id: '5',
    name: 'Arun Menon',
    email: 'arun@example.com',
    phone: '+91 54321 09876',
    registeredDate: '2023-07-25',
    status: 'active',
    bookingsCount: 4,
  },
  {
    id: '6',
    name: 'Lakshmi Nair',
    email: 'lakshmi@example.com',
    phone: '+91 43210 98765',
    registeredDate: '2023-08-12',
    status: 'active',
    bookingsCount: 1,
  },
  {
    id: '7',
    name: 'Mohammed Khan',
    email: 'mohammed@example.com',
    phone: '+91 32109 87654',
    registeredDate: '2023-06-10',
    status: 'inactive',
    bookingsCount: 2,
  },
  {
    id: '8',
    name: 'Sanjay Patel',
    email: 'sanjay@example.com',
    phone: '+91 21098 76543',
    registeredDate: '2023-07-18',
    status: 'active',
    bookingsCount: 3,
  },
];

const AdminUsers = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [users, setUsers] = useState(usersData);
  const [userDetails, setUserDetails] = useState(null);
  const [showUserDetails, setShowUserDetails] = useState(false);
  
  useEffect(() => {
    if (searchQuery.trim() === '') {
      setUsers(usersData);
    } else {
      const filtered = usersData.filter(user => 
        user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.phone.includes(searchQuery)
      );
      setUsers(filtered);
    }
  }, [searchQuery]);
  
  const handleViewUser = (user) => {
    setUserDetails(user);
    setShowUserDetails(true);
  };
  
  const formatDate = (dateString) => {
    const options = { year: "numeric" as const, month: "long" as const, day: "numeric" as const };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };
  
  return (
    <>
      <Helmet>
        <title>Users Management | BloodLyf Admin</title>
        <meta name="description" content="Manage users in the BloodLyf Admin Dashboard" />
      </Helmet>
      
      <AdminLayout>
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-2xl font-semibold text-gray-800">Users Management</h1>
              <p className="text-gray-600">Manage registered users and their details</p>
            </div>
            
            <Button className="bg-[#321fdb] hover:bg-[#2a17bd]">
              <UserPlus className="h-4 w-4 mr-2" />
              Add New User
            </Button>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                <Input
                  type="search"
                  placeholder="Search users by name, email or phone..."
                  className="pl-9"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              <div className="flex gap-2">
                <select className="rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background">
                  <option value="all">All Status</option>
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
                
                <Button variant="outline">
                  Filter
                </Button>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead className="hidden md:table-cell">Phone</TableHead>
                  <TableHead className="hidden md:table-cell">Registered Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="hidden md:table-cell">Bookings</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {users.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell className="font-medium">{user.name}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell className="hidden md:table-cell">{user.phone}</TableCell>
                    <TableCell className="hidden md:table-cell">{formatDate(user.registeredDate)}</TableCell>
                    <TableCell>
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        user.status === 'active' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-gray-100 text-gray-800'
                      }`}>
                        {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
                      </span>
                    </TableCell>
                    <TableCell className="hidden md:table-cell">{user.bookingsCount}</TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          onClick={() => handleViewUser(user)}
                        >
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Pencil className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="text-red-500 hover:text-red-700 hover:bg-red-50">
                          <Trash className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            
            {users.length === 0 && (
              <div className="text-center py-8">
                <User className="h-12 w-12 mx-auto text-gray-400 mb-3" />
                <h3 className="text-lg font-medium text-gray-900">No users found</h3>
                <p className="text-gray-500 mt-1">Try adjusting your search or filter to find what you're looking for.</p>
              </div>
            )}
          </div>
          
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-500">
              Showing <span className="font-medium">1</span> to <span className="font-medium">{users.length}</span> of{" "}
              <span className="font-medium">{usersData.length}</span> users
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
      
      <Dialog open={showUserDetails} onOpenChange={setShowUserDetails}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>User Details</DialogTitle>
            <DialogDescription>
              View detailed information about this user.
            </DialogDescription>
          </DialogHeader>
          
          {userDetails && (
            <div className="space-y-4 py-2">
              <div className="flex justify-center mb-4">
                <div className="h-20 w-20 rounded-full bg-[#321fdb] flex items-center justify-center text-white text-2xl font-medium">
                  {userDetails.name.charAt(0)}
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium text-gray-500">Name</p>
                  <p>{userDetails.name}</p>
                </div>
                
                <div>
                  <p className="text-sm font-medium text-gray-500">Email</p>
                  <p>{userDetails.email}</p>
                </div>
                
                <div>
                  <p className="text-sm font-medium text-gray-500">Phone</p>
                  <p>{userDetails.phone}</p>
                </div>
                
                <div>
                  <p className="text-sm font-medium text-gray-500">Registered Date</p>
                  <p>{formatDate(userDetails.registeredDate)}</p>
                </div>
                
                <div>
                  <p className="text-sm font-medium text-gray-500">Status</p>
                  <p className={userDetails.status === 'active' ? 'text-green-600' : 'text-gray-600'}>
                    {userDetails.status.charAt(0).toUpperCase() + userDetails.status.slice(1)}
                  </p>
                </div>
                
                <div>
                  <p className="text-sm font-medium text-gray-500">Total Bookings</p>
                  <p>{userDetails.bookingsCount}</p>
                </div>
              </div>
              
              <div className="mt-6 pt-4 border-t border-gray-200 flex justify-end gap-2">
                <Button variant="outline" onClick={() => setShowUserDetails(false)}>
                  Close
                </Button>
                <Button variant="default" className="bg-[#321fdb] hover:bg-[#2a17bd]">
                  <Pencil className="h-4 w-4 mr-2" />
                  Edit User
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AdminUsers;
