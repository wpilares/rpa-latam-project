import { type ReactElement } from 'react';
import { AppRouter } from './router/AppRouter';

export const App = (): ReactElement => {
  return (
    <div className="App">
      <AppRouter />
    </div>
  );
};

export default App;
