import { UserLocationProvider } from "./store/LocationContext";
import { SearchPlace } from "./pages";

function App() {
    return (
        <UserLocationProvider>
            <SearchPlace />
        </UserLocationProvider>
    );
}

export default App;
