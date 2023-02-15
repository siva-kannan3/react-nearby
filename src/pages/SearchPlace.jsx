import { Fallback } from "../components/fallback";
import { useLocationContext } from "../store/LocationContext";
import "./searchplace.css";

export const SearchPlace = (props) => {
  const { hasPermission } = useLocationContext();
  return (
    <div className="places-page">
      <header className="places-page__header">Heading</header>
      <main className="places-page__main">
        {hasPermission ? (
          <>
            <aside className="places-page__list">Places list</aside>
            <section className="places-page__maps-ui">Maps UI</section>
          </>
        ) : (
          <Fallback message={"Geolocation permission is denied"} />
        )}
      </main>
    </div>
  );
};
