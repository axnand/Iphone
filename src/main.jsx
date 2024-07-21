import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

<<<<<<< HEAD
//...
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "https://d674932a77e6d9b9ced1190d70fd4691@o4506876178464768.ingest.us.sentry.io/4506876181151744",
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.metrics.metricsAggregatorIntegration(),
    Sentry.reactRouterV6BrowserTracingIntegration({
      useEffect: React.useEffect,
    }),
    Sentry.replayIntegration({
      maskAllText: false,
      blockAllMedia: false,
    }),
  ],
  tracesSampleRate: 1.0, 
  tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0, 
});

=======
>>>>>>> e04a2b9115f5fcb2376b9759ba1c44fc48a825a1
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
