import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import { FiChevronLeft } from 'react-icons/fi';
import {
  ChevronDownIcon,
  FunnelIcon,
  RotateCcw,
  ArrowDownIcon,
  ArrowUpIcon,
  UserIcon,
  CreditCardIcon,
  TrophyIcon,
  GiftIcon,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import axios from 'axios';

const DynamicHistory = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { reason } = useParams(); // Get reason from URL params
  const BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const state = location.state;

  const encryptedWalletAddress = localStorage.getItem('encryptedWalletAddress');
  const jwt_token = localStorage.getItem('jwt_token');

  const [data, setData] = useState([]);
  const [allData, setAllData] = useState([]); // Store all transactions
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [paginationData, setPaginationData] = useState({
    current_page: 1,
    last_page: 1,
    total: 0,
    per_page: 10,
    from: 0,
    to: 0
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [availableDates, setAvailableDates] = useState([]);
  const [selectedDate, setSelectedDate] = useState('all');
  const [showDateDropdown, setShowDateDropdown] = useState(false);

  // Get current date in DD/MM/YYYY format
  const getCurrentDate = () => {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const year = today.getFullYear();
    return `${day}/${month}/${year}`;
  };

  // Normalize date string to DD/MM/YYYY format
  const normalizeDateString = (dateString) => {
    if (!dateString || typeof dateString !== 'string') {
      return null;
    }

    // Remove any time part if present
    let cleanDate = dateString;
    
    // Handle datetime strings (with T or space separator)
    if (cleanDate.includes('T')) {
      cleanDate = cleanDate.split('T')[0];
    } else if (cleanDate.includes(' ')) {
      cleanDate = cleanDate.split(' ')[0];
    }

    // Handle different date formats
    if (cleanDate.includes('-')) {
      // YYYY-MM-DD format
      if (cleanDate.match(/^\d{4}-\d{1,2}-\d{1,2}$/)) {
        const [year, month, day] = cleanDate.split('-');
        return `${day.padStart(2, '0')}/${month.padStart(2, '0')}/${year}`;
      }
      // DD-MM-YYYY format
      if (cleanDate.match(/^\d{1,2}-\d{1,2}-\d{4}$/)) {
        const [day, month, year] = cleanDate.split('-');
        return `${day.padStart(2, '0')}/${month.padStart(2, '0')}/${year}`;
      }
    } else if (cleanDate.includes('/')) {
      // Handle slash formats
      const parts = cleanDate.split('/');
      if (parts.length === 3) {
        // Check if it's already DD/MM/YYYY
        if (cleanDate.match(/^\d{1,2}\/\d{1,2}\/\d{4}$/)) {
          const [day, month, year] = parts;
          return `${day.padStart(2, '0')}/${month.padStart(2, '0')}/${year}`;
        }
        // Check if it's MM/DD/YYYY
        if (parts[2].length === 4) {
          const [month, day, year] = parts;
          return `${day.padStart(2, '0')}/${month.padStart(2, '0')}/${year}`;
        }
      }
    }

    // If already in correct format, ensure padding
    if (cleanDate.match(/^\d{1,2}\/\d{1,2}\/\d{4}$/)) {
      const [day, month, year] = cleanDate.split('/');
      return `${day.padStart(2, '0')}/${month.padStart(2, '0')}/${year}`;
    }

    return cleanDate; // Return as is if no format matches
  };

  // Extract unique dates from transactions - ensures only date part is shown
  const extractUniqueDates = (transactions) => {
    const dates = transactions
      .map(transaction => normalizeDateString(transaction.date))
      .filter(Boolean); // Remove null/undefined dates
    
    const uniqueDates = [...new Set(dates)];
    
    return uniqueDates.sort((a, b) => {
      try {
        // Sort dates in descending order (newest first)
        const dateA = new Date(a.split('/').reverse().join('-'));
        const dateB = new Date(b.split('/').reverse().join('-'));
        return dateB - dateA;
      } catch (error) {
        console.error('Error sorting dates:', error);
        return 0;
      }
    });
  };

  // Filter transactions by selected date
  const filterTransactionsByDate = (transactions, selectedDateFilter) => {
    if (selectedDateFilter === 'all') return transactions;
    
    return transactions.filter(transaction => {
      const transactionDate = normalizeDateString(transaction.date);
      return transactionDate === selectedDateFilter;
    });
  };

  // Paginate filtered data
  const paginateData = (filteredData, page = 1, perPage = 10) => {
    const startIndex = (page - 1) * perPage;
    const endIndex = startIndex + perPage;
    const paginatedItems = filteredData.slice(startIndex, endIndex);
    
    const totalPages = Math.ceil(filteredData.length / perPage);
    
    return {
      data: paginatedItems,
      current_page: page,
      last_page: totalPages,
      total: filteredData.length,
      per_page: perPage,
      from: filteredData.length > 0 ? startIndex + 1 : 0,
      to: Math.min(endIndex, filteredData.length)
    };
  };

  // Configuration for different transaction types
  const transactionConfig = {
    deposit: {
      title: 'Deposit Report',
      icon: ArrowDownIcon,
      iconColor: 'text-green-500',
      bgGradient: 'from-green-500/20 to-emerald-600/20',
      avatarIcon: CreditCardIcon
    },
    Token_Buy: {
      title: 'Token Buy',
      icon: ArrowUpIcon,
      iconColor: 'text-blue-500',
      bgGradient: 'from-blue-500/20 to-cyan-600/20',
      avatarIcon: CreditCardIcon
    },
    level_buy: {
      title: 'Level Buy',
      icon: TrophyIcon,
      iconColor: 'text-yellow-500',
      bgGradient: 'from-yellow-500/20 to-orange-600/20',
      avatarIcon: TrophyIcon
    },
    free_tokens: {
      title: 'Free Tokens',
      icon: GiftIcon,
      iconColor: 'text-purple-500',
      bgGradient: 'from-purple-500/20 to-pink-600/20',
      avatarIcon: GiftIcon
    },
    withdrawal: {
      title: 'Withdrawal Report',
      icon: ArrowUpIcon,
      iconColor: 'text-red-500',
      bgGradient: 'from-red-500/20 to-rose-600/20',
      avatarIcon: UserIcon
    }
  };

  // Get current configuration based on reason from URL params or state
  const currentReason = reason || state?.reason || 'deposit';
  const config = transactionConfig[currentReason] || transactionConfig.deposit;
 
  const fetchData = async () => {
    if (!encryptedWalletAddress || !currentReason) {
      setError('Missing required parameters');
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      setError(null);
      
      // Fetch all data without pagination to get all dates
      const res = await axios.get(
        `${BASE_URL}/Transaction/${encryptedWalletAddress}/${currentReason}`, 
        {
          headers: {
            Authorization: `Bearer ${jwt_token}`,
          },
        }
      );
      
      let allTransactions = [];
      if (res.data.transaction) {
        // If paginated, we might need to fetch all pages
        allTransactions = res.data.transaction.data || [];
        
        // If there are multiple pages, fetch all of them
        if (res.data.transaction.last_page > 1) {
          for (let page = 2; page <= res.data.transaction.last_page; page++) {
            try {
              const pageRes = await axios.get(
                `${BASE_URL}/Transaction/${encryptedWalletAddress}/${currentReason}?page=${page}`, 
                {
                  headers: {
                    Authorization: `Bearer ${jwt_token}`,
                  },
                }
              );
              allTransactions = [...allTransactions, ...(pageRes.data.transaction.data || [])];
            } catch (pageErr) {
              console.error(`Error fetching page ${page}:`, pageErr);
            }
          }
        }
      } else {
        // Handle non-paginated response
        allTransactions = res.data.data || [];
      }
      
      // Normalize dates in all transactions
      allTransactions = allTransactions.map(transaction => ({
        ...transaction,
        date: normalizeDateString(transaction.date) || transaction.date
      }));
      
      // Store all transactions and extract dates
      setAllData(allTransactions);
      const dates = extractUniqueDates(allTransactions);
      setAvailableDates(dates);
      
      // Apply initial filtering and pagination
      applyFilterAndPagination(allTransactions, selectedDate, 1);
      
    } catch (err) {
      console.error('Error fetching transaction data:', err);
      if (err.response?.status === 401) {
        setError('Authentication failed. Please login again.');
      } else if (err.response?.status === 404) {
        setError('No transactions found for this type.');
      } else {
        setError('Failed to fetch transactions. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  // Apply date filter and pagination
  const applyFilterAndPagination = (transactions, dateFilter, page) => {
    const filteredData = filterTransactionsByDate(transactions, dateFilter);
    const paginatedResult = paginateData(filteredData, page);
    
    setData(paginatedResult.data);
    setPaginationData(paginatedResult);
    setCurrentPage(page);
  };

  useEffect(() => {
    fetchData();
    setCurrentPage(1);
    setSelectedDate('all');
  }, [currentReason, encryptedWalletAddress]);

  // Handle page change
  const handlePageChange = (page) => {
    if (page >= 1 && page <= paginationData.last_page && page !== currentPage) {
      applyFilterAndPagination(allData, selectedDate, page);
    }
  };

  // Handle date selection
  const handleDateChange = (date) => {
    setSelectedDate(date);
    setShowDateDropdown(false);
    applyFilterAndPagination(allData, date, 1);
  };

  // Get display date text
  const getDisplayDate = () => {
    if (selectedDate === 'all') {
      return `All Dates (${paginationData.total})`;
    }
    const filteredCount = filterTransactionsByDate(allData, selectedDate).length;
    return `${selectedDate} (${filteredCount})`;
  };

  // Helper function to format amount based on transaction type
  const formatAmount = (amount, reason) => {
    switch (reason) {
      case 'Token_Buy':
      case 'free_tokens':
        return `${amount} Tokens`;
      case 'level_buy':
        return `Level ${amount}`;
      default:
        return `$${amount}`;
    }
  };

  // Helper function to get transaction description
  const getTransactionDescription = (item, reason) => {
    switch (reason) {
      case 'Token_Buy':
        return `Token Purchase`;
      case 'level_buy':
        return `Level Upgrade`;
      case 'free_tokens':
        return `Free Tokens`;
      case 'deposit':
        return `Deposit - ${item.id}`;
      case 'withdrawal':
        return `Withdrawal - ${item.id}`;
      default:
        return `Transaction - ${item.id}`;
    }
  };

  // Generate pagination buttons
  const generatePaginationButtons = () => {
    const buttons = [];
    const { current_page, last_page } = paginationData;
    
    // Show maximum 5 page buttons
    let startPage = Math.max(1, current_page - 2);
    let endPage = Math.min(last_page, startPage + 4);
    
    // Adjust start page if we're near the end
    if (endPage - startPage < 4) {
      startPage = Math.max(1, endPage - 4);
    }
    
    for (let i = startPage; i <= endPage; i++) {
      buttons.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`w-8 h-8 rounded-md border border-[#4466F3] flex items-center justify-center text-sm font-medium transition-colors ${
            i === current_page
              ? 'bg-purple-600 text-white'
              : 'text-gray-400 hover:text-white hover:bg-purple-600/20'
          }`}
        >
          {i}
        </button>
      );
    }
    
    return buttons;
  };

  return (
    <div 
      className="w-screen h-screen bg-gradient-to-b from-[#1a0033] via-[#0c0c5f] to-[#00334d] relative overflow-y-auto flex flex-col items-center"
      onClick={(e) => {
        // Close dropdown when clicking outside
        if (showDateDropdown && !e.target.closest('.relative')) {
          setShowDateDropdown(false);
        }
      }}
    >

      {/* Blur Background Circles */}
      <div className="fixed w-52 h-52 bg-purple-700 rounded-full blur-3xl top-0 right-10 opacity-50 pointer-events-none"></div>
      <div className="fixed w-52 h-52 bg-cyan-500 rounded-full blur-3xl bottom-20 left-0 opacity-40 pointer-events-none"></div>
      <div className="fixed w-36 h-36 bg-blue-500 rounded-full blur-3xl bottom-0 right-0 opacity-30 pointer-events-none"></div>

      {/* Back Button & Title Header */}
      <div className="w-full max-w-4xl flex items-center justify-between mb-2 md:mb-4 px-6 mt-6">
        <button 
          className="flex items-center gap-2 text-white/80 hover:text-white transition-colors" 
          onClick={() => navigate(-1)}
        >
          <FiChevronLeft size={20} />
          <span className="hidden sm:inline">Back</span>
        </button>
        <h1 className="text-2xl font-bold text-center text-white">{config.title}</h1>
        <div className="w-10" /> {/* Spacer */}
      </div>

      {/* Date Selector */}
      <div className="w-full max-w-4xl px-6 mb-4 relative z-20 mt-10">
        <div className="flex items-center justify-between">
          <div className="relative">
            <button
              onClick={() => setShowDateDropdown(!showDateDropdown)}
              className="flex items-center bg-[#7033EA] text-white rounded-full px-4 py-1 space-x-2 shadow-md hover:bg-[#5a2bb8] transition-colors min-w-[200px] justify-between"
            >
              <span className="text-sm font-medium">{getDisplayDate()}</span>
              <ChevronDownIcon className={`w-4 h-4 transition-transform ${showDateDropdown ? 'rotate-180' : ''}`} />
            </button>
            
            {/* Date Dropdown */}
            {showDateDropdown && (
              <div className="absolute top-full left-0 mt-2 bg-[#1a1a1a] border border-[#2c2d31] rounded-lg shadow-lg min-w-[100px] max-h-60 overflow-y-auto z-30">
                <button
                  onClick={() => handleDateChange('all')}
                  className={`w-full text-left px-4 py-2 text-sm hover:bg-[#2c2d31] transition-colors ${
                    selectedDate === 'all' ? 'bg-[#7033EA] text-white' : 'text-white/80'
                  }`}
                >
                  All Dates ({allData.length})
                </button>
                {availableDates.map((date, index) => {
                  const dateCount = filterTransactionsByDate(allData, date).length;
                  return (
                    <button
                      key={index}
                      onClick={() => handleDateChange(date)}
                      className={`w-full text-left px-4 py-2 text-sm hover:bg-[#2c2d31] transition-colors ${
                        selectedDate === date ? 'bg-[#7033EA] text-white' : 'text-white/80'
                      }`}
                    >
                      {date} ({dateCount})
                    </button>
                  );
                })}
                {availableDates.length === 0 && (
                  <div className="px-4 py-2 text-sm text-white/60">
                    No dates available
                  </div>
                )}
              </div>
            )}
          </div>
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => fetchData()}
              className="hover:text-white/80 transition-colors"
              disabled={loading}
            >
              <RotateCcw className={`w-5 h-5 text-white ${loading ? 'animate-spin' : ''}`} />
            </button>
            {/* <FunnelIcon className="w-5 h-5 text-fuchsia-500" /> */}
          </div>
        </div>
      </div>

      {/* Loading State */}
      {loading && (
        <div className="w-full max-w-4xl px-6 text-center">
          <p className="text-white">Loading transactions...</p>
        </div>
      )}

      {/* Error State */}
      {error && (
        <div className="w-full max-w-4xl px-6 text-center">
          <p className="text-red-500">{error}</p>
          <button 
            onClick={() => fetchData()}
            className="mt-2 px-4 py-2 bg-[#7033EA] text-white rounded-lg hover:bg-[#5a2bb8] transition-colors"
          >
            Retry
          </button>
        </div>
      )}

      {/* List Container */}
      {!loading && !error && (
        <div className="w-full max-w-4xl px-6 space-y-3 mb-10">
          {data.length === 0 ? (
            <div className="text-center py-8">
              <config.icon className={`w-12 h-12 mx-auto mb-4 ${config.iconColor}`} />
              <p className="text-white text-lg">No {currentReason.replace('_', ' ')} transactions found.</p>
              <p className="text-white/60 text-sm mt-2">Your transaction history will appear here.</p>
            </div>
          ) : (
            <>
              {data.map((item, index) => {
                const IconComponent = config.icon;
                const AvatarIconComponent = config.avatarIcon;
                
                return (
                  <div
                    key={index}
                    className={`w-full flex items-center justify-between bg-gradient-to-r from-[#0f0f11] to-[#101115] rounded-xl px-4 py-3 border border-[#2c2d31] shadow-sm hover:border-[#3c3d41] transition-all`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${config.bgGradient} flex items-center justify-center border border-[#2c2d31]`}>
                        <AvatarIconComponent className={`w-5 h-5 ${config.iconColor}`} />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-white text-sm font-semibold">
                          {getTransactionDescription(item, currentReason)}
                        </span>
                        <span className="text-white/60 text-xs">{item.date}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <IconComponent className={`w-4 h-4 ${config.iconColor}`} />
                      <span className={`${config.iconColor} font-bold text-sm`}>
                        {formatAmount(item.amount, currentReason)}
                      </span>
                    </div>
                  </div>
                );
              })}

              {/* Pagination */}
              {paginationData.last_page > 1 && (
                <div className="flex items-center justify-center space-x-2 pt-4">
                  <button 
                    className="w-8 h-8 rounded-md border border-[#4466F3] flex items-center justify-center hover:bg-purple-600/20 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                  >
                    <ChevronLeft className="w-4 h-4 text-gray-400" />
                  </button>
                  
                  {generatePaginationButtons()}
                  
                  <button 
                    className="w-8 h-8 rounded-md border border-[#4466F3] flex items-center justify-center hover:bg-purple-600/20 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === paginationData.last_page}
                  >
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                  </button>
                </div>
              )}

              {/* Pagination Info */}
              {paginationData.total > 0 && (
                <div className="text-center pt-2">
                  <p className="text-white/60 text-xs">
                    Showing {paginationData.from} to {paginationData.to} of {paginationData.total} transactions
                  </p>
                </div>
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default DynamicHistory;