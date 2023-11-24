import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import ProviderSharedRef from './utils/Contexts/ProviderSharedRef.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ProviderSharedRef>
    <App />
  </ProviderSharedRef>
)
