



import React, { useEffect, useRef, memo } from 'react';

function Chart() {
  // TradingViewWidget.jsx



  const container = useRef();

  useEffect(
    () => {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
        {
          "width": "980",
          "height": "610",
          "symbol": "BINANCE:BTCUSDT",
          "timezone": "Etc/UTC",
          "theme": "dark",
          "style": "1",
          "locale": "en",
          "backgroundColor": "rgba(12, 52, 61, 1)",
          "gridColor": "rgba(0, 0, 0, 0.06)",
          "withdateranges": true,
          "range": "ALL",
          "hide_side_toolbar": false,
          "allow_symbol_change": true,
          "save_image": false,
          "details": true,
          "hotlist": true,
          "calendar": false,
          "support_host": "https://www.tradingview.com"
        }`;
      container.current.appendChild(script);
      return () => {
        container.current.removeChild(script);
      };
    },
    []
  );

  return (
 
   <>
    
    <div className="tradingview-widget-container" ref={container}>
      <div className="tradingview-widget-container__widget"></div>
      {/* <div className="tradingview-widget-copyright"><a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank"><span className="blue-text">Track all markets on TradingView</span></a></div> */}
    </div>
    </>
  );
}




export default memo(Chart);

