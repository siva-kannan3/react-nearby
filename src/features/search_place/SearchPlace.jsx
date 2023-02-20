import { useSelector } from "react-redux";

import { Header, PlacesList, MapsWidget, Fallback } from "./components";

import "./SearchPlace.css";

export const SearchPlace = () => {
    const { hasPermission } = useSelector((state) => state.location);
    const { result } = useSelector((state) => state.places);

    return (
        <div className="places-page">
            <header className="places-page__header">
                <Header />
            </header>
            <main className="places-page__main">
                {hasPermission ? (
                    <>
                        <aside className="places-page__list">
                            <PlacesList places={result} />
                        </aside>
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
