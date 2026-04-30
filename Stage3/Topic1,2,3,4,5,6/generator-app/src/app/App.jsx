import ErrorBoundary from '@/shared/components/ErrorBoundary';
import { BrowserRouter } from 'react-router-dom';

import { Router } from './routes';
// import Sentry from '@stenry/react';

// Sentry.init({
//   appId: 'app-1',
//   appName: 'Generator App',
// })

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
