import { Fallback } from "../components/fallback";
import { Header } from "../components/header";
import { MapsWidget } from "../components/map";
import { useLocationContext } from "../store/LocationContext";
import "./searchplace.css";

export const SearchPlace = (props) => {
  const { hasPermission } = useLocationContext();
  return (
    <div className="places-page">
      <header className="places-page__header">
        <Header />
      </header>
      <main className="places-page__main">
        {hasPermission ? (
          <>
            <aside className="places-page__list">Places list</aside>
            <section className="places-page__maps-ui">
              <MapsWidget />
            </section>
          </>
        ) : (
          <Fallback message={"Geolocation permission is denied"} />
        )}
      </main>
    </div>
  );
};
