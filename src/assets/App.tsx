import "./App.css";
import { ThemeProvider, useTheme } from './theme/theme.tsx';
import CardList from "./CardList";
/*import Card from './card/Card.tsx';*/

function AppContent(){
  const { theme, toggleTheme } = useTheme();
  return (
    <div
    style={{
      background: theme.background,
      color: theme.color,
      minHeight: '100vh',
      padding: '1rem'
    }}
  >
    <button onClick={toggleTheme} style={{ marginBottom: '1rem' }}>
      Переключить тему
    </button>
    </div>
  )
}


export default App;
function App() {
  return (
    <ThemeProvider>
    <AppContent / >
    <CardList />
    </ThemeProvider>
  );
}

export default App;
