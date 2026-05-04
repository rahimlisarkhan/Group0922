import ErrorBoundary from '@/shared/components/ErrorBoundary';
import { BrowserRouter } from 'react-router-dom';

import { Router } from './routes';
import { GlobalProvider } from '@/shared/providers/global/GlobalProvider';
// import Sentry from '@stenry/react';

// Sentry.init({
//   appId: 'app-1',
//   appName: 'Generator App',
// })

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <GlobalProvider>
          <Router />
        </GlobalProvider>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
