import { UserLocationProvider } from "./store/location.context";
import { SearchPlace } from "./pages";

function App() {
    return (
        <UserLocationProvider>
            <SearchPlace />
        </UserLocationProvider>
    );
}

export default App;
