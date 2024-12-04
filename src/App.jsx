import Header from "./components/Header"
import PageContainer from "./container/PageContainer";
import "../src/App.css"
import RouterConfig from "./config/RouterConfig";


function App() {
 

  return (
    <>
    <PageContainer>
    <Header/>
    <RouterConfig/>
     
    </PageContainer>
    </>
  )
}

export default App
