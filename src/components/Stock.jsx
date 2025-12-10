import React, { useState, useEffect } from 'react';
import { useAuthentication } from "../services/authService";
import { saveStock, fetchSavedStocks, deleteStock } from "../services/stockService";


const Stock = () => {
  const [stocks, setStocks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [loadingStocks, setLoadingStocks] = useState(true);
  
  const user = useAuthentication();

  // Load saved stocks when user logs in
  useEffect(() => {
    if (user) {
      loadSavedStocks();
    } else {
      setStocks([]);
      setLoadingStocks(false);
    }
  }, [user]);
  const loadSavedStocks = async () => {
      try {
        setLoadingStocks(true);
        const savedStocks = await fetchSavedStocks(user.uid);
        setStocks(savedStocks);
      } catch (error) {
        console.error("Error loading saved stocks:", error);
        // Fallback to localStorage
        const localStocks = localStorage.getItem(`stocks_${user.uid}`);
        if (localStocks) {
          setStocks(JSON.parse(localStocks));
        }
      } finally {
        setLoadingStocks(false);
      }
    };
    // Save a stock to Firebase
const saveStockToFirebase = async (stockData) => {
  if (user) {
    try {
      await saveStock(user.uid, stockData);
      console.log("Stock saved to Firebase:", stockData.symbol);
    } catch (error) {
      console.error("Error saving stock to Firebase:", error);
      localStorage.setItem(`stocks_${user.uid}`, JSON.stringify(stocks));
    }
  }
};

// Remove stock from Firebase
const removeStockFromFirebase = async (stockId) => {
  if (user) {
    try {
      await deleteStock(user.uid, stockId);
      console.log("Stock removed from Firebase:", stockId);
    } catch (error) {
      console.error("Error removing stock from Firebase:", error);
    }
  }
};
    const saveToFirebase = async (stockData) => {
      if (user) {
        try {
          await saveStock(user.uid, stockData);
          // Update local storage as backup
          localStorage.setItem(`stocks_${user.uid}`, JSON.stringify(
            stocks.map(s => ({
              ...s,
              savedAt: s.savedAt?.toISOString ? s.savedAt.toISOString() : s.savedAt,
              lastUpdated: s.lastUpdated?.toISOString ? s.lastUpdated.toISOString() : s.lastUpdated
            }))
          ));
        } catch (error) {
          console.error("Error saving stock to Firebase:", error);
        }
      }
    };

  useEffect(() => {
    console.log('Vite env:', import.meta.env);
    console.log('API Key from env:', import.meta.env.VITE_ALPHA_VANTAGE_API_KEY);
  }, []);

  const fetchStockData = async (symbol) => {
    setLoading(true);
    setError('');

    try {
      const apiKey = import.meta.env.VITE_ALPHA_VANTAGE_API_KEY;
      console.log('API key loaded correctly, fetching GLOBAL_QUOTE for:', symbol);

      // Using GLOBAL_QUOTE endpoint (simpler, real-time data)
      const response = await fetch(
        `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${apiKey}`
      );

      console.log('Response status:', response.status);

      const data = await response.json();
      console.log('Full API Response:', data);

      // Check for Alpha Vantage error messages
      if (data['Error Message']) {
        console.log('Error Message found:', data['Error Message']);
        setError('❌ Invalid stock symbol. Please check the symbol and try again.');
        return null;
      }

      if (data['Note']) {
        console.log('API Note:', data['Note']);
        setError('⚠️ API rate limit reached. Please wait 1 minute.');
        return null;
      }

      // Check for GLOBAL_QUOTE data structure
      const globalQuote = data['Global Quote'];
      console.log('Global Quote data:', globalQuote);

      if (!globalQuote || Object.keys(globalQuote).length === 0) {
        console.log('No Global Quote data found. Available keys:', Object.keys(data));
        
        if (data['Information']) {
          setError(`API Info: ${data['Information']}`);
          return null;
        }
        
        setError('📊 No stock data available for this symbol.');
        return null;
      }
      // Extract data from GLOBAL_QUOTE response
      const price = parseFloat(globalQuote['05. price']);
      const open = parseFloat(globalQuote['02. open']);
      const high = parseFloat(globalQuote['03. high']);
      const low = parseFloat(globalQuote['04. low']);
      const volume = parseInt(globalQuote['06. volume']);
      const previousClose = parseFloat(globalQuote['08. previous close']);
      const change = parseFloat(globalQuote['09. change']);
      const changePercent = parseFloat(globalQuote['10. change percent'].replace('%', ''));
      const date = globalQuote['07. latest trading day'];

      console.log('Parsed data:', {
        price, open, high, low, volume, previousClose, change, changePercent, date
      });

      return {
        symbol: symbol.toUpperCase(),
        name: symbol.toUpperCase(), // GLOBAL_QUOTE doesn't provide company name
        price: price,
        open: open,
        high: high,
        low: low,
        volume: volume,
        change: change,
        changePercent: changePercent,
        date: date,
        id: Date.now() + Math.random()
      };

    } catch (err) {
      console.error('Fetch error:', err);
      setError(`🌐 Network error: ${err.message}`);
      return null;
    } finally {
      setLoading(false);
    }
  };

  // Fallback function if GLOBAL_QUOTE fails
  const fetchWithFallback = async (symbol) => {
    console.log('Trying GLOBAL_QUOTE endpoint...');
    const stockData = await fetchStockData(symbol);
    
    if (stockData) {
      return stockData;
    }
    
    // If GLOBAL_QUOTE fails, try TIME_SERIES_DAILY as fallback
    console.log('GLOBAL_QUOTE failed, trying TIME_SERIES_DAILY...');
    return await fetchStockDataTimeSeries(symbol);
  };

  // Fallback function using TIME_SERIES_DAILY
  const fetchStockDataTimeSeries = async (symbol) => {
    try {
      const apiKey = import.meta.env.VITE_ALPHA_VANTAGE_API_KEY;
      
      const response = await fetch(
        `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${apiKey}`
      );
      
      const data = await response.json();
      console.log('TIME_SERIES_DAILY response:', data);

      if (data['Error Message']) {
        setError('Invalid stock symbol.');
        return null;
      }
      
      if (data['Note']) {
        setError('API rate limit reached.');
        return null;
      }
      
      const timeSeries = data['Time Series (Daily)'];
      if (!timeSeries) {
        setError('No time series data available');
        return null;
      }

      const dates = Object.keys(timeSeries);
      if (dates.length < 2) {
        setError('Not enough data for this stock');
        return null;
      }
      
      const latestDate = dates[0];
      const previousDate = dates[1];
      
      const latest = timeSeries[latestDate];
      const previous = timeSeries[previousDate];

      const currentPrice = parseFloat(latest['4. close']);
      const previousPrice = parseFloat(previous['4. close']);
      const change = currentPrice - previousPrice;
      const changePercent = (change / previousPrice) * 100;
      
      return {
        symbol: symbol.toUpperCase(),
        name: data['Meta Data']?.['2. Symbol'] || symbol.toUpperCase(),
        price: currentPrice,
        open: parseFloat(latest['1. open']),
        high: parseFloat(latest['2. high']),
        low: parseFloat(latest['3. low']),
        volume: parseInt(latest['5. volume']),
        change: change,
        changePercent: changePercent,
        date: latestDate,
        id: Date.now() + Math.random()
      };
      
    } catch (err) {
      console.error('Time series fetch error:', err);
      return null;
    }
  };

  const handleSearch = async (e) => {
  e.preventDefault();
  if (!searchTerm.trim()) {
    setError('Please enter a stock symbol');
    return;
  }
  
  const stockData = await fetchWithFallback(searchTerm.toUpperCase().trim());
  
  if (stockData) {
    const alreadyExists = stocks.some(
      stock => stock.symbol === stockData.symbol
    );
    
    if (alreadyExists) {
      setError('This stock is already in your dashboard');
      return;
    }
    
    const updatedStocks = [...stocks, stockData];
    setStocks(updatedStocks);
    setSearchTerm('');
    setError('');
    
    // ADD THESE 5 LINES: Save to appropriate storage
    if (user) {
      await saveStockToFirebase(stockData); // Save to Firebase
    } else {
      localStorage.setItem('guest_stocks', JSON.stringify(updatedStocks)); // Save to local storage
    }
  }
};

  const getMockStockData = (symbol) => {
    const mockStocks = {
      AAPL: { name: 'Apple Inc.', base: 175.25 },
      MSFT: { name: 'Microsoft Corp.', base: 330.50 },
      GOOGL: { name: 'Alphabet Inc.', base: 142.75 },
      TSLA: { name: 'Tesla Inc.', base: 245.80 },
      AMZN: { name: 'Amazon.com Inc.', base: 155.30 },
      META: { name: 'Meta Platforms Inc.', base: 320.45 },
      NVDA: { name: 'NVIDIA Corp.', base: 485.20 },
      NFLX: { name: 'Netflix Inc.', base: 560.10 }
    };
    
    const mock = mockStocks[symbol.toUpperCase()] || { 
      name: `${symbol.toUpperCase()} Company`, 
      base: 100 
    };
    
    const price = mock.base + (Math.random() - 0.5) * 5;
    const change = (Math.random() - 0.5) * 3;
    const changePercent = (change / price) * 100;
    
    return {
      symbol: symbol.toUpperCase(),
      name: mock.name,
      price: price,
      open: price - (Math.random() * 2),
      high: price + (Math.random() * 3),
      low: price - (Math.random() * 3),
      volume: Math.floor(1000000 + Math.random() * 5000000),
      change: change,
      changePercent: changePercent,
      date: new Date().toISOString().split('T')[0],
      id: Date.now() + Math.random()
    };
  };

  const handleRemoveStock = async (id) => {
  if (user) {
    await removeStockFromFirebase(id); // Delete from Firebase
  }
  
  const updatedStocks = stocks.filter(stock => stock.id !== id);
  setStocks(updatedStocks);
  
  // ADD THESE 3 LINES: Update storage
  if (user) {
    localStorage.setItem(`stocks_${user.uid}`, JSON.stringify(updatedStocks));
  } else {
    localStorage.setItem('guest_stocks', JSON.stringify(updatedStocks));
  }
};

  const calculateTotalValue = () => {
    return stocks.reduce((total, stock) => total + stock.price, 0);
  };

  const calculateTotalChange = () => {
    return stocks.reduce((total, stock) => total + stock.change, 0);
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2
    }).format(amount);
  };

  const formatVolume = (volume) => {
    if (volume >= 1000000) {
      return `${(volume / 1000000).toFixed(1)}M`;
    }
    if (volume >= 1000) {
      return `${(volume / 1000).toFixed(1)}K`;
    }
    return volume.toLocaleString();
  };

  const testSymbols = ['AAPL', 'MSFT', 'GOOGL', 'TSLA', 'AMZN', 'META', 'NVDA', 'NFLX'];

  return (
    <div className="stock-tracker">
      <div className="stock-header">
        <h2>Stock Tracker</h2>
        <p>Track stocks for your budgeting and investment planning</p>
        
        {/* Quick test buttons */}
        <div style={{ marginTop: '15px' }}>
          <p style={{ fontSize: '14px', color: '#666', marginBottom: '8px' }}>
            Try these common symbols:
          </p>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            {testSymbols.map((symbol) => (
              <button
                key={symbol}
                onClick={() => {
                  setSearchTerm(symbol);


                  setTimeout(() => {
                    document.querySelector('.stock-search-button')?.click();
                  }, 100);
                }}
                style={{
                  padding: '8px 16px',
                  background: 'rgba(107, 70, 193, 0.8)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontSize: '14px'
                }}
              >
                {symbol}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Search Section */}
      <div className="stock-search-section">
        <form onSubmit={handleSearch} className="stock-search-form">
          <div className="search-input-wrapper">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setError('');
              }}
              placeholder="Search stock symbol (e.g., AAPL, TSLA, MSFT)"
              className="stock-search-input"
              disabled={loading}
            />
            <button 
              type="submit" 
              className="stock-search-button"
              disabled={loading || !searchTerm.trim()}
            >
              {loading ? (
                <span className="search-loading">Searching...</span>
              ) : (
                'Add Stock'
              )}
            </button>
          </div>
        </form>
        
        {/* Error Display */}
        {error && (
          <div className="stock-error-message">
            <div className="error-content">
              <p>{error}</p>
              {error.includes('Invalid') && (
                <small className="error-hint">
                  Tip: Use stock symbols, not company names (e.g., AAPL for Apple)
                </small>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Dashboard Summary */}
      <div className="dashboard-summary">
        <div className="summary-card">
          <div className="summary-content">
            <h4>Total Stocks</h4>
            <p className="summary-value">{stocks.length}</p>
          </div>
        </div>
        
        <div className="summary-card">
          <div className="summary-content">
            <h4>Total Value</h4>
            <p className="summary-value">{formatCurrency(calculateTotalValue())}</p>
          </div>
        </div>
        
        <div className="summary-card">
          <div className="summary-content">
            <h4>Daily Change</h4>
            <p className={`summary-value ${
              calculateTotalChange() >= 0 ? 'positive' : 'negative'
            }`}>
              {calculateTotalChange() >= 0 ? '+' : ''}
              {formatCurrency(calculateTotalChange())}
            </p>
          </div>
        </div>
      </div>

      {/* Stocks Grid */}
      <div className="stocks-container">
        <h3 className="stocks-title">Your Stock Dashboard</h3>
        
        {stocks.length === 0 ? (
          <div className="empty-dashboard">
            <h4>No stocks tracked yet</h4>
            <p>Search for stocks above to add them to your dashboard</p>
            </div>
        ) : (
          <div className="stocks-grid">
            {stocks.map((stock) => (
              <div key={stock.id} className="stock-card">
                <div className="stock-card-header">
                  <div className="stock-symbol-info">
                    <h3 className="stock-symbol">{stock.symbol}</h3>
                    <p className="stock-name">{stock.name}</p>
                  </div>
                  <button 
                    onClick={() => handleRemoveStock(stock.id)}
                    className="remove-stock-button"
                    title="Remove from dashboard"
                  >
                    ✕
                  </button>
                </div>
                
                <div className="stock-card-body">
                  <div className="stock-price-info">
                    <span className="stock-price">{formatCurrency(stock.price)}</span>
                    <span className={`stock-change ${
                      stock.change >= 0 ? 'positive' : 'negative'
                    }`}>
                      {stock.change >= 0 ? '↗' : '↘'}
                      {formatCurrency(Math.abs(stock.change))} 
                      ({stock.changePercent >= 0 ? '+' : ''}{stock.changePercent.toFixed(2)}%)
                    </span>
                  </div>
                  
                  <div className="stock-details">
                    <div className="detail-row">
                      <span className="detail-label">Open:</span>
                      <span className="detail-value">{formatCurrency(stock.open)}</span>
                    </div>
                    <div className="detail-row">
                      <span className="detail-label">High/Low:</span>
                      <span className="detail-value">
                        {formatCurrency(stock.high)} / {formatCurrency(stock.low)}
                      </span>
                    </div>
                    <div className="detail-row">
                      <span className="detail-label">Volume:</span>
                      <span className="detail-value">{formatVolume(stock.volume)}</span>
                    </div>
                    <div className="detail-row">
                      <span className="detail-label">Date:</span>
                      <span className="detail-value">{stock.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Stock;