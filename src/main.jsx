import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import * as Sentry from "@sentry/react";



// Sentry.init({
//   dsn: "https://8bc9e720b00905d1e228af4f22bd402a@o4508199105462272.ingest.de.sentry.io/4508199109918800",
//   integrations: [
//     Sentry.browserTracingIntegration(),
//     Sentry.metrics.metricsAggregatorIntegration,
//     Sentry.reactRouterV6BrowserTracingIntegration({
//       useEffect: React.useEffect,
//     }),
//     Sentry.replayIntegration(),
//   ],
 
//   tracesSampleRate: 1.0, 
  
//   tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
//   // Session Replay
//   replaysSessionSampleRate: 0.1, 
//   replaysOnErrorSampleRate: 1.0, 
// });


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
