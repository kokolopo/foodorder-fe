import React, { useState } from 'react';
import { 
  Search, Menu, Bell, Filter, Users, Activity, 
  AlertTriangle, FileText, Shield, Settings, 
  BarChart2, ChevronDown, UserPlus, Download,
  Eye, Edit, Trash, AlertCircle, Upload
} from 'lucide-react';

const Nasabah = () => {
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  
  const customers = [
    {
      id: 1,
      name: "John Doe",
      nik: "3174071234567890",
      riskLevel: "High",
      status: "Active",
      lastTransaction: "2024-01-25",
      address: "Jl. Sudirman No. 123, Jakarta",
      phoneNumber: "081234567890",
      email: "john.doe@email.com",
      occupation: "Pengusaha",
      documents: ["KTP", "NPWP", "SIM"],
      lastUpdated: "2024-01-20"
    },
    {
      id: 2,
      name: "Jane Smith",
      nik: "3174071234567891",
      riskLevel: "Low",
      status: "Active",
      lastTransaction: "2024-01-26",
      address: "Jl. Thamrin No. 45, Jakarta",
      phoneNumber: "081234567891",
      email: "jane.smith@email.com",
      occupation: "Karyawan Swasta",
      documents: ["KTP", "NPWP"],
      lastUpdated: "2024-01-22"
    },
    {
      id: 3,
      name: "Ahmad Rahman",
      nik: "3174071234567892",
      riskLevel: "Medium",
      status: "Inactive",
      lastTransaction: "2024-01-24",
      address: "Jl. Gatot Subroto No. 67, Jakarta",
      phoneNumber: "081234567892",
      email: "ahmad.rahman@email.com",
      occupation: "Wiraswasta",
      documents: ["KTP", "NPWP", "Passport"],
      lastUpdated: "2024-01-23"
    }
  ];

  const getRiskBadgeColor = (risk) => {
    switch (risk.toLowerCase()) {
      case 'high':
        return 'bg-red-100 text-red-800';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'low':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusBadgeColor = (status) => {
    return status.toLowerCase() === 'active' 
      ? 'bg-green-100 text-green-800' 
      : 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center space-x-4">
            <Menu className="h-6 w-6 text-gray-500" />
            <h1 className="text-xl font-bold text-blue-600">SIJITU</h1>
          </div>
          <div className="flex items-center space-x-4">
            <Bell className="h-6 w-6 text-gray-500" />
            <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white h-screen shadow-sm">
          <nav className="p-4">
            <ul className="space-y-2">
              <li className="flex items-center space-x-3 p-2 text-gray-600 hover:bg-gray-50 rounded">
                <BarChart2 className="h-5 w-5" />
                <span>Dashboard</span>
              </li>
              <li className="flex items-center space-x-3 p-2 bg-blue-50 text-blue-600 rounded">
                <Users className="h-5 w-5" />
                <span>Nasabah</span>
              </li>
              <li className="flex items-center space-x-3 p-2 text-gray-600 hover:bg-gray-50 rounded">
                <Activity className="h-5 w-5" />
                <span>Transaksi</span>
              </li>
              <li className="flex items-center space-x-3 p-2 text-gray-600 hover:bg-gray-50 rounded">
                <AlertTriangle className="h-5 w-5" />
                <span>Alert</span>
              </li>
              <li className="flex items-center space-x-3 p-2 text-gray-600 hover:bg-gray-50 rounded">
                <FileText className="h-5 w-5" />
                <span>Laporan</span>
              </li>
              <li className="flex items-center space-x-3 p-2 text-gray-600 hover:bg-gray-50 rounded">
                <Shield className="h-5 w-5" />
                <span>Kepatuhan</span>
              </li>
              <li className="flex items-center space-x-3 p-2 text-gray-600 hover:bg-gray-50 rounded">
                <Settings className="h-5 w-5" />
                <span>Pengaturan</span>
              </li>
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          {/* Page Header */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold">Daftar Nasabah</h1>
              <div className="flex space-x-3">
                <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                  <UserPlus className="h-5 w-5" />
                  <span>Tambah Nasabah</span>
                </button>
                <button className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
                  <Upload className="h-5 w-5" />
                  <span>Import Data Nasabah</span>
                </button>
              </div>
            </div>

            {/* Search and Filters */}
            <div className="flex space-x-4 mb-6">
              <div className="flex-1 relative">
                <input
                  type="text"
                  placeholder="Cari nasabah..."
                  className="w-full pl-10 pr-4 py-2 border rounded-lg"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
              <button className="flex items-center space-x-2 px-4 py-2 border rounded-lg hover:bg-gray-50">
                <Filter className="h-5 w-5 text-gray-500" />
                <span>Filter</span>
                <ChevronDown className="h-4 w-4 text-gray-500" />
              </button>
              <button className="flex items-center space-x-2 px-4 py-2 border rounded-lg hover:bg-gray-50">
                <Download className="h-5 w-5 text-gray-500" />
                <span>Export</span>
              </button>
            </div>

            {/* Customer Table */}
            <div className="bg-white rounded-lg shadow">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Nama Nasabah
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      NIK
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Risk Level
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Last Transaction
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Aksi
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {customers.map((customer) => (
                    <tr key={customer.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10 bg-gray-200 rounded-full"></div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">{customer.name}</div>
                            <div className="text-sm text-gray-500">{customer.email}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{customer.nik}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getRiskBadgeColor(customer.riskLevel)}`}>
                          {customer.riskLevel}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusBadgeColor(customer.status)}`}>
                          {customer.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {customer.lastTransaction}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex space-x-2">
                          <button className="text-blue-600 hover:text-blue-900">
                            <Eye className="h-5 w-5" />
                          </button>
                          <button className="text-green-600 hover:text-green-900">
                            <Edit className="h-5 w-5" />
                          </button>
                          <button className="text-red-600 hover:text-red-900">
                            <AlertCircle className="h-5 w-5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              
              {/* Pagination */}
              <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
                <div className="flex-1 flex justify-between sm:hidden">
                  <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                    Previous
                  </button>
                  <button className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                    Next
                  </button>
                </div>
                <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sm text-gray-700">
                      Showing <span className="font-medium">1</span> to <span className="font-medium">10</span> of{' '}
                      <span className="font-medium">97</span> results
                    </p>
                  </div>
                  <div>
                    <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                      <button className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                        Previous
                      </button>
                      <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                        1
                      </button>
                      <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                        2
                      </button>
                      <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                        3
                      </button>
                      <button className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                        Next
                      </button>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Nasabah;