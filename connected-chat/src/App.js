import { ChatEngine} from 'react-chat-engine'
import './App.css'
import ChatFeed from './components/ChatFeed'

const App = () => {
    return (
        <ChatEngine 
        height="100vh"
        projectID="7b23a645-1f7a-4b06-9811-868c18427cd1"
        userName="Dominik"
        userSecret="gatogato"
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    )
}
export default App