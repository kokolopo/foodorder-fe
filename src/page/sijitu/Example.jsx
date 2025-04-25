import React, { useState } from 'react';
import { Bell, Search, Menu, Users, Activity, AlertTriangle, FileText, Shield, Settings, BarChart2 } from 'lucide-react';

const Exaxmple = () => {
  const [currentMenu, setCurrentMenu] = useState('dashboard');

  const stats = [
    { title: "Total Nasabah", value: "12,345", change: "+12%", icon: Users },
    { title: "Transaksi Hari Ini", value: "1,234", change: "+5%", icon: Activity },
    { title: "Alert Aktif", value: "23", change: "+2", icon: AlertTriangle },
    { title: "Laporan PPATK", value: "45", change: "+3", icon: FileText },
  ];

  const recentAlerts = [
    { id: 1, type: "High Risk", message: "Transaksi mencurigakan terdeteksi", time: "5 menit yang lalu" },
    { id: 2, type: "Medium Risk", message: "Perubahan profil nasabah", time: "10 menit yang lalu" },
    { id: 3, type: "Low Risk", message: "Update dokumen diperlukan", time: "15 menit yang lalu" },
  ];

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
            <div className="relative">
              <input
                type="text"
                placeholder="Cari..."
                className="pl-8 pr-4 py-2 border rounded-lg text-sm focus:outline-none focus:border-blue-500"
              />
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
            </div>
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
              <li className="flex items-center space-x-3 p-2 bg-blue-50 text-blue-600 rounded">
                <BarChart2 className="h-5 w-5" />
                <span>Dashboard</span>
              </li>
              <li className="flex items-center space-x-3 p-2 text-gray-600 hover:bg-gray-50 rounded">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">{stat.title}</p>
                    <p className="text-2xl font-semibold mt-1">{stat.value}</p>
                    <p className="text-sm text-green-500 mt-1">{stat.change}</p>
                  </div>
                  <stat.icon className="h-8 w-8 text-blue-500" />
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Chart Section */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-lg font-semibold mb-4">Tren Transaksi</h2>
              <div className="h-64 bg-gray-50 rounded flex items-center justify-center">
                <p className="text-gray-400">Area Grafik</p>
              </div>
            </div>

            {/* Recent Alerts */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-lg font-semibold mb-4">Alert Terbaru</h2>
              <div className="space-y-4">
                {recentAlerts.map((alert) => (
                  <div key={alert.id} className="flex items-start space-x-4 p-4 bg-gray-50 rounded">
                    <AlertTriangle className="h-5 w-5 text-yellow-500" />
                    <div>
                      <p className="font-medium">{alert.type}</p>
                      <p className="text-sm text-gray-600">{alert.message}</p>
                      <p className="text-xs text-gray-400 mt-1">{alert.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Exaxmple;