import { WagmiProvider } from 'wagmi'
import { QueryClient, QueryClientProvider } from 'react-query'
import { config } from './config'
import { Swap } from './components/Swap'


const queryClient = new QueryClient()

export default function App() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <Swap></Swap>
      </QueryClientProvider>
    </WagmiProvider>
  )
}